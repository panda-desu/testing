
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, TrendingUp, Users, Clock } from 'lucide-react';

const HeroSection = () => {
  const [nextInterview, setNextInterview] = useState(47);
  const [interviewsToday, setInterviewsToday] = useState(2847);
  const [hiredThisWeek, setHiredThisWeek] = useState(156);

  useEffect(() => {
    const timer = setInterval(() => {
      setNextInterview(prev => prev > 0 ? prev - 1 : 60);
      
      // Simulate real-time updates
      if (Math.random() > 0.95) {
        setInterviewsToday(prev => prev + 1);
      }
      if (Math.random() > 0.98) {
        setHiredThisWeek(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-electric-blue via-primary to-vibrant-green overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-300"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        {/* Live Stats Ticker */}
        <div className="mb-8 flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Users className="w-4 h-4" />
            <span className="counter-update">{interviewsToday.toLocaleString()}</span>
            <span>interviews today</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <TrendingUp className="w-4 h-4" />
            <span className="counter-update">{hiredThisWeek}</span>
            <span>hired this week</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
          Skip the wait,<br />
          <span className="text-vibrant-green">start the conversation</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Apply & Interview in 60 Seconds. No CVs, no waiting. Just you, the job, and instant opportunity.
        </p>

        {/* Countdown Timer */}
        <div className="mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-lg mb-2">Next interview starts in:</p>
            <div className="text-5xl font-bold text-vibrant-green animate-pulse">
              00:{nextInterview.toString().padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="space-y-4 mb-12">
          <Button 
            size="lg" 
            className="bg-white text-electric-blue hover:bg-white/90 text-xl px-12 py-6 rounded-2xl font-semibold pulse-glow transform hover:scale-105 transition-all duration-300"
          >
            <Play className="w-6 h-6 mr-3" />
            Find Jobs & Interview Now
          </Button>
          <p className="text-white/80 text-sm">
            Join 50,000+ Mongolians revolutionizing their job search
          </p>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <p className="text-white/80 mb-4">Trusted by leading Mongolian companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            {['APU', 'MCSI', 'GS25', 'Teso', 'Unitel', 'Khan Bank'].map((company) => (
              <div key={company} className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="font-semibold text-white">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <Clock className="w-6 h-6" />
      </div>
    </div>
  );
};

export default HeroSection;
