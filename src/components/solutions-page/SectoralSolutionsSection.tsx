
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Hospital, HardHat, Truck, Music, Bell, ShoppingCart } from 'lucide-react';

const SectoralSolutionsSection = () => {
  const { t } = useTranslation();

  // Sectoral RTLS applications data
  const sectoralSolutions = [
    {
      id: 1,
      title: t('sectoralSolutions.healthcare'),
      description: t('sectoralSolutions.descriptions.healthcare'),
      icon: <Hospital className="h-10 w-10 text-turna-500" />,
      image: "https://images.unsplash.com/photo-1516549655103-9550d315e2c5?auto=format&fit=crop&w=800",
      fallbackImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800",
      imageAlt: t('sectoralSolutions.healthcare'),
      path: "/cozumler/sektorel-rtls-uygulamalari/saglik-sektoru"
    },
    {
      id: 2,
      title: t('sectoralSolutions.manufacturing'),
      description: t('sectoralSolutions.descriptions.manufacturing'),
      icon: <HardHat className="h-10 w-10 text-turna-500" />,
      image: "https://images.unsplash.com/photo-1581092921461-39b11a63ae62?auto=format&fit=crop&w=800",
      fallbackImage: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=800",
      imageAlt: t('sectoralSolutions.manufacturing'),
      path: "/cozumler/sektorel-rtls-uygulamalari/uretim-sektoru"
    },
    {
      id: 3,
      title: t('sectoralSolutions.logistics'),
      description: t('sectoralSolutions.descriptions.logistics'),
      icon: <Truck className="h-10 w-10 text-turna-500" />,
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800",
      fallbackImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800",
      imageAlt: t('sectoralSolutions.logistics'),
      path: "/cozumler/sektorel-rtls-uygulamalari/lojistik-ve-depolama"
    },
    {
      id: 4,
      title: t('sectoralSolutions.entertainment'),
      description: t('sectoralSolutions.descriptions.entertainment'),
      icon: <Music className="h-10 w-10 text-turna-500" />,
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800",
      fallbackImage: "https://images.unsplash.com/photo-1519619091416-f5d7e5200702?auto=format&fit=crop&w=800",
      imageAlt: t('sectoralSolutions.entertainment'),
      path: "/cozumler/sektorel-rtls-uygulamalari/eglence"
    },
    {
      id: 5,
      title: t('sectoralSolutions.security'),
      description: t('sectoralSolutions.descriptions.security'),
      icon: <Bell className="h-10 w-10 text-turna-500" />,
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800",
      fallbackImage: "https://images.unsplash.com/photo-1503529896844-8e4ce0734120?auto=format&fit=crop&w=800",
      imageAlt: t('sectoralSolutions.security'),
      path: "/cozumler/sektorel-rtls-uygulamalari/guvenlik-acil-durum"
    },
    {
      id: 6,
      title: t('sectoralSolutions.retail'),
      description: t('sectoralSolutions.descriptions.retail'),
      icon: <ShoppingCart className="h-10 w-10 text-turna-500" />,
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800",
      fallbackImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800",
      imageAlt: t('sectoralSolutions.retail'),
      path: "/perakende-alisveris"
    }
  ];
  

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">{t('sectoralSolutions.title')}</h2>
          <div className="w-16 h-1 bg-turna-500 mb-6"></div>
          <p className="text-lg text-gray-600 mb-12">
            {t('solutions.sectoralDescription') || "Gerçek zamanlı konum belirleme sistemleri ile farklı sektörlere özel çözümler"}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectoralSolutions.map((solution) => (
              <Link to={solution.path} key={solution.id} className="group">
                <Card className="h-full overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="h-48 bg-cover bg-center relative">
                    <img 
                      src={solution.image} 
                      alt={solution.imageAlt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = solution.fallbackImage || "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800";
                        e.currentTarget.onerror = null;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      {solution.icon}
                      <h3 className="text-xl font-semibold ml-3 text-gray-800 group-hover:text-turna-600 transition-colors">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{solution.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectoralSolutionsSection;
