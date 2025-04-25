
import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Implementation = () => {
  const { t } = useTranslation();
  
  const implementationSteps = [
    {
      title: "Sistem Analizi ve Planlama",
      description: "Mevcut güvenlik operasyonlarınızı analiz ederek, RTLS entegrasyonu için en uygun çözümü belirleriz."
    },
    {
      title: "Donanım Kurulumu",
      description: "Sensörler, alıcılar ve diğer gerekli donanımların profesyonel ekiplerimiz tarafından kurulumu yapılır."
    },
    {
      title: "Yazılım Entegrasyonu",
      description: "Turna.io RTLS yazılımını mevcut güvenlik sistemlerinize entegre ederek kesintisiz bir geçiş sağlarız."
    },
    {
      title: "Personel Eğitimi",
      description: "Güvenlik ekibinize sistemin kullanımı ve acil durum protokolleri hakkında kapsamlı eğitim veririz."
    },
    {
      title: "Test ve Optimizasyon",
      description: "Sistemin tüm senaryolarda doğru çalıştığından emin olmak için kapsamlı testler gerçekleştirilir."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/security-implementation.jpg"
              alt={t('security.implementation')}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {t('security.implementation')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('security.implementationDescription')}
            </p>
            
            <div className="space-y-6">
              {implementationSteps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-turna-100 text-turna-600">
                      <Check size={16} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{index + 1}. {step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <button className="turna-button-primary">
                {t('security.requestImplementationPlan')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
