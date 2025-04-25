
import { Factory } from '@/lib/icons';
import { useTranslation } from 'react-i18next';

const ManufacturingDescription = () => {
  const { t } = useTranslation();
  
  return (
    <div className="text-center mb-16">
      <div className="flex justify-center mb-4">
        <Factory className="h-12 w-12 text-turna-500" />
      </div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('sectoralSolutions.manufacturing')}</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        {t('manufacturing.description')}
      </p>
    </div>
  );
};

export default ManufacturingDescription;
