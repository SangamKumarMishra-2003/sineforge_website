import Fellowship from "@/components/home/Fellowship";

export const metadata = {
  title: "Fellowship | SineForge",
  description:
    "Join the SineForge Fellowship to gain real-world experience, mentorship, and career opportunities in AI and Software Engineering.",
};

export default function FellowshipPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-cyan-500 px-4 py-1 text-sm text-cyan-400">
            SineForge Fellowship
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Build Your Career with{" "}
            <span className="text-cyan-400">Industry Mentorship</span>
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            The SineForge Fellowship is designed for students and professionals
            who want to work on real-world projects, collaborate with industry
            experts, and gain practical experience in Artificial Intelligence,
            Full Stack Development, Cyber Security, Data Science, and Cloud
            Computing.
          </p>
        </div>

        <div className="mt-16">
          <Fellowship />
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-xl font-semibold">🚀 Real Projects</h3>
            <p className="mt-3 text-gray-400">
              Build production-grade applications and solve real industry
              challenges with expert guidance.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-xl font-semibold">👨‍🏫 Mentorship</h3>
            <p className="mt-3 text-gray-400">
              Learn directly from experienced software engineers and AI
              professionals through weekly mentorship sessions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-xl font-semibold">🏆 Certification</h3>
            <p className="mt-3 text-gray-400">
              Receive an industry-recognized certificate and strengthen your
              portfolio with hands-on project experience.
            </p>
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Become a SineForge Fellow?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Join a community of passionate learners, build innovative projects,
            and accelerate your career with mentorship and real-world
            experience.
          </p>

          <button className="mt-8 rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:bg-cyan-400">
            Apply Now
          </button>
        </div>
      </section>
    </main>
  );
}