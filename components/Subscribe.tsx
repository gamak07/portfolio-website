"use client";

import Button from "@/ui/Button";
import React, { useState } from "react";
import SubscriptionModal from "./SubscriptionModal";

export default function Subscribe() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Newsletter
      </h4>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Subscribe to get updates on new projects and blog posts.
      </p>
      <Button
        className="cursor-pointer rounded-sm bg-blue-600 px-6 py-2 font-medium whitespace-nowrap text-white transition-colors hover:bg-blue-700"
        onClick={handleShowModal}
      >
        Subscribe
      </Button>

      {showModal && <SubscriptionModal onClose={()=>setShowModal(false)} />}
    </div>
  );
}
