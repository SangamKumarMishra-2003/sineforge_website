export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author: string;
  image: string;
  category: string;
  publishedAt: string;
}


const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3000/api";


// Get all blogs
export async function getBlogs()
: Promise<BlogPost[]> {

  try {

    const response =
      await fetch(
        `${API_URL}/blogs`,
        {
          cache:
            "no-store",
        }
      );


    if (!response.ok) {
      throw new Error(
        "Failed to fetch blogs"
      );
    }


    return await response.json();


  } catch (error) {

    console.error(
      "Blog Fetch Error:",
      error
    );


    return [];

  }
}


// Get blog by slug
export async function getBlogBySlug(
  slug: string
): Promise<BlogPost | null> {


  try {

    const response =
      await fetch(
        `${API_URL}/blogs/${slug}`,
        {
          cache:
            "no-store",
        }
      );


    if (!response.ok) {
      return null;
    }


    return await response.json();


  } catch(error) {

    console.error(
      "Blog Details Error:",
      error
    );

    return null;

  }
}


// Get blogs by category
export async function getBlogsByCategory(
  category: string
) {

  const blogs =
    await getBlogs();


  return blogs.filter(
    (blog) =>
      blog.category === category
  );
}