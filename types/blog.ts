export type BlogCategory =
  | "AI"
  | "Cyber Security"
  | "Programming"
  | "Career"
  | "Technology"
  | "Blockchain"
  | "Design";


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