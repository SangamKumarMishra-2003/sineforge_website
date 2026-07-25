import Link from "next/link";

export const metadata = {
  title: "Login | SineForge",
  description: "Sign in to your SineForge account.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-20 text-white">
      <div className="w-full max-w-md rounded-3xl border border-gray-800 bg-gray-900/50 p-8">
        <div className="text-center">
          <span className="rounded-full border border-cyan-500 px-4 py-1 text-sm text-cyan-400">
            Welcome Back
          </span>

          <h1 className="mt-6 text-4xl font-bold">
            Login to <span className="text-cyan-400">SineForge</span>
          </h1>

          <p className="mt-3 text-gray-400">
            Continue your learning journey.
          </p>
        </div>

        <form className="mt-10 space-y-6">
          <div>
            <label className="mb-2 block text-sm">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="text-cyan-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-cyan-400 hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}