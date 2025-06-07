
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Star, TrendingUp, Users } from 'lucide-react';

const SuccessSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Batbayar Erdene',
      role: 'Software Engineer',
      company: 'APU',
      content: 'I got hired in just 2 days! The AI interview was so natural, I forgot I was talking to a machine.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      time: '45 seconds',
      salary: '₮2.8M'
    },
    {
      id: 2,
      name: 'Sarnai Munkh',
      role: 'Marketing Manager',
      company: 'MCSI',
      content: 'No more waiting weeks for callbacks. I interviewed for 3 companies in one morning!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      time: '38 seconds',
      salary: '₮2.2M'
    },
    {
      id: 3,
      name: 'Munkhjin Bold',
      role: 'Store Manager',
      company: 'GS25',
      content: 'Finally, a platform that focuses on skills, not just paper qualifications.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      time: '52 seconds',
      salary: '₮1.6M'
    }
  ];

  const recentHires = [
    { name: 'Tuguldur', company: 'Khan Bank', time: '2 min ago' },
    { name: 'Oyunaa', company: 'Unitel', time: '5 min ago' },
    { name: 'Ganbold', company: 'Teso Life', time: '8 min ago' },
    { name: 'Saruul', company: 'APU', time: '12 min ago' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Success in <span className="text-electric-blue">60 Seconds</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people who transformed their careers with instant interviews
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Testimonials */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-electric-blue to-vibrant-green aspect-video flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full w-20 h-20">
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <img 
                          src={testimonials[currentTestimonial].avatar} 
                          alt={testimonials[currentTestimonial].name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-charcoal">
                            {testimonials[currentTestimonial].name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                          </p>
                        </div>
                      </div>
                      <p className="text-charcoal text-sm mb-3">
                        "{testimonials[currentTestimonial].content}"
                      </p>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Interview time: {testimonials[currentTestimonial].time}</span>
                        <span>Salary: {testimonials[currentTestimonial].salary}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-electric-blue' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Live Activity & Stats */}
          <div className="space-y-6">
            {/* Real-time Hires */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-vibrant-green" />
                  <h3 className="font-semibold text-charcoal">Recent Hires</h3>
                  <div className="w-2 h-2 bg-vibrant-green rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  {recentHires.map((hire, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <div>
                        <span className="font-medium">{hire.name}</span>
                        <span className="text-muted-foreground"> at {hire.company}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{hire.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Success Stats */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-warning-orange" />
                  <h3 className="font-semibold text-charcoal">Success Metrics</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Interview Success Rate</span>
                    <span className="font-bold text-vibrant-green">98.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Avg. Interview Time</span>
                    <span className="font-bold text-electric-blue">47 sec</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Salary Increase</span>
                    <span className="font-bold text-warning-orange">+23%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Time to Hire</span>
                    <span className="font-bold text-charcoal">1.2 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Reviews */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-electric-blue" />
                  <h3 className="font-semibold text-charcoal">User Rating</h3>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-charcoal mb-2">4.9</div>
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-warning-orange text-warning-orange" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">From 12,847 reviews</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
