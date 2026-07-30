// import Link from "next/link";
// import { ButtonHTMLAttributes, ReactNode } from "react";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   children: ReactNode;
//   href?: string;
//   variant?: "primary" | "secondary" | "outline";
//   size?: "sm" | "md" | "lg";
//   fullWidth?: boolean;
// }

// export default function Button({
//   children,
//   href,
//   variant = "primary",
//   size = "md",
//   fullWidth = false,
//   className = "",
//   ...props
// }: ButtonProps) {
//   const base =
//     "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300";

//   const variants = {
//     primary:
//       "bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/20",
//     secondary:
//       "bg-gray-800 text-white hover:bg-gray-700",
//     outline:
//       "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black",
//   };

//   const sizes = {
//     sm: "px-4 py-2 text-sm",
//     md: "px-6 py-3",
//     lg: "px-8 py-4 text-lg",
//   };

//   const classes = `${base} ${variants[variant]} ${sizes[size]} ${
//     fullWidth ? "w-full" : ""
//   } ${className}`;

//   if (href) {
//     return (
//       <Link href={href} className={classes}>
//         {children}
//       </Link>
//     );
//   }

//   return (
//     <button className={classes} {...props}>
//       {children}
//     </button>
//   );
// }
"use client";

import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";
import type { Route } from "next";
import { cn } from "@/lib/utils";


type ButtonProps = {
  children: ReactNode;
  href?: Route;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;


export default function Button({
  children,
  href,
  size = "md",
  variant = "primary",
  className,
  type = "button",
  disabled,
  ...props
}: ButtonProps) {


  const styles = cn(

    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300",

    {
      "px-4 py-2 text-sm":
        size === "sm",

      "px-6 py-3 text-base":
        size === "md",

      "px-8 py-4 text-lg":
        size === "lg",
    },


    {
      "bg-cyan-400 text-black hover:bg-cyan-300":
        variant === "primary",

      "bg-indigo-500 text-white hover:bg-indigo-400":
        variant === "secondary",

      "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black":
        variant === "outline",
    },


    className
  );


  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={styles}
      {...props}
    >
      {children}
    </button>
  );
}
