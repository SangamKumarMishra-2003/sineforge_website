"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnOverlay?: boolean;
  showCloseButton?: boolean;
}

const sizeClasses = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-3xl",
  xl: "max-w-5xl",
  full: "max-w-7xl",
};

export default function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  className,
  size = "md",
  closeOnOverlay = true,
  showCloseButton = true,
}: ModalProps) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (closeOnOverlay) onClose();
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative z-10 w-full overflow-hidden rounded-3xl border border-gray-800 bg-[#0B0B0F] shadow-2xl",
              sizeClasses[size],
              className
            )}
          >
            {/* Header */}
            {(title || showCloseButton) && (
              <div className="flex items-center justify-between border-b border-gray-800 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">
                  {title}
                </h2>

                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="rounded-xl p-2 transition hover:bg-gray-800"
                    aria-label="Close Modal"
                  >
                    <X className="h-5 w-5 text-gray-300" />
                  </button>
                )}
              </div>
            )}

            {/* Body */}
            <div className="max-h-[70vh] overflow-y-auto p-8 text-gray-300">
              {children}
            </div>

            {/* Footer */}
            {footer && (
              <div className="flex justify-end gap-4 border-t border-gray-800 px-8 py-5">
                {footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}