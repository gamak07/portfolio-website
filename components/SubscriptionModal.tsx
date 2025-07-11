import Button from "@/ui/Button";
import Input from "@/ui/Input";
import React from "react";
import { FaTimes } from "react-icons/fa";

interface props {
  onClose: () => void;
}

export default function SubscriptionModal({ onClose }: props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 dark:bg-gray-800">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Subscribe to Newsletter
          </h3>
          <Button
            className="cursor-pointer text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            onClick={onClose}
          >
            <FaTimes />
          </Button>
        </div>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Get the latest updates and articles delivered to your inbox.
        </p>
        <form action="">
          <Input
            type="email"
            placeholder="Enter your email"
            className="mb-4 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:gray-400"
          />
          <Button className="w-full cursor-pointer rounded-md bg-blue-600 py-3 font-semibold whitespace-nowrap text-white transition-colors hover:bg-blue-700">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
}
