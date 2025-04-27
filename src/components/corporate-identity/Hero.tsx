"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations();

  return (
    <div className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80 z-10"></div>

        {/* Görsel */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/AboutUs/kurumsal-kimlik-1.webp"
            alt={t("company.title")}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t("company.title")}
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            {t("company.subtitle")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
