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
    {
      title: t('manufacturingSolutions.useCases.automotive'),
      description: t('manufacturingSolutions.useCases.automotiveDesc'),
      image: "https://images.unsplash.com/photo-1537041373723-5e99254996d8?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('manufacturingSolutions.useCases.electronics'),
      description: t('manufacturingSolutions.useCases.electronicsDesc'),
      image: "https://images.unsplash.com/photo-1597774292748-ffa734f7bf64?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('manufacturingSolutions.useCases.foodProcessing'),
      description: t('manufacturingSolutions.useCases.foodProcessingDesc'),
      image: "https://images.unsplash.com/photo-1525598912003-663126343e1f?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('manufacturingSolutions.useCases.pharmaceutical'),
      description: t('manufacturingSolutions.useCases.pharmaceuticalDesc'),
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('manufacturingSolutions.useCases.aerospace'),
      description: t('manufacturingSolutions.useCases.aerospaceDesc'),
      image: "https://images.unsplash.com/photo-1518162766821-14cb695d7e2b?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('manufacturingSolutions.useCases.heavyIndustry'),
      description: t('manufacturingSolutions.useCases.heavyIndustryDesc'),
      image: "https://images.unsplash.com/photo-1602521879205-88d9fa8a8e58?auto=format&fit=crop&q=80&w=2000"
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
      heroImage="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=2000"
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default ManufacturingSolutions;
