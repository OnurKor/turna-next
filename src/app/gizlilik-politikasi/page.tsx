import { Shield, LockKeyhole } from '@/lib/icons';
import { useTranslations } from "next-intl";

const PrivacyPolicy = () => {
  const  t  = useTranslations();
  

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-turna-500" />
              <LockKeyhole className="h-12 w-12 text-turna-500 ml-2" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("privacy.title")}</h1>
            <p className="text-gray-600">{t("privacy.introduction.paragraph1")}</p>
            <p className="text-gray-600 mt-4">{t("privacy.introduction.paragraph2")}</p>
          </div>

          {/* Section 1: Purpose */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.purpose.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.purpose.paragraph1")}</p>
          </div>

          {/* Section 2: Scope */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.scope.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.scope.paragraph1")}</p>
            <p className="text-gray-700 mb-4">{t("privacy.scope.paragraph2")}</p>
            <p className="text-gray-700 mb-4">{t("privacy.scope.paragraph3")}</p>
            <p className="text-gray-700 mb-4">{t("privacy.scope.paragraph4")}</p>
          </div>

          {/* Section 3: Processing Rules */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.rules.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.rules.paragraph1")}</p>
            <p className="text-gray-700 mb-4">{t("privacy.rules.paragraph2")}</p>
            <p className="text-gray-700 mb-4">{t("privacy.rules.paragraph3")}</p>
            <p className="text-gray-700 mb-4">{t("privacy.rules.paragraph4")}</p>
            <p className="text-gray-700 mb-4">{t("privacy.rules.paragraph5")}</p>
          </div>

          {/* Section 4: Rights */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.rights.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.rights.paragraph1")}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>{t("privacy.rights.point1")}</li>
              <li>{t("privacy.rights.point2")}</li>
              <li>{t("privacy.rights.point3")}</li>
              <li>{t("privacy.rights.point4")}</li>
              <li>{t("privacy.rights.point5")}</li>
              <li>{t("privacy.rights.point6")}</li>
              <li>{t("privacy.rights.point7")}</li>
              <li>{t("privacy.rights.point8")}</li>
            </ul>
          </div>

          {/* Section 5: Principle */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.principle.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.principle.paragraph1")}</p>
          </div>

          {/* Section 6: Deletion */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.deletion.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.deletion.paragraph1")}</p>
          </div>

          {/* Section 7: Accuracy */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.accuracy.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.accuracy.paragraph1")}</p>
          </div>

          {/* Section 8: Confidentiality */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.confidentiality.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.confidentiality.paragraph1")}</p>
          </div>

          {/* Section 9: Processing Purposes */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.processingPurposes.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.processingPurposes.paragraph1")}</p>
          </div>

          {/* Section 10: User Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.userInfo.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.userInfo.paragraph1")}</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">{t("privacy.userInfo.section1.title")}</h3>
            <p className="text-gray-700 mb-4">{t("privacy.userInfo.section1.paragraph1")}</p>
            <p className="text-gray-700 mb-4">{t("privacy.userInfo.section1.paragraph2")}</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">{t("privacy.userInfo.section2.title")}</h3>
            <p className="text-gray-700 mb-4">{t("privacy.userInfo.section2.paragraph1")}</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">{t("privacy.userInfo.section3.title")}</h3>
            <p className="text-gray-700 mb-4">{t("privacy.userInfo.section3.paragraph1")}</p>
            <p className="text-gray-700 mb-4">{t("privacy.userInfo.section3.paragraph2")}</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">{t("privacy.userInfo.section4.title")}</h3>
            <p className="text-gray-700 mb-4">{t("privacy.userInfo.section4.paragraph1")}</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">{t("privacy.userInfo.section5.title")}</h3>
            <p className="text-gray-700 mb-4">{t("privacy.userInfo.section5.paragraph1")}</p>
            <p className="text-gray-700 mb-4">{t("privacy.userInfo.section5.paragraph2")}</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">{t("privacy.userInfo.section6.title")}</h3>
            <p className="text-gray-700 mb-4">{t("privacy.userInfo.section6.paragraph1")}</p>
          </div>

          {/* Section 11: Customer Data */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.customerData.title")}</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">{t("privacy.customerData.section1.title")}</h3>
            <p className="text-gray-700 mb-4">{t("privacy.customerData.section1.paragraph1")}</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">{t("privacy.customerData.section2.title")}</h3>
            <p className="text-gray-700 mb-4">{t("privacy.customerData.section2.paragraph1")}</p>
          </div>

          {/* Section 12: Advertising */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.advertising.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.advertising.paragraph1")}</p>
          </div>

          {/* Section 13: Legal Processing */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.legalProcessing.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.legalProcessing.paragraph1")}</p>
          </div>

          {/* Section 14: Company Processing */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.companyProcessing.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.companyProcessing.paragraph1")}</p>
          </div>

          {/* Section 15: Sensitive Data */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.sensitiveData.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.sensitiveData.paragraph1")}</p>
          </div>

          {/* Section 16: Automated Data */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.automatedData.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.automatedData.paragraph1")}</p>
          </div>

          {/* Section 17: Employee Data */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.employeeData.title")}</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">{t("privacy.employeeData.section1.title")}</h3>
            <p className="text-gray-700 mb-4">{t("privacy.employeeData.section1.paragraph1")}</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">{t("privacy.employeeData.section2.title")}</h3>
            <p className="text-gray-700 mb-4">{t("privacy.employeeData.section2.paragraph1")}</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">{t("privacy.employeeData.section3.title")}</h3>
            <p className="text-gray-700 mb-4">{t("privacy.employeeData.section3.paragraph1")}</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">{t("privacy.employeeData.section4.title")}</h3>
            <p className="text-gray-700 mb-4">{t("privacy.employeeData.section4.paragraph1")}</p>
            <p className="text-gray-700 mb-4">{t("privacy.employeeData.section4.paragraph2")}</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">{t("privacy.employeeData.section5.title")}</h3>
            <p className="text-gray-700 mb-4">{t("privacy.employeeData.section5.paragraph1")}</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">{t("privacy.employeeData.section6.title")}</h3>
            <p className="text-gray-700 mb-4">{t("privacy.employeeData.section6.paragraph1")}</p>
          </div>

          {/* Section 18: Data Transfer */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.dataTransfer.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.dataTransfer.paragraph1")}</p>
          </div>

          {/* Section 19: Rights of the Data Subject */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.dataSubjectRights.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.dataSubjectRights.paragraph1")}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>{t("privacy.dataSubjectRights.point1")}</li>
              <li>{t("privacy.dataSubjectRights.point2")}</li>
              <li>{t("privacy.dataSubjectRights.point3")}</li>
              <li>{t("privacy.dataSubjectRights.point4")}</li>
              <li>{t("privacy.dataSubjectRights.point5")}</li>
              <li>{t("privacy.dataSubjectRights.point6")}</li>
              <li>{t("privacy.dataSubjectRights.point7")}</li>
              <li>{t("privacy.dataSubjectRights.point8")}</li>
              <li>{t("privacy.dataSubjectRights.point9")}</li>
            </ul>
            <p className="text-gray-700 mb-4">{t("privacy.dataSubjectRights.paragraph2")}</p>
            <p className="text-gray-700 mb-4">{t("privacy.dataSubjectRights.paragraph3")}</p>
          </div>

          {/* Section 20: Confidentiality Principle */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.confidentialityPrinciple.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.confidentialityPrinciple.paragraph1")}</p>
          </div>

          {/* Section 21: Transaction Security */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.security.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.security.paragraph1")}</p>
          </div>

          {/* Section 22: Auditing */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.audit.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.audit.paragraph1")}</p>
          </div>

          {/* Section 23: Violation Reporting */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.violations.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.violations.paragraph1")}</p>
            <p className="text-gray-700 mb-4">{t("privacy.violations.paragraph2")}</p>
          </div>

          {/* Section 24: Privacy Policy Changes */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t("privacy.changes.title")}</h2>
            <p className="text-gray-700 mb-4">{t("privacy.changes.paragraph1")}</p>
            <p className="text-gray-700 mb-4">{t("privacy.changes.paragraph2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
