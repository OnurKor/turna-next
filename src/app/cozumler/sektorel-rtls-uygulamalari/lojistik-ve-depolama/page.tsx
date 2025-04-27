import {
  Truck,
  Package,
  BarChart,
  Search,
  Clipboard,
  ShoppingBag,
} from "@/lib/icons";
import SolutionPageLayout from "@/components/solutions/SolutionPageLayout";
import { useTranslations } from "next-intl";

const LogisticsSolutions = () => {
  const t = useTranslations();

  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: t("logisticsSolutions.features.fleetManagement"),
      description: t("logisticsSolutions.features.fleetManagementDesc"),
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: t("logisticsSolutions.features.inventoryTracking"),
      description: t("logisticsSolutions.features.inventoryTrackingDesc"),
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: t("logisticsSolutions.features.analytics"),
      description: t("logisticsSolutions.features.analyticsDesc"),
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: t("logisticsSolutions.features.locationFinding"),
      description: t("logisticsSolutions.features.locationFindingDesc"),
    },
    {
      icon: <Clipboard className="h-6 w-6" />,
      title: t("logisticsSolutions.features.pickingOptimization"),
      description: t("logisticsSolutions.features.pickingOptimizationDesc"),
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: t("logisticsSolutions.features.pickAndPack"),
      description: t("logisticsSolutions.features.pickAndPackDesc"),
    },
  ];

  const useCases = [
    {
      title: t("logisticsSolutions.useCases.warehouses"),
      description: t("logisticsSolutions.useCases.warehousesDesc"),
      image: "/assets/images/Lojistik/varlık-takip-d.png",
    },
    // {
    //   title: t('logisticsSolutions.useCases.ecommerce'),
    //   description: t('logisticsSolutions.useCases.ecommerceDesc'),
    //   image: "assets/images/Lojistik/konum-takip-d.png"
    // },
    {
      title: t("logisticsSolutions.useCases.coldChain"),
      description: t("logisticsSolutions.useCases.coldChainDesc"),
      image: "/assets/images/Eglence/personel-takip-d.png",
    },
    {
      title: t("logisticsSolutions.useCases.ports"),
      description: t("logisticsSolutions.useCases.portsDesc"),
      image: "/assets/images/Lojistik/konum-takip-d.png",
    },
    // {
    //   title: t('logisticsSolutions.useCases.3pl'),
    //   description: t('logisticsSolutions.useCases.3plDesc'),
    //   image: "assets/images/Lojistik/konum-takip-d.png"
    // },
    // {
    //   title: t('logisticsSolutions.useCases.crossDocking'),
    //   description: t('logisticsSolutions.useCases.crossDockingDesc'),
    //   image: "assets/images/Lojistik/konum-takip-d.png"
    // }
  ];

  const benefits = [
    {
      title: t("logisticsSolutions.benefits.efficiency"),
      description: t("logisticsSolutions.benefits.efficiencyDesc"),
    },
    {
      title: t("logisticsSolutions.benefits.accuracy"),
      description: t("logisticsSolutions.benefits.accuracyDesc"),
    },
    {
      title: t("logisticsSolutions.benefits.costs"),
      description: t("logisticsSolutions.benefits.costsDesc"),
    },
    {
      title: t("logisticsSolutions.benefits.customerSatisfaction"),
      description: t("logisticsSolutions.benefits.customerSatisfactionDesc"),
    },
  ];

  return (
    <SolutionPageLayout
      title={t("logisticsSolutions.title")}
      subtitle={t("logisticsSolutions.subtitle")}
      description={t("logisticsSolutions.description")}
      heroImage="/assets/images/Lojistik/konum-takip-d.png"
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default LogisticsSolutions;
