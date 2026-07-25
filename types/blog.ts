export const blogs = [
  {
    slug: "future-of-ai",
    title: "The Future of Artificial Intelligence",
    description: "Explore how AI is transforming industries worldwide.",
    image: "/images/blogs/ai.jpg",
    author: "SineForge Team",
    date: "25 July 2026",
    category: "Artificial Intelligence",
  },
];export type BlogCategory =
  | "AI"
  | "Cyber Security"
  | "Programming"
  | "Career"
  | "Technology";


export interface BlogPost {

  id: string;


  title: string;


  slug: string;


  excerpt: string;


  content: string;


  coverImage: string;


  category: BlogCategory;


  author: BlogAuthor;


  tags: string[];


  readingTime?: string;


  featured?: boolean;


  views?: number;


  likes?: number;


  publishedAt: string;


  updatedAt?: string;

}



export interface BlogAuthor {

  id: string;

  name: string;

  avatar?: string;

  role?: string;

}



export interface Comment {

  id: string;

  userId: string;

  userName: string;

  message: string;

  createdAt: string;

}