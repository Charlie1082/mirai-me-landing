"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

const locales = [
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
] as const;

type LocaleCode = (typeof locales)[number]["code"];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: LocaleCode) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="inline-flex items-center rounded-full border border-warm-200 overflow-hidden">
      {locales.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => switchLocale(l.code)}
          className={`px-3 py-1.5 text-sm transition-colors ${
            locale === l.code
              ? "bg-primary-300 text-white font-semibold"
              : "text-warm-600 hover:bg-warm-50"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
