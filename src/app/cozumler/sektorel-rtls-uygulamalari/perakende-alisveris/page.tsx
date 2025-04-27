import { ShoppingCart, MapPin, BarChart3, DollarSign, Users, ThumbsUp } from "lucide-react";
import { useTranslations } from "next-intl";
import SolutionPageLayout from "@/components/solutions/SolutionPageLayout";

const RetailShopping = () => {
  const t = useTranslations();

  const features = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t("retailShopping.features.indoorNavigation"),
      description: t("retailShopping.features.navigationDesc"),
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: t("retailShopping.features.smartShopping"),
      description: t("retailShopping.features.smartShoppingDesc"),
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: t("retailShopping.features.analytics"),
      description: t("retailShopping.features.analyticsDesc"),
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: t("retailShopping.features.conversion"),
      description: t("retailShopping.features.conversionDesc"),
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t("retailShopping.features.staffing"),
      description: t("retailShopping.features.staffingDesc"),
    },
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      title: t("retailShopping.features.loyalty"),
      description: t("retailShopping.features.loyaltyDesc"),
    },
  ];

  const useCases = [
    // {
    //   title: t("retailShopping.useCases.department"),
    //   description: t("retailShopping.useCases.departmentDesc"),
    //   image: "/assets/images/Eglence/personel-takip-d.png",
    // },
    {
      title: t("retailShopping.useCases.supermarket"),
      description: t("retailShopping.useCases.supermarketDesc"),
      image: "/assets/images/Eglence/personel-takip-d.png",
    },
    {
      title: t("retailShopping.useCases.mall"),
      description: t("retailShopping.useCases.mallDesc"),
      image: "/assets/images/Eglence/varlık-takip-d.png",
    },
    // {
    //   title: t("retailShopping.useCases.luxury"),
    //   description: t("retailShopping.useCases.luxuryDesc"),
    //   image: "/assets/images/Eglence/personel-takip-d.png",
    // },
    {
      title: t("retailShopping.useCases.electronics"),
      description: t("retailShopping.useCases.electronicsDesc"),
      image: "/assets/images/Eglence/konum-takip-d.png",
    },
    // {
    //   title: t("retailShopping.useCases.popup"),
    //   description: t("retailShopping.useCases.popupDesc"),
    //   image: "/assets/images/Eglence/personel-takip-d.png",
    // },
  ];

  const benefits = [
    {
      title: t("retailShopping.benefits.revenue"),
      description: t("retailShopping.benefits.revenueDesc"),
    },
    {
      title: t("retailShopping.benefits.experience"),
      description: t("retailShopping.benefits.experienceDesc"),
    },
    {
      title: t("retailShopping.benefits.operations"),
      description: t("retailShopping.benefits.operationsDesc"),
    },
    {
      title: t("retailShopping.benefits.inventory"),
      description: t("retailShopping.benefits.inventoryDesc"),
    },
  ];

  return (
    <SolutionPageLayout
      title={t("retailShopping.title")}
      subtitle={t("retailShopping.subtitle")}
      description={t("retailShopping.description")}
      heroImage="/assets/images/Eglence/personel-takip-d.png"
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default RetailShopping;
