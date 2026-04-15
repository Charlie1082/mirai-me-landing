"use client";

import { useTranslations } from "next-intl";
import { Camera, BookOpen, Heart } from "lucide-react";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = [Camera, BookOpen, Heart];
const iconBgColors = ["bg-primary-100", "bg-secondary-100", "bg-mint-100"];
const iconTextColors = ["text-primary-500", "text-secondary-400", "text-mint-400"];

export default function AboutSection() {
  const t = useTranslations("about");

  const features = [
    { titleKey: "features.0.title", descKey: "features.0.description" },
    { titleKey: "features.1.title", descKey: "features.1.description" },
    { titleKey: "features.2.title", descKey: "features.2.description" },
  ];

  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeInOnScroll>
          <SectionHeading title={t("heading")} subtitle={t("description")} />
        </FadeInOnScroll>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <FadeInOnScroll key={i} delay={i * 0.15}>
                <div className="group flex h-full flex-col items-center rounded-2xl bg-cream p-8 text-center shadow-sm transition-all duration-300 ease-out hover:scale-[1.06] hover:bg-white hover:shadow-xl">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${iconBgColors[i]} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`h-8 w-8 ${iconTextColors[i]}`} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-warm-800 transition-all duration-300 group-hover:text-2xl group-hover:text-primary-600">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="mt-3 leading-relaxed text-warm-500 transition-all duration-300 group-hover:text-base group-hover:text-warm-700 md:text-sm">
                    {t(feature.descKey)}
                  </p>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
