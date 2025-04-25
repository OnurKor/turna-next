
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const CTASection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="text-center p-8 bg-gradient-to-r from-turna-500 to-turna-600 rounded-xl shadow-lg text-white">
      <h3 className="text-2xl font-bold mb-6">
        {t('manufacturing.optimize')}
      </h3>
      <p className="text-white/90 mb-8 max-w-lg mx-auto">
        {t('manufacturing.optimizeDesc')}
      </p>
      <Button className="bg-white text-turna-600 hover:bg-turna-50 text-lg font-medium px-8 py-4">
        {t('manufacturing.freeConsultation')}
      </Button>
    </div>
  );
};

export default CTASection;
