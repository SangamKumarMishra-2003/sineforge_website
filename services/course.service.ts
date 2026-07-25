import { COURSES } from "@/lib/constants";


export interface Course {
  id: number;
  title: string;
  slug: string;
  category: string;
  level: string;
  duration: string;
  description?: string;
  image?: string;
}


const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3000/api";


// Get all courses
export async function getCourses(): Promise<Course[]> {
  try {
    const response = await fetch(
      `${API_URL}/courses`,
      {
        cache: "no-store",
      }
    );


    if (!response.ok) {
      throw new Error(
        "Failed to fetch courses"
      );
    }


    return await response.json();

  } catch (error) {

    console.error(
      "Course Fetch Error:",
      error
    );

    // fallback data
    return COURSES;
  }
}


// Get single course by slug
export async function getCourseBySlug(
  slug: string
): Promise<Course | null> {

  try {

    const response =
      await fetch(
        `${API_URL}/courses/${slug}`,
        {
          cache: "no-store",
        }
      );


    if (!response.ok) {
      return null;
    }


    return await response.json();

  } catch (error) {

    console.error(
      "Course Details Error:",
      error
    );

    return (
      COURSES.find(
        (course) =>
          course.slug === slug
      ) || null
    );
  }
}


// Search courses
export async function searchCourses(
  query: string
) {

  const courses =
    await getCourses();


  return courses.filter(
    (course) =>
      course.title
        .toLowerCase()
        .includes(
          query.toLowerCase()
        )
  );
}