
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  MapPin, DollarSign, Clock, Users, Zap, Heart, Share2, 
  Sparkles, Trophy, Coffee, Gamepad2, TrendingUp, Star,
  MessageCircle, ThumbsUp, Bookmark, Video, Calendar
} from 'lucide-react';

interface JobDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: {
    id: string;
    title: string;
    company: string;
    salary: string;
    location: string;
    type: string;
    tags: string[];
    applicants: number;
    posted: string;
    urgent?: boolean;
  };
}

const JobDetailsModal = ({ isOpen, onClose, job }: JobDetailsModalProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const genZFeatures = [
    {
      icon: <Video className="w-5 h-5" />,
      title: 'TikTok-Style Job Tours',
      description: 'Watch 60-second office tours and day-in-the-life videos',
      engagement: '2.3M views'
    },
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      title: 'Skill Challenges',
      description: 'Complete mini-games to unlock exclusive job opportunities',
      engagement: 'Level 7 unlocked'
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      title: 'Vibe Check™',
      description: 'Real employee reviews on work-life balance & company culture',
      engagement: '4.8/5 vibes'
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: 'AI Resume Glow-Up',
      description: 'Get your resume optimized for this exact role in seconds',
      engagement: '+87% match rate'
    }
  ];

  const companyVibes = [
    { label: 'Remote Flexibility', score: 95, emoji: '🏠' },
    { label: 'Work-Life Balance', score: 88, emoji: '⚖️' },
    { label: 'Growth Opportunities', score: 92, emoji: '📈' },
    { label: 'Team Energy', score: 85, emoji: '⚡' },
    { label: 'Learning Budget', score: 90, emoji: '🧠' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#2f3136] border-gray-700">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-white mb-2">
                {job.title}
              </DialogTitle>
              <div className="flex items-center space-x-4 text-gray-300">
                <span className="font-semibold">{job.company}</span>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4" />
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={`${isLiked ? 'text-red-400' : 'text-gray-400'} hover:text-red-400`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSaved(!isSaved)}
                className={`${isSaved ? 'text-yellow-400' : 'text-gray-400'} hover:text-yellow-400`}
              >
                <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-4 bg-[#40444b]">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-[#404EED]">
              Overview
            </TabsTrigger>
            <TabsTrigger value="vibes" className="text-white data-[state=active]:bg-[#404EED]">
              Vibes ✨
            </TabsTrigger>
            <TabsTrigger value="perks" className="text-white data-[state=active]:bg-[#404EED]">
              Perks 🎁
            </TabsTrigger>
            <TabsTrigger value="apply" className="text-white data-[state=active]:bg-[#404EED]">
              Apply 🚀
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Card className="bg-[#40444b] border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                      Quick Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-gray-300">
                      <span>Applications</span>
                      <span className="text-white font-semibold">{job.applicants}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Posted</span>
                      <span className="text-white font-semibold">{job.posted}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Job Type</span>
                      <span className="text-white font-semibold">{job.type}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Response Rate</span>
                      <span className="text-green-400 font-semibold">85%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#40444b] border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                      Skills Match
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-300">Overall Match</span>
                          <span className="text-white font-semibold">92%</span>
                        </div>
                        <Progress value={92} className="h-2" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="bg-[#404EED] text-white">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-[#40444b] border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                      Gen Z Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {genZFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-[#36393f] hover:bg-[#42464d] transition-colors cursor-pointer">
                        <div className="text-purple-400 mt-1">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium">{feature.title}</h4>
                          <p className="text-gray-400 text-sm">{feature.description}</p>
                          <div className="text-purple-400 text-xs mt-1 font-semibold">
                            {feature.engagement}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="vibes" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#40444b] border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white">Company Vibe Check™</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {companyVibes.map((vibe, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 flex items-center">
                          <span className="mr-2">{vibe.emoji}</span>
                          {vibe.label}
                        </span>
                        <span className="text-white font-semibold">{vibe.score}%</span>
                      </div>
                      <Progress value={vibe.score} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-[#40444b] border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white">Employee Tea ☕</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-[#36393f] rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs">A</div>
                      <span className="text-white font-medium">Anonymous</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">"Best place I've worked! Actually care about mental health and work-life balance. Free snacks are fire too 🔥"</p>
                  </div>
                  
                  <div className="p-3 bg-[#36393f] rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs">B</div>
                      <span className="text-white font-medium">Anonymous</span>
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">"Great learning opportunities but can get intense during crunch time. Management is pretty chill though."</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="perks" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: '🏠', title: 'Remote-First', desc: 'Work from anywhere' },
                { icon: '💰', title: 'Crypto Salary', desc: 'Get paid in BTC/ETH' },
                { icon: '🎮', title: 'Gaming Lounge', desc: 'PS5 & gaming setup' },
                { icon: '☕', title: 'Unlimited Coffee', desc: 'Premium coffee bar' },
                { icon: '📚', title: 'Learning Budget', desc: '$2000/year courses' },
                { icon: '🌴', title: 'Unlimited PTO', desc: 'Take time when needed' },
                { icon: '🍕', title: 'Free Meals', desc: 'Lunch & dinner provided' },
                { icon: '💪', title: 'Gym Membership', desc: 'Premium fitness access' },
                { icon: '🎵', title: 'Spotify Premium', desc: 'Music while working' }
              ].map((perk, index) => (
                <Card key={index} className="bg-[#40444b] border-gray-600 hover:bg-[#42464d] transition-colors">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">{perk.icon}</div>
                    <h4 className="text-white font-medium mb-1">{perk.title}</h4>
                    <p className="text-gray-400 text-xs">{perk.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="apply" className="mt-6">
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Apply? 🚀</h3>
                <p className="text-gray-300">Skip the boring forms - apply in 60 seconds</p>
              </div>
              
              <div className="space-y-4">
                <Button className="w-full bg-[#404EED] hover:bg-[#404EED]/90 text-white font-semibold py-6 text-lg">
                  <Video className="w-5 h-5 mr-2" />
                  Apply with Video (30 sec max)
                </Button>
                
                <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700 py-6 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule AI Interview
                </Button>
                
                <Button variant="ghost" className="w-full text-gray-400 hover:text-white py-6 text-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with Current Employee
                </Button>
              </div>

              <div className="text-sm text-gray-400">
                <p>🔥 Hot tip: Companies respond 3x faster to video applications!</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsModal;
