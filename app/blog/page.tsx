import BlogCard from "@/components/cards/BlogCard";
import FeaturedBlogCarousel from "@/components/cards/FeaturedBlogCarousel";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Blog | SineForge",
  description:
    "Explore the latest articles on Artificial Intelligence, Web Development, Cyber Security, Data Science, Cloud Computing, and Software Engineering.",
};

export default function BlogPage() {
  const toolRows = [
    [
      { name: "Claude", logo: "/tool-logos/claude.svg" },
      { name: "Perplexity", logo: "/tool-logos/perplexity.svg" },
      { name: "NotebookLM", logo: "/tool-logos/notebooklm.svg" },
      { name: "Notion AI", logo: "/tool-logos/notion-ai.svg" },
      { name: "Gamma", logo: "/tool-logos/gamma.svg" },
    ],
    [
      { name: "Canva AI", logo: "/tool-logos/canva-ai.svg" },
      { name: "Granola", logo: "/tool-logos/granola.svg" },
      { name: "Fireflies", logo: "/tool-logos/fireflies.svg" },
      { name: "ElevenLabs", logo: "/tool-logos/elevenlabs.svg" },
      { name: "Runway", logo: "/tool-logos/runway.svg" },
      { name: "HeyGen", logo: "/tool-logos/heygen.svg" },
    ],
    [
      { name: "n8n", logo: "/tool-logos/n8n.svg" },
      { name: "Zapier", logo: "/tool-logos/zapier.svg" },
      { name: "Lovable", logo: "/tool-logos/lovable.svg" },
      { name: "Emergent", logo: "/tool-logos/emergent.svg" },
      { name: "Lyizr", logo: "/tool-logos/lyzr.svg" },
    ],
  ];

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

        <FeaturedBlogCarousel blogs={blogs} />

        {/* Blog Grid */}
        <div className="mt-20">
          <h2 className="mb-10 text-3xl font-bold">
            Latest Articles
          </h2>

          <div className="relative overflow-visible">
            <div className="relative z-0 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {blogs.slice(0, 10).map((blog) => (
                <div
                  key={blog.slug}
                  className="relative transition-transform duration-300 hover:z-10"
                >
                  <BlogCard
                    slug={blog.slug}
                    title={blog.title}
                    excerpt={
                      blog.title === "How to Start a Cyber Security Career"
                        ? `${blog.excerpt} Build skills that employers value.`
                        : blog.excerpt
                    }
                    image={blog.coverImage}
                    author={blog.author.name}
                    category={blog.category}
                    publishedAt={blog.publishedAt}
                    readTime={
                      blog.title === "How to Start a Cyber Security Career"
                        ? "5 min read"
                        : blog.readingTime ?? ""
                    }
                    featured={blog.featured}
                  />
                </div>
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
            {toolRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
                {row.map((tool) => (
                  <div
                    key={tool.name}
                    className={`group relative flex min-h-[54px] overflow-hidden rounded-[15px] p-px text-left shadow-[0_0_22px_rgba(99,102,241,0.12)] transition-transform duration-300 hover:-translate-y-1 ${
                      rowIndex === 1
                        ? "min-w-[9rem] max-w-[11rem]"
                        : "min-w-[10rem] max-w-[12rem]"
                    }`}
                  >
                    <div className="absolute -inset-[90%] animate-spin bg-[conic-gradient(from_180deg,transparent_0deg,transparent_105deg,#22d3ee_145deg,#8b5cf6_190deg,transparent_240deg,transparent_360deg)] [animation-duration:4s] group-hover:[animation-duration:1.5s]" />

                    <div className="relative flex min-h-[52px] w-full items-center gap-2 rounded-[14px] bg-[#171733] px-3 py-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-white">
                      <img
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <p className="text-sm font-semibold text-white">{tool.name}</p>
                    </div>
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
