
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
      image: "/assets/images/Hastane/hastane-konum-takip-dikortgen.png"
    },
    {
      title: t('indoorNavigation.useCaseShoppingMalls'),
      description: t('indoorNavigation.useCaseShoppingMallsDesc'),
      image: "/assets/images/Eglence/varlık-takip-d.png"
    },
    {
      title: t('indoorNavigation.useCaseAirports'),
      description: t('indoorNavigation.useCaseAirportsDesc'),
      image: "/assets/images/Guvenlik/konum-d.png"
    },
    {
      title: t('indoorNavigation.useCaseFactories'),
      description: t('indoorNavigation.useCaseFactoriesDesc'),
      image: "/assets/images/Uretim/konum-d.png"
    },
    {
      title: t('indoorNavigation.useCaseCampuses'),
      description: t('indoorNavigation.useCaseCampusesDesc'),
      image: "/assets/images/Guvenlik/konum-d.png"
    },
    {
      title: t('indoorNavigation.useCaseOffices'),
      description: t('indoorNavigation.useCaseOfficesDesc'),
      image: "/assets/images/Guvenlik/personel-takip-d.png"
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
      heroImage="/assets/images/Lojistik/personel-takip-d.png"
      features={features}
      useCases={useCases}
      technicalDetails={technicalDetails}
    />
  );
};

export default IndoorNavigation;

