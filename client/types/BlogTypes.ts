export interface BlogData {
  [key: string]: any;   // <-- ADD THIS LINE

  title: string;
  slug: string;
  shortDescription: string;
  category: string;
  tags: string[];
  date: string;
  content: string;
  coverImage: string;
  bannerImage: string;

  isFeatured: boolean;
  isCurated: boolean;
  isPublished: boolean;

  seoTitle: string;
  seoDescription: string;
  metaKeywords: string[];

  authorName: string;
  authorRole: string;
  authorImage: string;
  authorBio?: string;

  status: 'draft' | 'published' | 'scheduled';
  scheduledDate?: string;
  createdAt?: number;
  publishedAt?: number;
  updatedAt?: number;
}
