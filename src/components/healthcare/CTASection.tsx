
import { Phone, Mail, Calendar } from '@/lib/icons';

const CTASection = () => {
  return (
    <div className="mb-16">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl overflow-hidden shadow-xl">
        <div className="p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Sağlık Tesislerinizi Turna.io ile Dönüştürün
          </h2>
          <p className="text-white text-opacity-90 mb-8 max-w-2xl">
            Gerçek zamanlı konum belirleme sistemleri ile sağlık hizmetlerinizin kalitesini artırın, 
            operasyonel verimliliği maksimize edin ve hasta bakım süreçlerinizi optimize edin.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <a 
              href="tel:+901234567890" 
              className="flex items-center bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm rounded-lg p-4 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-white font-medium">Hemen Arayın</p>
                <p className="text-white text-opacity-70 text-sm">+90 123 456 7890</p>
              </div>
            </a>
            
            <a 
              href="mailto:turna.bilisim.io@gmail.com" 
              className="flex items-center bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm rounded-lg p-4 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-white font-medium">Email Gönder</p>
                <p className="text-white text-opacity-70 text-sm">turna.bilisim.io@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="#" 
              className="flex items-center bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm rounded-lg p-4 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-white font-medium">Demo Randevusu</p>
                <p className="text-white text-opacity-70 text-sm">Çözümlerimizi canlı görün</p>
              </div>
            </a>
          </div>
          
          <form className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Bilgi Almak İçin Formu Doldurun</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Adınız Soyadınız</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Ad Soyad"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-gray-700 text-sm font-medium mb-1">Kurum Adı</label>
                <input 
                  type="text" 
                  id="organization" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Kurumunuz"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">E-posta Adresiniz</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="ornek@firma.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Telefon Numaranız</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="0 5XX XXX XX XX"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">Mesajınız</label>
              <textarea 
                id="message" 
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Nasıl yardımcı olabiliriz?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md transition-colors"
            >
              Bilgi Talebi Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
