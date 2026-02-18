import { Drama } from './types';

export const POPULAR_DRAMAS: Drama[] = [
  {
    id: '1',
    title: 'Queen of Tears',
    posterUrl: 'https://picsum.photos/400/600?random=1', // 2:3
    backdropUrl: 'https://picsum.photos/800/400?random=1',
    trailerUrl: 'https://www.youtube.com/watch?v=d_p9f2Rz_gI',
    tags: ['Romance', 'Melodrama', 'CEO', 'Happy Ending'],
    fashionLinks: [
      { item: "Hae-in's Tweed Jacket", url: 'https://google.com/search?q=Queen+of+Tears+fashion' },
      { item: "Hyun-woo's Suit", url: 'https://google.com/search?q=Kim+Soo+Hyun+suit' }
    ],
    isHappyEnding: true,
    rating: 9.0,
    year: 2024,
    description: "The queen of department stores and the prince of supermarkets weather a marital crisis until love miraculously begins to bloom again.",
    userStatus: 'Plan to Watch'
  },
  {
    id: '2',
    title: 'Lovely Runner',
    posterUrl: 'https://picsum.photos/400/500?random=2', // Shorter
    backdropUrl: 'https://picsum.photos/800/400?random=2',
    trailerUrl: 'https://www.youtube.com/watch?v=8X7j9wz_j7k',
    tags: ['Time Travel', 'School', 'Idol', 'Happy Ending', 'RomCom'],
    fashionLinks: [
      { item: "Im Sol's Yellow Umbrella", url: '#' },
      { item: "Sun-jae's Watch", url: '#' }
    ],
    isHappyEnding: true,
    rating: 9.2,
    year: 2024,
    description: "A passionate fan travels back in time to save her favorite idol from a tragic fate.",
    userStatus: 'Plan to Watch'
  },
  {
    id: '3',
    title: 'Hidden Love',
    posterUrl: 'https://picsum.photos/400/650?random=3', // Taller
    backdropUrl: 'https://picsum.photos/800/400?random=3',
    trailerUrl: 'https://www.youtube.com/watch?v=k_j9wz_j7k',
    tags: ['Romance', 'School', 'ML Older than FL', 'Happy Ending', 'Coming of Age'],
    fashionLinks: [
      { item: "Sang Zhi's Dress", url: '#' }
    ],
    isHappyEnding: true,
    rating: 8.8,
    year: 2023,
    description: "Sang Zhi falls in love with Duan Jiaxu, the boy who often comes to her house to play games in her older brother's room.",
    userStatus: 'Plan to Watch'
  },
  {
    id: '4',
    title: 'King the Land',
    posterUrl: 'https://picsum.photos/400/550?random=4',
    backdropUrl: 'https://picsum.photos/800/400?random=4',
    trailerUrl: 'https://www.youtube.com/watch?v=1_j9wz_j7k',
    tags: ['RomCom', 'CEO', 'Rich/Poor', 'Happy Ending'],
    fashionLinks: [
      { item: "Sa-rang's Uniform", url: '#' },
      { item: "Gu Won's 3-piece Suit", url: '#' }
    ],
    isHappyEnding: true,
    rating: 8.5,
    year: 2023,
    description: "Amid a tense inheritance fight, a charming heir clashes with his hardworking employee who's known for her irresistible smile.",
    userStatus: 'Plan to Watch'
  },
  {
    id: '5',
    title: 'The Glory',
    posterUrl: 'https://picsum.photos/400/400?random=5', // Square
    backdropUrl: 'https://picsum.photos/800/400?random=5',
    trailerUrl: 'https://www.youtube.com/watch?v=2_j9wz_j7k',
    tags: ['Thriller', 'Revenge', 'Dark'],
    fashionLinks: [
      { item: "Yeon-jin's Weathercaster Outfit", url: '#' }
    ],
    isHappyEnding: false, // Technically happy for lead, but dark tone
    rating: 8.9,
    year: 2022,
    description: "A young woman, bullied to the point of deciding to drop out of school, plans the best way to get revenge.",
    userStatus: 'Plan to Watch'
  },
  {
    id: '6',
    title: 'Business Proposal',
    posterUrl: 'https://picsum.photos/400/620?random=6',
    backdropUrl: 'https://picsum.photos/800/400?random=6',
    trailerUrl: 'https://www.youtube.com/watch?v=3_j9wz_j7k',
    tags: ['RomCom', 'CEO', 'Contract Relationship', 'Happy Ending'],
    fashionLinks: [],
    isHappyEnding: true,
    rating: 8.7,
    year: 2022,
    description: "In disguise as her friend, Ha-ri scares away a blind date. But plans go awry when he turns out to be her CEO and makes a proposal.",
    userStatus: 'Plan to Watch'
  },
  {
    id: '7',
    title: 'Twinkling Watermelon',
    posterUrl: 'https://picsum.photos/400/580?random=7',
    backdropUrl: 'https://picsum.photos/800/400?random=7',
    trailerUrl: 'https://www.youtube.com/watch?v=4_j9wz_j7k',
    tags: ['Time Travel', 'School', 'Family', 'Music', 'Happy Ending'],
    fashionLinks: [],
    isHappyEnding: true,
    rating: 9.1,
    year: 2023,
    description: "A CODA boy travels back in time to 1995, where he joins a band with his future father.",
    userStatus: 'Plan to Watch'
  },
  {
    id: '8',
    title: 'My Demon',
    posterUrl: 'https://picsum.photos/400/600?random=8',
    backdropUrl: 'https://picsum.photos/800/400?random=8',
    trailerUrl: 'https://www.youtube.com/watch?v=5_j9wz_j7k',
    tags: ['Fantasy', 'Romance', 'Cohabitation', 'CEO', 'Happy Ending'],
    fashionLinks: [
      { item: "Do-hee's Power Suits", url: '#' }
    ],
    isHappyEnding: true,
    rating: 8.6,
    year: 2023,
    description: "A pitiless demon becomes powerless after getting entangled with an icy heiress, who may hold the key to his lost abilities.",
    userStatus: 'Plan to Watch'
  },
  {
    id: '9',
    title: 'Alchemy of Souls',
    posterUrl: 'https://picsum.photos/400/650?random=9',
    backdropUrl: 'https://picsum.photos/800/400?random=9',
    trailerUrl: 'https://www.youtube.com/watch?v=6_j9wz_j7k',
    tags: ['Fantasy', 'Action', 'Historical', 'Master/Servant'],
    fashionLinks: [],
    isHappyEnding: true,
    rating: 9.0,
    year: 2022,
    description: "A powerful sorceress in a blind woman's body encounters a man from a prestigious family, who wants her help to change his destiny.",
    userStatus: 'Plan to Watch'
  },
  {
    id: '10',
    title: 'Perfect Marriage Revenge',
    posterUrl: 'https://picsum.photos/400/500?random=10',
    backdropUrl: 'https://picsum.photos/800/400?random=10',
    trailerUrl: 'https://www.youtube.com/watch?v=7_j9wz_j7k',
    tags: ['Revenge', 'Romance', 'Time Travel', 'Contract Marriage', 'Happy Ending'],
    fashionLinks: [],
    isHappyEnding: true,
    rating: 8.4,
    year: 2023,
    description: "After being killed by her husband and family, a woman travels back in time to seek revenge by marrying the man her sister loves.",
    userStatus: 'Plan to Watch'
  }
];