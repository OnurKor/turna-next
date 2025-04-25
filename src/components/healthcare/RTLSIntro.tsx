
const RTLSIntro = () => {
  return (
    <div className="mb-16">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl overflow-hidden shadow-lg">
        <div className="p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Turna.io ile Sağlık Hizmetlerinde RTLS Sistemi
          </h2>
          <p className="text-white text-opacity-90 mb-8">
            Sağlık hizmetlerinde turna.io ile hastane personelinin, tıbbi cihazların, hastaların ve 
            tıbbi ekipmanın konumu ve durumu hakkında gerçek zamanlı ulaşılabilirlik elde edilir.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 hover:bg-opacity-20 transition-all">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ekipman Takibi</h3>
              <p className="text-white text-opacity-80 text-sm">
                Kritik tıbbi ekipmanların gerçek zamanlı konumlarını izleyin ve gerektiğinde hızlıca ulaşın.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 hover:bg-opacity-20 transition-all">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Personel İzleme</h3>
              <p className="text-white text-opacity-80 text-sm">
                Sağlık personelinin konumunu izleyin ve acil durumlarda en yakın personeli görevlendirin.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 hover:bg-opacity-20 transition-all">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Hasta Güvenliği</h3>
              <p className="text-white text-opacity-80 text-sm">
                Hassas hastaların konumunu takip ederek güvenliklerini sağlayın ve bakım kalitesini artırın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTLSIntro;
