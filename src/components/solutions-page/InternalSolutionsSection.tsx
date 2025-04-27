import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ShieldCheck, HardHat, Package, Users } from "@/lib/icons";
import Link from "next/link";
import Image from "next/image";

const InternalSolutionsSection = () => {
  const t = useTranslations();

  const internalSolutions = [
    {
      id: 1,
      title: t("indoorSolutions.realTimeNavigation"),
      description: t("indoorSolutions.descriptions.realTimeNavigation"),
      icon: <MapPin className="h-10 w-10 text-turna-500" />,
      image: "/assets/images/Lojistik/personel-takip-d.png",
      imageAlt: t("indoorSolutions.realTimeNavigation"),
      path: "/cozumler/bina-ici-cozumler/gercek-zamanli-navigasyon",
    },
    {
      id: 2,
      title: t("indoorSolutions.employeeSafety"),
      description: t("indoorSolutions.descriptions.employeeSafety"),
      icon: <ShieldCheck className="h-10 w-10 text-turna-500" />,
      image: "/assets/images/Lojistik/varlık-takip-d.png",
      imageAlt: t("indoorSolutions.employeeSafety"),
      path: "/cozumler/bina-ici-cozumler/calisan-guvenligi",
    },
    {
      id: 3,
      title: t("indoorSolutions.forkliftTracking"),
      description: t("indoorSolutions.descriptions.forkliftTracking"),
      icon: <HardHat className="h-10 w-10 text-turna-500" />,
      image: "/assets/images/Uretim/forklift-takip-d.png",
      imageAlt: t("indoorSolutions.forkliftTracking"),
      path: "/cozumler/bina-ici-cozumler/forklift-takip",
    },
    {
      id: 4,
      title: t("indoorSolutions.forkliftAccidentPrevention"),
      description: t("indoorSolutions.descriptions.forkliftAccidentPrevention"),
      icon: <ShieldCheck className="h-10 w-10 text-turna-500" />,
      image: "/assets/images/Lojistik/Forklift-Kaza-onleme-d.png",
      imageAlt: t("indoorSolutions.forkliftAccidentPrevention"),
      path: "/cozumler/bina-ici-cozumler/forklift-kaza-onleme",
    },
    {
      id: 5,
      title: t("indoorSolutions.assetTracking"),
      description: t("indoorSolutions.descriptions.assetTracking"),
      icon: <Package className="h-10 w-10 text-turna-500" />,
      image: "/assets/images/Hastane/hastane-varlık-takip-dikdortgen.png",
      imageAlt: t("indoorSolutions.assetTracking"),
      path: "/cozumler/bina-ici-cozumler/varlik-takibi",
    },
    {
      id: 6,
      title: t("indoorSolutions.personnelTracking"),
      description: t("indoorSolutions.descriptions.personnelTracking"),
      icon: <Users className="h-10 w-10 text-turna-500" />,
      image: "/assets/images/Uretim/personel-takip-d.png",
      imageAlt: t("indoorSolutions.personnelTracking"),
      path: "/cozumler/bina-ici-cozumler/personel-takibi",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-4 text-gray-800">
            {t("indoorSolutions.title")}
          </h2>
          <div className="w-16 h-1 bg-turna-500 mb-6"></div>
          <p className="text-lg text-gray-600 mb-12">
            {t("solutions.indoorDescription") ||
              "İç mekan konumlandırma ve takip sistemleri ile bina içi operasyonlarınızı optimize edin"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {internalSolutions.map((solution) => (
              <Link href={solution.path} key={solution.id} className="group">
                <Card className="h-full overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-[4/3] relative">
                    <Image
                      fill
                      src={solution.image}
                      alt={solution.imageAlt}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {solution.icon}
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-turna-600 transition-colors">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{solution.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalSolutionsSection;
