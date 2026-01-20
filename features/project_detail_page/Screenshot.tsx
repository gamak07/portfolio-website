'use client'

import { getPublicImageUrl } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import ImageModal from "./ImageModal";

interface Props {
  title: string;
  gallery: string[];
}

export default function Screenshot({ title, gallery }: Props) {
  const [picModal, setPicModal] = useState<string | null>(null)
  
  const handlePicModal = (img: string) => {
    setPicModal(img)
  }
  
  const closeModal = () => {
    setPicModal(null)
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Project Screenshots
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
          Explore the key features and interfaces of the{" "}
          <span className="lowercase font-medium text-gray-900 dark:text-gray-200">{title}</span> through these detailed
          screenshots.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {gallery?.map((img, i) => (
          <div
            key={i}
            className="group relative h-64 w-full cursor-pointer overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
            onClick={() => handlePicModal(img)}
          >
            <Image
              src={getPublicImageUrl(img)}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              alt={`${title} screenshot ${i + 1}`}
            />
            
            {/* Hover Overlay - Adds a nice interaction effect */}
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10 dark:group-hover:bg-white/5" />
          </div>
        ))}
      </div>

      {/* Passed props to Modal so it functions correctly */}
      {picModal && (
        <ImageModal 
          isOpen={!!picModal} 
          imageSrc={picModal} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}