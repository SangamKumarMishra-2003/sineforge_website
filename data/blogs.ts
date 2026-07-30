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
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80",

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
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",

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

  {
    id: "3",

    title:
      "Building Scalable Web Apps with Next.js 15",

    slug:
      "scalable-nextjs-web-apps",

    excerpt:
      "Best practices for building fast, accessible, and scalable web experiences with Next.js.",

    content:
      "Explore routing, data fetching, performance tuning, and UI patterns for modern Next.js apps.",

    coverImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",

    category:
      "Programming",

    author: {
      id: "2",
      name: "Alex Morgan",
      avatar: "/images/logo.png",
    },

    tags:[
      "Next.js",
      "Web Development",
    ],

    readingTime:
      "6 min read",

    publishedAt:
      "2026-03-12",
  },

  {
    id: "4",

    title:
      "Mastering DevOps Automation with GitHub Actions",

    slug:
      "devops-automation-github-actions",

    excerpt:
      "Automate deployments, testing, and CI/CD workflows using GitHub Actions best practices.",

    content:
      "Learn how to structure pipelines, manage secrets, and build reliable automation for modern teams.",

    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",

    category:
      "Technology",

    author: {
      id: "3",
      name: "Maya Patel",
    },

    tags:[
      "DevOps",
      "Automation",
    ],

    readingTime:
      "7 min read",

    publishedAt:
      "2026-03-28",
  },

  {
    id: "5",

    title:
      "Design Systems for Modern Product Teams",

    slug:
      "design-systems-product-teams",

    excerpt:
      "Create scalable, accessible component libraries that keep design and engineering aligned.",

    content:
      "Discover how design tokens, component governance, and tooling improve product consistency.",

    coverImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",

    category:
      "Technology",

    author: {
      id: "4",
      name: "Nina Zhao",
    },

    tags:[
      "Design",
      "Product",
    ],

    readingTime:
      "5 min read",

    publishedAt:
      "2026-04-08",
  },

  {
    id: "6",

    title:
      "Personal Branding Strategies for Tech Professionals",

    slug:
      "personal-branding-tech",

    excerpt:
      "Practical tips for building your online presence, portfolio, and career narrative in tech.",

    content:
      "Learn how to showcase projects, network authentically, and grow your influence as a developer.",

    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",

    category:
      "Career",

    author: {
      id: "5",
      name: "SineForge Team",
    },

    tags:[
      "Career",
      "Growth",
    ],

    readingTime:
      "4 min read",

    publishedAt:
      "2026-04-20",
  },

];