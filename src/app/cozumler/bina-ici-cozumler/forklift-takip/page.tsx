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
      image: '/assets/images/Uretim/konum-d.png'
    },
    {
      title: t('forkliftTracking.useCases.logistics'),
      description: t('forkliftTracking.useCases.logisticsDesc'),
      image: '/assets/images/Lojistik/konum-takip-d.png'
    },
    {
      title: t('forkliftTracking.useCases.ports'),
      description: t('forkliftTracking.useCases.portsDesc'),
      image: '/assets/images/Lojistik/varlık-takip-d.png'
    }
  ];

  return (
    <SolutionPageLayout
      title={t('forkliftTracking.title')}
      subtitle={t('forkliftTracking.subtitle')}
      description={t('forkliftTracking.description')}
      heroImage="/assets/images/Uretim/forklift-takip-d.png"
      features={features}
      useCases={useCases}
    />
  );
};

export default ForkliftTracking;
