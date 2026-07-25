// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Courses", href: "/courses" },
//   { name: "Fellowship", href: "/fellowship" },
//   { name: "Community", href: "/community" },
//   { name: "Blog", href: "/blog" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();

//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
//         scrolled
//           ? "border-b border-gray-800 bg-black/80 backdrop-blur-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <nav className="container mx-auto flex h-20 items-center justify-between px-6">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold">
//           <span className="text-cyan-400">Sine</span>Forge
//         </Link>

//         {/* Desktop */}
//         <div className="hidden items-center gap-8 lg:flex">
//           {navLinks.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`transition ${
//                 pathname === item.href
//                   ? "text-cyan-400"
//                   : "text-gray-300 hover:text-white"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         {/* Desktop Buttons */}
//         <div className="hidden items-center gap-4 lg:flex">
//           <Link
//             href="/login"
//             className="rounded-xl border border-gray-700 px-5 py-2 hover:border-cyan-400"
//           >
//             Login
//           </Link>

//           <Link
//             href="/signup"
//             className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black hover:bg-cyan-400"
//           >
//             Get Started
//           </Link>
//         </div>

//         {/* Mobile Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="lg:hidden"
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="border-t border-gray-800 bg-black lg:hidden">
//           <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
//             {navLinks.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className={`transition ${
//                   pathname === item.href
//                     ? "text-cyan-400"
//                     : "text-gray-300"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}

//             <Link
//               href="/login"
//               className="rounded-xl border border-gray-700 px-5 py-3 text-center"
//             >
//               Login
//             </Link>

//             <Link
//               href="/signup"
//               className="rounded-xl bg-cyan-500 px-5 py-3 text-center font-semibold text-black"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
"use client";

import Link from "next/link";

import styles from "../../app/styles/navbar.module.scss"
export default function Navbar() {

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-2xl font-bold text-cyan-400"
        >
          SineForge
        </Link>


        <div className="flex gap-6 text-white">

          <Link href="/courses">
            Courses
          </Link>

          <Link href="/fellowship">
            Fellowship
          </Link>

          <Link href="/community">
            Community
          </Link>

          <Link href="/blog">
            Blog
          </Link>

        </div>

      </div>

    </nav>
  );
}