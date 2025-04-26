
import { MapPin, Navigation, Compass, ArrowDown, Search, Clock } from '@/lib/icons';
import SolutionPageLayout from "@/components/solutions/SolutionPageLayout";
import { useTranslations } from 'next-intl';

const IndoorNavigation = () => {
  const  t  = useTranslations();
  
  const features = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t('indoorNavigation.features.precisePositioning'),
      description: t('indoorNavigation.features.precisePositioningDesc')
    },
    {
      icon: <Navigation className="h-6 w-6" />,
      title: t('indoorNavigation.features.dynamicRouting'),
      description: t('indoorNavigation.features.dynamicRoutingDesc')
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: t('indoorNavigation.features.navigation3D'),
      description: t('indoorNavigation.features.navigation3DDesc')
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: t('indoorNavigation.features.searchFunctionality'),
      description: t('indoorNavigation.features.searchFunctionalityDesc')
    },
    {
      icon: <ArrowDown className="h-6 w-6" />,
      title: t('indoorNavigation.features.multiFloor'),
      description: t('indoorNavigation.features.multiFloorDesc')
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('indoorNavigation.features.realTime'),
      description: t('indoorNavigation.features.realTimeDesc')
    }
  ];
  
  const useCases = [
    {
      title: t('indoorNavigation.useCaseHospitals'),
      description: t('indoorNavigation.useCaseHospitalsDesc'),
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('indoorNavigation.useCaseShoppingMalls'),
      description: t('indoorNavigation.useCaseShoppingMallsDesc'),
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('indoorNavigation.useCaseAirports'),
      description: t('indoorNavigation.useCaseAirportsDesc'),
      image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('indoorNavigation.useCaseFactories'),
      description: t('indoorNavigation.useCaseFactoriesDesc'),
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('indoorNavigation.useCaseCampuses'),
      description: t('indoorNavigation.useCaseCampusesDesc'),
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: t('indoorNavigation.useCaseOffices'),
      description: t('indoorNavigation.useCaseOfficesDesc'),
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
    }
  ];
  
  const technicalDetails = [
    t('indoorNavigation.techFeature1'),
    t('indoorNavigation.techFeature2'),
    t('indoorNavigation.techFeature3'),
    t('indoorNavigation.techFeature4'),
    t('indoorNavigation.techFeature5')
  ];

  return (
    <SolutionPageLayout
      title={t('indoorNavigation.title')}
      subtitle={t('indoorNavigation.subtitle')}
      description={t('indoorNavigation.offerDescription')}
      heroImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000"
      features={features}
      useCases={useCases}
      technicalDetails={technicalDetails}
    />
  );
};

export default IndoorNavigation;

