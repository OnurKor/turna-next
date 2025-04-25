
import React from 'react';
import { ShoppingCart, Users, Clock, BarChart, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Goals = () => {
  const { t } = useTranslation();
  
  const goals = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Stok takibi ile birlikte süreçte kesintisiz ilerleme",
      description: "Stokların gerçek zamanlı takibi ile tedarik zincirini optimize edin ve stok dışı kalmayı önleyin."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Gerekli araç takibi ile kolay ulaşım",
      description: "Alışveriş arabaları, sepetler ve diğer ekipmanların konumunu takip ederek müşterilerin ihtiyaç anında ulaşabilmesini sağlayın."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Personel takibi sayesinde hizmette hız",
      description: "Personelin konumunu gerçek zamanlı izleyerek müşteri taleplerini hızlı ve etkili bir şekilde karşılayın."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Müşteri takibi ile birlikte yoğunluk takibi",
      description: "Mağaza içindeki müşteri hareketlerini analiz ederek kasa ve servis noktalarını optimize edin."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Marketlerde ürün bulmada hızlı ulaşım",
      description: "Müşterilerin aradıkları ürünlere kolay ulaşmasını sağlayarak alışveriş deneyimini iyileştirin."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('retail.goals')}</h2>
          <div className="w-16 h-1 bg-turna-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            {t('retail.goalsDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
