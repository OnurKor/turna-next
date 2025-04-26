
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
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('assetTracking.useCases.manufacturing'),
      description: t('assetTracking.useCases.manufacturingDesc'),
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('assetTracking.useCases.healthcare'),
      description: t('assetTracking.useCases.healthcareDesc'),
      image: 'https://images.unsplash.com/photo-1516549655669-df51a1e12b35?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('assetTracking.useCases.construction'),
      description: t('assetTracking.useCases.constructionDesc'),
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('assetTracking.useCases.retail'),
      description: t('assetTracking.useCases.retailDesc'),
      image: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('assetTracking.useCases.education'),
      description: t('assetTracking.useCases.educationDesc'),
      image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&q=80&w=2000'
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
      heroImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000"
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default AssetTracking;
