
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Bot, Users, MapPin, DollarSign, Building2, Zap } from 'lucide-react';

interface Company {
  id: string;
  name: string;
  x: number;
  y: number;
  color: string;
  size: number;
  salary: number;
  district: string;
  industry: string;
  position: string;
  aiScore: number;
  negotiating: boolean;
  isActive: boolean;
}

interface InfoPacket {
  id: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  progress: number;
  active: boolean;
}

const AIMatchingInterface = () => {
  const [isMatching, setIsMatching] = useState(false);
  const [preferences, setPreferences] = useState({
    district: '',
    minSalary: '',
    industry: ''
  });
  const [companies, setCompanies] = useState<Company[]>([]);
  const [matchedCompanies, setMatchedCompanies] = useState<Company[]>([]);
  const [aiMessages, setAiMessages] = useState<string[]>([]);
  const [infoPackets, setInfoPackets] = useState<InfoPacket[]>([]);

  const centerX = 375; // Center of the visualization
  const centerY = 250;

  // Generate random companies on mount
  useEffect(() => {
    const districts = ['Sukhbaatar', 'Khan-Uul', 'Bayanzurkh', 'Songino Khairkhan', 'Chingeltei'];
    const industries = ['Tech', 'Finance', 'Healthcare', 'Education', 'Retail'];
    const positions = ['Software Engineer', 'Data Analyst', 'Marketing Manager', 'Sales Representative', 'Project Manager', 'Designer', 'Account Manager', 'Business Analyst'];
    const companyNames = [
      'APU Mongolia', 'MCSI', 'GS25', 'Teso Life', 'Unitel', 'Khan Bank',
      'TDB Bank', 'Mongolian Airlines', 'Energy Resources', 'Sky Shopping',
      'Ard Insurance', 'Central Bank', 'State Bank', 'Golomt Bank',
      'UB City', 'Shangri-La', 'Blue Sky Hotel', 'Nomadic Travel'
    ];

    const generatedCompanies: Company[] = Array.from({ length: 120 }, (_, i) => {
      // Ensure companies are not too close to center
      let x, y;
      do {
        x = Math.random() * 750 + 25;
        y = Math.random() * 350 + 25;
      } while (Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) < 80);

      return {
        id: `company-${i}`,
        name: companyNames[i % companyNames.length],
        x,
        y,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        size: Math.random() * 8 + 4,
        salary: Math.floor(Math.random() * 3000000) + 1000000,
        district: districts[Math.floor(Math.random() * districts.length)],
        industry: industries[Math.floor(Math.random() * industries.length)],
        position: positions[Math.floor(Math.random() * positions.length)],
        aiScore: 0,
        negotiating: false,
        isActive: false
      };
    });

    setCompanies(generatedCompanies);
  }, []);

  // Generate info packets during matching
  useEffect(() => {
    if (!isMatching) return;

    const packetInterval = setInterval(() => {
      // Select random companies to send packets to
      const activeCompanies = companies.filter(c => c.isActive);
      const targetCompany = activeCompanies[Math.floor(Math.random() * activeCompanies.length)];
      
      if (targetCompany) {
        const newPacket: InfoPacket = {
          id: `packet-${Date.now()}-${Math.random()}`,
          x: centerX,
          y: centerY,
          targetX: targetCompany.x,
          targetY: targetCompany.y,
          progress: 0,
          active: true
        };

        setInfoPackets(prev => [...prev, newPacket]);
      }
    }, 200); // Create new packet every 200ms

    return () => clearInterval(packetInterval);
  }, [isMatching, companies]);

  // Animate info packets
  useEffect(() => {
    if (infoPackets.length === 0) return;

    const animationInterval = setInterval(() => {
      setInfoPackets(prev => prev.map(packet => {
        if (!packet.active) return packet;

        const newProgress = packet.progress + 0.02; // Speed of packet movement
        
        if (newProgress >= 1) {
          return { ...packet, active: false };
        }

        const currentX = packet.x + (packet.targetX - packet.x) * newProgress;
        const currentY = packet.y + (packet.targetY - packet.y) * newProgress;

        return {
          ...packet,
          x: currentX,
          y: currentY,
          progress: newProgress
        };
      }).filter(packet => packet.active || packet.progress < 1.1)); // Remove old packets
    }, 16); // ~60fps

    return () => clearInterval(animationInterval);
  }, [infoPackets]);

  const startAIMatching = async () => {
    if (!preferences.district || !preferences.minSalary) return;

    setIsMatching(true);
    setAiMessages([]);
    setMatchedCompanies([]);
    setInfoPackets([]);

    // Reset all companies to inactive state
    setCompanies(prev => prev.map(c => ({ ...c, aiScore: 0, negotiating: false, isActive: false })));

    // Simulate AI agent conversations
    const messages = [
      "🤖 Your AI Agent is activating...",
      "🔍 Scanning 120+ companies in real-time...",
      `📍 Filtering companies in ${preferences.district} district...`,
      `💰 Negotiating salary requirements (₮${parseInt(preferences.minSalary).toLocaleString()}+)...`,
      "🤝 AI agents are talking to each other...",
      "⚡ Finding perfect matches..."
    ];

    for (let i = 0; i < messages.length; i++) {
      setTimeout(() => {
        setAiMessages(prev => [...prev, messages[i]]);
      }, i * 1000);
    }

    // Simulate company filtering and scoring
    setTimeout(() => {
      const filtered = companies.filter(c => 
        c.district === preferences.district && 
        c.salary >= parseInt(preferences.minSalary)
      );

      const scored = filtered.map(c => ({
        ...c,
        aiScore: Math.random() * 100,
        negotiating: true,
        isActive: true
      }));

      setCompanies(prev => prev.map(c => {
        const updated = scored.find(s => s.id === c.id);
        return updated || c;
      }));

      // Show negotiation process
      setTimeout(() => {
        const topMatches = scored
          .sort((a, b) => b.aiScore - a.aiScore)
          .slice(0, 5);

        setMatchedCompanies(topMatches);
        setIsMatching(false);
        setAiMessages(prev => [...prev, "✅ AI negotiation complete! Found your best matches."]);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-charcoal">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-charcoal">
            AI-Powered Job Matching
          </h1>
          <p className="text-xl text-gray-600">
            Your AI agent negotiates with company AI agents in real-time
          </p>
        </div>

        {/* Preferences Panel */}
        <Card className="mb-8 bg-white/90 border-gray-200 shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Preferred District
                </label>
                <Select value={preferences.district} onValueChange={(value) => 
                  setPreferences(prev => ({ ...prev, district: value }))}>
                  <SelectTrigger className="bg-white border-gray-300">
                    <SelectValue placeholder="Select district" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sukhbaatar">Sukhbaatar</SelectItem>
                    <SelectItem value="Khan-Uul">Khan-Uul</SelectItem>
                    <SelectItem value="Bayanzurkh">Bayanzurkh</SelectItem>
                    <SelectItem value="Songino Khairkhan">Songino Khairkhan</SelectItem>
                    <SelectItem value="Chingeltei">Chingeltei</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  <DollarSign className="inline w-4 h-4 mr-1" />
                  Minimum Salary (₮)
                </label>
                <Input
                  type="number"
                  placeholder="3000000"
                  value={preferences.minSalary}
                  onChange={(e) => setPreferences(prev => ({ ...prev, minSalary: e.target.value }))}
                  className="bg-white border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  <Building2 className="inline w-4 h-4 mr-1" />
                  Industry (Optional)
                </label>
                <Select value={preferences.industry} onValueChange={(value) => 
                  setPreferences(prev => ({ ...prev, industry: value }))}>
                  <SelectTrigger className="bg-white border-gray-300">
                    <SelectValue placeholder="Any industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tech">Technology</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Retail">Retail</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={startAIMatching}
                disabled={isMatching || !preferences.district || !preferences.minSalary}
                className="bg-electric-blue hover:bg-electric-blue/90 text-white font-semibold h-10"
              >
                {isMatching ? (
                  <>
                    <Bot className="w-4 h-4 mr-2 animate-spin" />
                    AI Matching...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Start AI Match
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Visualization */}
          <div className="lg:col-span-2">
            <Card className="bg-white/90 border-gray-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center text-charcoal">
                  Real-Time Company Network
                  <Badge className="ml-2 bg-vibrant-green text-white">{companies.length} companies</Badge>
                </h3>
                
                <div className="relative bg-gray-900 rounded-lg overflow-hidden" style={{ height: '500px' }}>
                  <svg width="100%" height="100%" className="absolute inset-0">
                    {/* Person dot in center */}
                    <circle
                      cx={centerX}
                      cy={centerY}
                      r="15"
                      fill="#0066FF"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                      className="drop-shadow-lg"
                    />
                    <text
                      x={centerX}
                      y={centerY + 5}
                      textAnchor="middle"
                      fontSize="14"
                      fill="#FFFFFF"
                      fontWeight="bold"
                    >
                      YOU
                    </text>

                    {/* Info packets */}
                    {infoPackets.map((packet) => (
                      <circle
                        key={packet.id}
                        cx={packet.x}
                        cy={packet.y}
                        r="3"
                        fill="#FFD700"
                        className="animate-pulse"
                        style={{
                          filter: 'drop-shadow(0 0 6px #FFD700)',
                          opacity: 1 - packet.progress * 0.5
                        }}
                      />
                    ))}

                    {/* Company dots */}
                    {companies.map((company) => (
                      <HoverCard key={company.id}>
                        <HoverCardTrigger asChild>
                          <g className="cursor-pointer">
                            <circle
                              cx={company.x}
                              cy={company.y}
                              r={company.size}
                              fill={company.isActive ? company.color : '#6B7280'}
                              opacity={company.negotiating ? 0.9 : company.isActive ? 0.7 : 0.4}
                              className={`transition-all duration-500 ${
                                company.negotiating ? 'animate-pulse' : ''
                              }`}
                              style={{
                                filter: company.aiScore > 70 ? 'drop-shadow(0 0 10px #00CC66)' : 
                                       company.aiScore > 40 ? 'drop-shadow(0 0 8px #0066FF)' : 'none'
                              }}
                            />
                            {company.aiScore > 0 && (
                              <text
                                x={company.x}
                                y={company.y - company.size - 5}
                                textAnchor="middle"
                                fontSize="10"
                                fill="#fff"
                                className="font-bold"
                              >
                                {Math.round(company.aiScore)}%
                              </text>
                            )}
                          </g>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 bg-white border-gray-200 shadow-xl">
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-charcoal">{company.name}</h4>
                            <div className="text-xs text-gray-600 space-y-1">
                              <div className="flex items-center gap-2">
                                <Building2 className="w-3 h-3" />
                                <span>{company.position}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-3 h-3" />
                                <span>{company.district}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <DollarSign className="w-3 h-3" />
                                <span>₮{company.salary.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs">🏢</span>
                                <span>{company.industry}</span>
                              </div>
                              {company.aiScore > 0 && (
                                <div className="flex items-center gap-2 mt-2">
                                  <Badge 
                                    className={`text-xs ${
                                      company.aiScore > 70 ? 'bg-vibrant-green' : 
                                      company.aiScore > 40 ? 'bg-electric-blue' : 'bg-gray-500'
                                    } text-white`}
                                  >
                                    {Math.round(company.aiScore)}% match
                                  </Badge>
                                </div>
                              )}
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </svg>

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-black/80 rounded-lg p-3 text-xs text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-electric-blue border border-white"></div>
                      <span>You (Candidate)</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <span>Info Packets</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-vibrant-green"></div>
                      <span>High Match (70%+)</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-electric-blue"></div>
                      <span>Good Match (40%+)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                      <span>Inactive</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Messages & Results */}
          <div className="space-y-6">
            {/* AI Messages */}
            <Card className="bg-white/90 border-gray-200 shadow-lg">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-3 flex items-center text-charcoal">
                  <Bot className="w-4 h-4 mr-2 text-electric-blue" />
                  AI Agent Status
                </h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {aiMessages.map((message, i) => (
                    <div key={i} className="text-sm text-gray-600 animate-slide-up">
                      {message}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Matched Companies */}
            {matchedCompanies.length > 0 && (
              <Card className="bg-white/90 border-gray-200 shadow-lg">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-3 flex items-center text-charcoal">
                    <Users className="w-4 h-4 mr-2 text-vibrant-green" />
                    AI-Matched Companies
                  </h4>
                  <div className="space-y-3">
                    {matchedCompanies.map((company) => (
                      <div key={company.id} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium text-sm text-charcoal">{company.name}</h5>
                          <Badge 
                            className={`text-xs text-white ${
                              company.aiScore > 70 ? 'bg-vibrant-green' : 'bg-electric-blue'
                            }`}
                          >
                            {Math.round(company.aiScore)}% match
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <div>💼 {company.position}</div>
                          <div>📍 {company.district}</div>
                          <div>💰 ₮{company.salary.toLocaleString()}</div>
                          <div>🏢 {company.industry}</div>
                        </div>
                        <Button size="sm" className="w-full mt-2 bg-electric-blue hover:bg-electric-blue/90 text-white">
                          Interview Now
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMatchingInterface;
