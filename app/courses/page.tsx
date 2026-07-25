import Courses from "@/components/home/Courses";

export const metadata = {
  title: "Courses | SineForge",
  description: "Explore AI, Data Science, Cyber Security, Web Development, and Software Engineering courses at SineForge.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <span className="rounded-full border border-cyan-500 px-4 py-1 text-sm text-cyan-400">
            SineForge Academy
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Explore Our <span className="text-cyan-400">Courses</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Learn cutting-edge technologies with industry mentors. Build
            real-world projects, earn certifications, and prepare for top tech
            careers.
          </p>
        </div>

        <Courses />
      </section>
    </main>
  );
}