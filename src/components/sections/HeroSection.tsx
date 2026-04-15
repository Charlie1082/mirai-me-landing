"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";

const floatingCircles = [
  { size: 64, color: "bg-secondary-200", top: "10%", left: "5%", delay: 0 },
  { size: 48, color: "bg-accent-200", top: "20%", right: "10%", delay: 0.5 },
  { size: 36, color: "bg-mint-200", bottom: "30%", left: "8%", delay: 1.0 },
  { size: 56, color: "bg-lavender-200", bottom: "15%", right: "5%", delay: 1.5 },
  { size: 40, color: "bg-primary-200", top: "60%", left: "15%", delay: 0.8 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  const t = useTranslations("hero");

  const scrollToPreRegister = () => {
    const el = document.getElementById("pre-register");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream to-primary-50">
      {/* Floating decorative circles */}
      {floatingCircles.map((circle, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${circle.color} opacity-40`}
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            right: circle.right,
            bottom: circle.bottom,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: circle.delay,
          }}
        />
      ))}

      <div className="container mx-auto flex flex-col items-center gap-12 px-6 py-20 md:flex-row md:gap-16 lg:px-12">
        {/* Left content */}
        <motion.div
          className="flex flex-1 flex-col items-center text-center md:items-start md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge>{t("badge")}</Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-6 font-display text-4xl font-extrabold leading-tight text-warm-800 md:text-6xl"
          >
            {t("tagline")}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-lg leading-relaxed text-warm-600"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center gap-3 md:items-start">
            <button
              onClick={scrollToPreRegister}
              className="rounded-full bg-primary-500 px-8 py-3.5 text-lg font-bold text-white shadow-lg transition-all hover:bg-primary-600 hover:shadow-xl active:scale-95"
            >
              {t("cta")}
            </button>
            <span className="text-sm text-warm-500">{t("ctaSub")}</span>
          </motion.div>
        </motion.div>

        {/* Right visual — MIRAI-ME key art (E.png) */}
        {/* 아무것도 없다가 천천히 형상이 부드럽게 떠오르는 느낌 (회전·통통튀기 없음) */}
        {/* md:-translate-x-12: 데스크탑에서 살짝 왼쪽으로 (-3rem = -48px) — 우측 치우침 보정 */}
        <motion.div
          className="flex flex-1 items-center justify-center md:-translate-x-12"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 2.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] },
            scale:   { duration: 2.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] },
          }}
        >
          {/* 진입 완료 후 idle: 호흡 + 글로우 (페이드인 끝난 뒤 시작) */}
          <motion.div
            animate={{
              scale: [1.0, 1.018, 1.0],
              filter: [
                "drop-shadow(0 4px 12px rgba(255, 200, 220, 0.30))",
                "drop-shadow(0 8px 24px rgba(255, 200, 220, 0.55))",
                "drop-shadow(0 4px 12px rgba(255, 200, 220, 0.30))",
              ],
            }}
            transition={{
              scale:  { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay: 4.0 },
              filter: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 4.0 },
            }}
            className="w-full flex items-center justify-center"
          >
            <Image
              src="/hero_banner.png"
              alt="MIRAI-ME"
              width={1152}
              height={920}
              className="hidden w-full max-w-[45rem] bg-transparent md:block"
              style={{ isolation: "isolate" }}
              priority
              unoptimized
            />
            <Image
              src="/logo_mark.png"
              alt="MIRAI-ME"
              width={600}
              height={600}
              className="block w-full max-w-sm bg-transparent md:hidden"
              style={{ isolation: "isolate" }}
              priority
              unoptimized
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
