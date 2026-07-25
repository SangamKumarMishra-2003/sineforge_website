import Link from "next/link";

export const metadata = {
  title: "About Us | SineForge",
  description:
    "Learn about SineForge, our mission, vision, and the team dedicated to empowering the next generation of AI and software engineers.",
};

const values = [
  {
    title: "Innovation",
    description:
      "We embrace emerging technologies and encourage creative problem-solving to build impactful digital solutions.",
  },
  {
    title: "Practical Learning",
    description:
      "Our programs focus on hands-on projects, real-world challenges, and industry-relevant skills.",
  },
  {
    title: "Community",
    description:
      "We believe growth happens through collaboration, mentorship, and knowledge sharing.",
  },
  {
    title: "Excellence",
    description:
      "We strive to deliver high-quality education, mentorship, and technology solutions.",
  },
];

const stats = [
  {
    value: "1000+",
    label: "Students Trained",
  },
  {
    value: "50+",
    label: "Industry Projects",
  },
  {
    value: "20+",
    label: "Expert Mentors",
  },
  {
    value: "10+",
    label: "Technology Domains",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-cyan-500 px-4 py-1 text-sm text-cyan-400">
            About SineForge
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            Empowering the Next Generation of{" "}
            <span className="text-cyan-400">
              Technology Leaders
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            SineForge is a technology-driven learning platform dedicated to
            helping students and professionals master Artificial Intelligence,
            Software Engineering, Cyber Security, Data Science, Cloud
            Computing, and modern development technologies through practical,
            project-based education.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-900/40 p-8">
            <h2 className="text-3xl font-bold text-cyan-400">
              Our Mission
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              To bridge the gap between academic learning and industry
              requirements by providing high-quality technical education,
              mentorship, and real-world project experience.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-gray-900/40 p-8">
            <h2 className="text-3xl font-bold text-cyan-400">
              Our Vision
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              To become one of the leading technology learning communities,
              empowering innovators, entrepreneurs, and engineers to solve
              real-world problems through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-800 p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {stat.value}
              </h3>

              <p className="mt-3 text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 pb-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Our Core Values
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Everything we do is guided by these principles.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-gray-800 p-8"
            >
              <h3 className="text-2xl font-semibold text-cyan-400">
                {value.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-12 text-center">
          <h2 className="text-4xl font-bold">
            Join the SineForge Community
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Whether you're beginning your journey or advancing your career,
            SineForge provides the resources, mentorship, and community to help
            you achieve your goals.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/courses"
              className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Explore Courses
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-cyan-500 px-8 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}