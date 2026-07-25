import { notFound } from "next/navigation";
import Image from "next/image";
import { blogs } from "@/data/blogs";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;

  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | SineForge",
    };
  }

  return {
    title: `${blog.title} | SineForge`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailsPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <article className="container mx-auto max-w-5xl px-6 py-20">
        {/* Category */}
        <span className="rounded-full border border-cyan-500 px-4 py-1 text-sm text-cyan-400">
          {blog.category}
        </span>

        {/* Title */}
        <h1 className="mt-6 text-5xl font-bold leading-tight">
          {blog.title}
        </h1>

        {/* Meta */}
        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-400">
          <span>✍️ {blog.author.name}</span>
          <span>📅 {blog.publishedAt}</span>
          {blog.readingTime && <span>⏱️ {blog.readingTime}</span>}
        </div>

        {/* Cover Image */}
        <div className="relative mt-12 h-[450px] overflow-hidden rounded-3xl">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Description */}
        <p className="mt-10 text-xl leading-8 text-gray-300">
          {blog.excerpt}
        </p>

        {/* Content */}
        <div className="prose prose-invert mt-12 max-w-none">
          {blog.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6 leading-8 text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-16">
          <h3 className="mb-4 text-xl font-semibold">Tags</h3>

          <div className="flex flex-wrap gap-3">
            {blog.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Want to Learn More?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Explore our courses, join the SineForge community, and build
            industry-ready skills with hands-on projects and expert mentorship.
          </p>

          <button className="mt-8 rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:bg-cyan-400">
            Explore Courses
          </button>
        </div>
      </article>
    </main>
  );
}
