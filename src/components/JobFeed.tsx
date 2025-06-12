
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
      title: 'Ахлах Frontend Хөгжүүлэгч',
      company: 'Ази Номхон Далайн Их Сургууль (APU)',
      salary: '₮2,500,000 - ₮3,500,000',
      location: 'Улаанбаатар',
      type: 'Бүтэн цагийн',
      tags: ['React', 'TypeScript', 'Алсаас ажиллах боломжтой'],
      interviewAvailable: true,
      applicants: 23,
      posted: '2 цагийн өмнө',
      urgent: true
    },
    {
      id: '2',
      title: 'Дижитал Маркетингийн Менежер',
      company: 'MCSI (Монгол)',
      salary: '₮1,800,000 - ₮2,800,000',
      location: 'Улаанбаатар',
      type: 'Бүтэн цагийн',
      tags: ['Маркетинг', 'Нийгмийн сүлжээ', 'Аналитик'],
      interviewAvailable: true,
      applicants: 45,
      posted: '4 цагийн өмнө'
    },
    {
      id: '3',
      title: 'Дэлгүүрийн Менежер',
      company: 'GS25 Монгол',
      salary: '₮1,200,000 - ₮1,800,000',
      location: 'Олон байршил',
      type: 'Бүтэн цагийн',
      tags: ['Жижиглэн худалдаа', 'Удирдлага', 'Үйлчлүүлэгчийн үйлчилгээ'],
      interviewAvailable: true,
      applicants: 67,
      posted: '6 цагийн өмнө'
    },
    {
      id: '4',
      title: 'Санхүүгийн Шинжээч',
      company: 'Teso Life',
      salary: '₮2,000,000 - ₮3,000,000',
      location: 'Улаанбаатар',
      type: 'Бүтэн цагийн',
      tags: ['Санхүү', 'Excel', 'Аналитик'],
      interviewAvailable: false,
      applicants: 89,
      posted: '1 өдрийн өмнө'
    },
    {
      id: '5',
      title: 'Мобайл Апп Хөгжүүлэгч',
      company: 'Unitel',
      salary: '₮2,200,000 - ₮3,200,000',
      location: 'Улаанбаатар',
      type: 'Бүтэн цагийн',
      tags: ['Мобайл', 'iOS', 'Android', 'React Native'],
      interviewAvailable: true,
      applicants: 34,
      posted: '5 цагийн өмнө'
    },
    {
      id: '6',
      title: 'Салбарын Менежер',
      company: 'Хаан Банк',
      salary: '₮1,800,000 - ₮2,500,000',
      location: 'Дархан',
      type: 'Бүтэн цагийн',
      tags: ['Банкны үйлчилгээ', 'Удирдлага', 'Үйлчлүүлэгчийн харилцаа'],
      interviewAvailable: true,
      applicants: 52,
      posted: '3 цагийн өмнө'
    }
  ];

  const filters = [
    { key: 'all', label: 'Бүх ажлын байр', count: jobs.length },
    { key: 'interview', label: 'Ярилцлага бэлэн', count: jobs.filter(j => j.interviewAvailable).length },
    { key: 'urgent', label: 'Яаралтай', count: jobs.filter(j => j.urgent).length },
    { key: 'remote', label: 'Алсаас ажиллах', count: jobs.filter(j => j.tags.includes('Алсаас ажиллах боломжтой')).length }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'interview' && job.interviewAvailable) ||
                         (selectedFilter === 'urgent' && job.urgent) ||
                         (selectedFilter === 'remote' && job.tags.includes('Алсаас ажиллах боломжтой'));
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div id="job-section" className="min-h-screen bg-[#36393f]">
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
              АЖЛЫН БАЙР ХАЙХ ХЯЛБАР АРГА
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ажлын байр үзэж, ажил олгогчидтой чатлаж, өөрийн төгс тохирлыг олоорой. 
              Ажил хайх явцыг амархан, найзуудтайгаа уулзаж байгаа мэт болгоорой.
            </p>
          </div>

          {/* Discord-style feature cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
                Та өөрийнхөө орон зайг бүтээгээрэй
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ажлын серверүүд нь сэдвийн дагуу зохион байгуулагдсан сувгуудад хуваагддаг бөгөөд 
                та хамтран ажиллаж, санаа солилцож, карьерийнхаа талаар ярилцах боломжтой.
              </p>
            </div>
            <div className="bg-[#2f3136] rounded-lg p-8 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Hash className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">ерөнхий-ажлын-байр</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Hash className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">технологи-боломжууд</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Hash className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">санхүү-албан-тушаал</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Ярилцлагын өрөө</span>
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
                  placeholder="Мөрөөдлийн ажлаа хайгаарай..."
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
              <h3 className="text-xl font-semibold text-white mb-2">Ажлын байр олдсонгүй</h3>
              <p className="text-gray-400">Хайлт эсвэл шүүлтүүрээ өөрчилж үзээрэй</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobFeed;
