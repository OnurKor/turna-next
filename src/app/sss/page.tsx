"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const t = useTranslations();
  const [currentLanguage, setCurrentLanguage] = useState<string>("tr");
  const [allFaqs, setAllFaqs] = useState<FaqItem[]>([]);

  useEffect(() => {
    const lang = typeof window !== "undefined" ? localStorage.getItem("turnaLanguage") || "tr" : "tr";
    setCurrentLanguage(lang);

    const faqs: FaqItem[] = [
      {
        question: t("faq.questions.rtlsSystem"),
        answer: t("faq.answers.rtlsSystem"),
      },
      {
        question: t("faq.questions.wearableDevices"),
        answer: t("faq.answers.wearableDevices"),
      },
      {
        question: t("faq.questions.installationTime"),
        answer: t("faq.answers.installationTime"),
      },
      {
        question: t("faq.questions.softwareSupport"),
        answer: t("faq.answers.softwareSupport"),
      },
      {
        question: t("faq.questions.applicableSectors"),
        answer: t("faq.answers.applicableSectors"),
      },
      {
        question: t("faq.questions.indoorOutdoor"),
        answer: t("faq.answers.indoorOutdoor"),
      },
      {
        question: t("faq.questions.forkliftSystem"),
        answer: t("faq.answers.forkliftSystem"),
      },
      {
        question: t("faq.questions.personnelTracking"),
        answer: t("faq.answers.personnelTracking"),
      },
      {
        question: t("faq.questions.assetTracking"),
        answer: t("faq.answers.assetTracking"),
      },
      {
        question: t("faq.questions.systemIntegration"),
        answer: t("faq.answers.systemIntegration"),
      },
    ];

    setAllFaqs(faqs);
  }, [t]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="pt-28 pb-16 flex-grow bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              {t("faq.pageTitle")}
            </h1>
            <div className="w-24 h-1 bg-turna-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("faq.pageSubtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden">
              {allFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-200 last:border-0 transition-all duration-300 ease-in-out"
                >
                  <AccordionTrigger className="text-left py-6 px-8 text-lg font-medium text-gray-800 hover:text-turna-600 hover:no-underline transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="py-5 px-8 text-gray-600 text-base leading-relaxed transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
