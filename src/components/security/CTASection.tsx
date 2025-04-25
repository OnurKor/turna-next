
import React from 'react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Güvenlik Sistemlerinizi Turna.io ile Güçlendirin
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              RTLS teknolojimiz ile güvenlik ve acil durum yönetimi süreçlerinizi modernize edin. Uzmanlarımız, ihtiyaçlarınıza özel çözümler sunmak için hazır.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="turna-button-primary">
                Demonstrasyon Talebi
              </button>
              <button className="bg-white text-gray-900 hover:bg-gray-100 turna-button">
                Teknik Detaylar
              </button>
            </div>
          </div>
          
          <div className="bg-turna-900 p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">İletişime Geçin</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Adınız</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">E-posta Adresiniz</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
                  placeholder="ornek@sirket.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">Telefon Numaranız</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
                  placeholder="0500 000 00 00"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Mesajınız</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
                  placeholder="Nasıl yardımcı olabiliriz?"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full turna-button-primary">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
