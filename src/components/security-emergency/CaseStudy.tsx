
import React from 'react';
import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CaseStudy = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('security.caseStudy')}</h2>
          <div className="w-16 h-1 bg-turna-500 mx-auto mb-6"></div>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center justify-center p-2 bg-turna-100 rounded-full text-turna-600 mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {t('security.prisonCase')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('security.prisonDescription')}
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-turna-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Güvenlik ihlalleri %78 oranında azaldı</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-turna-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Acil durumlara müdahale süresi 12 dakikadan 3 dakikaya düştü</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-turna-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Kritik ekipmanların kaybolma oranı %95 azaldı</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-turna-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Personel verimliliği %42 arttı</p>
                </li>
              </ul>
              
              <button className="text-turna-500 font-medium flex items-center hover:text-turna-600 transition-colors">
                {t('security.detailedCaseStudy')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="bg-gray-200">
              <img 
                src="/images/security-case-study.jpg" 
                alt={t('security.caseStudy')} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
