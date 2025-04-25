
import { useTranslation } from 'react-i18next';

const CaseStudy = () => {
  const { t } = useTranslation();
  
  return (
    <div className="mb-16">
      <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">{t('manufacturing.caseStudy.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('manufacturing.caseStudy.description')}
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-turna-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-turna-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">{t('manufacturing.caseStudy.employeeEfficiency')}</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-turna-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-turna-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">{t('manufacturing.caseStudy.equipmentReduction')}</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-turna-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-turna-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">{t('manufacturing.caseStudy.accidentReduction')}</span>
              </li>
            </ul>
          </div>
          <div className="bg-turna-600 flex items-center justify-center">
            <img 
              src="/images/manufacturing-case-study.jpg" 
              alt={t('manufacturing.caseStudy.imageAlt')} 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
