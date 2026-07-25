import { BlogPost } from "@/types/blog";


export const blogs: BlogPost[] = [

  {
    id: "1",

    title:
      "Future of Artificial Intelligence in 2026",

    slug:
      "future-of-artificial-intelligence",

    excerpt:
      "Explore how AI is transforming industries with Generative AI and automation.",

    content:
      "Artificial Intelligence is changing software development, healthcare, cybersecurity, and businesses.",

    coverImage:
      "/images/blogs/ai.jpg",

    category:
      "AI",

    author: {
      id: "1",
      name: "SineForge Team",
      avatar:
        "/images/logo.png",
    },

    tags: [
      "AI",
      "Machine Learning",
    ],

    readingTime:
      "5 min read",

    featured:
      true,

    publishedAt:
      "2026-01-10",
  },


  {
    id: "2",

    title:
      "How to Start a Cyber Security Career",

    slug:
      "cyber-security-career-guide",

    excerpt:
      "Complete roadmap for becoming a cybersecurity professional.",

    content:
      "Learn networking, Linux, ethical hacking, and security fundamentals.",

    coverImage:
      "/images/blogs/security.jpg",

    category:
      "Cyber Security",

    author: {
      id: "1",
      name: "SineForge Team",
    },

    tags:[
      "Security",
      "Ethical Hacking",
    ],

    publishedAt:
      "2026-02-01",
  },

];