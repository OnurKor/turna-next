
import React from 'react';
import { useTranslation } from 'react-i18next';

const RTLSIntro = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {t('retail.rtlsTitle')}
            </h2>
            <div className="w-16 h-1 bg-turna-500 mb-6"></div>
            <p className="text-gray-600 mb-6 text-lg">
              {t('retail.rtlsDescription1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('retail.rtlsDescription2')}
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-turna-500 mr-3"></div>
                <span>{t('retail.trackCustomerDensity')}</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-turna-500 mr-3"></div>
                <span>{t('retail.optimizeProductLocations')}</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-turna-500 mr-3"></div>
                <span>{t('retail.trackEmployeeEfficiency')}</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/retail-rtls.jpg" 
              alt={t('retail.rtlsTitle')} 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RTLSIntro;
