"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";

const schema = z.object({
  email: z.email(),
});

type FormData = z.infer<typeof schema>;
type FormState = "idle" | "loading" | "success" | "error";

export default function PreRegisterSection() {
  const t = useTranslations("preRegister");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setFormState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/pre-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await res.json();

      if (res.ok) {
        setFormState("success");
      } else if (res.status === 409) {
        setFormState("error");
        setErrorMessage(t("alreadyRegistered"));
      } else {
        setFormState("error");
        setErrorMessage(result.message || t("error"));
      }
    } catch {
      setFormState("error");
      setErrorMessage(t("error"));
    }
  };

  return (
    <section
      id="pre-register"
      className="bg-gradient-to-br from-primary-50 to-lavender-50 py-20 md:py-28"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <FadeInOnScroll>
          <SectionHeading title={t("heading")} subtitle={t("description")} />
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <div className="mx-auto max-w-lg">
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-sm"
                >
                  <CheckCircle2 className="h-12 w-12 text-mint-400" />
                  <p className="text-lg font-medium text-warm-700">
                    {t("success")}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  <div className="flex flex-1 flex-col">
                    <input
                      type="email"
                      placeholder={t("placeholder")}
                      {...register("email")}
                      className="h-12 rounded-xl border border-warm-200 bg-white px-4 text-warm-800 placeholder:text-warm-300 focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
                    />
                    {errors.email && (
                      <span className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 font-bold text-white transition-colors hover:bg-primary-600 disabled:opacity-60"
                  >
                    {formState === "loading" ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      t("button")
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {formState === "error" && errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-600"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {errorMessage}
                </motion.div>
              )}
            </AnimatePresence>

            <p className="mt-4 text-center text-xs text-warm-500">
              {t("privacy")}
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
