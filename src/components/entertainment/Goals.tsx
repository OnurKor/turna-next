
import { Shield, Users, BarChart, Zap } from '@/lib/icons';

const Goals = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Hedefler</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex items-start">
          <div className="bg-turna-100 p-3 rounded-full mr-4">
            <Shield className="h-6 w-6 text-turna-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Gerçek zamanlı konum takibi ile güvenlik</h4>
            <p className="text-gray-600">Ziyaretçilerin gerçek zamanlı konum takibi sayesinde güvenliğini sağlayın ve acil durumlarda hızlı müdahale edin.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-turna-100 p-3 rounded-full mr-4">
            <Zap className="h-6 w-6 text-turna-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Gerçek zamanlı veri analizi ile kolay ulaşım</h4>
            <p className="text-gray-600">Anlık veri analizi sayesinde ziyaretçilere daha iyi hizmet sunun ve ulaşımı kolaylaştırın.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-turna-100 p-3 rounded-full mr-4">
            <Users className="h-6 w-6 text-turna-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Alanda bulunan ziyaretçi sayısını anlık belirleme</h4>
            <p className="text-gray-600">Farklı alanlardaki ziyaretçi yoğunluğunu izleyerek kaynakları daha verimli yönetin ve kalabalık alanları belirleyin.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-turna-100 p-3 rounded-full mr-4">
            <BarChart className="h-6 w-6 text-turna-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Anlık ziyaretçi tercihleri ile strateji belirleme kolaylığı</h4>
            <p className="text-gray-600">Ziyaretçilerin tercihleri ve davranışlarını analiz ederek daha etkili pazarlama ve iş stratejileri geliştirin.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
