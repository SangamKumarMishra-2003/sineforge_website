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

        {/* Tools Showcase */}
        <div className="mt-20 rounded-3xl border border-gray-800 bg-gray-900/50 p-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Get hands on with AI tools from your first prompt to your first real project.
            </p>

            <div className="flex flex-col gap-4">
            {[
              ["Claude", "Perplexity", "NotebookLM", "Notion AI", "Gamma"],
              ["Canva AI", "Granola", "Fireflies", "ElevenLabs", "Runway", "HeyGen"],
              ["n8n", "Zapier", "Lovable", "Emergent", "Lyizr"],
            ].map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
                {row.map((tool) => (
                  <div
                    key={tool}
                    className={`flex min-h-[54px] items-center gap-2 rounded-[15px] border border-white/10 bg-white/5 px-3 py-2 text-left shadow-sm transition hover:border-cyan-500 ${
                      rowIndex === 1
                        ? "min-w-[9rem] max-w-[11rem]"
                        : "min-w-[10rem] max-w-[12rem]"
                    }`}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-cyan-500/10 text-sm font-semibold text-cyan-300">
                      {tool
                        .split(/\s+/)
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <p className="font-semibold text-white text-sm">{tool}</p>
                  </div>
                ))}
              </div>
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
