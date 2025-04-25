
import React from 'react';
import { ShoppingCart, Users, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Perakende İşletmenizi Dönüştürmeye Hazır Mısınız?</h2>
          <p className="text-gray-600 mb-8">
            Turna.io'nun RTLS çözümleri ile perakende operasyonlarınızı modernize edin ve rekabet avantajı elde edin.
          </p>
          <button className="turna-button-primary flex items-center mx-auto">
            Hemen İletişime Geçin
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-turna-100 text-turna-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Ücretsiz Demo</h3>
            <p className="text-gray-600 mb-4">
              Turna.io RTLS çözümlerinin perakende işletmeniz için nasıl çalışacağını görmek için ücretsiz demo talep edin.
            </p>
            <button className="text-turna-600 font-medium hover:text-turna-700 transition-colors flex items-center justify-center mx-auto">
              Demo Talep Et
              <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-turna-100 text-turna-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Sektör Raporu</h3>
            <p className="text-gray-600 mb-4">
              "Perakendede RTLS'in Geleceği" raporumuzu indirin ve sektördeki yeni trendleri keşfedin.
            </p>
            <button className="text-turna-600 font-medium hover:text-turna-700 transition-colors flex items-center justify-center mx-auto">
              Raporu İndir
              <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-turna-100 text-turna-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Danışmanlık</h3>
            <p className="text-gray-600 mb-4">
              Uzmanlarımız perakende işletmeniz için en uygun RTLS stratejisini belirlemenize yardımcı olsun.
            </p>
            <button className="text-turna-600 font-medium hover:text-turna-700 transition-colors flex items-center justify-center mx-auto">
              Danışmanlık Alın
              <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
