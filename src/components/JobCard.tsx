
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, DollarSign, Clock, Users, Zap, Video } from 'lucide-react';
import JobDetailsModal from './JobDetailsModal';

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
  urgent?: boolean;
}

const JobCard = ({ 
  id, title, company, salary, location, type, tags, 
  interviewAvailable, applicants, posted, urgent 
}: JobCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const jobData = {
    id, title, company, salary, location, type, tags, applicants, posted, urgent
  };

  return (
    <>
      <Card className="bg-[#2f3136] border-gray-700 hover:bg-[#32363b] transition-all duration-200 group">
        <CardContent className="p-6">
          {urgent && (
            <Badge className="bg-red-500 text-white mb-3 animate-pulse">
              <Zap className="w-3 h-3 mr-1" />
              URGENT
            </Badge>
          )}
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#404EED] transition-colors">
              {title}
            </h3>
            <p className="text-gray-300 font-medium">{company}</p>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-400 text-sm">
              <DollarSign className="w-4 h-4 mr-2" />
              <span>{salary}</span>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{location}</span>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              <span>{posted}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-[#404EED] text-white text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-gray-400 text-sm">
              <Users className="w-4 h-4 mr-1" />
              <span>{applicants} applicants</span>
            </div>
            {interviewAvailable && (
              <Badge className="bg-green-600 text-white">
                <Video className="w-3 h-3 mr-1" />
                Interview Ready
              </Badge>
            )}
          </div>

          <div className="flex space-x-2">
            <Button 
              className="flex-1 bg-[#404EED] hover:bg-[#404EED]/90 text-white"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </Button>
            {interviewAvailable && (
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <Video className="w-4 h-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <JobDetailsModal 
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        job={jobData}
      />
    </>
  );
};

export default JobCard;
