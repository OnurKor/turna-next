
import { TrendingUp, Clock, Database } from '@/lib/icons'; 
import { Card, CardContent } from "@/components/ui/card";

const RTLSIntro = () => {
  return (
    <div className="mb-16">
      <div className="bg-gradient-to-r from-turna-50 to-blue-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Turna.io ile Lojistik ve Depolamada RTLS Sistemi</h3>
        <p className="text-lg text-gray-700 mb-8">
          RTLS (Gerçek zamanlı konum takip) ile birlikte genel tedarik zinciri takibi artık daha kolay. Eş anlı izleme ile maliyeti azaltmak ve süreci iyileştirmek mümkün.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <TrendingUp className="h-10 w-10 text-turna-500 mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">Operasyonel Verimlilik</h4>
              <p className="text-gray-600">Tedarik zincirinin her adımında operasyonel verimliliği artırın</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <Clock className="h-10 w-10 text-turna-500 mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">Gerçek Zamanlı İzleme</h4>
              <p className="text-gray-600">Araçları, ekipmanları ve personeli gerçek zamanlı olarak takip edin</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <Database className="h-10 w-10 text-turna-500 mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">Envanter Optimizasyonu</h4>
              <p className="text-gray-600">Stok yönetimini otomatikleştirerek fireler ve israfa son verin</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RTLSIntro;
