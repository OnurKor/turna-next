
import { CheckCircle } from '@/lib/icons';

const Goals = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Hedefler
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-start mb-4">
            <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Acil durum bulunan bölgeye hızlı ulaşım</h3>
              <p className="text-gray-600 text-sm">
                Acil durumlarda en yakın sağlık personelinin otomatik olarak tespit edilmesi ve 
                yönlendirilmesi ile müdahale sürelerini kısaltın.
              </p>
            </div>
          </div>
          <img 
            src="/images/healthcare-emergency.jpg" 
            alt="Acil durum müdahalesi" 
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-start mb-4">
            <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Ekipmanlara hızlı ulaşım</h3>
              <p className="text-gray-600 text-sm">
                Kritik tıbbi cihazların ve ekipmanların gerçek zamanlı konumunu görüntüleyerek
                arama süresini ortadan kaldırın ve hızlı erişim sağlayın.
              </p>
            </div>
          </div>
          <img 
            src="/images/healthcare-equipment.jpg" 
            alt="Tıbbi ekipman takibi" 
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-start mb-4">
            <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Tıbbi verilerin anlık takibi</h3>
              <p className="text-gray-600 text-sm">
                Hastalara ait tıbbi verilerin gerçek zamanlı olarak takibi ile tedavi süreçlerini
                optimize edin ve hasta bakım kalitesini artırın.
              </p>
            </div>
          </div>
          <img 
            src="/images/healthcare-data.jpg" 
            alt="Tıbbi veri takibi" 
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-start mb-4">
            <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Personel takibi ile hızlı müdahale</h3>
              <p className="text-gray-600 text-sm">
                Sağlık personelinin konumunu izleyerek, hasta ihtiyaçlarına hızlı müdahale 
                edilmesini sağlayın ve çalışan verimliliğini artırın.
              </p>
            </div>
          </div>
          <img 
            src="/images/healthcare-staff.jpg" 
            alt="Personel takibi" 
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-start mb-4">
            <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">İş akışının düzene girmesi</h3>
              <p className="text-gray-600 text-sm">
                Hasta, personel ve ekipman hareketlerinin gerçek zamanlı izlenmesi ve analizi ile
                hastane iş akışlarını optimize edin, bekleme sürelerini azaltın ve 
                genel operasyonel verimliliği artırın.
              </p>
            </div>
          </div>
          <img 
            src="/images/healthcare-workflow.jpg" 
            alt="İş akışı optimizasyonu" 
            className="w-full h-60 object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Goals;
