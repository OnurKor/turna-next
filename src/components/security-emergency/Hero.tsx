
import React from 'react';
import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <img 
          src="/images/security-hero.jpg" 
          alt={t('security.title')} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2280&auto=format&fit=crop";
            e.currentTarget.onerror = null;
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center justify-center p-2 bg-turna-100 rounded-full text-turna-600">
            <Shield className="h-6 w-6" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('security.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            {t('security.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="turna-button-primary">
              {t('security.demoRequest')}
            </button>
            <button className="turna-button-secondary">
              {t('security.moreInfo')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
