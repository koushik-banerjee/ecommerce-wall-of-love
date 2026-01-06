
import React from 'react';
import { Platform } from '../types';
import { Instagram, Youtube, Twitter, Mail, MessageSquare } from 'lucide-react';

interface PlatformBadgeProps {
  platform: Platform;
  size?: number;
}

const PlatformBadge: React.FC<PlatformBadgeProps> = ({ platform, size = 16 }) => {
  const getIcon = () => {
    switch (platform) {
      case Platform.INSTAGRAM:
        return <Instagram size={size} className="text-pink-500" />;
      case Platform.YOUTUBE:
        return <Youtube size={size} className="text-red-500" />;
      case Platform.X:
        return <Twitter size={size} className="text-blue-400" />;
      case Platform.EMAIL:
        return <Mail size={size} className="text-gray-500" />;
      case Platform.WHATSAPP:
        return <MessageSquare size={size} className="text-green-500" />;
      default:
        return null;
    }
  };

  const getLabel = () => {
    return platform.charAt(0).toUpperCase() + platform.slice(1);
  };

  return (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-white border border-gray-100 rounded-full shadow-sm text-[10px] font-bold uppercase tracking-wider text-gray-500">
      {getIcon()}
      <span>{getLabel()}</span>
    </div>
  );
};

export default PlatformBadge;
