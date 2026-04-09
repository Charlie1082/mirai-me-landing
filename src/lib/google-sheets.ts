import { google } from "googleapis";

function getAuth() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  );

  if (!clientEmail || !privateKey) {
    return null;
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheets() {
  const auth = getAuth();
  if (!auth) return null;
  return google.sheets({ version: "v4", auth });
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const SHEET_NAME = "registrations";

export async function checkDuplicate(email: string): Promise<boolean> {
  const sheets = getSheets();
  if (!sheets || !SPREADSHEET_ID) return false;

  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:A`,
    });

    const rows = res.data.values || [];
    return rows.some((row) => row[0]?.toLowerCase() === email.toLowerCase());
  } catch {
    return false;
  }
}

export async function appendRegistration(
  email: string,
  locale: string,
  country: string,
  city: string
): Promise<boolean> {
  const sheets = getSheets();
  if (!sheets || !SPREADSHEET_ID) return false;

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:F`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [email, locale, new Date().toISOString(), "landing-page", country, city],
        ],
      },
    });
    return true;
  } catch {
    return false;
  }
}

export function isGoogleSheetsConfigured(): boolean {
  return !!(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL &&
    process.env.GOOGLE_SHEETS_PRIVATE_KEY &&
    process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  );
}
