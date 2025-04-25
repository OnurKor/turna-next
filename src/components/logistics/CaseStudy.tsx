
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const CaseStudy = () => {
  const { t } = useTranslation();
  
  return (
    <div className="mb-16">
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">{t('logistics.caseStudy.title')}</h3>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img 
              src="/images/logistics-case-study.jpg" 
              alt={t('logistics.caseStudy.imageAlt')} 
              className="rounded-lg shadow-md w-full h-auto object-cover aspect-video"
            />
          </div>
          
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              {t('logistics.caseStudy.description')}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-4">
                  <h4 className="font-bold text-turna-600 text-xl">%32</h4>
                  <p className="text-gray-600 text-sm">{t('logistics.caseStudy.efficiency')}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-4">
                  <h4 className="font-bold text-turna-600 text-xl">%18</h4>
                  <p className="text-gray-600 text-sm">{t('logistics.caseStudy.costReduction')}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-4">
                  <h4 className="font-bold text-turna-600 text-xl">%57</h4>
                  <p className="text-gray-600 text-sm">{t('logistics.caseStudy.errorReduction')}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-4">
                  <h4 className="font-bold text-turna-600 text-xl">3 {t('logistics.caseStudy.months')}</h4>
                  <p className="text-gray-600 text-sm">{t('logistics.caseStudy.roi')}</p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-gray-700">
              {t('logistics.caseStudy.result')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
