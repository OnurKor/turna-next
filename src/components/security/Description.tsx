
import React from 'react';
import { Shield, Clock, Bell } from 'lucide-react';

const Description = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Turna.io İle Güvenlik ve Acil Durum Yönetiminde RTLS
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Kolluk kuvvetlerinin denetim, müdahale ve izlemelerinde kritik rol oynar. Gerçek zamanlı mahkum, araç ve kolluk kuvvetleri izleme ile vatandaşlar için daha güvenli bir ortam sağlar.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-turna-100 rounded-full text-turna-600">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Kapsamlı Güvenlik</h3>
                  <p className="text-gray-600">
                    Tüm güvenlik personeli ve ekipmanlarının gerçek zamanlı takibi ile daha güvenli bir ortam sağlayın.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-turna-100 rounded-full text-turna-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hızlı Müdahale</h3>
                  <p className="text-gray-600">
                    Acil durumlarda personel ve varlıkların konumunu anında belirleyerek müdahale süresini minimize edin.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-turna-100 rounded-full text-turna-600">
                  <Bell size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Anlık Uyarılar</h3>
                  <p className="text-gray-600">
                    Güvenlik ihlalleri ve anormal durumlar için otomatik uyarı sistemleri ile anında haberdar olun.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/security-operations.jpg"
              alt="Güvenlik Operasyonları"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
