
import React, { useState, useMemo } from 'react';
import { MOCK_REVIEWS } from '../constants';
import { ContentType, EmotionTag, Platform } from '../types';
import SocialProofCard from './SocialProofCard';
import FilterTabs from './FilterTabs';
// Import PlatformBadge to fix "Cannot find name 'PlatformBadge'" error
import PlatformBadge from './PlatformBadge';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

const WallOfLovePage: React.FC = () => {
  const [activeType, setActiveType] = useState<string>('all');
  const [activeTag, setActiveTag] = useState<string>('all');
  const [activePlatform, setActivePlatform] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const typeOptions = [
    { label: 'All Content', value: 'all' },
    { label: 'Photos', value: ContentType.IMAGE },
    { label: 'Videos', value: ContentType.VIDEO },
    { label: 'Writing', value: ContentType.TEXT },
  ];

  const tagOptions = [
    { label: 'Any Theme', value: 'all' },
    ...Object.values(EmotionTag).map(tag => ({ label: tag, value: tag })),
  ];

  const platformOptions = [
    { label: 'Everywhere', value: 'all' },
    ...Object.values(Platform).map(p => ({ label: p.charAt(0).toUpperCase() + p.slice(1), value: p })),
  ];

  const filteredItems = useMemo(() => {
    return MOCK_REVIEWS.filter((item) => {
      const matchType = activeType === 'all' || item.type === activeType;
      const matchTag = activeTag === 'all' || item.tags.includes(activeTag as EmotionTag);
      const matchPlatform = activePlatform === 'all' || item.platform === activePlatform;
      const matchSearch = searchQuery === '' || 
        item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.product.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchType && matchTag && matchPlatform && matchSearch;
    });
  }, [activeType, activeTag, activePlatform, searchQuery]);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Header */}
      <header className="pt-24 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl serif text-gray-900 mb-6">Wall of Love</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed">
            Real stories from our community members. No scripts, no studio lighting, 
            just authentic feedback from people living with our products.
          </p>
        </div>
      </header>

      {/* Filter Section */}
      <section className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100 py-6 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
             <div className="flex flex-col gap-1">
                <div className="flex items-center gap-6 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                   <FilterTabs 
                    options={typeOptions} 
                    currentValue={activeType} 
                    onChange={setActiveType}
                  />
                  <div className="h-8 w-px bg-gray-200 hidden lg:block mb-6" />
                  <FilterTabs 
                    options={tagOptions} 
                    currentValue={activeTag} 
                    onChange={setActiveTag}
                  />
                </div>
             </div>

             <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Search reviews or products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 pr-4 py-3 w-full lg:w-80 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {filteredItems.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="break-inside-avoid">
                <SocialProofCard data={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
               <SlidersHorizontal size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms.</p>
            <button 
              onClick={() => {setActiveType('all'); setActiveTag('all'); setActivePlatform('all'); setSearchQuery('');}}
              className="mt-6 text-indigo-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Load More Mock */}
        {filteredItems.length > 0 && (
          <div className="mt-20 text-center">
             <button className="px-8 py-4 bg-white border border-gray-200 rounded-2xl font-bold text-gray-900 hover:border-gray-900 transition-all flex items-center gap-2 mx-auto">
                Discover more moments
                <ChevronDown size={20} />
             </button>
          </div>
        )}
      </main>

      <footer className="bg-white py-20 border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h4 className="text-2xl serif mb-4">Have a story to share?</h4>
            <p className="text-gray-500 mb-8">Tag us <span className="font-bold text-gray-900">@ModernStride</span> for a chance to be featured!</p>
            <div className="flex justify-center gap-4">
               {Object.values(Platform).slice(0, 3).map(p => (
                 <div key={p} className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors cursor-pointer text-gray-500">
                    <PlatformBadge platform={p} size={20} />
                 </div>
               ))}
            </div>
         </div>
      </footer>
    </div>
  );
};

export default WallOfLovePage;
