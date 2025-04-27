"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Building, Shield, Award, Briefcase } from "@/lib/icons";

const CompanyOverview = () => {
  const t = useTranslations();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Görsel Kısmı */}
          <div className="md:w-1/2">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt={t("company.aboutTurna")}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Metin ve Özellikler */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t("company.about")}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t("company.aboutText")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {/* R&D */}
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-turna-50 text-turna-600">
                  <Building size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t("company.rnd")}</h3>
                  <p className="text-gray-600">{t("company.rndDesc")}</p>
                </div>
              </div>

              {/* Güvenilir Çözümler */}
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-turna-50 text-turna-600">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t("company.trustSolutions")}</h3>
                  <p className="text-gray-600">{t("company.trustSolutionsDesc")}</p>
                </div>
              </div>

              {/* Uzman Ekip */}
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-turna-50 text-turna-600">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t("company.expertTeam")}</h3>
                  <p className="text-gray-600">{t("company.expertTeamDesc")}</p>
                </div>
              </div>

              {/* Sektöre Özel Çözümler */}
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-turna-50 text-turna-600">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t("company.sectorSpecific")}</h3>
                  <p className="text-gray-600">{t("company.sectorSpecificDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
