
import { ChevronRight } from '@/lib/icons';

const Implementation = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Sistem Kurulum Aşamaları
      </h2>
      
      <div className="relative">
        {/* Timeline track */}
        <div className="absolute left-5 top-5 h-[calc(100%-2.5rem)] border-l-2 border-blue-200"></div>
        
        <div className="space-y-8">
          <div className="relative pl-14">
            <div className="absolute left-0 top-0 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">İhtiyaç Analizi ve Planlama</h3>
              <p className="text-gray-600 mb-4">
                Sağlık tesisinin ihtiyaçlarını belirleme, kritik takip edilmesi gereken varlıkları tanımlama ve 
                sistem mimarisini planlama aşaması.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">Keşif Toplantıları</span>
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">Gereksinim Analizi</span>
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">Sistem Tasarımı</span>
              </div>
            </div>
          </div>
          
          <div className="relative pl-14">
            <div className="absolute left-0 top-0 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Donanım Kurulumu</h3>
              <p className="text-gray-600 mb-4">
                RTLS altyapısı için gerekli donanımların (sensörler, antenler, beaconlar) kurulumu ve 
                konfigürasyonu yapılır.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">Sensör Yerleşimi</span>
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">Ağ Kurulumu</span>
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">Beacon Dağıtımı</span>
              </div>
            </div>
          </div>
          
          <div className="relative pl-14">
            <div className="absolute left-0 top-0 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Yazılım Entegrasyonu</h3>
              <p className="text-gray-600 mb-4">
                Turna.io RTLS platformunun hastane bilgi sistemi (HIS) ve diğer mevcut sistemlerle entegrasyonu 
                gerçekleştirilir.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">API Entegrasyonu</span>
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">Veri Akışı Yönetimi</span>
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">Dashboard Kurulumu</span>
              </div>
            </div>
          </div>
          
          <div className="relative pl-14">
            <div className="absolute left-0 top-0 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">4</div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Eğitim ve Adaptasyon</h3>
              <p className="text-gray-600 mb-4">
                Hastane personeline sistem kullanımı hakkında kapsamlı eğitimler verilir ve adaptasyon 
                süreci yönetilir.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">Kullanıcı Eğitimi</span>
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">İş Akışı Adaptasyonu</span>
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">Değişim Yönetimi</span>
              </div>
            </div>
          </div>
          
          <div className="relative pl-14">
            <div className="absolute left-0 top-0 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">5</div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">İzleme ve Optimizasyon</h3>
              <p className="text-gray-600 mb-4">
                Sistemin sürekli izlenmesi, performans ölçümleri ve gerekli optimizasyonların yapılması ile 
                maksimum fayda sağlanır.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">Performans Analizi</span>
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">İyileştirme Döngüsü</span>
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">Sürekli Destek</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 flex justify-center">
        <a href="#" className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition-colors">
          <span className="font-medium">Uygulama Detaylarını İncele</span>
          <ChevronRight className="h-5 w-5 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Implementation;
