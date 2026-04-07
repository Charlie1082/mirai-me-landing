"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

const productImages = [
  "/images/products/digital.svg",
  "/images/products/softcover.svg",
  "/images/products/hardcover.svg",
];
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProductsSection() {
  const t = useTranslations("products");

  const tiers = [
    { nameKey: "tiers.0.name", descKey: "tiers.0.description", featuresPrefix: "tiers.0.features", featureCount: 3, recommended: false },
    { nameKey: "tiers.1.name", descKey: "tiers.1.description", featuresPrefix: "tiers.1.features", featureCount: 3, recommended: true },
    { nameKey: "tiers.2.name", descKey: "tiers.2.description", featuresPrefix: "tiers.2.features", featureCount: 3, recommended: false },
  ];

  return (
    <section id="products" className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeInOnScroll>
          <SectionHeading title={t("heading")} />
        </FadeInOnScroll>

        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <FadeInOnScroll key={i} delay={i * 0.15}>
              <div
                className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md ${
                  tier.recommended
                    ? "scale-105 border-2 border-primary-300 shadow-md"
                    : "border border-warm-200"
                }`}
              >
                {tier.recommended && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary-400 px-4 py-1 text-sm font-bold text-white">
                    おすすめ
                  </span>
                )}

                <div className="mb-4 flex justify-center">
                  <Image src={productImages[i]} alt="" width={120} height={156} />
                </div>

                <h3 className="font-display text-2xl font-bold text-warm-800">
                  {t(tier.nameKey)}
                </h3>
                <p className="mt-2 text-warm-500">{t(tier.descKey)}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {Array.from({ length: tier.featureCount }).map((_, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-warm-700">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-mint-400" />
                      <span>{t(`${tier.featuresPrefix}.${fi}`)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-xl bg-cream-dark py-3 text-center text-sm font-medium text-warm-500">
                  {t("comingSoon")}
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
