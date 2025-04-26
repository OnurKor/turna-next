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
    {
      title: t('securitySolutions.useCases.industrial'),
      description: t('securitySolutions.useCases.industrialDesc'),
      image: 'https://images.unsplash.com/photo-1513828826944-a3c11205f95a?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('securitySolutions.useCases.healthcare'),
      description: t('securitySolutions.useCases.healthcareDesc'),
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('securitySolutions.useCases.education'),
      description: t('securitySolutions.useCases.educationDesc'),
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('securitySolutions.useCases.commercial'),
      description: t('securitySolutions.useCases.commercialDesc'),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('securitySolutions.useCases.government'),
      description: t('securitySolutions.useCases.governmentDesc'),
      image: 'https://images.unsplash.com/photo-1523539333365-83d7c44c6ab8?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('securitySolutions.useCases.events'),
      description: t('securitySolutions.useCases.eventsDesc'),
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000'
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
      heroImage="https://images.unsplash.com/photo-1571310100246-e0676f359b42?auto=format&fit=crop&q=80&w=2000"
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default SecuritySolutions;
