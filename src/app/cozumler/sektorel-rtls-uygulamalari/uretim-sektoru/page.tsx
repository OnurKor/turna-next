import { Factory, Cog, ClipboardCheck, Users, PieChart, Bot } from '@/lib/icons';
import SolutionPageLayout from "@/components/solutions/SolutionPageLayout";
import { useTranslations } from 'next-intl';

const ManufacturingSolutions = () => {
  const t = useTranslations();

  const features = [
    {
      icon: <Factory className="h-6 w-6" />,
      title: t('manufacturingSolutions.features.productionOptimization'),
      description: t('manufacturingSolutions.features.productionOptimizationDesc')
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: t('manufacturingSolutions.features.assetManagement'),
      description: t('manufacturingSolutions.features.assetManagementDesc')
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: t('manufacturingSolutions.features.qualityControl'),
      description: t('manufacturingSolutions.features.qualityControlDesc')
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('manufacturingSolutions.features.workforceTracking'),
      description: t('manufacturingSolutions.features.workforceTrackingDesc')
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: t('manufacturingSolutions.features.dataAnalytics'),
      description: t('manufacturingSolutions.features.dataAnalyticsDesc')
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: t('manufacturingSolutions.features.automationIntegration'),
      description: t('manufacturingSolutions.features.automationIntegrationDesc')
    }
  ];

  const useCases = [
    // {
    //   title: t('manufacturingSolutions.useCases.automotive'),
    //   description: t('manufacturingSolutions.useCases.automotiveDesc'),
    //   image: "https://images.unsplash.com/photo-1537041373723-5e99254996d8?auto=format&fit=crop&q=80&w=2000"
    // },
    {
      title: t('manufacturingSolutions.useCases.electronics'),
      description: t('manufacturingSolutions.useCases.electronicsDesc'),
      image: "/assets/images/Uretim/varlık-takip-d.png"
    },
    {
      title: t('manufacturingSolutions.useCases.foodProcessing'),
      description: t('manufacturingSolutions.useCases.foodProcessingDesc'),
      image: "/assets/images/Eglence/personel-takip-d.png"
    },
    // {
    //   title: t('manufacturingSolutions.useCases.pharmaceutical'),
    //   description: t('manufacturingSolutions.useCases.pharmaceuticalDesc'),
    //   image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=2000"
    // },
    // {
    //   title: t('manufacturingSolutions.useCases.aerospace'),
    //   description: t('manufacturingSolutions.useCases.aerospaceDesc'),
    //   image: "https://images.unsplash.com/photo-1518162766821-14cb695d7e2b?auto=format&fit=crop&q=80&w=2000"
    // },
    {
      title: t('manufacturingSolutions.useCases.heavyIndustry'),
      description: t('manufacturingSolutions.useCases.heavyIndustryDesc'),
      image: "/assets/images/Uretim/konum-d.png"
    }
  ];

  const benefits = [
    {
      title: t('manufacturingSolutions.benefits.productivity'),
      description: t('manufacturingSolutions.benefits.productivityDesc')
    },
    {
      title: t('manufacturingSolutions.benefits.quality'),
      description: t('manufacturingSolutions.benefits.qualityDesc')
    },
    {
      title: t('manufacturingSolutions.benefits.safety'),
      description: t('manufacturingSolutions.benefits.safetyDesc')
    },
    {
      title: t('manufacturingSolutions.benefits.costReduction'),
      description: t('manufacturingSolutions.benefits.costReductionDesc')
    }
  ];

  return (
    <SolutionPageLayout
      title={t('manufacturingSolutions.title')}
      subtitle={t('manufacturingSolutions.subtitle')}
      description={t('manufacturingSolutions.description')}
      heroImage="/assets/images/Uretim/varlık-takip-d.png"
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default ManufacturingSolutions;
