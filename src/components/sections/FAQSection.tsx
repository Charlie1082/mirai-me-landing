"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-warm-200">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-lg font-bold text-warm-800">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-warm-500" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 leading-relaxed text-warm-500">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    { qKey: "items.0.question", aKey: "items.0.answer" },
    { qKey: "items.1.question", aKey: "items.1.answer" },
    { qKey: "items.2.question", aKey: "items.2.answer" },
    { qKey: "items.3.question", aKey: "items.3.answer" },
    { qKey: "items.4.question", aKey: "items.4.answer" },
    { qKey: "items.5.question", aKey: "items.5.answer" },
  ];

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeInOnScroll>
          <SectionHeading title={t("heading")} />
        </FadeInOnScroll>

        <div className="mx-auto max-w-3xl">
          {items.map((item, i) => (
            <FadeInOnScroll key={i} delay={i * 0.08}>
              <AccordionItem
                question={t(item.qKey)}
                answer={t(item.aKey)}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
