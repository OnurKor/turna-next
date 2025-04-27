import { Users, Bell, Clock, ShieldCheck, ShieldAlert, HardHat } from '@/lib/icons';
import SolutionPageLayout from "@/components/solutions/SolutionPageLayout";
import { useTranslations } from 'next-intl';

const EmployeeSafety = () => {
  const  t  = useTranslations();
  
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('employeeSafety.features.realTimeMonitoring'),
      description: t('employeeSafety.features.realTimeMonitoringDesc')
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: t('employeeSafety.features.dangerAlerts'),
      description: t('employeeSafety.features.dangerAlertsDesc')
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('employeeSafety.features.teamManagement'),
      description: t('employeeSafety.features.teamManagementDesc')
    },
    {
      icon: <HardHat className="h-6 w-6" />,
      title: t('employeeSafety.features.wearableTech'),
      description: t('employeeSafety.features.wearableTechDesc')
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: t('employeeSafety.features.preventiveSecurity'),
      description: t('employeeSafety.features.preventiveSecurityDesc')
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: t('employeeSafety.features.realTimeAlarm'),
      description: t('employeeSafety.features.realTimeAlarmDesc')
    }
  ];
  
  const useCases = [
    {
      title: t('employeeSafety.useCasesTypes.mining'),
      description: t('employeeSafety.useCasesTypes.miningDesc'),
      image: "/assets/images/Lojistik/varlık-takip-d.png"
    },
    {
      title: t('employeeSafety.useCasesTypes.construction'),
      description: t('employeeSafety.useCasesTypes.constructionDesc'),
      image: "/assets/images/Hastane/personel-takip-dikdortgen.png"
    },
    {
      title: t('employeeSafety.useCasesTypes.chemicalIndustry'),
      description: t('employeeSafety.useCasesTypes.chemicalIndustryDesc'),
      image: "/assets/images/Uretim/personel-takip-d.png"
    },
    // {
    //   title: t('employeeSafety.useCasesTypes.oilAndGas'),
    //   description: t('employeeSafety.useCasesTypes.oilAndGasDesc'),
    //   image: "/assets/images/Lojistik/varlık-takip-d.png"
    // }
  ];
  
  const technicalDetails = [
    t('employeeSafety.techFeatures.1'),
    t('employeeSafety.techFeatures.2'),
    t('employeeSafety.techFeatures.3'),
    t('employeeSafety.techFeatures.4'),
    t('employeeSafety.techFeatures.5'),
    t('employeeSafety.techFeatures.6')
  ];

  return (
    <SolutionPageLayout
      title={t('employeeSafety.title')}
      subtitle={t('employeeSafety.subtitle')}
      description={t('employeeSafety.description')}
      heroImage="/assets/images/Lojistik/varlık-takip-d.png"
      features={features}
      useCases={useCases}
      technicalDetails={technicalDetails}
    />
  );
};

export default EmployeeSafety;
