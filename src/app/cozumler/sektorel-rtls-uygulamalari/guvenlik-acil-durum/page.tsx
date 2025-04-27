import { Shield, BellRing, Map, UserCheck, Clock, AlertTriangle } from '@/lib/icons';
import { useTranslations } from 'next-intl';
import SolutionPageLayout from '@/components/solutions/SolutionPageLayout';

const SecuritySolutions = () => {
  const t = useTranslations();

  const features = [
    {
      icon: <Map className="h-6 w-6" />,
      title: t('securitySolutions.features.realTimeMonitoring'),
      description: t('securitySolutions.features.monitoringDesc')
    },
    {
      icon: <BellRing className="h-6 w-6" />,
      title: t('securitySolutions.features.alertSystem'),
      description: t('securitySolutions.features.alertDesc')
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t('securitySolutions.features.accessControl'),
      description: t('securitySolutions.features.accessDesc')
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: t('securitySolutions.features.personnelSafety'),
      description: t('securitySolutions.features.safetyDesc')
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('securitySolutions.features.responseTime'),
      description: t('securitySolutions.features.responseDesc')
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: t('securitySolutions.features.emergencyManagement'),
      description: t('securitySolutions.features.emergencyDesc')
    }
  ];

  const useCases = [
    // {
    //   title: t('securitySolutions.useCases.industrial'),
    //   description: t('securitySolutions.useCases.industrialDesc'),
    //   image: '/assets/images/Guvenlik/konum-d.png'
    // },
    {
      title: t('securitySolutions.useCases.healthcare'),
      description: t('securitySolutions.useCases.healthcareDesc'),
      image: 'public/assets/images/Guvenlik/varlık-takip-d.png'
    },
    {
      title: t('securitySolutions.useCases.education'),
      description: t('securitySolutions.useCases.educationDesc'),
      image: '/assets/images/Guvenlik/konum-d.png'
    },
    // {
    //   title: t('securitySolutions.useCases.commercial'),
    //   description: t('securitySolutions.useCases.commercialDesc'),
    //   image: '/assets/images/Guvenlik/personel-takip-d.png'
    // },
    // {
    //   title: t('securitySolutions.useCases.government'),
    //   description: t('securitySolutions.useCases.governmentDesc'),
    //   image: 'public/assets/images/Guvenlik/varlık-takip-d.png'
    // },
    {
      title: t('securitySolutions.useCases.events'),
      description: t('securitySolutions.useCases.eventsDesc'),
      image: '/assets/images/Guvenlik/personel-takip-d.png'
    }
  ];

  const benefits = [
    {
      title: t('securitySolutions.benefits.prevention'),
      description: t('securitySolutions.benefits.preventionDesc')
    },
    {
      title: t('securitySolutions.benefits.response'),
      description: t('securitySolutions.benefits.responseDesc')
    },
    {
      title: t('securitySolutions.benefits.compliance'),
      description: t('securitySolutions.benefits.complianceDesc')
    },
    {
      title: t('securitySolutions.benefits.insurance'),
      description: t('securitySolutions.benefits.insuranceDesc')
    }
  ];

  return (
    <SolutionPageLayout
      title={t('securitySolutions.title')}
      subtitle={t('securitySolutions.subtitle')}
      description={t('securitySolutions.description')}
      heroImage="/assets/images/Guvenlik/varlık-takip-d.png"
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default SecuritySolutions;
