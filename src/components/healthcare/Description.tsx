
const HealthcareDescription = () => {
  return (
    <div id="healthcare-description" className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Sağlık Hizmetleri için Gerçek Zamanlı Takip Çözümleri
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-4">
            Modern sağlık hizmeti ortamında, kaynakların verimli kullanımı ve hasta güvenliği 
            her zamankinden daha kritik hale gelmiştir. Hastanelerde, kliniklerde ve bakım 
            merkezlerinde, yüzlerce personel, binlerce ekipman ve çok sayıda hasta sürekli 
            hareket halindedir.
          </p>
          <p className="text-gray-600 mb-4">
            Turna.io'nun sağlık sektörü için özel olarak geliştirilen RTLS çözümleri, 
            tüm bu hareketliliği gerçek zamanlı olarak izleyerek, operasyonel verimliliği 
            artırırken hasta bakım kalitesini yükseltmenize yardımcı olur.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-700 mb-3">
            Temel Faydalar
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
              </div>
              <span className="text-gray-700">Kaybolmuş ekipmanların hızlı lokalizasyonu</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
              </div>
              <span className="text-gray-700">Hasta bakım sürelerinin iyileştirilmesi</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
              </div>
              <span className="text-gray-700">Acil durum müdahale sürelerinin kısaltılması</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
              </div>
              <span className="text-gray-700">Çalışan verimliliğinin artırılması</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthcareDescription;
