
import { Zap, AlertTriangle } from '@/lib/icons';
import { useTranslation } from 'react-i18next';

const Benefits = () => {
  const { t } = useTranslation();
  
  return (
    <div className="mb-16">
      <div className="bg-turna-50 rounded-xl p-8 shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <img 
            src="/images/factory-equipment.jpg" 
            alt={t('manufacturing.factoryEquipment')} 
            className="w-64 h-64 object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">{t('manufacturing.benefits')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-turna-100 p-3 flex-shrink-0">
              <Zap className="h-6 w-6 text-turna-600" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">{t('manufacturing.productivityIncrease')}</h4>
              <p className="text-gray-600">{t('manufacturing.productivityDesc')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-turna-100 p-3 flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-turna-600" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">{t('manufacturing.accidentReduction')}</h4>
              <p className="text-gray-600">{t('manufacturing.accidentDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
