import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-turna-700 via-turna-600 to-turna-500 text-white">
      {/* Arka Plan Baloncuklar */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] w-24 h-24 bg-turna-300 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-turna-400 rounded-full opacity-10 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-[40%] right-[30%] w-16 h-16 bg-turna-200 rounded-full opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* İçerik */}
      <div className="container mx-auto relative z-10 section-padding min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Yazılar */}
          <div className="animate-fadeIn">
            <h5 className="text-turna-200 font-medium mb-4">{t("tagline")}</h5>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {t("title")} <br />
              <span className="text-turna-200">{t("titleHighlight")}</span>
            </h1>
            <p className="text-lg mb-8 text-turna-50 max-w-lg">{t("description")}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/cozumler">
                <Button className="turna-button-primary bg-white text-turna-600 hover:bg-turna-50">{t("solutions")}</Button>
              </Link>
              <Link href="/iletisim">
                <Button className="turna-button-secondary bg-transparent border-white text-white hover:bg-white/10">{t("contact")}</Button>
              </Link>
            </div>
          </div>

          {/* Görsel + Yazı */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-2xl">
              
              <Image
                src="/assets/images/Hastane/personel-takip-dikdortgen.png"
                alt={t("dataEmpowerment")}
                width={1200}
                height={700}
                priority
                className="w-full h-auto object-cover rounded-2xl"
              />

              {/* Görsel Üzerine Yazı */}

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 bg-gradient-to-b from-black/30 via-black/10 to-transparent rounded-2xl">
                <h3 className="text-2xl font-bold mb-2">{t("dataEmpowerment")}</h3>
                <p className="text-sm text-turna-50">{t("dataDescription")}</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="inline-block w-2 h-2 bg-turna-300 rounded-full animate-pulse"></span>
                  <span className="text-sm text-turna-200">{t("liveAnalysis")}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Alt Dalga */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,117.3C672,117,768,171,864,197.3C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
