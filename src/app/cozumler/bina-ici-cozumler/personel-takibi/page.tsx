import { User, Bell, MapPin, Clock, Shield, Activity } from '@/lib/icons';
import { useTranslations } from 'next-intl';
import SolutionPageLayout from '@/components/solutions/SolutionPageLayout';

const PersonnelTracking = () => {
  const t = useTranslations();

  const features = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t('personnelTracking.features.realTimeLocation'),
      description: t('personnelTracking.features.realTimeLocationDesc')
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('personnelTracking.features.timeAnalysis'),
      description: t('personnelTracking.features.timeAnalysisDesc')
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: t('personnelTracking.features.emergencyNotifications'),
      description: t('personnelTracking.features.emergencyNotificationsDesc')
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: t('personnelTracking.features.efficiencyReports'),
      description: t('personnelTracking.features.efficiencyReportsDesc')
    },
    {
      icon: <User className="h-6 w-6" />,
      title: t('personnelTracking.features.preciseLocation'),
      description: t('personnelTracking.features.preciseLocationDesc')
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t('personnelTracking.features.emergencyResponse'),
      description: t('personnelTracking.features.emergencyResponseDesc')
    }
  ];

  const useCases = [
    {
      title: t('personnelTracking.useCases.manufacturing'),
      description: t('personnelTracking.useCases.manufacturingDesc'),
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('personnelTracking.useCases.hospitals'),
      description: t('personnelTracking.useCases.hospitalsDesc'),
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('personnelTracking.useCases.warehouses'),
      description: t('personnelTracking.useCases.warehousesDesc'),
      image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('personnelTracking.useCases.offices'),
      description: t('personnelTracking.useCases.officesDesc'),
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000'
    }
  ];

  const technicalDetails = [
    t('personnelTracking.techDetails.1'),
    t('personnelTracking.techDetails.2'),
    t('personnelTracking.techDetails.3'),
    t('personnelTracking.techDetails.4'),
    t('personnelTracking.techDetails.5'),
    t('personnelTracking.techDetails.6'),
    t('personnelTracking.techDetails.7'),
    t('personnelTracking.techDetails.8')
  ];

  return (
    <SolutionPageLayout
      title={t('personnelTracking.title')}
      subtitle={t('personnelTracking.subtitle')}
      description={t('personnelTracking.description')}
      heroImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=600"
      features={features}
      useCases={useCases}
      technicalDetails={technicalDetails}
    />
  );
};

export default PersonnelTracking;
