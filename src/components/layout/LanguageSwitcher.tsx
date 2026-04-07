"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Globe } from "lucide-react";

const locales = [
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
] as const;

type LocaleCode = (typeof locales)[number]["code"];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: LocaleCode) => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  const currentLabel = locales.find((l) => l.code === locale)?.label ?? locale;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 rounded-full border border-warm-200 px-3 py-1.5 text-sm text-warm-600 transition-colors hover:bg-warm-50"
        aria-label="Switch language"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLabel}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 rounded-xl border border-warm-100 bg-white py-1 shadow-lg">
          {locales.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => switchLocale(l.code)}
              className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-warm-50 ${
                locale === l.code ? "font-semibold text-primary-500" : "text-warm-600"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
