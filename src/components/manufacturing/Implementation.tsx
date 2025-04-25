
import { useTranslation } from 'react-i18next';

const Implementation = () => {
  const { t } = useTranslation();
  
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
        {t('manufacturing.implementation.title')}
      </h3>
      <div className="relative">
        {/* Timeline */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-turna-100"></div>
        
        {/* Step 1 */}
        <div className="relative mb-8">
          <div className="md:flex items-center">
            <div className="md:w-1/2 pr-8 md:text-right">
              <h4 className="font-bold text-lg text-turna-600">{t('manufacturing.implementation.step1Title')}</h4>
              <p className="text-gray-600">{t('manufacturing.implementation.step1Desc')}</p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="rounded-full bg-turna-500 w-8 h-8 flex items-center justify-center text-white font-bold">1</div>
            </div>
            <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
              <img 
                src="/images/analysis.jpg" 
                alt={t('manufacturing.implementation.step1Alt')} 
                className="rounded-lg shadow-md w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="relative mb-8">
          <div className="md:flex items-center">
            <div className="md:w-1/2 pr-8 md:text-right order-1 md:order-2">
              <img 
                src="/images/installation.jpg" 
                alt={t('manufacturing.implementation.step2Alt')} 
                className="rounded-lg shadow-md w-full h-40 object-cover"
              />
            </div>
            <div className="hidden md:flex items-center justify-center order-2 md:order-1">
              <div className="rounded-full bg-turna-500 w-8 h-8 flex items-center justify-center text-white font-bold">2</div>
            </div>
            <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 order-3">
              <h4 className="font-bold text-lg text-turna-600">{t('manufacturing.implementation.step2Title')}</h4>
              <p className="text-gray-600">{t('manufacturing.implementation.step2Desc')}</p>
            </div>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="relative">
          <div className="md:flex items-center">
            <div className="md:w-1/2 pr-8 md:text-right">
              <h4 className="font-bold text-lg text-turna-600">{t('manufacturing.implementation.step3Title')}</h4>
              <p className="text-gray-600">{t('manufacturing.implementation.step3Desc')}</p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="rounded-full bg-turna-500 w-8 h-8 flex items-center justify-center text-white font-bold">3</div>
            </div>
            <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
              <img 
                src="/images/optimization.jpg" 
                alt={t('manufacturing.implementation.step3Alt')} 
                className="rounded-lg shadow-md w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;
