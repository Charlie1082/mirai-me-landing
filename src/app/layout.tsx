import type { ReactNode } from "react";
import { notoSansJP, notoSansKR, mPlusRounded } from "@/styles/fonts";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={`${notoSansJP.variable} ${notoSansKR.variable} ${mPlusRounded.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-cream text-warm-800">
        {children}
      </body>
    </html>
  );
}
