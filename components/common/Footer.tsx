import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-cyan-400">Sine</span>Forge
            </h2>

            <p className="mt-4 text-gray-400">
              Empowering developers through AI,
              Software Engineering,
              Cyber Security,
              Cloud Computing,
              and modern technologies.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link href="/about">About</Link>
              <Link href="/courses">Courses</Link>
              <Link href="/community">Community</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Resources
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link href="/contact">Contact</Link>
              <Link href="/login">Login</Link>
              <Link href="/signup">Sign Up</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Connect
            </h3>

            <div className="flex gap-4">
              <Link href="#">
                <Github className="hover:text-cyan-400" />
              </Link>

              <Link href="#">
                <Linkedin className="hover:text-cyan-400" />
              </Link>

              <Link href="#">
                <Instagram className="hover:text-cyan-400" />
              </Link>

              <Link href="#">
                <Twitter className="hover:text-cyan-400" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} SineForge. All Rights Reserved.</p>
          <p className="mt-2">Design &amp; developed by Raghudhan pvt ltd</p>
        </div>
      </div>
    </footer>
  );
}
