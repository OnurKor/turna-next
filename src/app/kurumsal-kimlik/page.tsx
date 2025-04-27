import Hero from '@/components/corporate-identity/Hero';
import CompanyOverview from '@/components/corporate-identity/CompanyOverview';
import MissionVision from '@/components/corporate-identity/MissionVision';

const CorporateIdentity = () => {

  
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <CompanyOverview />
      <MissionVision />
    </div>
  );
};

export default CorporateIdentity;
