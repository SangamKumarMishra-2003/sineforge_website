"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  type?: "single" | "multiple";
  defaultOpen?: string[];
}

export default function Accordion({
  items,
  className,
  type = "single",
  defaultOpen = [],
}: AccordionProps) {
  const [openItems, setOpenItems] =
    useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    if (type === "single") {
      setOpenItems((prev) =>
        prev.includes(id) ? [] : [id]
      );
    } else {
      setOpenItems((prev) =>
        prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id]
      );
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-gray-800/60"
            >
              <span className="text-lg font-semibold text-white">
                {item.title}
              </span>

              <ChevronDown
                className={cn(
                  "h-5 w-5 text-cyan-400 transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-gray-800 px-6 py-5 text-gray-400 leading-7">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}