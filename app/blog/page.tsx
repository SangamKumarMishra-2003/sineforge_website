import BlogCard from "@/components/cards/BlogCard";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Blog | SineForge",
  description:
    "Explore the latest articles on Artificial Intelligence, Web Development, Cyber Security, Data Science, Cloud Computing, and Software Engineering.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-6 py-20">
        {/* Hero */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-cyan-500 px-4 py-1 text-sm text-cyan-400">
            SineForge Blog
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Insights, Tutorials &{" "}
            <span className="text-cyan-400">Tech Stories</span>
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Stay updated with the latest trends in AI, Full Stack Development,
            Cyber Security, Cloud Computing, DevOps, and emerging technologies.
          </p>
        </div>

        {/* Featured Blog */}
        {blogs.length > 0 && (
          <div className="mt-20 rounded-3xl border border-gray-800 bg-gray-900/50 p-8">
            <span className="rounded-full bg-cyan-500 px-3 py-1 text-sm font-medium text-black">
              Featured
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              {blogs[0].title}
            </h2>

            <p className="mt-4 text-gray-400">
              {blogs[0].excerpt}
            </p>

            <button className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
              Read Article
            </button>
          </div>
        )}

        {/* Blog Grid */}
        <div className="mt-20">
          <h2 className="mb-10 text-3xl font-bold">
            Latest Articles
          </h2>

          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {blogs.slice(0, 10).map((blog) => (
                <BlogCard
                  key={blog.slug}
                  slug={blog.slug}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  image={blog.coverImage}
                  author={blog.author.name}
                  category={blog.category}
                  publishedAt={blog.publishedAt}
                  readTime={blog.readingTime ?? ""}
                  featured={blog.featured}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-24 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Never Miss an Update
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Subscribe to receive tutorials, product updates, industry news,
            and exclusive learning resources directly in your inbox.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-gray-700 bg-black px-5 py-3 outline-none focus:border-cyan-500"
            />

            <button className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:bg-cyan-400">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
