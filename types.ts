export type UserStatus = 'Plan to Watch' | 'Watching' | 'Completed' | 'Dropped';

export interface FashionItem {
  item: string;
  url: string;
  imageUrl?: string; 
}

export interface Drama {
  id: string;
  title: string;
  posterUrl: string;
  backdropUrl: string;
  trailerUrl: string;
  tags: string[];
  fashionLinks: FashionItem[];
  isHappyEnding: boolean;
  rating: number;
  year: number;
  description: string;
  // This field is mutable based on user interaction
  userStatus: UserStatus;
}

export interface RecommendationResult {
  text: string;
  sources?: { uri: string; title: string }[];
}
