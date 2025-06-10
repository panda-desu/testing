
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Gamepad2, Zap, Clock, Star, Crown, Medal, Target, Brain, Puzzle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Game {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  category: 'Logic' | 'Memory' | 'Speed' | 'Strategy';
  unlocked: boolean;
  bestScore: number | null;
}

interface LeaderboardEntry {
  rank: number;
  username: string;
  score: number;
  avatar: string;
  streak: number;
}

const Games = () => {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [userLevel, setUserLevel] = useState(7);
  const [userXP, setUserXP] = useState(2450);
  const [userRank, setUserRank] = useState(156);

  const games: Game[] = [
    {
      id: 'pattern-master',
      name: 'Pattern Master',
      description: 'Identify complex patterns and sequences to test logical thinking',
      icon: <Puzzle className="w-6 h-6" />,
      difficulty: 'Medium',
      duration: '5 min',
      category: 'Logic',
      unlocked: true,
      bestScore: 8750
    },
    {
      id: 'memory-matrix',
      name: 'Memory Matrix',
      description: 'Remember and recreate increasingly complex patterns',
      icon: <Brain className="w-6 h-6" />,
      difficulty: 'Easy',
      duration: '3 min',
      category: 'Memory',
      unlocked: true,
      bestScore: 6420
    },
    {
      id: 'speed-math',
      name: 'Speed Math',
      description: 'Solve mathematical problems as fast as possible',
      icon: <Zap className="w-6 h-6" />,
      difficulty: 'Hard',
      duration: '2 min',
      category: 'Speed',
      unlocked: true,
      bestScore: null
    },
    {
      id: 'tower-strategy',
      name: 'Tower Strategy',
      description: 'Plan optimal resource allocation and strategic thinking',
      icon: <Target className="w-6 h-6" />,
      difficulty: 'Hard',
      duration: '10 min',
      category: 'Strategy',
      unlocked: false,
      bestScore: null
    }
  ];

  const leaderboard: LeaderboardEntry[] = [
    { rank: 1, username: 'CyberNinja_MN', score: 15420, avatar: '🥷', streak: 25 },
    { rank: 2, username: 'CodeMaster2024', score: 14890, avatar: '🚀', streak: 18 },
    { rank: 3, username: 'AIWizard', score: 14650, avatar: '🧙‍♂️', streak: 22 },
    { rank: 4, username: 'LogicQueen', score: 13980, avatar: '👑', streak: 15 },
    { rank: 5, username: 'PatternHacker', score: 13720, avatar: '🔥', streak: 12 },
    { rank: 156, username: 'You', score: userXP, avatar: '😎', streak: 7 }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Logic': return 'bg-purple-500';
      case 'Memory': return 'bg-blue-500';
      case 'Speed': return 'bg-orange-500';
      case 'Strategy': return 'bg-indigo-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-[#36393f]">
      {/* Header */}
      <div className="bg-[#2f3136] border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-white mb-2">Psychometric Games</h1>
              <p className="text-gray-300">Showcase your skills, climb leaderboards, unlock exclusive jobs</p>
            </div>
            <Button onClick={() => navigate('/')} variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="games" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-[#40444b] max-w-md">
            <TabsTrigger value="games" className="text-white data-[state=active]:bg-[#404EED]">
              Games
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="text-white data-[state=active]:bg-[#404EED]">
              Leaderboard
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-white data-[state=active]:bg-[#404EED]">
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="games" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => (
                <Card key={game.id} className={`bg-[#2f3136] border-gray-700 hover:bg-[#32363b] transition-colors cursor-pointer ${!game.unlocked ? 'opacity-60' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-purple-400">
                          {game.icon}
                        </div>
                        <div>
                          <CardTitle className="text-white text-lg">{game.name}</CardTitle>
                          <p className="text-gray-400 text-sm">{game.duration}</p>
                        </div>
                      </div>
                      {!game.unlocked && <Crown className="w-5 h-5 text-yellow-500" />}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm">{game.description}</p>
                    
                    <div className="flex space-x-2">
                      <Badge className={`${getDifficultyColor(game.difficulty)} text-white`}>
                        {game.difficulty}
                      </Badge>
                      <Badge className={`${getCategoryColor(game.category)} text-white`}>
                        {game.category}
                      </Badge>
                    </div>

                    {game.bestScore && (
                      <div className="flex items-center space-x-2 text-sm">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">Best: </span>
                        <span className="text-white font-semibold">{game.bestScore.toLocaleString()}</span>
                      </div>
                    )}

                    <Button 
                      className={`w-full ${game.unlocked ? 'bg-[#404EED] hover:bg-[#404EED]/90' : 'bg-gray-600 cursor-not-allowed'}`}
                      disabled={!game.unlocked}
                      onClick={() => game.unlocked && setSelectedGame(game.id)}
                    >
                      {game.unlocked ? (
                        <>
                          <Gamepad2 className="w-4 h-4 mr-2" />
                          Play Now
                        </>
                      ) : (
                        <>
                          <Crown className="w-4 h-4 mr-2" />
                          Unlock at Level {userLevel + 1}
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="bg-[#2f3136] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Trophy className="w-6 h-6 mr-2 text-yellow-400" />
                  Global Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((entry, index) => (
                    <div 
                      key={entry.rank} 
                      className={`flex items-center justify-between p-4 rounded-lg ${
                        entry.username === 'You' 
                          ? 'bg-[#404EED]/20 border border-[#404EED]' 
                          : 'bg-[#40444b]'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          {entry.rank <= 3 && (
                            <div className="text-lg">
                              {entry.rank === 1 && '🥇'}
                              {entry.rank === 2 && '🥈'}
                              {entry.rank === 3 && '🥉'}
                            </div>
                          )}
                          <span className={`font-bold ${entry.rank <= 3 ? 'text-yellow-400' : 'text-gray-400'}`}>
                            #{entry.rank}
                          </span>
                        </div>
                        <div className="text-lg">{entry.avatar}</div>
                        <div>
                          <div className={`font-semibold ${entry.username === 'You' ? 'text-[#404EED]' : 'text-white'}`}>
                            {entry.username}
                          </div>
                          <div className="text-gray-400 text-sm flex items-center">
                            <Zap className="w-3 h-3 mr-1" />
                            {entry.streak} day streak
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-lg">
                          {entry.score.toLocaleString()}
                        </div>
                        <div className="text-gray-400 text-sm">XP</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#2f3136] border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Your Gaming Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">😎</div>
                    <h3 className="text-white font-semibold text-xl">Level {userLevel} Player</h3>
                    <p className="text-gray-400">Global Rank #{userRank}</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">XP Progress</span>
                        <span className="text-white">{userXP}/3000</span>
                      </div>
                      <Progress value={(userXP / 3000) * 100} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-[#40444b] rounded-lg p-3">
                        <div className="text-white font-bold text-xl">12</div>
                        <div className="text-gray-400 text-sm">Games Played</div>
                      </div>
                      <div className="bg-[#40444b] rounded-lg p-3">
                        <div className="text-white font-bold text-xl">7</div>
                        <div className="text-gray-400 text-sm">Win Streak</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2f3136] border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { icon: '🏆', title: 'Pattern Expert', desc: 'Score 8000+ in Pattern Master', unlocked: true },
                    { icon: '🧠', title: 'Memory Champion', desc: 'Perfect score in Memory Matrix', unlocked: true },
                    { icon: '⚡', title: 'Speed Demon', desc: 'Complete Speed Math in under 90s', unlocked: false },
                    { icon: '🎯', title: 'Strategic Mind', desc: 'Win 5 Strategy games in a row', unlocked: false }
                  ].map((achievement, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${achievement.unlocked ? 'bg-[#40444b]' : 'bg-gray-700 opacity-50'}`}>
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{achievement.title}</h4>
                        <p className="text-gray-400 text-sm">{achievement.desc}</p>
                      </div>
                      {achievement.unlocked && <Medal className="w-5 h-5 text-yellow-400" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Games;
