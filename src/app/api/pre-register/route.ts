import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";
import {
  isGoogleSheetsConfigured,
  checkDuplicate,
  appendRegistration,
} from "@/lib/google-sheets";

const emailSchema = z.object({
  email: z.string().email(),
  locale: z.string().optional(),
});

const DATA_PATH = path.join(process.cwd(), "data", "registrations.json");

// Simple in-memory rate limiter: 3 requests per IP per minute
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }

  if (entry.count >= 3) {
    return true;
  }

  entry.count++;
  return false;
}

// --- JSON file fallback ---
async function readRegistrations(): Promise<string[]> {
  try {
    const data = await fs.readFile(DATA_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeRegistrations(emails: string[]): Promise<void> {
  const dir = path.dirname(DATA_PATH);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(emails, null, 2), "utf-8");
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = emailSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid email address." },
      { status: 400 }
    );
  }

  const { email, locale } = parsed.data;
  const normalizedEmail = email.toLowerCase().trim();

  // --- Google Sheets mode ---
  if (isGoogleSheetsConfigured()) {
    try {
      const isDuplicate = await checkDuplicate(normalizedEmail);
      if (isDuplicate) {
        return NextResponse.json(
          { message: "already_registered" },
          { status: 409 }
        );
      }

      const success = await appendRegistration(
        normalizedEmail,
        locale || "unknown"
      );
      if (!success) {
        return NextResponse.json(
          { message: "server_error" },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { message: "registered" },
        { status: 201 }
      );
    } catch (err) {
      console.error("Google Sheets error:", err);
      return NextResponse.json(
        { message: "server_error", detail: String(err) },
        { status: 500 }
      );
    }
  }

  // --- JSON file fallback ---
  const registrations = await readRegistrations();

  if (registrations.includes(normalizedEmail)) {
    return NextResponse.json(
      { message: "already_registered" },
      { status: 409 }
    );
  }

  registrations.push(normalizedEmail);
  await writeRegistrations(registrations);

  return NextResponse.json(
    { message: "registered" },
    { status: 201 }
  );
}
