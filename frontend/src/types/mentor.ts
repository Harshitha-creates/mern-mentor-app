export interface Mentor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  description: string;
  taskCount: number;
  rating: number;
  reviewCount: number;
  isFollowed: boolean;
  category: string;
}

export interface MentorStats {
  taskCount: number;
  rating: number;
  reviewCount: number;
}