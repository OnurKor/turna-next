import { MapPin, Gauge, ArrowDown, ShieldAlert, ChevronRight, Navigation } from '@/lib/icons';
import SolutionPageLayout from '@/components/solutions/SolutionPageLayout';
import { useTranslations } from 'next-intl';

const ForkliftTracking = () => {
  const t = useTranslations();

  const features = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t('forkliftTracking.features.preciseLocation'),
      description: t('forkliftTracking.features.preciseLocationDesc')
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: t('forkliftTracking.features.speedControl'),
      description: t('forkliftTracking.features.speedControlDesc')
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: t('forkliftTracking.features.collisionPrevention'),
      description: t('forkliftTracking.features.collisionPreventionDesc')
    },
    {
      icon: <Navigation className="h-6 w-6" />,
      title: t('forkliftTracking.features.realTimeTracking'),
      description: t('forkliftTracking.features.realTimeTrackingDesc')
    },
    {
      icon: <ArrowDown className="h-6 w-6" />,
      title: t('forkliftTracking.features.accidentReduction'),
      description: t('forkliftTracking.features.accidentReductionDesc')
    },
    {
      icon: <ChevronRight className="h-6 w-6" />,
      title: t('forkliftTracking.features.efficiencyAnalysis'),
      description: t('forkliftTracking.features.efficiencyAnalysisDesc')
    }
  ];

  const useCases = [
    {
      title: t('forkliftTracking.useCases.manufacturing'),
      description: t('forkliftTracking.useCases.manufacturingDesc'),
      image: 'https://images.unsplash.com/photo-1578094695322-8293a5950b1a?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('forkliftTracking.useCases.logistics'),
      description: t('forkliftTracking.useCases.logisticsDesc'),
      image: 'https://images.unsplash.com/photo-1566861629571-254c66e58190?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('forkliftTracking.useCases.ports'),
      description: t('forkliftTracking.useCases.portsDesc'),
      image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=2000'
    }
  ];

  return (
    <SolutionPageLayout
      title={t('forkliftTracking.title')}
      subtitle={t('forkliftTracking.subtitle')}
      description={t('forkliftTracking.description')}
      heroImage="https://images.unsplash.com/photo-1640096689572-3ad08f3a02b0?auto=format&fit=crop&q=80&w=2000"
      features={features}
      useCases={useCases}
    />
  );
};

export default ForkliftTracking;
