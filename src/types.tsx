
export enum Platform {
  INSTAGRAM = 'instagram',
  YOUTUBE = 'youtube',
  X = 'x',
  WHATSAPP = 'whatsapp',
  EMAIL = 'email'
}

export enum ContentType {
  VIDEO = 'video',
  IMAGE = 'image',
  TEXT = 'text'
}

export enum EmotionTag {
  COMFORT = 'Comfort',
  QUALITY = 'Quality',
  FIT = 'Fit',
  VALUE = 'Value',
  GIFT = 'Gift-worthy'
}

export interface User {
  name: string;
  handle?: string;
  avatar: string;
}

export interface Product {
  name: string;
  id: string;
}

export interface SocialProofCardData {
  id: string;
  user: User;
  platform: Platform;
  type: ContentType;
  content: string;
  mediaUrl?: string;
  thumbnail?: string;
  timestamp: string; // Relative timestamp string
  verifiedBuyer: boolean;
  tags: EmotionTag[];
  product: Product;
  highlightedPhrase?: string;
}
