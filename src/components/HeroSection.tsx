
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
          <span className="text-white font-bold text-xl">Jobz.mn</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#jobz" className="text-white hover:underline font-medium">Ажлын байр</a>
          <a href="#companies" className="text-white hover:underline font-medium">Компаниуд</a>
          <a href="#games" className="text-white hover:underline font-medium">Тоглоомууд</a>
          <a href="/channels" className="text-white hover:underline font-medium">Сувгууд</a>
          <a href="/co-founder-matching" className="text-white hover:underline font-medium">Хамтрагч олох</a>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black rounded-full px-4 py-2 text-sm font-medium bg-transparent"
            onClick={() => navigate('/account')}
          >
            Миний бүртгэл
          </Button>
          <Button 
            className="bg-white text-black hover:bg-gray-100 rounded-full px-4 py-2 text-sm font-medium"
            onClick={() => navigate('/ai-matching')}
          >
            AI тохирол туршиж үзэх
          </Button>
        </div>
      </nav>

      {/* Main Content - Simplified */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            АЖЛЫН БАЙР ОЛОХ ХАМГИЙН ХЯЛБАР АРГА
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Монгол дахь хамгийн хурдан ажлын байр олох платформ. AI ашиглан таны мэргэжлийг олж өгнө.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-full min-w-[200px]"
              onClick={() => document.getElementById('job-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download className="w-5 h-5 mr-2" />
              Ажлын байр үзэх
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-full min-w-[200px] bg-transparent"
              onClick={() => navigate('/ai-matching')}
            >
              AI тохирол олох
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
