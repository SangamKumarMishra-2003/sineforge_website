import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";


export const metadata: Metadata = {
  title: {
    default: "SineForge | Learn AI, Cyber Security & Software Engineering",
    template:
      "%s | SineForge",
  },

  description:
    SITE_CONFIG.description,


  metadataBase: new URL(
    SITE_CONFIG.url
  ),


  keywords: [
    "AI Courses",
    "Machine Learning",
    "Cyber Security",
    "Web Development",
    "Programming",
    "Technology Education",
  ],


  authors: [
    {
      name: SITE_CONFIG.author.name,
    },
  ],


  creator:
    SITE_CONFIG.name,


  openGraph: {
    title:
      "SineForge - Build Future Technology Skills",

    description:
      SITE_CONFIG.description,

    url:
      SITE_CONFIG.url,

    siteName:
      SITE_CONFIG.name,

    type:
      "website",

    images: [
      {
        url:
          "/og-image.png",

        width:
          1200,

        height:
          630,

        alt:
          "SineForge",
      },
    ],
  },


  twitter: {
    card:
      "summary_large_image",

    title:
      "SineForge",

    description:
      SITE_CONFIG.description,

    images:
      ["/og-image.png"],
  },


  robots: {
    index: true,
    follow: true,
  },
};