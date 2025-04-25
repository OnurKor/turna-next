
import { Factory } from '@/lib/icons';
import { useTranslation } from 'react-i18next';

const RTLSIntro = () => {
  const { t } = useTranslation();
  
  return (
    <div className="mb-16">
      <div className="bg-gray-50 rounded-xl p-8 shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {t('manufacturing.rtlsTitle')}
            </h3>
            <p className="text-gray-600 mb-4">
              {t('manufacturing.rtlsDesc')}
            </p>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-turna-100 p-2">
                <Factory className="h-5 w-5 text-turna-600" />
              </div>
              <p className="font-medium text-turna-600">{t('manufacturing.smartFactorySolutions')}</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/images/smart-factory.jpg" 
              alt={t('manufacturing.smartFactoryAlt')} 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTLSIntro;
