import { Heart, Stethoscope, ClipboardList, UserCheck, Timer, PersonStanding } from '@/lib/icons';
import SolutionPageLayout from "@/components/solutions/SolutionPageLayout";
import { useTranslations } from 'next-intl';

const HealthcareSolutions = () => {
  const t = useTranslations();

  const features = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: t('healthcareSolutions.features.assetTracking'),
      description: t('healthcareSolutions.features.assetTrackingDesc')
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: t('healthcareSolutions.features.patientMonitoring'),
      description: t('healthcareSolutions.features.patientMonitoringDesc')
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: t('healthcareSolutions.features.workflowOptimization'),
      description: t('healthcareSolutions.features.workflowOptimizationDesc')
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: t('healthcareSolutions.features.staffManagement'),
      description: t('healthcareSolutions.features.staffManagementDesc')
    },
    {
      icon: <Timer className="h-6 w-6" />,
      title: t('healthcareSolutions.features.waitTimeReduction'),
      description: t('healthcareSolutions.features.waitTimeReductionDesc')
    },
    {
      icon: <PersonStanding className="h-6 w-6" />,
      title: t('healthcareSolutions.features.dementiaCare'),
      description: t('healthcareSolutions.features.dementiaDesc')
    }
  ];

  const useCases = [
    {
      title: t('healthcareSolutions.useCases.hospitals'),
      description: t('healthcareSolutions.useCases.hospitalsDesc'),
      image: "/assets/images/Hastane/hastane-varlık-takip-dikdortgen.png"
    },
    // {
    //   title: t('healthcareSolutions.useCases.emergencyDepartments'),
    //   description: t('healthcareSolutions.useCases.emergencyDesc'),
    //   image: "/assets/images/Uretim/personel-takip-d.png"
    // },
    {
      title: t('healthcareSolutions.useCases.nursingHomes'),
      description: t('healthcareSolutions.useCases.nursingDesc'),
      image: "/assets/images/Hastane/hastane-konum-takip-dikortgen.png"
    },
    {
      title: t('healthcareSolutions.useCases.laboratories'),
      description: t('healthcareSolutions.useCases.labsDesc'),
      image: "/assets/images/Uretim/personel-takip-d.png"
    },
    // {
    //   title: t('healthcareSolutions.useCases.clinics'),
    //   description: t('healthcareSolutions.useCases.clinicsDesc'),
    //   image: "/assets/images/Hastane/hastane-varlık-takip-dikdortgen.png"
    // },
    // {
    //   title: t('healthcareSolutions.useCases.pharmacies'),
    //   description: t('healthcareSolutions.useCases.pharmaciesDesc'),
    //   image: "/assets/images/Hastane/hastane-konum-takip-dikortgen.png"
    // }
  ];

  const benefits = [
    {
      title: t('healthcareSolutions.benefits.patientCare'),
      description: t('healthcareSolutions.benefits.patientCareDesc')
    },
    {
      title: t('healthcareSolutions.benefits.assetUtilization'),
      description: t('healthcareSolutions.benefits.assetUtilizationDesc')
    },
    {
      title: t('healthcareSolutions.benefits.staffEfficiency'),
      description: t('healthcareSolutions.benefits.staffEfficiencyDesc')
    },
    {
      title: t('healthcareSolutions.benefits.patientSafety'),
      description: t('healthcareSolutions.benefits.patientSafetyDesc')
    }
  ];

  return (
    <SolutionPageLayout
      title={t('healthcareSolutions.title')}
      subtitle={t('healthcareSolutions.subtitle')}
      description={t('healthcareSolutions.description')}
      heroImage="/assets/images/Hastane/hastane-konum-takip-dikortgen.png"
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default HealthcareSolutions;
