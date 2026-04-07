import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ProductsSection from "@/components/sections/ProductsSection";
import GallerySection from "@/components/sections/GallerySection";
import PreRegisterSection from "@/components/sections/PreRegisterSection";
import FAQSection from "@/components/sections/FAQSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <ProductsSection />
      <GallerySection />
      <PreRegisterSection />
      <FAQSection />
    </>
  );
}
