"use client";

import { useTranslations } from "next-intl";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * GallerySection — Coming Soon
 * MIRAI Engine으로 실제 1~2권 완성본이 나오면 그때 샘플 추가 (Charlie 결정 2026-04-15).
 */
export default function GallerySection() {
  const t = useTranslations("gallery");

  return (
    <section id="gallery" className="bg-lavender-50 py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeInOnScroll>
          <SectionHeading title={t("heading")} subtitle={t("subtitle")} />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-primary-100 via-lavender-100 to-mint-100 px-8 py-16 text-center shadow-md">
            <span className="rounded-full bg-white/70 px-5 py-1.5 text-sm font-bold tracking-wider text-primary-600 backdrop-blur-sm">
              {t("comingSoon")}
            </span>
            <p className="mt-6 text-base leading-relaxed text-warm-700 md:text-lg">
              {t("comingSoonDesc")}
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
