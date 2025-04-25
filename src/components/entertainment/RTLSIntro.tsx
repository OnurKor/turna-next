
import { TrendingUp, MapPin, Radio } from '@/lib/icons';
import { Card, CardContent } from "@/components/ui/card";

const RTLSIntro = () => {
  return (
    <div className="mb-16">
      <div className="bg-gradient-to-r from-turna-50 to-blue-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Turna.io ile Eğlencede RTLS Sistemi</h3>
        <p className="text-lg text-gray-700 mb-8">
          Anlık konum bulma ile katılımı arttırmak ve aynı zamanda verimliliği sağlamak mümkün. Turna.io RTLS çözümleri ile eğlenirken aynı zamanda bulunabilirliği ve güvende kalmaları sağlanır.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <MapPin className="h-10 w-10 text-turna-500 mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">Gelişmiş Müşteri Deneyimi</h4>
              <p className="text-gray-600">Ziyaretçi deneyimini kişiselleştirin ve eğlence etkinliklerini optimize edin</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <Radio className="h-10 w-10 text-turna-500 mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">Gerçek Zamanlı İzleme</h4>
              <p className="text-gray-600">Ziyaretçileri, personeli ve ekipmanları gerçek zamanlı olarak takip edin</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <TrendingUp className="h-10 w-10 text-turna-500 mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">Veri Analitiği</h4>
              <p className="text-gray-600">Ziyaretçi davranışlarını analiz ederek daha iyi iş kararları alın</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RTLSIntro;
