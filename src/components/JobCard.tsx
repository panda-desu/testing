
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Users, TrendingUp } from 'lucide-react';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  salary: string;
  location: string;
  type: string;
  tags: string[];
  interviewAvailable: boolean;
  applicants: number;
  posted: string;
  logo?: string;
  urgent?: boolean;
}

const JobCard = ({ 
  id, 
  title, 
  company, 
  salary, 
  location, 
  type, 
  tags, 
  interviewAvailable, 
  applicants, 
  posted,
  logo,
  urgent = false
}: JobCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 gradient-card backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center">
              {logo ? (
                <img src={logo} alt={company} className="w-8 h-8 rounded" />
              ) : (
                <span className="text-electric-blue font-bold text-lg">
                  {company.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-charcoal group-hover:text-electric-blue transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground">{company}</p>
            </div>
          </div>
          {urgent && (
            <Badge className="bg-warning-orange text-white animate-pulse">
              Urgent
            </Badge>
          )}
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{posted}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-semibold text-lg text-vibrant-green">{salary}</span>
            <Badge variant="secondary">{type}</Badge>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{applicants} applied</span>
          </div>
          {interviewAvailable && (
            <div className="flex items-center gap-1 text-sm text-vibrant-green">
              <TrendingUp className="w-4 h-4" />
              <span>Interview available</span>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
          >
            View Details
          </Button>
          <Button 
            size="sm" 
            className="flex-1 bg-electric-blue hover:bg-electric-blue/90 text-white font-semibold"
            disabled={!interviewAvailable}
          >
            {interviewAvailable ? '🎤 Interview Now' : 'Interview Unavailable'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
