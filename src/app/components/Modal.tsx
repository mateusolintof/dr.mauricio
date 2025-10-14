"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  scrollContent?: boolean; // default true
  size?: "full" | "md"; // default full
};

export default function Modal({ open, onClose, title, children, scrollContent = true, size = "full" }: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-0 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className={`relative bg-white md:rounded-xl md:overflow-hidden flex flex-col ${
              size === "md"
                ? "w-full h-full md:w-[900px] md:h-auto md:max-h-[85vh]"
                : "w-full h-full"
            }`}
            initial={{ y: 24, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 24, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 md:px-6 py-3 flex-shrink-0">
              <h3 className="text-lg md:text-xl font-bold text-prime">{title}</h3>
              <button
                aria-label="Fechar"
                onClick={onClose}
                className="rounded-md p-2 hover:bg-slate-100 text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className={`w-full flex-1 ${scrollContent ? "overflow-auto" : "overflow-hidden"}`}>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
