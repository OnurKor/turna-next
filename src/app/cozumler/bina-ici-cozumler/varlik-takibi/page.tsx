
import { Package, Boxes, Search, Bell, Clock, BarChart } from '@/lib/icons';
import SolutionPageLayout from '@/components/solutions/SolutionPageLayout';
import { useTranslations } from 'next-intl';

const AssetTracking = () => {
  const t = useTranslations();

  const features = [
    {
      icon: <Package className="h-6 w-6" />,
      title: t('assetTracking.features.realTimeTracking'),
      description: t('assetTracking.features.realTimeTrackingDesc')
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: t('assetTracking.features.alarmNotifications'),
      description: t('assetTracking.features.alarmNotificationsDesc')
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('assetTracking.features.movementHistory'),
      description: t('assetTracking.features.movementHistoryDesc')
    },
    {
      icon: <Boxes className="h-6 w-6" />,
      title: t('assetTracking.features.inventoryManagement'),
      description: t('assetTracking.features.inventoryManagementDesc')
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: t('assetTracking.features.quickSearch'),
      description: t('assetTracking.features.quickSearchDesc')
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: t('assetTracking.features.dataAnalytics'),
      description: t('assetTracking.features.dataAnalyticsDesc')
    }
  ];

  const useCases = [
    {
      title: t('assetTracking.useCases.logistics'),
      description: t('assetTracking.useCases.logisticsDesc'),
      image: '/assets/images/Lojistik/varlık-takip-d.png'
    },
    {
      title: t('assetTracking.useCases.manufacturing'),
      description: t('assetTracking.useCases.manufacturingDesc'),
      image: '/assets/images/Uretim/varlık-takip-d.png'
    },
    {
      title: t('assetTracking.useCases.healthcare'),
      description: t('assetTracking.useCases.healthcareDesc'),
      image: '/assets/images/Hastane/hastane-konum-takip-dikortgen.png'
    },
    {
      title: t('assetTracking.useCases.construction'),
      description: t('assetTracking.useCases.constructionDesc'),
      image: '/assets/images/Hastane/personel-takip-dikdortgen.png'
    },
    {
      title: t('assetTracking.useCases.retail'),
      description: t('assetTracking.useCases.retailDesc'),
      image: '/assets/images/Eglence/varlık-takip-d.png'
    },
    {
      title: t('assetTracking.useCases.education'),
      description: t('assetTracking.useCases.educationDesc'),
      image: '/assets/images/Guvenlik/konum-d.png'
    }
  ];

  const benefits = [
    {
      title: t('assetTracking.benefits.costReduction'),
      description: t('assetTracking.benefits.costReductionDesc')
    },
    {
      title: t('assetTracking.benefits.efficiency'),
      description: t('assetTracking.benefits.efficiencyDesc')
    },
    {
      title: t('assetTracking.benefits.maintenance'),
      description: t('assetTracking.benefits.maintenanceDesc')
    },
    {
      title: t('assetTracking.benefits.audit'),
      description: t('assetTracking.benefits.auditDesc')
    }
  ];

  return (
    <SolutionPageLayout
      title={t('assetTracking.title')}
      subtitle={t('assetTracking.subtitle')}
      description={t('assetTracking.description')}
      heroImage="/assets/images/Hastane/hastane-varlık-takip-dikdortgen.png"
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default AssetTracking;
