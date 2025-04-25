
import { Button } from "@/components/ui/button";
import { MapPin } from '@/lib/icons';
import { useTranslation } from 'react-i18next';

const CTASection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="text-center p-8 bg-gradient-to-r from-turna-500 to-turna-600 rounded-xl shadow-lg text-white">
      <h3 className="text-2xl font-bold mb-6">
        {t('logistics.optimize')}
      </h3>
      <p className="text-white/90 mb-8 max-w-lg mx-auto">
        {t('logistics.optimizeDesc')}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button className="bg-white text-turna-600 hover:bg-turna-50 text-lg font-medium px-8 py-4">
          {t('logistics.freeDemo')}
        </Button>
        <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg font-medium px-8 py-4">
          <MapPin className="mr-2 h-5 w-5" />
          {t('logistics.discoveryMeeting')}
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
