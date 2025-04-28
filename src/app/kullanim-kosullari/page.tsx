import { useTranslations } from "next-intl";

const TermsAndConditions = () => {
  const  t  = useTranslations();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-16 mt-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">{t("terms.title")}</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">{t("terms.introduction.paragraph1")}</p>
          <p className="mb-10">{t("terms.introduction.paragraph2")}</p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">{t("terms.intellectualProperty.title")}</h2>
          <p className="mb-6">{t("terms.intellectualProperty.paragraph1")}</p>
          <p className="mb-10">{t("terms.intellectualProperty.paragraph2")}</p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">{t("terms.disclaimer.title")}</h2>
          <p className="mb-10">{t("terms.disclaimer.paragraph1")}</p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">{t("terms.responsibilities.title")}</h2>
          <p className="mb-6">{t("terms.responsibilities.paragraph1")}</p>
          <p className="mb-6">{t("terms.responsibilities.paragraph2")}</p>
          <p className="mb-10">{t("terms.responsibilities.paragraph3")}</p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">{t("terms.linking.title")}</h2>
          <p className="mb-10">{t("terms.linking.paragraph1")}</p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">{t("terms.mobileAccess.title")}</h2>
          <p className="mb-10">{t("terms.mobileAccess.paragraph1")}</p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">{t("terms.security.title")}</h2>
          <p className="mb-10">{t("terms.security.paragraph1")}</p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">{t("terms.privacy.title")}</h2>
          <p className="mb-10">{t("terms.privacy.paragraph1")}</p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">{t("terms.changes.title")}</h2>
          <p className="mb-10">{t("terms.changes.paragraph1")}</p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">{t("terms.dataProtection.title")}</h2>
          <p className="mb-10">{t("terms.dataProtection.paragraph1")}</p>
          
          <h3 className="text-xl font-semibold mb-3 mt-8">{t("terms.dataProtection.section1.title")}</h3>
          <p className="mb-6">{t("terms.dataProtection.section1.paragraph1")}</p>
          
          <h3 className="text-xl font-semibold mb-3 mt-8">{t("terms.dataProtection.section2.title")}</h3>
          <p className="mb-6">{t("terms.dataProtection.section2.paragraph1")}</p>
          <p className="mb-6">{t("terms.dataProtection.section2.address")}</p>
          <p className="mb-6">{t("terms.dataProtection.section2.email")}</p>
          
          <h3 className="text-xl font-semibold mb-3 mt-8">{t("terms.dataProtection.section3.title")}</h3>
          <p className="mb-6">{t("terms.dataProtection.section3.paragraph1")}</p>
          
          <h3 className="text-xl font-semibold mb-3 mt-8">{t("terms.dataProtection.section4.title")}</h3>
          <p className="mb-6">{t("terms.dataProtection.section4.paragraph1")}</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">{t("terms.dataProtection.section4.point1")}</li>
            <li className="mb-2">{t("terms.dataProtection.section4.point2")}</li>
            <li className="mb-2">{t("terms.dataProtection.section4.point3")}</li>
            <li className="mb-2">{t("terms.dataProtection.section4.point4")}</li>
            <li className="mb-2">{t("terms.dataProtection.section4.point5")}</li>
            <li className="mb-2">{t("terms.dataProtection.section4.point6")}</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 mt-8">{t("terms.dataProtection.section5.title")}</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">{t("terms.dataProtection.section5.point1")}</li>
            <li className="mb-2">{t("terms.dataProtection.section5.point2")}</li>
            <li className="mb-2">{t("terms.dataProtection.section5.point3")}</li>
            <li className="mb-2">{t("terms.dataProtection.section5.point4")}</li>
            <li className="mb-2">{t("terms.dataProtection.section5.point5")}</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 mt-8">{t("terms.dataProtection.section6.title")}</h3>
          <p className="mb-6">{t("terms.dataProtection.section6.paragraph1")}</p>
          
          <h3 className="text-xl font-semibold mb-3 mt-8">{t("terms.dataProtection.section7.title")}</h3>
          <p className="mb-6">{t("terms.dataProtection.section7.paragraph1")}</p>
          
          <h3 className="text-xl font-semibold mb-3 mt-8">{t("terms.dataProtection.section8.title")}</h3>
          <p className="mb-6">{t("terms.dataProtection.section8.paragraph1")}</p>
          
          <h3 className="text-xl font-semibold mb-3 mt-8">{t("terms.dataProtection.section9.title")}</h3>
          <p className="mb-6">{t("terms.dataProtection.section9.paragraph1")}</p>
          
          <h3 className="text-xl font-semibold mb-3 mt-8">{t("terms.dataProtection.section10.title")}</h3>
          <p className="mb-6">{t("terms.dataProtection.section10.paragraph1")}</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">{t("terms.dataProtection.section10.point1")}</li>
            <li className="mb-2">{t("terms.dataProtection.section10.point2")}</li>
            <li className="mb-2">{t("terms.dataProtection.section10.point3")}</li>
            <li className="mb-2">{t("terms.dataProtection.section10.point4")}</li>
            <li className="mb-2">{t("terms.dataProtection.section10.point5")}</li>
            <li className="mb-2">{t("terms.dataProtection.section10.point6")}</li>
            <li className="mb-2">{t("terms.dataProtection.section10.point7")}</li>
            <li className="mb-2">{t("terms.dataProtection.section10.point8")}</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 mt-8">{t("terms.dataProtection.section11.title")}</h3>
          <p className="mb-6">{t("terms.dataProtection.section11.paragraph1")}</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">{t("terms.dataProtection.section11.point1")}</li>
            <li className="mb-2">{t("terms.dataProtection.section11.point2")}</li>
            <li className="mb-2">{t("terms.dataProtection.section11.point3")}</li>
            <li className="mb-2">{t("terms.dataProtection.section11.point4")}</li>
            <li className="mb-2">{t("terms.dataProtection.section11.point5")}</li>
          </ul>
        </div>
      </div>
      <div className="mt-auto">
      </div>
    </div>
  );
};

export default TermsAndConditions;