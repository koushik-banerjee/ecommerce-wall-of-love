
import { SocialProofCardData, Platform, ContentType, EmotionTag } from './types';

export const MOCK_REVIEWS: SocialProofCardData[] = [
  {
    id: '1',
    user: { name: 'Sarah J.', handle: '@sarah_j_style', avatar: 'https://picsum.photos/id/64/100/100' },
    platform: Platform.INSTAGRAM,
    type: ContentType.IMAGE,
    mediaUrl: 'https://picsum.photos/id/103/600/800',
    content: "Obsessed with these linen pants! 😍 They are so breathable for the summer. Literally lived in them all weekend. #effortlessstyle #linenlife",
    timestamp: '2 days ago',
    verifiedBuyer: true,
    tags: [EmotionTag.COMFORT, EmotionTag.FIT],
    product: { name: 'Relaxed Linen Trousers', id: 'pants-001' },
    highlightedPhrase: "breathable for the summer"
  },
  {
    id: '2',
    user: { name: 'Marcus Chen', handle: 'marcus_vlogs', avatar: 'https://picsum.photos/id/91/100/100' },
    platform: Platform.YOUTUBE,
    type: ContentType.VIDEO,
    thumbnail: 'https://picsum.photos/id/20/600/400',
    content: "Quick review of the new tech pouch. The organization is next level. Finally found a home for my cables! 📦⚡️",
    timestamp: '1 week ago',
    verifiedBuyer: true,
    tags: [EmotionTag.QUALITY, EmotionTag.VALUE],
    product: { name: 'Commuter Tech Pouch', id: 'tech-002' },
    highlightedPhrase: "organization is next level"
  },
  {
    id: '3',
    user: { name: 'Elena Rodriguez', avatar: 'https://picsum.photos/id/177/100/100' },
    platform: Platform.WHATSAPP,
    type: ContentType.TEXT,
    content: "Just wanted to say the gift arrived and my sister is crying! 😭 She loves the necklace so much. Thank you for the fast shipping!",
    timestamp: '3 hours ago',
    verifiedBuyer: false,
    tags: [EmotionTag.GIFT, EmotionTag.QUALITY],
    product: { name: 'Eternal Bloom Necklace', id: 'jewel-003' },
    highlightedPhrase: "crying! 😭 She loves the necklace"
  },
  {
    id: '4',
    user: { name: 'Dave Wilson', handle: '@davew_runs', avatar: 'https://picsum.photos/id/209/100/100' },
    platform: Platform.X,
    type: ContentType.TEXT,
    content: "Best running shoes I've owned in 5 years. The foam is responsive but not too mushy. Fit is true to size. 🏃‍♂️💨 @ModernStride",
    timestamp: '2 weeks ago',
    verifiedBuyer: true,
    tags: [EmotionTag.FIT, EmotionTag.QUALITY],
    product: { name: 'Velocity Runner Pro', id: 'shoe-004' },
    highlightedPhrase: "Best running shoes I've owned"
  },
  {
    id: '5',
    user: { name: 'Julia K.', avatar: 'https://picsum.photos/id/325/100/100' },
    platform: Platform.EMAIL,
    type: ContentType.TEXT,
    content: "I was hesitant about the price, but the quality of the leather is undeniable. This is a bag that will last 20 years. Great investment.",
    timestamp: '1 month ago',
    verifiedBuyer: true,
    tags: [EmotionTag.QUALITY, EmotionTag.VALUE],
    product: { name: 'Heritage Leather Tote', id: 'bag-005' },
    highlightedPhrase: "quality of the leather is undeniable"
  },
  {
    id: '6',
    user: { name: 'Tom H.', handle: '@tommyhike', avatar: 'https://picsum.photos/id/445/100/100' },
    platform: Platform.INSTAGRAM,
    type: ContentType.IMAGE,
    mediaUrl: 'https://picsum.photos/id/10/600/600',
    content: "Peak of the mountain in the new shell jacket. Kept me bone dry in the rain. 🏔️🌧️ Highly recommend.",
    timestamp: '5 days ago',
    verifiedBuyer: true,
    tags: [EmotionTag.QUALITY, EmotionTag.COMFORT],
    product: { name: 'Summit Storm Shell', id: 'outer-006' },
    highlightedPhrase: "bone dry in the rain"
  },
  {
    id: '7',
    user: { name: 'Samantha P.', avatar: 'https://picsum.photos/id/342/100/100' },
    platform: Platform.WHATSAPP,
    type: ContentType.TEXT,
    content: "The fit is perfect! I followed the size chart and it's spot on. So glad I grabbed two colors.",
    timestamp: 'Yesterday',
    verifiedBuyer: true,
    tags: [EmotionTag.FIT, EmotionTag.VALUE],
    product: { name: 'Essentials Organic Tee', id: 'tee-007' }
  },
  {
    id: '8',
    user: { name: 'Ryan G.', handle: 'ryantech', avatar: 'https://picsum.photos/id/550/100/100' },
    platform: Platform.YOUTUBE,
    type: ContentType.VIDEO,
    thumbnail: 'https://picsum.photos/id/1/600/400',
    content: "Detailed breakdown of the mechanical keyboard. Sounds thocky as heck! Best for the price.",
    timestamp: '3 weeks ago',
    verifiedBuyer: true,
    tags: [EmotionTag.QUALITY, EmotionTag.VALUE],
    product: { name: 'Lumina RGB Keyboard', id: 'tech-008' }
  }
];
