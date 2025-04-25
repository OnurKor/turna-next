
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80 z-10"></div>
        <img 
          src="/images/corporate-hero.jpg" 
          alt={t('company.title')}
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
            e.currentTarget.onerror = null;
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t('company.title')}
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            {t('company.subtitle')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
