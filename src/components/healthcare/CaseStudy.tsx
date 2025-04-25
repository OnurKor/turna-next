
const CaseStudy = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Vaka Çalışması: Ankara Şehir Hastanesi
      </h2>
      
      <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
        <div className="relative h-64">
          <img 
            src="/images/healthcare-case-study.jpg" 
            alt="Ankara Şehir Hastanesi" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6">
              <span className="text-sm bg-blue-500 text-white px-3 py-1 rounded-full">Başarı Hikayesi</span>
              <h3 className="text-white text-xl font-bold mt-2">3,600 Yatak Kapasiteli Hastanede RTLS Dönüşümü</h3>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="border-r border-gray-200 pr-4 last:border-r-0 last:pr-0">
              <p className="text-gray-500 text-sm">Durum</p>
              <p className="text-gray-800 font-medium">Ekipman takip zorluğu, acil müdahale gecikmeleri</p>
            </div>
            <div className="border-r border-gray-200 pr-4 last:border-r-0 last:pr-0 md:border-r md:pr-4">
              <p className="text-gray-500 text-sm">Çözüm</p>
              <p className="text-gray-800 font-medium">Turna.io bütünleşik RTLS platformu kurulumu</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Sonuç</p>
              <p className="text-gray-800 font-medium">Ekipman arama süresinde %83 azalma, acil müdahale hızında %37 artış</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">
            Ankara'da bulunan 3,600 yatak kapasiteli şehir hastanesi, büyüklüğü nedeniyle ekipman takibi 
            ve personel koordinasyonunda ciddi sorunlar yaşıyordu. Özellikle kritik ekipmanların bulunamaması 
            ve acil durumlarda en yakın personele ulaşılamaması, hasta bakım kalitesini olumsuz etkiliyordu.
          </p>
          
          <p className="text-gray-600 mb-4">
            Turna.io RTLS çözümünün entegrasyonu ile 5,000'den fazla kritik ekipman ve 10,000'e yakın 
            sağlık personeli gerçek zamanlı olarak izlenmeye başlandı. Sistem, hastane bilgi sistemi ile 
            entegre çalışarak iş akışlarını otomatize etti.
          </p>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Elde Edilen Sonuçlar</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Ekipman arama sürelerinde %83 azalma</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Acil durum müdahale hızında %37 artış</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Ekipman kullanım oranlarında %26 artış</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Hasta memnuniyet skorlarında %22 iyileşme</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
