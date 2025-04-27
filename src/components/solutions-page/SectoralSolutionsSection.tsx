import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Hospital, HardHat, Truck, Music, Bell, ShoppingCart } from "@/lib/icons";
import Link from "next/link";
import Image from "next/image";

const SectoralSolutionsSection = () => {
  const t = useTranslations();

  const sectoralSolutions = [
    {
      id: 1,
      title: t("sectoralSolutions.healthcare"),
      description: t("sectoralSolutions.descriptions.healthcare"),
      icon: <Hospital className="h-10 w-10 text-turna-500" />,
      image: "/assets/images/Hastane/hastane-konum-takip-dikortgen.png",
      imageAlt: t("sectoralSolutions.healthcare"),
      path: "/cozumler/sektorel-rtls-uygulamalari/saglik-sektoru",
    },
    {
      id: 2,
      title: t("sectoralSolutions.manufacturing"),
      description: t("sectoralSolutions.descriptions.manufacturing"),
      icon: <HardHat className="h-10 w-10 text-turna-500" />,
      image: "/assets/images/Uretim/varlık-takip-d.png",
      imageAlt: t("sectoralSolutions.manufacturing"),
      path: "/cozumler/sektorel-rtls-uygulamalari/uretim-sektoru",
    },
    {
      id: 3,
      title: t("sectoralSolutions.logistics"),
      description: t("sectoralSolutions.descriptions.logistics"),
      icon: <Truck className="h-10 w-10 text-turna-500" />,
      image: "/assets/images/Lojistik/konum-takip-d.png",
      imageAlt: t("sectoralSolutions.logistics"),
      path: "/cozumler/sektorel-rtls-uygulamalari/lojistik-ve-depolama",
    },
    {
      id: 4,
      title: t("sectoralSolutions.entertainment"),
      description: t("sectoralSolutions.descriptions.entertainment"),
      icon: <Music className="h-10 w-10 text-turna-500" />,
      image: "/assets/images/Eglence/konum-takip-d.png",
      imageAlt: t("sectoralSolutions.entertainment"),
      path: "/cozumler/sektorel-rtls-uygulamalari/eglence",
    },
    {
      id: 5,
      title: t("sectoralSolutions.security"),
      description: t("sectoralSolutions.descriptions.security"),
      icon: <Bell className="h-10 w-10 text-turna-500" />,
      image: "/assets/images/Guvenlik/varlık-takip-d.png",
      imageAlt: t("sectoralSolutions.security"),
      path: "/cozumler/sektorel-rtls-uygulamalari/guvenlik-acil-durum",
    },
    {
      id: 6,
      title: t("sectoralSolutions.retail"),
      description: t("sectoralSolutions.descriptions.retail"),
      icon: <ShoppingCart className="h-10 w-10 text-turna-500" />,
      image: "/assets/images/Eglence/personel-takip-d.png",
      imageAlt: t("sectoralSolutions.retail"),
      path: "/cozumler/sektorel-rtls-uygulamalari/perakende-alisveris",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-4 text-gray-800">
            {t("sectoralSolutions.title")}
          </h2>
          <div className="w-16 h-1 bg-turna-500 mb-6"></div>
          <p className="text-lg text-gray-600 mb-12">
            {t("solutions.sectoralDescription") ||
              "Gerçek zamanlı konum belirleme sistemleri ile farklı sektörlere özel çözümler"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectoralSolutions.map((solution) => (
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

export default SectoralSolutionsSection;
