import Button from "@/ui/Button";
import Input from "@/ui/Input";
import React from "react";

export default function NewsLetter() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Newsletter
      </h3>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
        Get the latest posts delivered right to your inbox.
      </p>
      <form action="">
        <Input
          type="email"
          placeholder="Enter your email"
          className="dark:placeholder:gray-400 mb-4 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
        <Button className="w-full cursor-pointer rounded-md bg-blue-600 py-3 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-blue-700">
          Subscribe
        </Button>
      </form>
    </div>
  );
}
