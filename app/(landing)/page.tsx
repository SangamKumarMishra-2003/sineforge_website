import Hero from "@/components/home/Hero";
import Companies from "@/components/home/Companies";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import Courses from "@/components/home/Courses";
import Fellowship from "@/components/home/Fellowship";
import AIJourney from "@/components/home/AIJourney";
import Testimonials from "@/components/home/Testimonials";
import Community from "@/components/home/Community";
import FAQ from "@/components/home/FAQ";
import Newsletter from "@/components/home/Newsletter";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Companies />
      <Stats />
      <Features />
      <Courses />
      <Fellowship />
      <AIJourney />
      <Testimonials />
      <Community />
      <FAQ />
      <Newsletter />
      <CTA />
    </main>
  );
}