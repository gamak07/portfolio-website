'use client'

import { getPublicImageUrl } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";

interface Props {
  isOpen: boolean;
  imageSrc: string | null;
  onClose: () => void;
}

export default function ImageModal({ isOpen, imageSrc, onClose }: Props) {
  
  // Close on "Escape" key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      
      {/* Backdrop (Darkened + Blur) */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Close Button (Fixed to top right of screen for mobile usability) */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 hover:scale-110 transition-all sm:right-8 sm:top-8"
        aria-label="Close modal"
      >
        <RiCloseLine className="text-3xl" />
      </button>

      {/* Image Container */}
      <div 
        className="relative h-full w-full max-w-5xl max-h-[85vh] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
      >
        <Image
          src={getPublicImageUrl(imageSrc)}
          alt="Project screenshot"
          fill
          className="object-contain"
          quality={100}
          priority
        />
      </div>
    </div>
  );
}