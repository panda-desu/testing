
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, MapPin, Code, Brain, DollarSign, Clock, Star, MessageCircle, Filter, Search, Heart, X, CheckCircle, Building2, Rocket, Target, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CoFounder {
  id: string;
  name: string;
  avatar: string;
  title: string;
  location: string;
  bio: string;
  skills: string[];
  experience: string;
  lookingFor: string[];
  industries: string[];
  commitmentLevel: string;
  equityExpectation: string;
  previousStartups: number;
  ycBatch?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  matchScore: number;
  isOnline: boolean;
  lastActive: string;
  verified: boolean;
}

const CoFounderMatching = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('discover');
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [skillFilter, setSkillFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [coFounders, setCoFounders] = useState<CoFounder[]>([]);
  const [matches, setMatches] = useState<CoFounder[]>([]);
  const [connections, setConnections] = useState<CoFounder[]>([]);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    // Generate sample co-founders data
    const sampleCoFounders: CoFounder[] = [
      {
        id: '1',
        name: 'Sarah Chen',
        avatar: '/placeholder.svg',
        title: 'Full-Stack Engineer & AI Researcher',
        location: 'San Francisco, CA',
        bio: 'Former Google AI engineer with 8 years of experience building ML products. Looking for a business co-founder to build the next generation of AI-powered productivity tools.',
        skills: ['Python', 'TensorFlow', 'React', 'Node.js', 'Product Management'],
        experience: '8 years',
        lookingFor: ['Business Co-founder', 'Marketing Co-founder'],
        industries: ['AI/ML', 'SaaS', 'Productivity'],
        commitmentLevel: 'Full-time',
        equityExpectation: '40-50%',
        previousStartups: 1,
        ycBatch: 'W22',
        matchScore: 95,
        isOnline: true,
        lastActive: 'now',
        verified: true
      },
      {
        id: '2',
        name: 'Marcus Johnson',
        avatar: '/placeholder.svg',
        title: 'Product Manager & Growth Expert',
        location: 'New York, NY',
        bio: 'Ex-Stripe PM who scaled products from 0 to $100M ARR. Expert in fintech, payments, and growth. Looking for technical co-founder for next fintech venture.',
        skills: ['Product Strategy', 'Growth Hacking', 'Data Analysis', 'User Research', 'Go-to-Market'],
        experience: '6 years',
        lookingFor: ['Technical Co-founder', 'CTO'],
        industries: ['Fintech', 'B2B SaaS', 'Payments'],
        commitmentLevel: 'Full-time',
        equityExpectation: '30-40%',
        previousStartups: 2,
        ycBatch: 'S21',
        matchScore: 88,
        isOnline: false,
        lastActive: '2h ago',
        verified: true
      },
      {
        id: '3',
        name: 'Elena Rodriguez',
        avatar: '/placeholder.svg',
        title: 'Designer & Brand Strategist',
        location: 'Austin, TX',
        bio: 'Creative director with 10+ years designing for top brands. Passionate about sustainability and consumer products. Seeking technical partner for eco-friendly marketplace.',
        skills: ['UI/UX Design', 'Brand Strategy', 'Marketing', 'Consumer Research', 'Figma'],
        experience: '10 years',
        lookingFor: ['Technical Co-founder', 'Operations Co-founder'],
        industries: ['E-commerce', 'Sustainability', 'Consumer Goods'],
        commitmentLevel: 'Full-time',
        equityExpectation: '35-45%',
        previousStartups: 0,
        matchScore: 82,
        isOnline: true,
        lastActive: '15m ago',
        verified: false
      },
      {
        id: '4',
        name: 'David Kim',
        avatar: '/placeholder.svg',
        title: 'Blockchain Developer & Crypto Expert',
        location: 'Remote',
        bio: 'Solidity expert who built DeFi protocols handling $500M+ TVL. Looking for business co-founder to build the next generation of Web3 infrastructure.',
        skills: ['Solidity', 'Web3', 'Smart Contracts', 'DeFi', 'Tokenomics'],
        experience: '5 years',
        lookingFor: ['Business Co-founder', 'Tokenomics Expert'],
        industries: ['Web3', 'DeFi', 'Crypto'],
        commitmentLevel: 'Full-time',
        equityExpectation: '45-55%',
        previousStartups: 3,
        matchScore: 76,
        isOnline: true,
        lastActive: 'now',
        verified: true
      },
      {
        id: '5',
        name: 'Jennifer Walsh',
        avatar: '/placeholder.svg',
        title: 'Healthcare Executive & MD',
        location: 'Boston, MA',
        bio: 'Harvard-trained physician with MBA. 15 years in healthcare administration and digital health. Looking for technical co-founder for healthcare AI startup.',
        skills: ['Healthcare', 'Regulatory Affairs', 'Clinical Research', 'Business Development'],
        experience: '15 years',
        lookingFor: ['Technical Co-founder', 'AI Engineer'],
        industries: ['HealthTech', 'AI/ML', 'MedTech'],
        commitmentLevel: 'Part-time initially',
        equityExpectation: '25-35%',
        previousStartups: 0,
        ycBatch: 'W23',
        matchScore: 71,
        isOnline: false,
        lastActive: '1d ago',
        verified: true
      },
      {
        id: '6',
        name: 'Alex Thompson',
        avatar: '/placeholder.svg',
        title: 'Sales Leader & Revenue Expert',
        location: 'Chicago, IL',
        bio: 'Built and scaled sales teams at 3 unicorns. Expert in enterprise sales, revenue operations, and go-to-market strategy. Seeking technical co-founder.',
        skills: ['Enterprise Sales', 'Revenue Operations', 'Team Building', 'Customer Success'],
        experience: '12 years',
        lookingFor: ['Technical Co-founder', 'Product Co-founder'],
        industries: ['B2B SaaS', 'Enterprise Software', 'Sales Tech'],
        commitmentLevel: 'Full-time',
        equityExpectation: '30-40%',
        previousStartups: 1,
        matchScore: 68,
        isOnline: true,
        lastActive: '30m ago',
        verified: true
      }
    ];

    setCoFounders(sampleCoFounders);
    setMatches(sampleCoFounders.slice(0, 3));
    setConnections(sampleCoFounders.slice(3, 5));
  }, []);

  const filteredCoFounders = coFounders.filter(coFounder => {
    const matchesSearch = coFounder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         coFounder.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         coFounder.bio.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !locationFilter || coFounder.location.includes(locationFilter);
    const matchesSkill = !skillFilter || coFounder.skills.some(skill => 
      skill.toLowerCase().includes(skillFilter.toLowerCase()));
    const matchesIndustry = !industryFilter || coFounder.industries.includes(industryFilter);
    
    return matchesSearch && matchesLocation && matchesSkill && matchesIndustry;
  });

  const handleConnect = (coFounderId: string) => {
    console.log('Sending connection request to:', coFounderId);
    // Add connection logic here
  };

  const handlePass = (coFounderId: string) => {
    console.log('Passed on:', coFounderId);
    // Add pass logic here
  };

  return (
    <div className="min-h-screen bg-[#36393f]">
      {/* Header */}
      <div className="bg-[#2f3136] border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-gray-300 hover:text-white"
              >
                ← Back to Jobz
              </Button>
              <div className="flex items-center space-x-2">
                <Users className="w-8 h-8 text-[#404EED]" />
                <h1 className="text-2xl font-bold text-white">Co-Founder Matching</h1>
              </div>
            </div>
            <Button 
              onClick={() => setShowProfile(true)}
              className="bg-[#404EED] hover:bg-[#404EED]/90 text-white"
            >
              Edit My Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-[#2f3136] border border-gray-700">
            <TabsTrigger value="discover" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-[#404EED]">
              <Search className="w-4 h-4 mr-2" />
              Discover
            </TabsTrigger>
            <TabsTrigger value="matches" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-[#404EED]">
              <Heart className="w-4 h-4 mr-2" />
              Matches ({matches.length})
            </TabsTrigger>
            <TabsTrigger value="connections" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-[#404EED]">
              <CheckCircle className="w-4 h-4 mr-2" />
              Connections ({connections.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-6">
            {/* Filters */}
            <Card className="bg-[#2f3136] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Find Your Perfect Co-Founder
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input
                    placeholder="Search by name, skills, or bio..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-[#40444b] border-gray-600 text-white placeholder-gray-400"
                  />
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger className="bg-[#40444b] border-gray-600 text-white">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#2f3136] border-gray-700">
                      <SelectItem value="">All Locations</SelectItem>
                      <SelectItem value="San Francisco">San Francisco</SelectItem>
                      <SelectItem value="New York">New York</SelectItem>
                      <SelectItem value="Austin">Austin</SelectItem>
                      <SelectItem value="Remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Skills (e.g., React, Sales)"
                    value={skillFilter}
                    onChange={(e) => setSkillFilter(e.target.value)}
                    className="bg-[#40444b] border-gray-600 text-white placeholder-gray-400"
                  />
                  <Select value={industryFilter} onValueChange={setIndustryFilter}>
                    <SelectTrigger className="bg-[#40444b] border-gray-600 text-white">
                      <SelectValue placeholder="Industry" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#2f3136] border-gray-700">
                      <SelectItem value="">All Industries</SelectItem>
                      <SelectItem value="AI/ML">AI/ML</SelectItem>
                      <SelectItem value="Fintech">Fintech</SelectItem>
                      <SelectItem value="HealthTech">HealthTech</SelectItem>
                      <SelectItem value="Web3">Web3</SelectItem>
                      <SelectItem value="E-commerce">E-commerce</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Co-Founder Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCoFounders.map((coFounder) => (
                <Card key={coFounder.id} className="bg-[#2f3136] border-gray-700 hover:bg-[#32363b] transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={coFounder.avatar} />
                            <AvatarFallback className="bg-[#404EED] text-white">
                              {coFounder.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          {coFounder.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#2f3136]"></div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-white">{coFounder.name}</h3>
                            {coFounder.verified && (
                              <CheckCircle className="w-4 h-4 text-blue-500" />
                            )}
                          </div>
                          <p className="text-sm text-gray-400">{coFounder.title}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-300">{coFounder.matchScore}%</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{coFounder.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{coFounder.lastActive}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{coFounder.bio}</p>

                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Skills</p>
                        <div className="flex flex-wrap gap-1">
                          {coFounder.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="secondary" className="bg-[#404EED] text-white text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {coFounder.skills.length > 3 && (
                            <Badge variant="secondary" className="bg-gray-600 text-white text-xs">
                              +{coFounder.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400 mb-1">Looking For</p>
                        <div className="flex flex-wrap gap-1">
                          {coFounder.lookingFor.map((role, index) => (
                            <Badge key={index} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                              {role}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {coFounder.ycBatch && (
                      <div className="flex items-center space-x-2 mb-4">
                        <Badge className="bg-orange-600 text-white">
                          <Rocket className="w-3 h-3 mr-1" />
                          YC {coFounder.ycBatch}
                        </Badge>
                      </div>
                    )}

                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleConnect(coFounder.id)}
                        className="flex-1 bg-[#404EED] hover:bg-[#404EED]/90 text-white"
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        Connect
                      </Button>
                      <Button
                        onClick={() => handlePass(coFounder.id)}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="matches" className="space-y-6">
            <Card className="bg-[#2f3136] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Your Matches</CardTitle>
                <p className="text-gray-400">Co-founders who are interested in connecting with you</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {matches.map((match) => (
                    <Card key={match.id} className="bg-[#40444b] border-gray-600">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={match.avatar} />
                            <AvatarFallback className="bg-[#404EED] text-white">
                              {match.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium text-white">{match.name}</h4>
                            <p className="text-sm text-gray-400">{match.title}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Message
                          </Button>
                          <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                            View Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="connections" className="space-y-6">
            <Card className="bg-[#2f3136] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Your Connections</CardTitle>
                <p className="text-gray-400">Co-founders you're already connected with</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {connections.map((connection) => (
                    <div key={connection.id} className="flex items-center justify-between p-4 bg-[#40444b] rounded-lg border border-gray-600">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={connection.avatar} />
                          <AvatarFallback className="bg-[#404EED] text-white">
                            {connection.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-white">{connection.name}</h4>
                          <p className="text-sm text-gray-400">{connection.title}</p>
                          <p className="text-xs text-gray-500">Connected 2 days ago</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                        <Button size="sm" className="bg-[#404EED] hover:bg-[#404EED]/90 text-white">
                          <Target className="w-4 h-4 mr-2" />
                          Start Project
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CoFounderMatching;
