
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
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
  aiScore: number;
  negotiating: boolean;
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

  // Generate random companies on mount
  useEffect(() => {
    const districts = ['Sukhbaatar', 'Khan-Uul', 'Bayanzurkh', 'Songino Khairkhan', 'Chingeltei'];
    const industries = ['Tech', 'Finance', 'Healthcare', 'Education', 'Retail'];
    const companyNames = [
      'APU Mongolia', 'MCSI', 'GS25', 'Teso Life', 'Unitel', 'Khan Bank',
      'TDB Bank', 'Mongolian Airlines', 'Energy Resources', 'Sky Shopping',
      'Ard Insurance', 'Central Bank', 'State Bank', 'Golomt Bank',
      'UB City', 'Shangri-La', 'Blue Sky Hotel', 'Nomadic Travel'
    ];

    const generatedCompanies: Company[] = Array.from({ length: 120 }, (_, i) => ({
      id: `company-${i}`,
      name: companyNames[i % companyNames.length],
      x: Math.random() * 800,
      y: Math.random() * 400,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      size: Math.random() * 8 + 4,
      salary: Math.floor(Math.random() * 3000000) + 1000000,
      district: districts[Math.floor(Math.random() * districts.length)],
      industry: industries[Math.floor(Math.random() * industries.length)],
      aiScore: 0,
      negotiating: false
    }));

    setCompanies(generatedCompanies);
  }, []);

  const startAIMatching = async () => {
    if (!preferences.district || !preferences.minSalary) return;

    setIsMatching(true);
    setAiMessages([]);
    setMatchedCompanies([]);

    // Reset all companies
    setCompanies(prev => prev.map(c => ({ ...c, aiScore: 0, negotiating: false })));

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
        negotiating: true
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
    <div className="min-h-screen bg-gradient-to-br from-charcoal via-gray-900 to-charcoal text-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-electric-blue">
            AI-Powered Job Matching
          </h1>
          <p className="text-xl text-gray-300">
            Your AI agent negotiates with company AI agents in real-time
          </p>
        </div>

        {/* Preferences Panel */}
        <Card className="mb-8 bg-gray-800/50 border-gray-700">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Preferred District
                </label>
                <Select value={preferences.district} onValueChange={(value) => 
                  setPreferences(prev => ({ ...prev, district: value }))}>
                  <SelectTrigger className="bg-gray-700 border-gray-600">
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
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  <DollarSign className="inline w-4 h-4 mr-1" />
                  Minimum Salary (₮)
                </label>
                <Input
                  type="number"
                  placeholder="3000000"
                  value={preferences.minSalary}
                  onChange={(e) => setPreferences(prev => ({ ...prev, minSalary: e.target.value }))}
                  className="bg-gray-700 border-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  <Building2 className="inline w-4 h-4 mr-1" />
                  Industry (Optional)
                </label>
                <Select value={preferences.industry} onValueChange={(value) => 
                  setPreferences(prev => ({ ...prev, industry: value }))}>
                  <SelectTrigger className="bg-gray-700 border-gray-600">
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
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Real-Time Company Network
                  <Badge className="ml-2 bg-vibrant-green">{companies.length} companies</Badge>
                </h3>
                
                <div className="relative bg-black rounded-lg overflow-hidden" style={{ height: '500px' }}>
                  <svg width="100%" height="100%" className="absolute inset-0">
                    {companies.map((company) => (
                      <g key={company.id}>
                        <circle
                          cx={company.x}
                          cy={company.y}
                          r={company.size}
                          fill={company.color}
                          opacity={company.negotiating ? 0.9 : 0.6}
                          className={`transition-all duration-300 ${
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
                    ))}
                  </svg>

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-gray-800/90 rounded-lg p-3 text-xs">
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
                      <span>No Match</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Messages & Results */}
          <div className="space-y-6">
            {/* AI Messages */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Bot className="w-4 h-4 mr-2 text-electric-blue" />
                  AI Agent Status
                </h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {aiMessages.map((message, i) => (
                    <div key={i} className="text-sm text-gray-300 animate-slide-up">
                      {message}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Matched Companies */}
            {matchedCompanies.length > 0 && (
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-vibrant-green" />
                    AI-Matched Companies
                  </h4>
                  <div className="space-y-3">
                    {matchedCompanies.map((company) => (
                      <div key={company.id} className="bg-gray-700/50 rounded-lg p-3">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium text-sm">{company.name}</h5>
                          <Badge 
                            className={`text-xs ${
                              company.aiScore > 70 ? 'bg-vibrant-green' : 'bg-electric-blue'
                            }`}
                          >
                            {Math.round(company.aiScore)}% match
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-400 space-y-1">
                          <div>📍 {company.district}</div>
                          <div>💰 ₮{company.salary.toLocaleString()}</div>
                          <div>🏢 {company.industry}</div>
                        </div>
                        <Button size="sm" className="w-full mt-2 bg-electric-blue hover:bg-electric-blue/90">
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
