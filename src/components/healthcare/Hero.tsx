
import { ArrowDownCircle } from '@/lib/icons';

const HealthcareHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Sağlık Hizmetleri için RTLS Çözümleri
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Sağlık sektöründe, hasta, personel ve ekipman takibine yönelik çözümlerimiz, 
              hasta güvenliğini artırırken aynı zamanda ekipmanların etkin kullanımı ve 
              personel yönetiminin optimize edilmesine olanak tanır.
            </p>
            <button 
              className="flex items-center gap-2 bg-white text-blue-600 font-medium py-3 px-6 rounded-full hover:bg-opacity-90 transition-all"
              onClick={() => {
                document.getElementById('healthcare-description')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Daha Fazla Bilgi</span>
              <ArrowDownCircle className="h-5 w-5" />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <img 
                src="/images/healthcare-hero.jpg" 
                alt="Sağlık Hizmetlerinde RTLS" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <div className="h-3 w-3 bg-blue-600 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <p className="text-blue-800 font-medium text-sm">Gerçek Zamanlı Takip</p>
                    <p className="text-gray-600 text-xs">Hasta, ekipman ve personel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HealthcareHero;
