
import { TrendingUp, Clock, Shield, Users } from '@/lib/icons';

const Benefits = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Sağlık Hizmetlerinde RTLS Faydaları
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Operasyonel Verimlilik</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">Ekipman kullanım oranlarını %25'e kadar artırma</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">Ekipman arama süresini %80 azaltma</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">Hasta akışını optimize ederek yatak kullanımını iyileştirme</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-blue-50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Zaman Tasarrufu</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">Tıbbi personelin ekipman arama süresinde günde 1 saate kadar tasarruf</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">Acil durum müdahale sürelerini %30'a kadar azaltma</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">Hasta bekleme sürelerinde önemli düşüş</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-blue-50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Hasta Güvenliği</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">Hasta tanımlama hatalarını ortadan kaldırma</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">Demans hastalarının güvenliğini sağlama</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">Enfeksiyon kontrolünü iyileştirme ve takip etme</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-blue-50 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Personel Yönetimi</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">İş yükünün dengeli dağılımını sağlama</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">Personel güvenliğini artırma</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">Çalışan memnuniyetini yükseltme</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
