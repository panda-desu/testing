
import HeroSection from '@/components/HeroSection';
import JobFeed from '@/components/JobFeed';
import SuccessSection from '@/components/SuccessSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <JobFeed />
      <SuccessSection />
    </div>
  );
};

export default Index;
