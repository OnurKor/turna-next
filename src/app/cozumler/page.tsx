import InternalSolutionsSection from '@/components/solutions-page/InternalSolutionsSection';
import SectoralSolutionsSection from '@/components/solutions-page/SectoralSolutionsSection';
import { HelpCircle} from '@/lib/icons'; 
import Link from "next/link";
import { useTranslations } from "next-intl";

const Solutions = () => {
  const  t  = useTranslations();
  
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-turna-700 to-turna-500 text-white pt-32 pb-16 md:pb-24 lg:pb-48 xl:pb-64 2xl:pb-72">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{t('solutions.title')}</h1>
            <p className="text-xl opacity-90 mb-8">
              {t('solutions.description')}
            </p>
          </div>
        </div>
        
        {/* Decorative wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,149.3C672,149,768,171,864,181.3C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">{t('solutions.rtlsTitle')}</h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('solutions.rtlsDesc')}
            </p>
            <div className="w-16 h-1 bg-turna-500 mx-auto mb-12"></div>
          </div>
        </div>
      </section>
      
      {/* Solutions Sections */}
      <InternalSolutionsSection />
      <SectoralSolutionsSection />
      
      {/* FAQ and Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">{t('solutions.moreInfo')}</h2>
            <p className="text-lg text-gray-600 mb-10">
              {t('solutions.moreInfoDesc')}
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/sss" className="flex items-center px-8 py-4 bg-white text-turna-600 hover:bg-gray-100 border border-gray-200 rounded-lg shadow-sm transition-all">
                <HelpCircle className="w-5 h-5 mr-2" />
                {t('solutions.faqs')}
              </Link>
              <Link href="/iletisim" className="px-8 py-4 bg-turna-500 text-white hover:bg-turna-600 rounded-lg shadow-md transition-all">
                {t('solutions.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Solutions;
