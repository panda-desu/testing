import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Download,
  Users,
  Mic,
  Headphones,
  Bot,
  Gamepad2,
  Building2,
  Trophy,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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
          <button
            // onClick={() => navigate("/jobz")}
            className="text-white hover:underline font-medium"
          >
            Ажлын байр
          </button>
          <button
            // onClick={() => navigate("/companies")}
            className="text-white hover:underline font-medium"
          >
            Компаниуд
          </button>
          <button
            onClick={() => navigate("/games")}
            className="text-white hover:underline font-medium"
          >
            Тоглоомууд
          </button>
          <button
            onClick={() => navigate("/channels")}
            className="text-white hover:underline font-medium"
          >
            Сувгууд
          </button>
          <button
            onClick={() => navigate("/co-founder-matching")}
            className="text-white hover:underline font-medium"
          >
            Хамтрагч олох
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black rounded-full px-4 py-2 text-sm font-medium bg-transparent"
            onClick={() => navigate("/account")}
          >
            Миний бүртгэл
          </Button>
          <Button
            className="bg-white text-black hover:bg-gray-100 rounded-full px-4 py-2 text-sm font-medium"
            onClick={() => navigate("/ai-matching")}
          >
            AI тохирол туршиж үзэх
          </Button>
        </div>
      </nav>

      {/* Main Content - Simplified */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 md:mt-40">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            CV үүсгэдэг үе өнгөрсөн
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Монгол дахь хамгийн хурдан ажлын байр олох платформ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
