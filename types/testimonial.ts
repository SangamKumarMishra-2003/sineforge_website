export interface Testimonial {

  id: string;


  name: string;


  role: string;


  company?: string;


  avatar: string;


  message: string;


  rating: number;


  linkedin?: string;


  twitter?: string;


  featured?: boolean;


  createdAt?: string;

}



export interface TestimonialStats {

  totalStudents: string;

  coursesCompleted: string;

  successRate: string;

  averageRating: number;

}