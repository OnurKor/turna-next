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
      image: '/assets/images/Uretim/personel-takip-d.png'
    },
    {
      title: t('personnelTracking.useCases.hospitals'),
      description: t('personnelTracking.useCases.hospitalsDesc'),
      image: '/assets/images/Hastane/hastane-konum-takip-dikortgen.png'
    },
    {
      title: t('personnelTracking.useCases.warehouses'),
      description: t('personnelTracking.useCases.warehousesDesc'),
      image: '/assets/images/Lojistik/personel-takip-d.png'
    },
    {
      title: t('personnelTracking.useCases.offices'),
      description: t('personnelTracking.useCases.officesDesc'),
      image: '/assets/images/Guvenlik/personel-takip-d.png'
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
      heroImage="/assets/images/Uretim/personel-takip-d.png"
      features={features}
      useCases={useCases}
      technicalDetails={technicalDetails}
    />
  );
};

export default PersonnelTracking;
