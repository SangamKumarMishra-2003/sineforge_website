import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | SineForge",
  description:
    "Get in touch with the SineForge team for admissions, partnerships, mentorship, internships, or technical support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-cyan-500 px-4 py-1 text-sm text-cyan-400">
            Contact SineForge
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            We'd Love to
            <span className="text-cyan-400"> Hear From You</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Have questions about our courses, fellowships, internships,
            partnerships, or community? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-3xl border border-gray-800 bg-gray-900/40 p-8">
            <h2 className="text-3xl font-bold">Send us a Message</h2>

            <form className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none transition focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none transition focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none transition focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none transition focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-800 p-6">
              <div className="flex items-center gap-4">
                <Mail className="h-8 w-8 text-cyan-400" />

                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="mt-1 text-gray-400">
                    contact@sineforge.tech
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-800 p-6">
              <div className="flex items-center gap-4">
                <Phone className="h-8 w-8 text-cyan-400" />

                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="mt-1 text-gray-400">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-800 p-6">
              <div className="flex items-center gap-4">
                <MapPin className="h-8 w-8 text-cyan-400" />

                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="mt-1 text-gray-400">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-800 p-6">
              <div className="flex items-center gap-4">
                <Clock className="h-8 w-8 text-cyan-400" />

                <div>
                  <h3 className="text-xl font-semibold">
                    Working Hours
                  </h3>
                  <p className="mt-1 text-gray-400">
                    Monday - Friday
                  </p>
                  <p className="text-gray-400">
                    9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="flex h-72 items-center justify-center rounded-3xl border border-dashed border-gray-700 bg-gray-900/40">
              <p className="text-gray-500">
                Google Map will be embedded here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">
          <h2 className="text-4xl font-bold">
            Let's Build Something Amazing Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Whether you're looking to learn, collaborate, hire talent, or
            partner with SineForge, we'd love to connect with you.
          </p>

          <button className="mt-8 rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:bg-cyan-400">
            Schedule a Meeting
          </button>
        </div>
      </section>
    </main>
  );
}