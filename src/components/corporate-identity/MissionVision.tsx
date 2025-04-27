"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const MissionVision = () => {
  const t = useTranslations();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t("company.missionVision")}
          </h2>
          <div className="w-24 h-1 bg-turna-500 mx-auto"></div>
        </div>

        {/* Misyon ve Vizyon Kartları */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Misyon */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="p-1 bg-gradient-to-r from-turna-400 to-turna-600"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-turna-400 to-turna-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                {t("company.mission")}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {t("company.missionText")}
              </p>
            </div>
          </div>

          {/* Vizyon */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="p-1 bg-gradient-to-r from-turna-600 to-turna-800"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-turna-600 to-turna-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                {t("company.vision")}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {t("company.visionText")}
              </p>
            </div>
          </div>
        </div>

        {/* Teknoloji Çözümleri Bölümü */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Görsel */}
            <div className="relative w-full md:w-1/2 h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/assets/images/AboutUs/kurumsal-kimlik-2.webp"
                alt={t("company.technology")}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Açıklamalar */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t("company.technologySolutions")}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t("company.technologySolutionsText")}
              </p>

              {/* Liste */}
              <ul className="space-y-2">
                {/* Madde */}
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-turna-500 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{t("company.realTimeTracking")}</span>
                </li>

                {/* Madde */}
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-turna-500 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{t("company.aiIotSolutions")}</span>
                </li>

                {/* Madde */}
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-turna-500 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{t("company.sectorSpecificSolutions")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
