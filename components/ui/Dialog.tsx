"use client";

import { ReactNode, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;

  title: string;
  description?: string;

  children?: ReactNode;

  confirmText?: string;
  cancelText?: string;

  type?: "default" | "success" | "warning" | "danger" | "info";

  loading?: boolean;
  className?: string;
  closeOnOverlay?: boolean;
}

const icons = {
  default: Info,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: XCircle,
};

const colors = {
  default: "text-cyan-400 bg-cyan-500/10",
  info: "text-cyan-400 bg-cyan-500/10",
  success: "text-green-400 bg-green-500/10",
  warning: "text-yellow-400 bg-yellow-500/10",
  danger: "text-red-400 bg-red-500/10",
};

export default function Dialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  children,
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "default",
  loading = false,
  className,
  closeOnOverlay = false,
}: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  const Icon = icons[type];

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => {
              if (closeOnOverlay) onClose();
            }}
          />

          {/* Dialog */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 25,
            }}
            transition={{
              duration: 0.25,
            }}
            className={cn(
              "relative z-10 w-full max-w-lg rounded-3xl border border-gray-800 bg-[#0B0B0F] p-8 shadow-2xl",
              className
            )}
          >
            {/* Icon */}
            <div
              className={cn(
                "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl",
                colors[type]
              )}
            >
              <Icon className="h-8 w-8" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>

            {/* Description */}
            {description && (
              <p className="mt-4 leading-7 text-gray-400">
                {description}
              </p>
            )}

            {/* Content */}
            {children && (
              <div className="mt-6 text-gray-300">
                {children}
              </div>
            )}

            {/* Actions */}
            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={onClose}
                disabled={loading}
                className="rounded-xl border border-gray-700 px-5 py-3 text-white transition hover:border-gray-500 disabled:opacity-50"
              >
                {cancelText}
              </button>

              <button
                onClick={onConfirm}
                disabled={loading}
                className={cn(
                  "rounded-xl px-5 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-50",
                  type === "danger"
                    ? "bg-red-600 text-white hover:bg-red-500"
                    : type === "success"
                    ? "bg-green-600 text-white hover:bg-green-500"
                    : type === "warning"
                    ? "bg-yellow-500 text-black hover:bg-yellow-400"
                    : "bg-cyan-500 text-black hover:bg-cyan-400"
                )}
              >
                {loading ? "Please wait..." : confirmText}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}