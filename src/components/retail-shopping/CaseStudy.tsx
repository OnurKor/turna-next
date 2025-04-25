
import React from 'react';
import { useTranslation } from 'react-i18next';

const CaseStudy = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('retail.caseStudy')}</h2>
          <div className="w-16 h-1 bg-turna-500 mx-auto mb-6"></div>
          <p className="text-gray-300">
            {t('retail.caseStudyDescription')}
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="inline-block text-turna-400 text-sm font-semibold mb-4 border border-turna-400 px-3 py-1 rounded-full">
                {t('retail.caseStudyTitle')}
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('retail.nationalRetailChain')}</h3>
              <p className="text-gray-300 mb-6">
                {t('retail.nationalRetailChainDesc')}
              </p>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-2 text-turna-300">{t('retail.challenges')}</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <div className="min-w-[24px] text-turna-400 mr-2">•</div>
                    <span>{t('retail.stockDelays')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-[24px] text-turna-400 mr-2">•</div>
                    <span>{t('retail.longCustomerWaiting')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-[24px] text-turna-400 mr-2">•</div>
                    <span>{t('retail.inappropriateProductPlacement')}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-turna-300">{t('retail.results')}</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <div className="min-w-[24px] text-turna-400 mr-2">•</div>
                    <span>{t('retail.stockAccuracy')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-[24px] text-turna-400 mr-2">•</div>
                    <span>{t('retail.waitingTimesReduced')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-[24px] text-turna-400 mr-2">•</div>
                    <span>{t('retail.customerSatisfaction')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-[24px] text-turna-400 mr-2">•</div>
                    <span>{t('retail.employeeEfficiency')}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <img 
                src="/images/retail-case-study.jpg" 
                alt={t('retail.caseStudy')} 
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
