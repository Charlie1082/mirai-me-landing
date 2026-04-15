"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ExternalLink, Globe, Mail } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-warm-900 text-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            {/* E 키 아트 — 사이트 마무리 인상, 슬로건까지 풀 메시지 */}
            <Image
              src="/hero_banner.png"
              alt="MIRAI-ME"
              width={400}
              height={320}
              className="h-24 w-auto brightness-110"
            />
            <p className="mt-3 text-sm text-warm-300 leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-300 mb-4">
              {t("service")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="text-sm text-warm-300 hover:text-white transition-colors">
                  {t("aboutLink")}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-warm-300 hover:text-white transition-colors">
                  {t("howItWorksLink")}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-warm-300 hover:text-white transition-colors">
                  {t("faqLink")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-300 mb-4">
              {t("legal")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/terms" className="text-sm text-warm-300 hover:text-white transition-colors">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-warm-300 hover:text-white transition-colors">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-sm text-warm-300 hover:text-white transition-colors">
                  {t("tokushoho")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-300 mb-4">
              {t("followUs")}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-800 text-warm-300 transition-colors hover:bg-mint-400 hover:text-white"
                aria-label="LINE"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://mirai-me.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-800 text-warm-300 transition-colors hover:bg-primary-500 hover:text-white"
                aria-label="Web"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="https://mirai-me.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-800 text-warm-300 transition-colors hover:bg-secondary-400 hover:text-white"
                aria-label="External"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-warm-800 pt-8 text-center text-sm text-warm-500">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
