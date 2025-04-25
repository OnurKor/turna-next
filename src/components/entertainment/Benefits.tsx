
import { Card, CardContent } from "@/components/ui/card";
import { Check, TrendingUp } from '@/lib/icons';

const Benefits = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Faydalar</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-turna-100 p-2 rounded-full mr-3">
                <TrendingUp className="h-5 w-5 text-turna-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Ziyaretçi Deneyimini İyileştirme</h4>
            </div>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-turna-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Gerçek zamanlı navigasyon ile ziyaretçilere rehberlik etme</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-turna-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Bekleme sürelerini azaltma ve kuyruklara ilişkin gerçek zamanlı bilgiler</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-turna-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Kişiselleştirilmiş deneyimler ve öneriler sunma</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-turna-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">İnteraktif gösteriler ve etkinlikler için konum tabanlı bildirimleri</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-turna-100 p-2 rounded-full mr-3">
                <TrendingUp className="h-5 w-5 text-turna-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Operasyonel Verimlilik</h4>
            </div>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-turna-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Ekipman ve varlık takibi ile kayıpları ve arıza sürelerini azaltma</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-turna-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Personel dağılımını optimize etme ve iş yükünü dengeleme</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-turna-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Ziyaretçi yoğunluğuna göre kaynakları dinamik olarak tahsis etme</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-turna-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Bakım ve temizlik operasyonlarını ihtiyaç tabanlı planlama</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Benefits;
