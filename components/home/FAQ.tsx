"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Who can join SineForge courses?",
    answer:
      "Anyone interested in learning technology can join. Whether you're a beginner, college student, working professional, or career switcher, our programs are designed for all skill levels.",
  },
  {
    question: "Do I need prior programming experience?",
    answer:
      "No. Many of our courses start from the fundamentals and gradually progress to advanced concepts through hands-on projects and mentorship.",
  },
  {
    question: "Are the classes live or recorded?",
    answer:
      "Most programs include live mentor-led sessions along with lifetime access to recorded lectures, notes, assignments, and project resources.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. After successfully completing the course requirements and projects, you'll receive a SineForge Certificate of Completion.",
  },
  {
    question: "Do you provide internship opportunities?",
    answer:
      "Selected students may receive internship opportunities, live projects, fellowship programs, and career guidance based on their performance.",
  },
  {
    question: "Is placement assistance available?",
    answer:
      "Yes. We provide resume reviews, LinkedIn optimization, mock interviews, coding practice, and referrals through our hiring partners whenever available.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Yes. Recorded lectures and learning materials are available so you can study whenever it fits your schedule while still attending live doubt-solving sessions.",
  },
  {
    question: "How can I contact the SineForge team?",
    answer:
      "You can reach us through our Contact page, email, or our community platforms. Our team typically responds within 24 hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Got Questions?
            <span className="text-cyan-400"> We've Got Answers.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Find answers to the most common questions about SineForge
            courses, fellowships, certifications, mentorship, and career
            support.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-20 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 transition-all duration-300 hover:border-cyan-500/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-6 text-left"
              >
                <h3 className="pr-6 text-lg font-semibold">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`h-6 w-6 text-cyan-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-800 px-6 py-5">
                    <p className="leading-8 text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 p-10 text-center">
          <h3 className="text-3xl font-bold">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Our team is happy to help you choose the right course,
            fellowship, or learning path for your career goals.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}