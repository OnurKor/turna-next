
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from 'next-intl';
import { Link } from 'lucide-react';
import { getCookie } from 'cookies-next';

const FAQSection = () => {
  const t = useTranslations()
  const currentLanguage = getCookie('locale') || 'tr';

  // FAQ data based on language
  const faqs = currentLanguage === 'tr' ? [
    {
      question: "RTLS teknolojisi nedir?",
      answer: "Gerçek Zamanlı Konum Belirleme Sistemleri (RTLS), kapalı veya açık alanlarda nesnelerin veya insanların konumlarını gerçek zamanlı olarak takip etmek için kullanılan teknolojilerdir. Bluetooth, UWB, RFID, WiFi gibi çeşitli teknolojileri kullanarak yüksek hassasiyetle konum takibi sağlarlar."
    },
    {
      question: "Turna.io RTLS çözümleri hangi sektörlerde kullanılabilir?",
      answer: "Turna.io RTLS çözümleri, üretim, lojistik ve depolama, sağlık hizmetleri, eğlence, güvenlik ve acil durum yönetimi, perakende ve alışveriş gibi birçok sektörde kullanılabilmektedir. Her sektöre özel ihtiyaçlara göre özelleştirilmiş çözümler sunuyoruz."
    },
    {
      question: "RTLS sisteminin kurulumu ne kadar sürer?",
      answer: "RTLS sistem kurulumu, projenin kapsamına ve tesislerinizin büyüklüğüne bağlı olarak değişebilir. Tipik bir kurulum 1-4 hafta içerisinde tamamlanabilir. Küçük ölçekli projeler için bu süre daha kısa olabilirken, büyük ve karmaşık tesisler için daha uzun sürebilir."
    }
  ] : [
    {
      question: "What is RTLS technology?",
      answer: "Real-Time Location Systems (RTLS) are technologies used to track the location of objects or people in real-time in indoor or outdoor areas. They provide high-precision location tracking using various technologies such as Bluetooth, UWB, RFID, and WiFi."
    },
    {
      question: "In which sectors can Turna.io RTLS solutions be used?",
      answer: "Turna.io RTLS solutions can be used in many sectors including manufacturing, logistics and warehousing, healthcare services, entertainment, security and emergency management, retail and shopping. We offer customized solutions based on the specific needs of each sector."
    },
    {
      question: "How long does it take to install an RTLS system?",
      answer: "RTLS system installation can vary depending on the scope of the project and the size of your facilities. A typical installation can be completed within 1-4 weeks. This period may be shorter for small-scale projects and longer for large and complex facilities."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('faq.title')}</h2>
          <div className="w-24 h-1 bg-turna-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-0">
                <AccordionTrigger className="text-left py-5 px-6 text-lg font-medium text-gray-800 hover:text-turna-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="py-4 px-6 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-10">
            <Link href="/sss">
              <Button className="bg-turna-500 hover:bg-turna-600 text-white px-6 py-2">
                {t('faq.seeAll')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
