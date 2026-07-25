export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  token?: string;
}


const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3000/api";


// Login user
export async function loginUser(
  email: string,
  password: string
): Promise<User> {


  const response =
    await fetch(
      `${API_URL}/auth/login`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      }
    );


  if (!response.ok) {

    throw new Error(
      "Invalid email or password"
    );

  }


  const data =
    await response.json();


  if (data.token) {

    localStorage.setItem(
      "token",
      data.token
    );

  }


  return data;

}



// Register user
export async function registerUser(
  name: string,
  email: string,
  password: string
): Promise<User> {


  const response =
    await fetch(
      `${API_URL}/auth/signup`,
      {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password,
        }),

      }
    );


  if (!response.ok) {

    throw new Error(
      "Registration failed"
    );

  }


  return await response.json();

}



// Logout user
export function logoutUser() {

  localStorage.removeItem(
    "token"
  );

  window.location.href =
    "/login";
}



// Get current user
export async function getCurrentUser()
: Promise<User | null> {


  const token =
    localStorage.getItem(
      "token"
    );


  if (!token)
    return null;


  try {

    const response =
      await fetch(
        `${API_URL}/auth/me`,
        {

          headers: {
            Authorization:
              `Bearer ${token}`,
          },

        }
      );


    if (!response.ok)
      return null;


    return await response.json();


  } catch(error) {

    console.error(
      "User Fetch Error:",
      error
    );

    return null;

  }
}