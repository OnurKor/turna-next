
import React from 'react';
import { Badge } from '@/components/ui/badge';

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <Badge className="mb-3 bg-turna-100 text-turna-600 hover:bg-turna-200">Verimlilik</Badge>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">%30 Daha Hızlı Stok Yönetimi</h3>
                <p className="text-gray-600">Gerçek zamanlı stok takibi ile envanter yönetiminde verimliliği artırın.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <Badge className="mb-3 bg-turna-100 text-turna-600 hover:bg-turna-200">Deneyim</Badge>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Gelişmiş Müşteri Deneyimi</h3>
                <p className="text-gray-600">Müşterilerin aradıkları ürünlere kolay ulaşmasını sağlayarak memnuniyeti artırın.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <Badge className="mb-3 bg-turna-100 text-turna-600 hover:bg-turna-200">Analiz</Badge>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Müşteri Davranış Analizi</h3>
                <p className="text-gray-600">Mağaza içi trafiği analiz ederek ürün yerleşimini optimize edin.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <Badge className="mb-3 bg-turna-100 text-turna-600 hover:bg-turna-200">Optimizasyon</Badge>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Personel Dağılımında Optimizasyon</h3>
                <p className="text-gray-600">Yoğunluk takibi ile personel dağılımını optimize ederek hizmet kalitesini artırın.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Perakende ve Alışveriş Sektöründe RTLS'in Faydaları
            </h2>
            <div className="w-16 h-1 bg-turna-500 mb-6"></div>
            <p className="text-gray-600 mb-6">
              RTLS teknolojimiz, perakende sektöründe müşteri deneyiminden operasyonel verimliliğe kadar birçok alanda değer yaratıyor. İşte RTLS çözümlerimizin sunduğu bazı önemli faydalar:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-turna-100 flex items-center justify-center text-turna-600 mt-1 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>Doğru stok yönetimi ile satış kayıplarını önleyerek geliri artırabilirsiniz.</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-turna-100 flex items-center justify-center text-turna-600 mt-1 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>Müşteri davranışlarını anlayarak ürün yerleşimini ve promosyonları optimize edebilirsiniz.</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-turna-100 flex items-center justify-center text-turna-600 mt-1 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>Kasa kuyrukları ve servis noktalarını optimum düzeyde tutarak müşteri memnuniyeti sağlayabilirsiniz.</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-turna-100 flex items-center justify-center text-turna-600 mt-1 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>Personelin verimliliğini ölçerek eğitim ve iyileştirme alanlarını belirleyebilirsiniz.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
