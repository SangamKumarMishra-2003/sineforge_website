// import { ReactNode } from "react";

// interface BadgeProps {
//   children: ReactNode;
//   color?: "cyan" | "green" | "red" | "yellow" | "gray";
// }

// export default function Badge({
//   children,
//   color = "cyan",
// }: BadgeProps) {
//   const colors = {
//     cyan: "border-cyan-500 text-cyan-400 bg-cyan-500/10",
//     green: "border-green-500 text-green-400 bg-green-500/10",
//     red: "border-red-500 text-red-400 bg-red-500/10",
//     yellow: "border-yellow-500 text-yellow-400 bg-yellow-500/10",
//     gray: "border-gray-700 text-gray-300 bg-gray-800",
//   };

//   return (
//     <span
//       className={`inline-flex rounded-full border px-4 py-1 text-sm font-medium ${colors[color]}`}
//     >
//       {children}
//     </span>
//   );
// }
import { ReactNode } from "react";
import { cn } from "@/lib/utils";


interface BadgeProps {
  children: ReactNode;
  className?: string;
}


export default function Badge({
  children,
  className,
}: BadgeProps) {

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur",
        className
      )}
    >
      {children}
    </span>
  );
}