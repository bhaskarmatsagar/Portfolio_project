
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import { HoverExpand_001 } from "../ui/HoverExpand";
import { X } from "lucide-react";

export const Certificates = () => {
  const [fullScreenImage, setFullScreenImage] = useState<{ src: string; alt: string; code?: string } | null>(null);

  const images = portfolioData.certificates.map((cert) => ({
    src: cert.file,
    alt: cert.title,
    code: cert.date
  }));

  // Handle escape key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullScreenImage(null);
    };
    if (fullScreenImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [fullScreenImage]);

  return (
    <section id="certificates" className="py-24 max-w-5xl mx-auto w-full relative z-20">
      <div className="px-6 mb-12">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold"
        >
          Certificates
        </motion.h2>
      </div>

      <div className="w-full flex items-center justify-center">
        {/* We reuse the HoverExpand component for a cool certificate showcase */}
        <HoverExpand_001 images={images} onImageClick={(img) => setFullScreenImage(img)} />
      </div>

      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullScreenImage(null)}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 sm:p-10 backdrop-blur-sm cursor-pointer"
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setFullScreenImage(null);
              }}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={fullScreenImage.src}
              alt={fullScreenImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
