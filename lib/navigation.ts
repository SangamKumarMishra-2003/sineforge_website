export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}


export const NAVIGATION: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "Courses",
    href: "/courses",
    children: [
      {
        title: "AI & ML",
        href: "/courses/artificial-intelligence",
      },
      {
        title: "Cyber Security",
        href: "/courses/cyber-security",
      },
      {
        title: "Web Development",
        href: "/courses/full-stack-development",
      },
    ],
  },

  {
    title: "Fellowship",
    href: "/fellowship",
  },

  {
    title: "Community",
    href: "/community",
  },

  {
    title: "Blog",
    href: "/blog",
  },

  {
    title: "About",
    href: "/about",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];


export const FOOTER_LINKS = {
  Company: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Careers",
      href: "/careers",
    },
  ],

  Learning: [
    {
      title: "Courses",
      href: "/courses",
    },
    {
      title: "Fellowship",
      href: "/fellowship",
    },
    {
      title: "Community",
      href: "/community",
    },
  ],

  Resources: [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
};