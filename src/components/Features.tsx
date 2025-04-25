
import { useTranslation } from 'react-i18next';
import { MapPin, Zap, Clock, Cog, Layers, Shield } from '@/lib/icons'; // ✅ optimize edilmiş import

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('features.title')}</h2>
          <div className="w-24 h-1 bg-turna-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-turna-100 p-3 rounded-full text-turna-600">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">{t('features.precisionTracking')}</h3>
            </div>
            <p className="text-gray-600">
              {t('features.precisionDescription')}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-turna-100 p-3 rounded-full text-turna-600">
                <Cog className="h-6 w-6" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">{t('features.lowInfrastructure')}</h3>
            </div>
            <p className="text-gray-600">
              {t('features.infrastructureDescription')}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-turna-100 p-3 rounded-full text-turna-600">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">{t('features.realTimeData')}</h3>
            </div>
            <p className="text-gray-600">
              {t('features.realTimeDescription')}
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-turna-100 p-3 rounded-full text-turna-600">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">{t('features.customSolutions')}</h3>
            </div>
            <p className="text-gray-600">
              {t('features.customDescription')}
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-turna-100 p-3 rounded-full text-turna-600">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">{t('features.seamlessIntegration')}</h3>
            </div>
            <p className="text-gray-600">
              {t('features.integrationDescription')}
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-turna-100 p-3 rounded-full text-turna-600">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">{t('features.dataSecurity')}</h3>
            </div>
            <p className="text-gray-600">
              {t('features.securityDescription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
