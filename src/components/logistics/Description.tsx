
import { Truck } from '@/lib/icons';
import { useTranslation } from 'react-i18next';

const LogisticsDescription = () => {
  const { t } = useTranslation();
  
  return (
    <div className="text-center mb-16">
      <div className="flex justify-center mb-4">
        <Truck className="h-12 w-12 text-turna-500" />
      </div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('sectoralSolutions.logistics')}</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        {t('logistics.description')}
      </p>
    </div>
  );
};

export default LogisticsDescription;
