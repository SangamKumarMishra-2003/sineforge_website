import Link from "next/link";

export const metadata = {
  title: "Reset Password | SineForge",
  description: "Reset your SineForge account password.",
};

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <section className="mx-auto max-w-md rounded-3xl border border-gray-800 bg-gray-900/50 p-8">
        <h1 className="text-3xl font-bold">Reset your password</h1>
        <p className="mt-4 text-gray-400">
          Enter your email address and we&apos;ll send you a password reset link.
        </p>

        <form className="mt-8 space-y-5">
          <label className="block text-sm font-medium" htmlFor="email">
            Email address
          </label>
          <input
            className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none focus:border-cyan-500"
            id="email"
            name="email"
            required
            type="email"
          />
          <button
            className="w-full rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
            type="submit"
          >
            Send reset link
          </button>
        </form>

        <Link className="mt-6 inline-block text-cyan-400 hover:underline" href="/login">
          Back to sign in
        </Link>
      </section>
    </main>
  );
}
