import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "ja" ? "ja_JP" : "ko_KR",
      type: "website",
      siteName: "MIRAI-ME",
      url: locale === "ja" ? "https://mirai-me.jp" : "https://mirai-me.jp/ko",
      images: [
        {
          url: "https://mirai-me.jp/og_image.png",
          width: 1200,
          height: 630,
          alt: "MIRAI-ME — AIがつくる、世界にひとつの絵本",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["https://mirai-me.jp/og_image.png"],
    },
    alternates: {
      languages: {
        ja: "https://mirai-me.jp",
        ko: "https://mirai-me.jp/ko",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
