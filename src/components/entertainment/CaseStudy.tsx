
import { Card, CardContent } from "@/components/ui/card";

const CaseStudy = () => {
  return (
    <div className="mb-16">
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Vaka Çalışması: Büyük Tema Parkı</h3>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img 
              src="/images/entertainment-case-study.jpg" 
              alt="Tema parkı ziyaretçileri" 
              className="rounded-lg shadow-md w-full h-auto object-cover aspect-video"
            />
          </div>
          
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              Türkiye'nin en büyük tema parklarından biri, ziyaretçi deneyimini iyileştirmek ve operasyonel verimliliği artırmak için Turna.io RTLS sistemini uyguladı.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-4">
                  <h4 className="font-bold text-turna-600 text-xl">%35</h4>
                  <p className="text-gray-600 text-sm">Ziyaretçi memnuniyetinde artış</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-4">
                  <h4 className="font-bold text-turna-600 text-xl">%22</h4>
                  <p className="text-gray-600 text-sm">İşletme maliyetlerinde azalma</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-4">
                  <h4 className="font-bold text-turna-600 text-xl">%40</h4>
                  <p className="text-gray-600 text-sm">Sıra bekleme süresinde azalma</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-4">
                  <h4 className="font-bold text-turna-600 text-xl">4 Ay</h4>
                  <p className="text-gray-600 text-sm">Yatırım geri dönüş süresi</p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-gray-700">
              Sistem uygulandıktan sonra, tema parkı içerisindeki ziyaretçi akışı optimize edilmiş, bekleme süreleri azaltılmış ve ziyaretçi memnuniyeti önemli ölçüde artmıştır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
