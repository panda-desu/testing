import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Users, Mic, Headphones, Bot, Gamepad2, Building2, Trophy, Zap } from 'lucide-react';
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
          <a href="#jobz" className="text-white hover:underline font-medium">Jobz</a>
          <a href="#companies" className="text-white hover:underline font-medium">Companies</a>
          <a href="#games" className="text-white hover:underline font-medium">Games</a>
          <a href="/channels" className="text-white hover:underline font-medium">Channels</a>
          <a href="/co-founder-matching" className="text-white hover:underline font-medium">Co-Founder Matching</a>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black rounded-full px-4 py-2 text-sm font-medium bg-transparent"
            onClick={() => navigate('/account')}
          >
            My Account
          </Button>
          <Button 
            className="bg-white text-black hover:bg-gray-100 rounded-full px-4 py-2 text-sm font-medium"
            onClick={() => navigate('/ai-matching')}
          >
            Try AI Matching
          </Button>
        </div>
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

        {/* Three Main Sections */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Jobz Section */}
            <div id="jobz" className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all cursor-pointer group">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">Jobz</h3>
                <p className="text-white/80 text-sm mb-4">AI-powered job matching that actually works. No more endless scrolling through irrelevant positions.</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-white/70 text-xs">
                    <Zap className="w-4 h-4 mr-1" />
                    <span>Instant AI Matching</span>
                  </div>
                  <div className="flex items-center justify-center text-white/70 text-xs">
                    <Users className="w-4 h-4 mr-1" />
                    <span>60-Second Applications</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Companies Section */}
            <div id="companies" className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all cursor-pointer group">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">Companies</h3>
                <p className="text-white/80 text-sm mb-4">Connect directly with hiring managers. Skip HR, talk to decision makers immediately.</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-white/70 text-xs">
                    <Mic className="w-4 h-4 mr-1" />
                    <span>Direct Communication</span>
                  </div>
                  <div className="flex items-center justify-center text-white/70 text-xs">
                    <Headphones className="w-4 h-4 mr-1" />
                    <span>Instant Interviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Games Section */}
            <div id="games" className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all cursor-pointer group" onClick={() => navigate('/games')}>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Gamepad2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">Games</h3>
                <p className="text-white/80 text-sm mb-4">Play psychometric games to showcase your skills. Climb leaderboards, unlock exclusive jobs.</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-white/70 text-xs">
                    <Trophy className="w-4 h-4 mr-1" />
                    <span>Skill Challenges</span>
                  </div>
                  <div className="flex items-center justify-center text-white/70 text-xs">
                    <Zap className="w-4 h-4 mr-1" />
                    <span>Leaderboards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Feature Showcase */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Join Communities</h3>
                <p className="text-white/80 text-sm">Network in Discord-style channels with other job seekers and employers</p>
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
