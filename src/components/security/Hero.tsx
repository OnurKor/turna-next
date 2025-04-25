
import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <img 
          src="/images/security-hero.jpg" 
          alt="Güvenlik ve Acil Durum Yönetimi" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop";
            e.currentTarget.onerror = null;
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Güvenlik ve Acil Durum Yönetimi
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            RTLS çözümlerimiz, güvenlik personelinin ve kritik varlıkların takibi, acil durumlarda hızlı müdahale ve alan yönetimi gibi fonksiyonları içerir. Bu sayede, güvenlik seviyesi artırılırken, acil durumlara etkin ve zamanında yanıt verilebilir.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="turna-button-primary">
              Demonstrasyon Talebi
            </button>
            <button className="turna-button-secondary">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
