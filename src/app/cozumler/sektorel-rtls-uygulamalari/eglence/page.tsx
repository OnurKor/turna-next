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
    // {
    //   title: t('entertainmentSolutions.useCases.themeparks'),
    //   description: t('entertainmentSolutions.useCases.themeparksDesc'),
    //   image: "/assets/images/Eglence/konum-takip-d.png"
    // },
    {
      title: t('entertainmentSolutions.useCases.museums'),
      description: t('entertainmentSolutions.useCases.museumsDesc'),
      image: "/assets/images/Eglence/varlık-takip-d.png"
    },
    {
      title: t('entertainmentSolutions.useCases.concerts'),
      description: t('entertainmentSolutions.useCases.concertsDesc'),
      image: "/assets/images/Eglence/konum-takip-d.png"
    },
    {
      title: t('entertainmentSolutions.useCases.stadiums'),
      description: t('entertainmentSolutions.useCases.stadiumsDesc'),
      image: "/assets/images/Eglence/konum-takip-d.png"
    },
    // {
    //   title: t('entertainmentSolutions.useCases.casinos'),
    //   description: t('entertainmentSolutions.useCases.casinosDesc'),
    //   image: "/assets/images/Eglence/konum-takip-d.png"
    // },
    // {
    //   title: t('entertainmentSolutions.useCases.festivals'),
    //   description: t('entertainmentSolutions.useCases.festivalsDesc'),
    //   image: "/assets/images/Eglence/konum-takip-d.png"
    // }
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
      heroImage="/assets/images/Eglence/konum-takip-d.png"
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default EntertainmentSolutions;
