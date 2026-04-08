"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

const navKeys = [
  "about",
  "howItWorks",
  "products",
  "gallery",
  "faq",
  "preRegister",
] as const;

const navAnchors: Record<string, string> = {
  about: "#about",
  howItWorks: "#how-it-works",
  products: "#products",
  gallery: "#gallery",
  faq: "#faq",
  preRegister: "#pre-register",
};

export default function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="font-display text-xl font-bold text-primary-500">
          MIRAI-ME
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navKeys.map((key) => (
            <a
              key={key}
              href={navAnchors[key]}
              className="text-sm font-medium text-warm-600 transition-colors hover:text-primary-500"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <a
            href="#pre-register"
            className="inline-flex items-center justify-center rounded-full bg-primary-300 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-400"
          >
            {t("cta")}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-warm-600 hover:bg-warm-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-warm-100 bg-white/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navKeys.map((key) => (
                <a
                  key={key}
                  href={navAnchors[key]}
                  onClick={closeMobile}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-warm-700 hover:bg-warm-50"
                >
                  {t(key)}
                </a>
              ))}
              <div className="mt-3 flex items-center gap-3 px-4">
                <LanguageSwitcher />
                <a
                  href="#pre-register"
                  onClick={closeMobile}
                  className="flex-1 inline-flex items-center justify-center rounded-full bg-primary-300 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-400"
                >
                  {t("cta")}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
