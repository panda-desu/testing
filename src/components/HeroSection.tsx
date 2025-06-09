import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Clock, Zap, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 12,
    seconds: 47
  });

  const [liveStats, setLiveStats] = useState({
    interviewsToday: 2847,
    hiredThisWeek: 156,
    activeInterviews: 23
  });

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const statsTimer = setInterval(() => {
      setLiveStats(prev => ({
        interviewsToday: prev.interviewsToday + Math.floor(Math.random() * 3),
        hiredThisWeek: prev.hiredThisWeek + (Math.random() > 0.95 ? 1 : 0),
        activeInterviews: Math.max(15, prev.activeInterviews + Math.floor(Math.random() * 6) - 3)
      }));
    }, 3000);

    return () => clearInterval(statsTimer);
  }, []);

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Live Status Badge */}
        <div className="flex justify-center mb-8">
          <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-sm font-medium backdrop-blur-sm">
            🔴 LIVE: {liveStats.activeInterviews} interviews happening now
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Skip the wait,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
            start the conversation
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Apply & Interview in 60 Seconds. Revolutionary job platform for Mongolia.
          <br />
          <strong>No CVs, no waiting.</strong> Just you, the job, and instant opportunity.
        </p>

        {/* Countdown Timer */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 max-w-lg mx-auto border border-white/20">
          <div className="text-white/80 text-sm mb-2">Next interview starts in:</div>
          <div className="text-4xl md:text-5xl font-bold text-white mb-4">
            {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="flex justify-center space-x-6 text-sm text-white/70">
            <div className="text-center">
              <div className="font-semibold">{timeLeft.minutes}</div>
              <div>Minutes</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">{timeLeft.seconds}</div>
              <div>Seconds</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-white text-electric-blue hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Zap className="w-5 h-5 mr-2" />
            Find Jobs & Interview Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-electric-blue font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            onClick={() => navigate('/ai-matching')}
          >
            <Bot className="w-5 h-5 mr-2" />
            Try AI Matching
          </Button>
        </div>

        {/* Live Stats Ticker */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-vibrant-green mr-2" />
              <span className="text-2xl font-bold text-white counter-update">
                {liveStats.interviewsToday.toLocaleString()}
              </span>
            </div>
            <div className="text-white/80 text-sm">interviews today</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-white mr-2" />
              <span className="text-2xl font-bold text-white">
                {liveStats.hiredThisWeek}
              </span>
            </div>
            <div className="text-white/80 text-sm">people hired this week</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-6 h-6 text-warning-orange mr-2" />
              <span className="text-2xl font-bold text-white">98%</span>
            </div>
            <div className="text-white/80 text-sm">success rate</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12">
          <p className="text-white/70 text-sm mb-6">Trusted by leading companies in Mongolia</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {['APU', 'MCSI', 'GS25', 'Teso Life', 'Unitel', 'Khan Bank'].map((company) => (
              <div key={company} className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-semibold">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
