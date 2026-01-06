
import React, { useState } from 'react';
import { SocialProofCardData, ContentType } from '../types';
import PlatformBadge from './PlatformBadge';
import EmotionTag from './EmotionTag';
import { BadgeCheck, Play, ArrowRight } from 'lucide-react';

interface SocialProofCardProps {
  data: SocialProofCardData;
}

const SocialProofCard: React.FC<SocialProofCardProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const textLimit = 120;
  const isLong = data.content.length > textLimit;
  
  const displayText = isExpanded ? data.content : (isLong ? data.content.substring(0, textLimit) + '...' : data.content);

  const renderHighlightedContent = (text: string, highlight?: string) => {
    if (!highlight || !text.includes(highlight)) return <span>{text}</span>;
    const parts = text.split(highlight);
    return (
      <span>
        {parts[0]}
        <span className="bg-yellow-100 px-0.5 font-medium">{highlight}</span>
        {parts[1]}
      </span>
    );
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Media Header */}
      {data.type === ContentType.IMAGE && data.mediaUrl && (
        <div className="relative overflow-hidden aspect-[4/5]">
          <img 
            src={data.mediaUrl} 
            alt="Customer photo" 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
             <PlatformBadge platform={data.platform} />
          </div>
        </div>
      )}

      {data.type === ContentType.VIDEO && data.thumbnail && (
        <div className="relative overflow-hidden aspect-video group cursor-pointer">
          <img 
            src={data.thumbnail} 
            alt="Review thumbnail" 
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/40">
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <Play fill="currentColor" size={20} className="text-gray-900 ml-1" />
            </div>
          </div>
          <div className="absolute top-3 left-3">
             <PlatformBadge platform={data.platform} />
          </div>
          <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/60 text-white text-[10px] rounded backdrop-blur-md uppercase tracking-wider font-bold">
            0:45
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img src={data.user.avatar} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt={data.user.name} />
            <div>
              <div className="flex items-center gap-1">
                <h4 className="font-semibold text-gray-900 text-sm leading-tight">{data.user.name}</h4>
                {data.verifiedBuyer && (
                  <BadgeCheck size={16} className="text-blue-500 fill-blue-50" />
                )}
              </div>
              {data.user.handle && (
                <span className="text-xs text-gray-400 font-medium">{data.user.handle}</span>
              )}
            </div>
          </div>
          {(data.type === ContentType.TEXT) && (
             <PlatformBadge platform={data.platform} />
          )}
        </div>

        <div className="flex-grow">
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {renderHighlightedContent(displayText, data.highlightedPhrase)}
          </p>
          {isLong && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs font-bold text-gray-900 uppercase tracking-widest hover:underline mb-4"
            >
              {isExpanded ? 'Show less' : 'Read full story'}
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {data.tags.map(tag => (
              <EmotionTag key={tag} tag={tag} />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 group/link cursor-pointer">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Tagged:</span>
              <span className="text-[11px] font-semibold text-indigo-600 group-hover/link:underline">{data.product.name}</span>
              <ArrowRight size={12} className="text-indigo-600 transition-transform group-hover/link:translate-x-1" />
            </div>
            <span className="text-[10px] text-gray-400 font-medium">{data.timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofCard;
