
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import JobCard from './JobCard';
import { Search, Filter, MapPin, Clock } from 'lucide-react';

const JobFeed = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const jobs = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'APU (Asia Pacific University)',
      salary: '₮2,500,000 - ₮3,500,000',
      location: 'Ulaanbaatar',
      type: 'Full-time',
      tags: ['React', 'TypeScript', 'Remote OK'],
      interviewAvailable: true,
      applicants: 23,
      posted: '2 hours ago',
      urgent: true
    },
    {
      id: '2',
      title: 'Digital Marketing Manager',
      company: 'MCSI (Mongolia)',
      salary: '₮1,800,000 - ₮2,800,000',
      location: 'Ulaanbaatar',
      type: 'Full-time',
      tags: ['Marketing', 'Social Media', 'Analytics'],
      interviewAvailable: true,
      applicants: 45,
      posted: '4 hours ago'
    },
    {
      id: '3',
      title: 'Store Manager',
      company: 'GS25 Mongolia',
      salary: '₮1,200,000 - ₮1,800,000',
      location: 'Multiple locations',
      type: 'Full-time',
      tags: ['Retail', 'Management', 'Customer Service'],
      interviewAvailable: true,
      applicants: 67,
      posted: '6 hours ago'
    },
    {
      id: '4',
      title: 'Financial Analyst',
      company: 'Teso Life',
      salary: '₮2,000,000 - ₮3,000,000',
      location: 'Ulaanbaatar',
      type: 'Full-time',
      tags: ['Finance', 'Excel', 'Analytics'],
      interviewAvailable: false,
      applicants: 89,
      posted: '1 day ago'
    },
    {
      id: '5',
      title: 'Mobile App Developer',
      company: 'Unitel',
      salary: '₮2,200,000 - ₮3,200,000',
      location: 'Ulaanbaatar',
      type: 'Full-time',
      tags: ['Mobile', 'iOS', 'Android', 'React Native'],
      interviewAvailable: true,
      applicants: 34,
      posted: '5 hours ago'
    },
    {
      id: '6',
      title: 'Branch Manager',
      company: 'Khan Bank',
      salary: '₮1,800,000 - ₮2,500,000',
      location: 'Darkhan',
      type: 'Full-time',
      tags: ['Banking', 'Leadership', 'Customer Relations'],
      interviewAvailable: true,
      applicants: 52,
      posted: '3 hours ago'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Jobs', count: jobs.length },
    { key: 'interview', label: 'Interview Ready', count: jobs.filter(j => j.interviewAvailable).length },
    { key: 'urgent', label: 'Urgent', count: jobs.filter(j => j.urgent).length },
    { key: 'remote', label: 'Remote OK', count: jobs.filter(j => j.tags.includes('Remote OK')).length }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'interview' && job.interviewAvailable) ||
                         (selectedFilter === 'urgent' && job.urgent) ||
                         (selectedFilter === 'remote' && job.tags.includes('Remote OK'));
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-light-gray/30 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Live Job Opportunities
          </h2>
          <p className="text-muted-foreground text-lg">
            Find your next role and interview instantly
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search jobs, companies, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg rounded-2xl border-0 shadow-lg focus:ring-2 focus:ring-electric-blue"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={selectedFilter === filter.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter(filter.key)}
                className={`rounded-full ${
                  selectedFilter === filter.key 
                    ? 'bg-electric-blue text-white' 
                    : 'hover:bg-electric-blue/10'
                }`}
              >
                {filter.label}
                <Badge 
                  variant="secondary" 
                  className="ml-2 text-xs"
                >
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-electric-blue">247</div>
            <div className="text-sm text-muted-foreground">Active Jobs</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-vibrant-green">1,542</div>
            <div className="text-sm text-muted-foreground">Interviews Today</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-warning-orange">89</div>
            <div className="text-sm text-muted-foreground">Hired This Week</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-charcoal">98%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>

        {/* Job Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <div key={job.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <JobCard {...job} />
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-charcoal mb-2">No jobs found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobFeed;
