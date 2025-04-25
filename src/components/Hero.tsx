
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-turna-700 via-turna-600 to-turna-500 text-white">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] w-24 h-24 bg-turna-300 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-turna-400 rounded-full opacity-10 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-[40%] right-[30%] w-16 h-16 bg-turna-200 rounded-full opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto relative z-10 section-padding min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h5 className="text-turna-200 font-medium mb-4">{t('hero.tagline')}</h5>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {t('hero.title')} <br />
              <span className="text-turna-200">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg mb-8 text-turna-50 max-w-lg">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/cozumler">
                <Button className="turna-button-primary bg-white text-turna-600 hover:bg-turna-50">
                  {t('hero.solutions')}
                </Button>
              </Link>
              <Link href="/iletisim">
                <Button className="turna-button-secondary bg-transparent border-white text-white hover:bg-white/10">
                  {t('hero.contact')}
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-turna-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-turna-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              
              {/* Main Visual - Now an actual image instead of decorated div */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/20 animate-float" style={{ animationDuration: "8s" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-turna-400/20 to-turna-600/20 z-10"></div>
                <Image 
                  src="/images/data-visualization.jpg" 
                  alt={t('hero.dataEmpowerment')}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";
                    e.currentTarget.onerror = null;
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-turna-900/80 to-transparent p-6 z-20">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{t('hero.dataEmpowerment')}</h3>
                    <p className="text-turna-50">{t('hero.dataDescription')}</p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="inline-block w-2 h-2 bg-turna-300 rounded-full animate-pulse"></span>
                      <span className="text-sm text-turna-200">{t('hero.liveAnalysis')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,117.3C672,117,768,171,864,197.3C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
