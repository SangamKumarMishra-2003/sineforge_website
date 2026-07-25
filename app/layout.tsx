import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/common/Navbar";
import Footer from "@/components/common/Footer";
import "./styles/globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SineForge",
    template: "%s | SineForge",
  },
  description:
    "SineForge is an AI-powered learning platform for Software Engineering, Artificial Intelligence, Data Science, Cyber Security, and Cloud Computing.",

  keywords: [
    "SineForge",
    "AI",
    "Artificial Intelligence",
    "Programming",
    "Web Development",
    "Cyber Security",
    "Machine Learning",
  ],

  authors: [
    {
      name: "SineForge",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
