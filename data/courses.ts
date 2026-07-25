import { Course } from "@/types/course";


export const courses: Course[] = [
  {
    id: "1",
    title: "Artificial Intelligence & Machine Learning",
    slug: "artificial-intelligence-machine-learning",

    shortDescription:
      "Master AI, Machine Learning, Deep Learning, and Generative AI with real-world projects.",

    description:
      "A complete AI program covering Python, Machine Learning algorithms, Neural Networks, Deep Learning, Computer Vision, NLP, and Generative AI applications.",

    thumbnail:
      "/images/courses/ai.jpg",

    category: "AI",

    level: "Intermediate",

    duration: "16 Weeks",

    price: 49999,

    discountPrice: 29999,


    instructor: {
      id: "mentor-1",
      name: "Dr. Rahul Sharma",
      image: "/images/mentors/rahul.jpg",
      designation: "AI Research Engineer",
    },


    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Machine Learning",
      "Deep Learning",
      "LLMs",
    ],


    modules: [
      {
        id: "m1",
        title: "Python for AI",
        lessons: [
          {
            id: "l1",
            title: "Python Fundamentals",
          },
          {
            id: "l2",
            title: "NumPy & Pandas",
          },
        ],
      },

      {
        id: "m2",
        title: "Machine Learning",
        lessons: [
          {
            id: "l3",
            title: "Regression & Classification",
          },
          {
            id: "l4",
            title: "Model Deployment",
          },
        ],
      },
    ],


    projects: [
      "AI Chatbot",
      "Image Classification System",
      "Recommendation Engine",
    ],


    outcomes: [
      "Build AI applications",
      "Deploy ML models",
      "Work with LLMs",
    ],


    enrolledStudents: 2500,

    rating: 4.9,

    reviews: 450,
  },


  {
    id: "2",
    title: "Cyber Security & Ethical Hacking",

    slug: "cyber-security-ethical-hacking",

    shortDescription:
      "Learn penetration testing, network security, and cybersecurity practices.",

    description:
      "Hands-on cybersecurity training covering ethical hacking, cryptography, vulnerability assessment, and security operations.",

    thumbnail:
      "/images/courses/cyber-security.jpg",

    category: "Cyber Security",

    level: "Advanced",

    duration: "12 Weeks",

    price: 39999,

    discountPrice: 24999,


    instructor: {
      id: "mentor-2",
      name: "Amit Verma",
      image: "/images/mentors/amit.jpg",
      designation: "Cyber Security Specialist",
    },


    skills: [
      "Networking",
      "Linux",
      "Kali Linux",
      "Pen Testing",
      "Cryptography",
    ],


    modules: [],


    projects: [
      "Network Scanner",
      "Vulnerability Assessment Tool",
    ],
  },


  {
    id: "3",

    title: "Full Stack Web Development",

    slug: "full-stack-web-development",

    shortDescription:
      "Build modern scalable web applications using latest technologies.",

    description:
      "Complete full stack development course covering frontend, backend, databases, cloud deployment, and DevOps.",

    thumbnail:
      "/images/courses/fullstack.jpg",

    category: "Development",

    level: "Beginner",

    duration: "20 Weeks",


    instructor: {
      id: "mentor-3",
      name: "SineForge Team",
      designation: "Software Engineers",
    },


    skills: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "AWS",
    ],


    modules: [],


    projects: [
      "E-commerce Platform",
      "Learning Management System",
    ],
  },
];
