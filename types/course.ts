export type CourseLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";


export type CourseCategory =
  | "AI"
  | "Cyber Security"
  | "Development"
  | "Cloud"
  | "Data Science";


export interface Course {

  id: string;

  title: string;

  slug: string;

  shortDescription: string;

  description: string;


  thumbnail: string;

  bannerImage?: string;


  category: CourseCategory;

  level: CourseLevel;


  duration: string;


  price?: number;

  discountPrice?: number;


  instructor: {
    id: string;
    name: string;
    image?: string;
    designation?: string;
  };


  skills: string[];


  modules: CourseModule[];


  projects: string[];


  requirements?: string[];


  outcomes?: string[];


  enrolledStudents?: number;


  rating?: number;


  reviews?: number;


  createdAt?: string;

  updatedAt?: string;

}



export interface CourseModule {

  id: string;

  title: string;

  description?: string;


  lessons: Lesson[];

}



export interface Lesson {

  id: string;

  title: string;

  duration?: string;

  videoUrl?: string;

  isFree?: boolean;

}



export interface CourseEnrollment {

  id: string;

  userId: string;

  courseId: string;

  progress: number;

  completed: boolean;

  enrolledAt: string;

}