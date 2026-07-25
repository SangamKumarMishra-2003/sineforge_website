import Link from "next/link";

export const metadata = {
  title: "Sign Up | SineForge",
  description: "Create your SineForge account.",
};

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-20 text-white">
      <div className="w-full max-w-lg rounded-3xl border border-gray-800 bg-gray-900/50 p-8">
        <div className="text-center">
          <span className="rounded-full border border-cyan-500 px-4 py-1 text-sm text-cyan-400">
            Join SineForge
          </span>

          <h1 className="mt-6 text-4xl font-bold">
            Create Your Account
          </h1>

          <p className="mt-3 text-gray-400">
            Start learning with industry experts.
          </p>
        </div>

        <form className="mt-10 space-y-5">
          <div>
            <label className="mb-2 block text-sm">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">Password</label>
            <input
              type="password"
              placeholder="Minimum 8 characters"
              className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-gray-400">
            <input type="checkbox" className="mt-1" />
            <span>
              I agree to the{" "}
              <Link
                href="/terms"
                className="text-cyan-400 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-cyan-400 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            Create Account
          </button>
        </form>

        <p className="mt-8 text-center text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-cyan-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}