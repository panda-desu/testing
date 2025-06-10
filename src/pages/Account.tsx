
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  User, FileText, Building2, Calendar, Clock, Video, 
  MapPin, Mail, Phone, Edit, Download, Upload, Eye,
  CheckCircle, AlertCircle, Timer, MessageSquare
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Application {
  id: string;
  company: string;
  position: string;
  appliedDate: string;
  status: 'pending' | 'reviewing' | 'interview' | 'decision' | 'hired' | 'rejected';
  progress: number;
  expectedResponse: string;
  interviewHistory?: string;
  logo: string;
}

const Account = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  const [userInfo, setUserInfo] = useState({
    name: 'Alex Chen',
    email: 'alex.chen@email.com',
    phone: '+976 9999 1234',
    location: 'Ulaanbaatar, Mongolia',
    title: 'Full Stack Developer',
    bio: 'Passionate developer with 3+ years of experience in React, Node.js, and MongoDB. Love building user-centric applications and working in agile teams.'
  });

  const applications: Application[] = [
    {
      id: '1',
      company: 'APU Mongolia',
      position: 'Senior Frontend Developer',
      appliedDate: '2024-12-09',
      status: 'interview',
      progress: 75,
      expectedResponse: 'Dec 12, 2024 (2 days)',
      interviewHistory: 'ai-interview-1',
      logo: '🎓'
    },
    {
      id: '2',
      company: 'MCSI',
      position: 'Digital Marketing Manager',
      appliedDate: '2024-12-08',
      status: 'reviewing',
      progress: 50,
      expectedResponse: 'Dec 15, 2024 (5 days)',
      logo: '💼'
    },
    {
      id: '3',
      company: 'Khan Bank',
      position: 'Software Engineer',
      appliedDate: '2024-12-07',
      status: 'pending',
      progress: 25,
      expectedResponse: 'Dec 18, 2024 (8 days)',
      logo: '🏦'
    },
    {
      id: '4',
      company: 'Unitel',
      position: 'Mobile Developer',
      appliedDate: '2024-12-05',
      status: 'hired',
      progress: 100,
      expectedResponse: 'Completed',
      interviewHistory: 'ai-interview-2',
      logo: '📱'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-gray-500';
      case 'reviewing': return 'bg-blue-500';
      case 'interview': return 'bg-purple-500';
      case 'decision': return 'bg-yellow-500';
      case 'hired': return 'bg-green-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'reviewing': return <Eye className="w-4 h-4" />;
      case 'interview': return <Video className="w-4 h-4" />;
      case 'decision': return <AlertCircle className="w-4 h-4" />;
      case 'hired': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#36393f]">
      {/* Header */}
      <div className="bg-[#2f3136] border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-white mb-2">My Account</h1>
              <p className="text-gray-300">Manage your profile, CV, and track applications</p>
            </div>
            <Button onClick={() => navigate('/')} variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="profile" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-[#40444b] max-w-md">
            <TabsTrigger value="profile" className="text-white data-[state=active]:bg-[#404EED]">
              Profile
            </TabsTrigger>
            <TabsTrigger value="cv" className="text-white data-[state=active]:bg-[#404EED]">
              CV
            </TabsTrigger>
            <TabsTrigger value="applications" className="text-white data-[state=active]:bg-[#404EED]">
              Applications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-[#2f3136] border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    Personal Info
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsEditing(!isEditing)}
                      className="text-purple-400 hover:text-purple-300"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-[#404EED] rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    {isEditing ? (
                      <Input
                        value={userInfo.name}
                        onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                        className="bg-[#40444b] border-gray-600 text-white text-center font-semibold"
                      />
                    ) : (
                      <h3 className="text-white font-semibold text-xl">{userInfo.name}</h3>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      {isEditing ? (
                        <Input
                          value={userInfo.email}
                          onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                          className="bg-[#40444b] border-gray-600 text-white"
                        />
                      ) : (
                        <span className="text-gray-300">{userInfo.email}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      {isEditing ? (
                        <Input
                          value={userInfo.phone}
                          onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                          className="bg-[#40444b] border-gray-600 text-white"
                        />
                      ) : (
                        <span className="text-gray-300">{userInfo.phone}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      {isEditing ? (
                        <Input
                          value={userInfo.location}
                          onChange={(e) => setUserInfo({...userInfo, location: e.target.value})}
                          className="bg-[#40444b] border-gray-600 text-white"
                        />
                      ) : (
                        <span className="text-gray-300">{userInfo.location}</span>
                      )}
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex space-x-2 pt-4">
                      <Button onClick={() => setIsEditing(false)} className="bg-[#404EED] hover:bg-[#404EED]/90 flex-1">
                        Save
                      </Button>
                      <Button onClick={() => setIsEditing(false)} variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                        Cancel
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="md:col-span-2">
                <Card className="bg-[#2f3136] border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">About Me</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {isEditing ? (
                      <Input
                        value={userInfo.title}
                        onChange={(e) => setUserInfo({...userInfo, title: e.target.value})}
                        className="bg-[#40444b] border-gray-600 text-white font-semibold text-lg"
                        placeholder="Your professional title"
                      />
                    ) : (
                      <h3 className="text-white font-semibold text-lg">{userInfo.title}</h3>
                    )}
                    
                    {isEditing ? (
                      <Textarea
                        value={userInfo.bio}
                        onChange={(e) => setUserInfo({...userInfo, bio: e.target.value})}
                        className="bg-[#40444b] border-gray-600 text-white min-h-[120px]"
                        placeholder="Tell us about yourself..."
                      />
                    ) : (
                      <p className="text-gray-300 leading-relaxed">{userInfo.bio}</p>
                    )}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-white font-bold text-2xl">12</div>
                        <div className="text-gray-400 text-sm">Applications</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold text-2xl">8</div>
                        <div className="text-gray-400 text-sm">Interviews</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold text-2xl">3</div>
                        <div className="text-gray-400 text-sm">Offers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold text-2xl">92%</div>
                        <div className="text-gray-400 text-sm">Match Rate</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cv" className="space-y-6">
            <Card className="bg-[#2f3136] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="w-6 h-6 mr-2" />
                    My CV
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload New
                    </Button>
                    <Button className="bg-[#404EED] hover:bg-[#404EED]/90">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-[#40444b] rounded-lg p-6 border-2 border-dashed border-gray-600">
                  <div className="text-center">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">Alex_Chen_CV_2024.pdf</h3>
                    <p className="text-gray-400 text-sm mb-4">Last updated: December 8, 2024</p>
                    <div className="flex justify-center space-x-4">
                      <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        <Edit className="w-4 h-4 mr-2" />
                        AI Optimize
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-white font-semibold mb-4">CV Health Score</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Overall Score</span>
                        <span className="text-white font-semibold">87/100</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-[#40444b] rounded p-3">
                        <div className="text-green-400 font-semibold">✓ Strong Points</div>
                        <ul className="text-gray-300 mt-1 space-y-1">
                          <li>• Clear structure</li>
                          <li>• Relevant skills</li>
                          <li>• Good length</li>
                        </ul>
                      </div>
                      
                      <div className="bg-[#40444b] rounded p-3">
                        <div className="text-yellow-400 font-semibold">⚠ Improvements</div>
                        <ul className="text-gray-300 mt-1 space-y-1">
                          <li>• Add more metrics</li>
                          <li>• Update contact info</li>
                        </ul>
                      </div>
                      
                      <div className="bg-[#40444b] rounded p-3">
                        <div className="text-blue-400 font-semibold">💡 AI Suggestions</div>
                        <ul className="text-gray-300 mt-1 space-y-1">
                          <li>• Keyword optimization</li>
                          <li>• Industry alignment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <div className="space-y-4">
              {applications.map((app) => (
                <Card key={app.id} className="bg-[#2f3136] border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{app.logo}</div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">{app.position}</h3>
                          <p className="text-gray-300">{app.company}</p>
                          <p className="text-gray-400 text-sm">Applied: {app.appliedDate}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Badge className={`${getStatusColor(app.status)} text-white mb-2`}>
                          <span className="mr-1">{getStatusIcon(app.status)}</span>
                          {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                        </Badge>
                        <div className="text-gray-400 text-sm">
                          <Timer className="w-4 h-4 inline mr-1" />
                          {app.expectedResponse}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">Application Progress</span>
                        <span className="text-white">{app.progress}%</span>
                      </div>
                      <Progress value={app.progress} className="h-2" />
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                          <Building2 className="w-4 h-4 mr-2" />
                          View Company
                        </Button>
                        {app.interviewHistory && (
                          <Button 
                            size="sm" 
                            className="bg-purple-600 hover:bg-purple-700"
                            onClick={() => navigate(`/ai-interview/${app.interviewHistory}`)}
                          >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Interview History
                          </Button>
                        )}
                      </div>
                      
                      <div className="text-gray-400 text-sm">
                        Next update in 2 days
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;
