import { Camera, Bot, AlarmCheck, Eye, ShieldAlert, Shield } from '@/lib/icons';
import SolutionPageLayout from '@/components/solutions/SolutionPageLayout';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forklift Kaza Önleme | Yapay Zeka Destekli Güvenlik Çözümleri',
  description: 'Yapay zeka destekli kamera sistemleri ile forklift ve ekipman çarpışmalarını önleyin. Gerçek zamanlı nesne algılama, otomatik frenleme ve önleyici güvenlik çözümleriyle iş güvenliğinizi artırın.',
};

const ForkliftAccidentPrevention = () => {
  const t = useTranslations();

  const features = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: t('forkliftAccidentPrevention.features.smartCamera'),
      description: t('forkliftAccidentPrevention.features.smartCameraDesc')
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: t('forkliftAccidentPrevention.features.aiAnalysis'),
      description: t('forkliftAccidentPrevention.features.aiAnalysisDesc')
    },
    {
      icon: <AlarmCheck className="h-6 w-6" />,
      title: t('forkliftAccidentPrevention.features.instantIntervention'),
      description: t('forkliftAccidentPrevention.features.instantInterventionDesc')
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: t('forkliftAccidentPrevention.features.objectDetection'),
      description: t('forkliftAccidentPrevention.features.objectDetectionDesc')
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: t('forkliftAccidentPrevention.features.preventiveSafety'),
      description: t('forkliftAccidentPrevention.features.preventiveSafetyDesc')
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t('forkliftAccidentPrevention.features.accidentReduction'),
      description: t('forkliftAccidentPrevention.features.accidentReductionDesc')
    }
  ];

  const useCases = [
    {
      title: t('forkliftAccidentPrevention.useCases.warehouses'),
      description: t('forkliftAccidentPrevention.useCases.warehousesDesc'),
      image: 'https://images.unsplash.com/photo-1621956838481-f8f616950454?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('forkliftAccidentPrevention.useCases.manufacturing'),
      description: t('forkliftAccidentPrevention.useCases.manufacturingDesc'),
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=2000'
    },
    {
      title: t('forkliftAccidentPrevention.useCases.construction'),
      description: t('forkliftAccidentPrevention.useCases.constructionDesc'),
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=2000'
    }
  ];

  return (
    <SolutionPageLayout
      title={t('forkliftAccidentPrevention.title')}
      subtitle={t('forkliftAccidentPrevention.subtitle')}
      description={t('forkliftAccidentPrevention.description')}
      heroImage="https://images.unsplash.com/photo-1533631378152-eefcc353bb43?auto=format&fit=crop&q=80&w=2000"
      features={features}
      useCases={useCases}
    />
  );
};

export default ForkliftAccidentPrevention;