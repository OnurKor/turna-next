
import { Button } from "@/components/ui/button";
import { MapPin, ArrowDown } from '@/lib/icons';
import { useTranslation } from 'react-i18next';

const ManufacturingHero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-gradient-to-r from-turna-700 to-turna-500 text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/images/manufacturing-hero.jpg" 
          alt={t('manufacturing.heroAlt')} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{t('manufacturing.title')}</h1>
          <p className="text-xl opacity-90 mb-8">
            {t('manufacturing.heroSubtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="turna-button-primary flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              {t('manufacturing.demoRequest')}
            </Button>
            <Button className="turna-button-secondary flex items-center">
              <ArrowDown className="mr-2 h-5 w-5" />
              {t('manufacturing.moreInfo')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative wave pattern */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,149.3C672,149,768,171,864,181.3C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ManufacturingHero;
