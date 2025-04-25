
import { useTranslation } from 'react-i18next';
import { Building, Shield, Award, Briefcase } from 'lucide-react';

const CompanyOverview = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt={t('company.aboutTurna')} 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('company.about')}</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('company.aboutText')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-turna-50 text-turna-600">
                  <Building size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t('company.rnd')}</h3>
                  <p className="text-gray-600">{t('company.rndDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-turna-50 text-turna-600">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t('company.trustSolutions')}</h3>
                  <p className="text-gray-600">{t('company.trustSolutionsDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-turna-50 text-turna-600">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t('company.expertTeam')}</h3>
                  <p className="text-gray-600">{t('company.expertTeamDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-turna-50 text-turna-600">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t('company.sectorSpecific')}</h3>
                  <p className="text-gray-600">{t('company.sectorSpecificDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
