import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  ShieldCheck,
  HardHat,
  Package,
  Users,
} from '@/lib/icons';

const InternalSolutionsSection = () => {
  const { t } = useTranslation();

  // Internal RTLS solutions data
  const internalSolutions = [
    {
      id: 1,
      title: t("indoorSolutions.realTimeNavigation"),
      description: t("indoorSolutions.descriptions.realTimeNavigation"),
      icon: <MapPin className="h-10 w-10 text-turna-500" />,
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800",
      fallbackImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
      imageAlt: t("indoorSolutions.realTimeNavigation"),
      path: "/cozumler/bina-ici-cozumler/gercek-zamanli-navigasyon",
    },
    {
      id: 2,
      title: t("indoorSolutions.employeeSafety"),
      description: t("indoorSolutions.descriptions.employeeSafety"),
      icon: <ShieldCheck className="h-10 w-10 text-turna-500" />,
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800",
      fallbackImage:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.triomobil.com%2Ftr%2Fforklift-takibi-ve-emniyeti&psig=AOvVaw0WqHtKg7uBstRka3TbkzAh&ust=1744957384879000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPid__223owDFQAAAAAdAAAAABAd",
      imageAlt: t("indoorSolutions.employeeSafety"),
      path: "/cozumler/bina-ici-cozumler/calisan-guvenligi",
    },
    {
      id: 3,
      title: t("indoorSolutions.forkliftTracking"),
      description: t("indoorSolutions.descriptions.forkliftTracking"),
      icon: <HardHat className="h-10 w-10 text-turna-500" />,
      image:
        "https://www.navbea.com/wp-content/uploads/2021/03/forklift-01-1024x576.jpg",
      fallbackImage:
        "https://www.navbea.com/wp-content/uploads/2020/11/end1.jpg",
      imageAlt: t("indoorSolutions.forkliftTracking"),
      path: "/cozumler/bina-ici-cozumler/forklift-takip",
    },
    {
      id: 4,
      title: t("indoorSolutions.forkliftAccidentPrevention"),
      description: t("indoorSolutions.descriptions.forkliftAccidentPrevention"),
      icon: <ShieldCheck className="h-10 w-10 text-turna-500" />,
      image:
        "https://images.unsplash.com/photo-1495795893300-47ee2ce08f9f?auto=format&fit=crop&w=800",
      fallbackImage:
        "https://images.unsplash.com/photo-1573497701240-345a300b8d36?auto=format&fit=crop&w=800",
      imageAlt: t("indoorSolutions.forkliftAccidentPrevention"),
      path: "/cozumler/bina-ici-cozumler/forklift-kaza-onleme",
    },
    {
      id: 5,
      title: t("indoorSolutions.assetTracking"),
      description: t("indoorSolutions.descriptions.assetTracking"),
      icon: <Package className="h-10 w-10 text-turna-500" />,
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800",
      fallbackImage:
        "https://images.unsplash.com/photo-1473445765800-7329bea3f06a?auto=format&fit=crop&w=800",
      imageAlt: t("indoorSolutions.assetTracking"),
      path: "/cozumler/bina-ici-cozumler/varlik-takibi",
    },
    {
      id: 6,
      title: t("indoorSolutions.personnelTracking"),
      description: t("indoorSolutions.descriptions.personnelTracking"),
      icon: <Users className="h-10 w-10 text-turna-500" />,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800",
      fallbackImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800",
      imageAlt: t("indoorSolutions.personnelTracking"),
      path: "/cozumler/bina-ici-cozumler/personel-takibi",
    },
    // {
    //   id: 7,
    //   title: t('indoorSolutions.smartBuilding') ?? "Akıllı Bina Yönetimi",
    //   description: t('indoorSolutions.descriptions.smartBuilding'),
    //   icon: <Building className="h-10 w-10 text-turna-500" />,
    //   image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800",
    //   fallbackImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
    //   imageAlt: t('indoorSolutions.smartBuilding') ?? "Akıllı Bina Yönetimi",
    //   path: "/cozumler/bina-ici-cozumler/akilli-bina-yonetimi"
    // }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
            {t("indoorSolutions.title")}
          </h2>
          <div className="w-16 h-1 bg-turna-500 mb-6"></div>
          <p className="text-lg text-gray-600 mb-12">
            {t("solutions.indoorDescription") ||
              "İç mekan konumlandırma ve takip sistemleri ile bina içi operasyonlarınızı optimize edin"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internalSolutions.map((solution) => (
              <Link to={solution.path} key={solution.id} className="group">
                <Card className="h-full overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="h-48 bg-cover bg-center relative">
                    <img
                      src={solution.image}
                      alt={solution.imageAlt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          solution.fallbackImage ||
                          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800";
                        e.currentTarget.onerror = null;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      {solution.icon}
                      <h3 className="text-xl font-semibold ml-3 text-gray-800 group-hover:text-turna-600 transition-colors">
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
