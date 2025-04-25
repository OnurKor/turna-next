
import { Truck, Package, TrendingUp } from '@/lib/icons';
import { useTranslation } from 'react-i18next';

const LogisticsHero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-gradient-to-r from-turna-700 to-turna-500 text-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <Truck className="h-12 w-12" />
            <Package className="h-12 w-12" />
            <TrendingUp className="h-12 w-12" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{t('logistics.title')}</h1>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            {t('logistics.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="turna-button-primary bg-white text-turna-600 hover:bg-turna-50 flex items-center">
              {t('logistics.requestDemo')}
            </button>
            <button className="turna-button-secondary border-white text-white hover:bg-white/10 flex items-center">
              {t('logistics.exploreSolution')}
            </button>
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

export default LogisticsHero;
