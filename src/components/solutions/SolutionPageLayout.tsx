import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SolutionPageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: FeatureProps[];
  benefits?: { title: string; description: string }[];
  useCases?: { title: string; description: string; image?: string }[];
  technicalDetails?: string[];
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div className="w-12 h-12 bg-turna-100 rounded-full flex items-center justify-center mb-4 text-turna-600">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SolutionPageLayout: React.FC<SolutionPageProps> = ({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  useCases,
  technicalDetails,
}) => {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] md:h-[700px] bg-gradient-to-r from-turna-600 via-turna-500 to-turna-400 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full flex flex-col md:grid md:grid-cols-3">
            {/* Sol: Yazılar */}
            <div className="flex  mt-10 sm:mt-0  flex-col  justify-center items-center md:items-start text-center md:text-left px-6 py-8 text-white ">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-lg md:text-xl opacity-90">{subtitle}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
                <Link href="/iletisim">
                  <Button
                    variant="outline"
                    className="turna-button-primary bg-white text-turna-600 hover:bg-turna-50"
                  >
                    {t("common.contactUs")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sağ: Görsel */}
            <div className="relative flex-1 w-full h-full  col-span-2 ">
              <Image
                src={heroImage}
                alt={title}
                fill
                priority
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4  bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white shadow-lg rounded-xl p-8 -mt-20 relative z-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              {t("solutions.whatWeOffer")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              {description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <Feature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            {/* Benefits Section (Optional) */}
            {benefits && benefits.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  {t("common.benefits")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <h4 className="text-xl font-semibold mb-3 text-gray-800">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Use Cases Section (Optional) */}
            {useCases && useCases.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  {t("common.useCases")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                    >
                      {useCase.image && (
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            fill
                            src={useCase.image}
                            alt={useCase.title}
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h4 className="text-lg font-semibold mb-2 text-gray-800">
                          {useCase.title}
                        </h4>
                        <p className="text-gray-600">{useCase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Details Section (Optional) */}
            {technicalDetails && technicalDetails.length > 0 && (
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  {t("common.technicalDetails")}
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <ul className="list-disc pl-12 space-y-2 text-gray-600">
                    {technicalDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="text-center mt-12">
              <Link href="/iletisim">
                <Button className="bg-turna-500 text-white hover:bg-turna-600 px-8 py-6 text-lg font-semibold">
                  {t("common.contactForDetails")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t("common.successStories")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("common.successStoriesDesc")}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="md:shrink-0">
                <div className="w-16 h-16 bg-turna-100 rounded-full flex items-center justify-center text-turna-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-700 italic mb-4 text-lg">
                &quot;{t("common.testimonialQuote")}&quot;
                </p>
                <div>
                  <p className="font-bold text-gray-800">
                    {t("common.testimonialAuthor")}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {t("common.testimonialCompany")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions - İlgili Çözümler*/}
      {/* <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{t('common.relatedSolutions')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-5px]">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${1460925895917 + index * 10000}-afdab827c52f?auto=format&fit=crop&q=80&w=700`} 
                      alt={`${t('common.relatedSolution')} ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-turna-600 transition-colors">
                      {t('common.relatedSolution')} {index + 1}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t('common.relatedSolutionDesc')}
                    </p>
                    <div className="flex items-center text-turna-600 font-medium group-hover:translate-x-2 transition-transform">
                      <span>{t('common.learnMore')}</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default SolutionPageLayout;
