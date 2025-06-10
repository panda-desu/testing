import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import JobCard from './JobCard';
import { Search, Hash, Users } from 'lucide-react';

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
    <div className="min-h-screen bg-[#36393f]">
      {/* Discord-style curved section divider */}
      <div className="relative">
        <svg className="w-full h-24 fill-[#404EED]" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Discord-style section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              WHERE HANGING OUT IS EASY
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse jobs, chat with employers, and find your perfect match. 
              Make job hunting less of a chore and more like hanging out with friends.
            </p>
          </div>

          {/* Discord-style feature cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
                Create an invite-only place where you belong
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Job servers are organized into topic-based channels where you can collaborate, 
                share ideas, and just talk about your career without clogging up your inbox.
              </p>
            </div>
            <div className="bg-[#2f3136] rounded-lg p-8 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Hash className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">general-jobs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Hash className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">tech-opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Hash className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">finance-roles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Interview Room</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div className="bg-[#2f3136] rounded-lg p-8 mb-8 border border-gray-700">
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for your dream job..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg bg-[#40444b] border-gray-600 text-white placeholder-gray-400 focus:border-[#404EED] rounded-lg"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {filters.map((filter) => (
                  <Button
                    key={filter.key}
                    variant={selectedFilter === filter.key ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedFilter(filter.key)}
                    className={`rounded-lg ${
                      selectedFilter === filter.key 
                        ? 'bg-[#404EED] text-white hover:bg-[#404EED]/90' 
                        : 'border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent'
                    }`}
                  >
                    {filter.label}
                    <Badge 
                      variant="secondary" 
                      className="ml-2 text-xs bg-gray-600 text-gray-200"
                    >
                      {filter.count}
                    </Badge>
                  </Button>
                ))}
              </div>
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
              <h3 className="text-xl font-semibold text-white mb-2">No jobs found</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobFeed;
