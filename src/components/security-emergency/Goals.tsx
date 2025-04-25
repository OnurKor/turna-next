
import React from 'react';
import { Shield, User, Bell, PackagePlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Goals = () => {
  const { t } = useTranslation();
  
  const goals = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Mahkumları izleyerek anormal durumlarda anlık uyarı ve müdahale",
      description: "Mahkumların hareketlerini gerçek zamanlı izleyerek güvenlik ihlallerini anında tespit edin ve hızlıca müdahale edin."
    },
    {
      icon: <User className="h-6 w-6" />,
      title: "Personel takibi ile kontrolü sağlama",
      description: "Güvenlik personelinin konumunu takip ederek optimum dağılımı sağlayın ve acil durumlarda en yakın personeli yönlendirin."
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Anlık destek bildirimi ile huzur ve güven ortamı sağlama",
      description: "Acil durumlarda anında bildirimler ile hızlı destek ekiplerinin yönlendirilmesini sağlayarak güvenliği artırın."
    },
    {
      icon: <PackagePlus className="h-6 w-6" />,
      title: "Kritik varlıkların takibi ile olası risklerde erken müdahale",
      description: "Silah, araç ve diğer kritik ekipmanların konumunu sürekli izleyerek yetkisiz erişim durumlarında hızlı müdahale edin."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('security.goals')}</h2>
          <div className="w-16 h-1 bg-turna-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            {t('security.goalsDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-turna-100 text-turna-600 mr-4">
                  {goal.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{goal.title}</h3>
              </div>
              <p className="text-gray-600">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
