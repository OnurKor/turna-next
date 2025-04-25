
import { Shield, Users, Layers, Package, Truck, Calendar } from '@/lib/icons';

const Goals = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Hedefler</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex items-start">
          <div className="bg-turna-100 p-3 rounded-full mr-4">
            <Users className="h-6 w-6 text-turna-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Günlük personel katılım kontrolü</h4>
            <p className="text-gray-600">Çalışanların giriş-çıkış ve vardiya takibini otomatikleştirerek insan kaynakları yönetimini kolaylaştırın.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-turna-100 p-3 rounded-full mr-4">
            <Shield className="h-6 w-6 text-turna-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">İlgili personel ve alan kontrolü</h4>
            <p className="text-gray-600">Kullanılan cihazlarla birlikte ilgili personel ve alan kontrolü ile bulunmaları gereken alanı belirleyin.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-turna-100 p-3 rounded-full mr-4">
            <Layers className="h-6 w-6 text-turna-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Araçlar ve ekipmanlara hızlı ulaşım</h4>
            <p className="text-gray-600">Ekipmanların ve araçların konumunu gerçek zamanlı olarak takip ederek zaman kaybını önleyin.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-turna-100 p-3 rounded-full mr-4">
            <Truck className="h-6 w-6 text-turna-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Kazaları önleme</h4>
            <p className="text-gray-600">Araçlarda eş anlı konum ve hareket takibi ile olası kazaları önceden önleyin ve iş güvenliğini artırın.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-turna-100 p-3 rounded-full mr-4">
            <Package className="h-6 w-6 text-turna-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Sistemli envanter takibi</h4>
            <p className="text-gray-600">Mal ve malzeme takibi ile birlikte sistemli envanter yönetimi sayesinde stok maliyetlerini düşürün.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-turna-100 p-3 rounded-full mr-4">
            <Calendar className="h-6 w-6 text-turna-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Otomatik muayene ve denetim</h4>
            <p className="text-gray-600">Araç ve cihazların otomatik muayene takibi ve denetimi ile bakım planlamasını optimize edin.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
