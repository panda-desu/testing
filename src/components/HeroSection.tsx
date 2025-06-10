
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Users, Mic, Headphones, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#404EED] relative overflow-hidden">
      {/* Discord-style background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/3 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-white" />
          <span className="text-white font-bold text-xl">Jobz</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:underline">Download</a>
          <a href="#" className="text-white hover:underline">Jobs</a>
          <a href="#" className="text-white hover:underline">Companies</a>
          <a href="#" className="text-white hover:underline">Blog</a>
        </div>

        <Button 
          className="bg-white text-black hover:bg-gray-100 rounded-full px-4 py-2 text-sm font-medium"
          onClick={() => navigate('/ai-matching')}
        >
          Try AI Matching
        </Button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            IMAGINE A PLACE...
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            ...where you can find your dream job and interview instantly. Where getting hired 
            doesn't require endless waiting. A place that makes job hunting actually work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-full min-w-[200px]"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Windows
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-full min-w-[200px] bg-transparent"
            >
              Open Jobz in your browser
            </Button>
          </div>
        </div>

        {/* Discord-style illustration placeholder */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Connect with Companies</h3>
                <p className="text-white/80 text-sm">Join thousands of job seekers finding their perfect match</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Instant Interviews</h3>
                <p className="text-white/80 text-sm">Talk to employers immediately, no waiting required</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">AI Matching</h3>
                <p className="text-white/80 text-sm">Let our AI find the perfect opportunities for you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
