"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";

const stepImages = [
  "/images/steps/step-1-upload.svg",
  "/images/steps/step-2-ai.svg",
  "/images/steps/step-3-customize.svg",
  "/images/steps/step-4-delivery.svg",
];
const gradients = [
  "from-primary-100 to-primary-200",
  "from-secondary-100 to-secondary-200",
  "from-accent-100 to-accent-200",
  "from-mint-100 to-mint-200",
];
const iconColors = [
  "text-primary-500",
  "text-secondary-400",
  "text-accent-300",
  "text-mint-400",
];

export default function HowItWorksSection() {
  const t = useTranslations("howItWorks");

  const steps = [
    { titleKey: "steps.0.title", descKey: "steps.0.description" },
    { titleKey: "steps.1.title", descKey: "steps.1.description" },
    { titleKey: "steps.2.title", descKey: "steps.2.description" },
    { titleKey: "steps.3.title", descKey: "steps.3.description" },
  ];

  return (
    <section id="how-it-works" className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeInOnScroll>
          <SectionHeading title={t("heading")} />
        </FadeInOnScroll>

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-6">
          {/* Dashed connecting line (desktop only) */}
          <div className="absolute top-12 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] hidden h-0.5 border-t-2 border-dashed border-warm-300 lg:block" />

          {steps.map((step, i) => {
            return (
              <FadeInOnScroll
                key={i}
                delay={i * 0.15}
                className="flex flex-1 flex-col items-center text-center"
              >
                <div
                  className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${gradients[i]} shadow-sm`}
                >
                  <Image src={stepImages[i]} alt="" width={36} height={36} />
                </div>
                <span className="mt-3 flex h-7 w-7 items-center justify-center rounded-full bg-warm-100 text-xs font-bold text-warm-600">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-warm-800">
                  {t(step.titleKey)}
                </h3>
                <p className="mt-2 max-w-xs leading-relaxed text-warm-500">
                  {t(step.descKey)}
                </p>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
