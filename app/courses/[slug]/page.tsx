// interface CoursePageProps {
//   params: Promise<{
//     slug: string;
//   }>;
// }

// export async function generateMetadata({ params }: CoursePageProps) {
//   const { slug } = await params;

//   return {
//     title: `${slug.replace(/-/g, " ")} | SineForge`,
//   };
// }

// export default async function CourseDetailsPage({
//   params,
// }: CoursePageProps) {
//   const { slug } = await params;

//   return (
//     <main className="min-h-screen bg-black text-white">
//       <section className="container mx-auto px-6 py-20">
//         <h1 className="text-5xl font-bold capitalize">
//           {slug.replace(/-/g, " ")}
//         </h1>

//         <p className="mt-6 text-gray-400">
//           Detailed information for this course will be available here.
//         </p>
//       </section>
//     </main>
//   );
// }
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params;

  const course = courses.find((course) => course.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found | SineForge",
    };
  }

  return {
    title: `${course.title} | SineForge`,
    description: course.description,
  };
}

export default async function CourseDetailsPage({
  params,
}: CoursePageProps) {
  const { slug } = await params;

  const course = courses.find((course) => course.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-6 py-20">
        <span className="rounded-full border border-cyan-500 px-4 py-1 text-sm text-cyan-400">
          {course.category}
        </span>

        <h1 className="mt-6 text-5xl font-bold">{course.title}</h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-400">
          {course.description}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold">Duration</h3>
            <p className="mt-2 text-gray-400">{course.duration}</p>
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold">Level</h3>
            <p className="mt-2 text-gray-400">{course.level}</p>
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold">Price</h3>
            <p className="mt-2 text-cyan-400 font-semibold">
              {course.price}
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold">What You'll Learn</h2>

          <ul className="mt-6 space-y-4">
            {course.skills.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
