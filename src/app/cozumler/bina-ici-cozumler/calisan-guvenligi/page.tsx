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
      image: "https://images.unsplash.com/photo-1595824828155-75229c158563?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('employeeSafety.useCasesTypes.construction'),
      description: t('employeeSafety.useCasesTypes.constructionDesc'),
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('employeeSafety.useCasesTypes.chemicalIndustry'),
      description: t('employeeSafety.useCasesTypes.chemicalIndustryDesc'),
      image: "https://images.unsplash.com/photo-1626315869532-78ec0f0aab26?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('employeeSafety.useCasesTypes.oilAndGas'),
      description: t('employeeSafety.useCasesTypes.oilAndGasDesc'),
      image: "https://images.unsplash.com/photo-1580800273261-aea4176649a7?auto=format&fit=crop&q=80&w=2000"
    }
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
      heroImage="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=800&h=600"
      features={features}
      useCases={useCases}
      technicalDetails={technicalDetails}
    />
  );
};

export default EmployeeSafety;
