
import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield, Navigation, TrendingUp, Clock, Truck } from '@/lib/icons';
import { useTranslation } from 'react-i18next';

const Goals = () => {
  const { t } = useTranslation();
  
  const goalItems = [
    {
      icon: <Users className="h-6 w-6 text-turna-600" />,
      title: t('manufacturing.goals.personnel'),
      description: t('manufacturing.goals.personnelDesc')
    },
    {
      icon: <Shield className="h-6 w-6 text-turna-600" />,
      title: t('manufacturing.goals.medical'),
      description: t('manufacturing.goals.medicalDesc')
    },
    {
      icon: <Navigation className="h-6 w-6 text-turna-600" />,
      title: t('manufacturing.goals.assetTracking'),
      description: t('manufacturing.goals.assetTrackingDesc')
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-turna-600" />,
      title: t('manufacturing.goals.productivity'),
      description: t('manufacturing.goals.productivityDesc')
    },
    {
      icon: <Clock className="h-6 w-6 text-turna-600" />,
      title: t('manufacturing.goals.workday'),
      description: t('manufacturing.goals.workdayDesc')
    },
    {
      icon: <Truck className="h-6 w-6 text-turna-600" />,
      title: t('manufacturing.goals.transport'),
      description: t('manufacturing.goals.transportDesc')
    }
  ];

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-10 text-center text-gray-800">
        {t('manufacturing.goalsTitle')}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goalItems.map((goal, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-turna-100 p-3 flex-shrink-0">
                  {goal.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-800">{goal.title}</h4>
                  <p className="text-gray-600">
                    {goal.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Goals;
