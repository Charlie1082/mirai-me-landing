"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";

const sampleGradients = [
  "from-primary-100 to-secondary-100",
  "from-secondary-100 to-lavender-100",
  "from-lavender-100 to-mint-100",
  "from-mint-100 to-accent-100",
  "from-accent-100 to-primary-100",
  "from-primary-100 to-mint-100",
];

export default function GallerySection() {
  const t = useTranslations("gallery");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.scrollWidth / 6;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(index, 5));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const itemWidth = container.scrollWidth / 6;
    container.scrollTo({ left: itemWidth * index, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="bg-lavender-50 py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeInOnScroll>
          <SectionHeading title={t("heading")} subtitle={t("subtitle")} />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {sampleGradients.map((gradient, i) => (
              <div
                key={i}
                className={`flex h-[240px] w-[300px] shrink-0 snap-center items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-md overflow-hidden`}
              >
                <Image
                  src={`/images/gallery/sample-${i + 1}.svg`}
                  alt={t("sampleAlt", { index: i + 1 })}
                  width={280}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        {/* Dot indicators */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {sampleGradients.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={t("goToSample", { index: i + 1 })}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === i
                  ? "w-6 bg-primary-400"
                  : "w-2.5 bg-warm-300 hover:bg-warm-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
