"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/common/Button";
import {
  subscribeToNewsletter,
  trackAnalyticsEvent,
} from "@/services/newsletter.service";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailRegex.test(email.trim())) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      await subscribeToNewsletter(email.trim());
      await trackAnalyticsEvent({
        event: "newsletter_signup",
        payload: {
          email: email.trim(),
          source: "blog_page",
        },
      });

      setStatus("success");
      setMessage("Thanks! You’re now subscribed to SineForge updates.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
    }
  };

  return (
    <div className="mt-24 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
      <h2 className="text-3xl font-bold">Never Miss an Update</h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-400">
        Subscribe to receive tutorials, product updates, industry news, and
        exclusive learning resources directly in your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>

        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="flex-1 rounded-xl border border-gray-700 bg-black px-5 py-3 text-white outline-none transition focus:border-cyan-500"
          aria-label="Email address"
          aria-invalid={status === "error"}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Subscribe"}
        </Button>
      </form>

      {message ? (
        <p
          className={`mt-4 text-sm ${
            status === "success"
              ? "text-emerald-400"
              : "text-rose-400"
          }`}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
