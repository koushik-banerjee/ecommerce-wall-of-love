
import React from 'react';
import { EmotionTag as EmotionTagType } from '../types';

interface EmotionTagProps {
  tag: EmotionTagType;
  className?: string;
}

const EmotionTag: React.FC<EmotionTagProps> = ({ tag, className = "" }) => {
  return (
    <span className={`inline-block px-2 py-0.5 text-[10px] font-medium bg-indigo-50 text-indigo-700 rounded-md ${className}`}>
      {tag}
    </span>
  );
};

export default EmotionTag;
