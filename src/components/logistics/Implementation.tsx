
const Implementation = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Uygulama Süreci</h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-turna-100 z-0"></div>
        
        {/* Timeline items */}
        <div className="relative z-10">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
              <h4 className="font-bold text-xl text-gray-800 mb-2">İhtiyaç Analizi</h4>
              <p className="text-gray-600">
                Uzman ekibimiz lojistik operasyonlarınızı analiz ederek, spesifik ihtiyaçları belirler ve 
                en uygun RTLS çözümünü tasarlar.
              </p>
            </div>
            <div className="bg-turna-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold z-10">1</div>
            <div className="md:w-1/2 md:pl-12 md:text-left">
              <img 
                src="/images/logistics-analysis.jpg" 
                alt="İhtiyaç analizi" 
                className="rounded-lg shadow-md h-auto mt-4 md:mt-0"
              />
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0 md:text-left">
              <h4 className="font-bold text-xl text-gray-800 mb-2">Sistem Kurulumu</h4>
              <p className="text-gray-600">
                Minimum operasyonel kesinti ile etiketler, antenler ve diğer gerekli donanımların 
                kurulumu ve yazılım entegrasyonu gerçekleştirilir.
              </p>
            </div>
            <div className="bg-turna-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold z-10">2</div>
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <img 
                src="/images/logistics-installation.jpg" 
                alt="Sistem kurulumu" 
                className="rounded-lg shadow-md h-auto mt-4 md:mt-0"
              />
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
              <h4 className="font-bold text-xl text-gray-800 mb-2">Personel Eğitimi</h4>
              <p className="text-gray-600">
                Sistemi kullanacak tüm personele kapsamlı eğitim verilir ve ekibinizin 
                yeni teknolojiye hızlıca adapte olması sağlanır.
              </p>
            </div>
            <div className="bg-turna-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold z-10">3</div>
            <div className="md:w-1/2 md:pl-12 md:text-left">
              <img 
                src="/images/logistics-training.jpg" 
                alt="Personel eğitimi" 
                className="rounded-lg shadow-md h-auto mt-4 md:mt-0"
              />
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0 md:text-left">
              <h4 className="font-bold text-xl text-gray-800 mb-2">Sürekli Destek</h4>
              <p className="text-gray-600">
                Kurulum sonrası teknik destek, periyodik bakım ve sistem güncellemeleri ile 
                çözümün optimum performansta çalışması sağlanır.
              </p>
            </div>
            <div className="bg-turna-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold z-10">4</div>
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <img 
                src="/images/logistics-support.jpg" 
                alt="Sürekli destek" 
                className="rounded-lg shadow-md h-auto mt-4 md:mt-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;
