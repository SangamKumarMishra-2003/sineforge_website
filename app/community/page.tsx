import Community from "@/components/home/Community";

export const metadata = {
  title: "Community | SineForge",
  description:
    "Join the SineForge community to connect with developers, AI enthusiasts, mentors, and innovators from around the world.",
};

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-6 py-20">
        {/* Hero */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-cyan-500 px-4 py-1 text-sm text-cyan-400">
            SineForge Community
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Learn, Build & Grow{" "}
            <span className="text-cyan-400">Together</span>
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Become part of a thriving community of students, developers,
            researchers, and industry professionals. Collaborate on projects,
            participate in hackathons, attend live sessions, and accelerate
            your career with like-minded innovators.
          </p>
        </div>

        {/* Community Component */}
        <div className="mt-16">
          <Community />
        </div>

        {/* Community Benefits */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-800 p-6">
            <div className="text-4xl">💬</div>
            <h3 className="mt-4 text-xl font-semibold">
              Active Discussions
            </h3>
            <p className="mt-3 text-gray-400">
              Engage in daily conversations on AI, software engineering,
              cybersecurity, cloud computing, and emerging technologies.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <div className="text-4xl">🚀</div>
            <h3 className="mt-4 text-xl font-semibold">
              Build Projects
            </h3>
            <p className="mt-3 text-gray-400">
              Collaborate with fellow learners on real-world applications,
              open-source contributions, and innovative startup ideas.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <div className="text-4xl">🎓</div>
            <h3 className="mt-4 text-xl font-semibold">
              Expert Mentorship
            </h3>
            <p className="mt-3 text-gray-400">
              Receive career guidance, code reviews, interview preparation,
              and technical mentorship from experienced professionals.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <div className="text-4xl">🏆</div>
            <h3 className="mt-4 text-xl font-semibold">
              Networking
            </h3>
            <p className="mt-3 text-gray-400">
              Connect with peers, recruiters, founders, and industry leaders
              to discover internships, jobs, and collaboration opportunities.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Join the Community?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Connect with thousands of learners, participate in events, solve
            challenges, and grow your career with the SineForge community.
          </p>

          <button className="mt-8 rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:bg-cyan-400">
            Join Community
          </button>
        </div>
      </section>
    </main>
  );
}