import { Music, MapPin, User, DollarSign, ThumbsUp, Heart } from '@/lib/icons';
import { useTranslations } from 'next-intl';
import SolutionPageLayout from '@/components/solutions/SolutionPageLayout';

const EntertainmentSolutions = () => {
  const t = useTranslations();

  const features = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t('entertainmentSolutions.features.indoorNavigation'),
      description: t('entertainmentSolutions.features.navigationDesc')
    },
    {
      icon: <User className="h-6 w-6" />,
      title: t('entertainmentSolutions.features.crowdManagement'),
      description: t('entertainmentSolutions.features.crowdDesc')
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: t('entertainmentSolutions.features.ticketing'),
      description: t('entertainmentSolutions.features.ticketingDesc')
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: t('entertainmentSolutions.features.experience'),
      description: t('entertainmentSolutions.features.experienceDesc')
    },
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      title: t('entertainmentSolutions.features.analytics'),
      description: t('entertainmentSolutions.features.analyticsDesc')
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: t('entertainmentSolutions.features.loyalty'),
      description: t('entertainmentSolutions.features.loyaltyDesc')
    }
  ];

  const useCases = [
    {
      title: t('entertainmentSolutions.useCases.themeparks'),
      description: t('entertainmentSolutions.useCases.themeparksDesc'),
      image: "https://images.unsplash.com/photo-1576497564495-f16487adba66?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('entertainmentSolutions.useCases.museums'),
      description: t('entertainmentSolutions.useCases.museumsDesc'),
      image: "https://images.unsplash.com/photo-1524354275262-e21a3ff70e6b?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('entertainmentSolutions.useCases.concerts'),
      description: t('entertainmentSolutions.useCases.concertsDesc'),
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('entertainmentSolutions.useCases.stadiums'),
      description: t('entertainmentSolutions.useCases.stadiumsDesc'),
      image: "https://images.unsplash.com/photo-1577223625816-6e79d78ffd63?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('entertainmentSolutions.useCases.casinos'),
      description: t('entertainmentSolutions.useCases.casinosDesc'),
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('entertainmentSolutions.useCases.festivals'),
      description: t('entertainmentSolutions.useCases.festivalsDesc'),
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  const benefits = [
    {
      title: t('entertainmentSolutions.benefits.experience'),
      description: t('entertainmentSolutions.benefits.experienceDesc')
    },
    {
      title: t('entertainmentSolutions.benefits.revenue'),
      description: t('entertainmentSolutions.benefits.revenueDesc')
    },
    {
      title: t('entertainmentSolutions.benefits.operations'),
      description: t('entertainmentSolutions.benefits.operationsDesc')
    },
    {
      title: t('entertainmentSolutions.benefits.safety'),
      description: t('entertainmentSolutions.benefits.safetyDesc')
    }
  ];

  return (
    <SolutionPageLayout
      title={t('entertainmentSolutions.title')}
      subtitle={t('entertainmentSolutions.subtitle')}
      description={t('entertainmentSolutions.description')}
      heroImage="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=2000"
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default EntertainmentSolutions;
