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
  const handlePicModal = (img:string)=>{
    setPicModal(img)
  }
  const closeModal = ()=>{
    setPicModal(null)
  }
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          Project Screenshots
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Explore the key features and interfaces of the{" "}
          <span className="lowercase">{title}</span> through these detailed
          screenshots.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {gallery?.map((img, i) => (
          <div
            key={i}
            className="relative h-64 w-full cursor-pointer rounded-lg bg-white"
            onClick={()=>handlePicModal(img)}
          >
            <Image
              src={getPublicImageUrl(img)}
              fill
              className="rounded-lg object-cover object-top shadow-lg transition-shadow hover:shadow-xl"
              alt={title}
            />
          </div>
        ))}
      </div>
      {picModal && <ImageModal />}
    </div>
  );
}
