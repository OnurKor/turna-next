
import React from 'react';
import { useTranslation } from 'react-i18next';

const CTASection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('security.enhance')}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {t('security.enhanceDescription')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="turna-button-primary">
                {t('security.demoRequest')}
              </button>
              <button className="bg-white text-gray-900 hover:bg-gray-100 turna-button">
                {t('security.technicalDetails')}
              </button>
            </div>
          </div>
          
          <div className="bg-turna-900 p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">{t('security.contactUs')}</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">{t('security.name')}</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
                  placeholder={t('security.name')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">{t('security.email')}</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
                  placeholder="ornek@sirket.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">{t('security.phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
                  placeholder="0500 000 00 00"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">{t('security.message')}</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
                  placeholder={t('security.messageExample')}
                ></textarea>
              </div>
              
              <button type="submit" className="w-full turna-button-primary">
                {t('security.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
