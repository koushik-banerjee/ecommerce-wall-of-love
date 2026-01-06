
import React from 'react';
import { MOCK_REVIEWS } from '../constants'
import SocialProofCard from './SocialProofCard';
import { ArrowRight, Heart } from 'lucide-react';

interface WallOfLovePreviewProps {
  onViewAll: () => void;
}

const WallOfLovePreview: React.FC<WallOfLovePreviewProps> = ({ onViewAll }) => {
  // Show a curated mix of 3 cards for the preview
  const previewCards = MOCK_REVIEWS.filter(r => r.verifiedBuyer).slice(0, 3);

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
          <div className="max-w-xl">
             <div className="flex items-center gap-2 text-rose-500 font-bold tracking-widest uppercase text-xs mb-2">
                <Heart size={14} fill="currentColor" />
                Community Stories
             </div>
             <h2 className="text-4xl serif text-gray-900 leading-tight">
                See why <span className="italic">thousands</span> of people trust us every day.
             </h2>
          </div>
          <button 
            onClick={onViewAll}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
          >
            View all customer stories
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewCards.map((card) => (
            <SocialProofCard key={card.id} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WallOfLovePreview;
