import Button from "@/ui/Button";
import Input from "@/ui/Input";
import React from "react";

export default function SendMessage() {
  return (
    <div className="rounded-lg bg-white p-4 sm:p-6 md:p-8 shadow-lg dark:bg-gray-800">
      <h2 className="mb-6 sm:text-2xl text-xl font-semibold text-gray-900 dark:text-white">
        Send Me a Message
      </h2>
      <form action="" className="space-y-6">
        <div>
          <label
            htmlFor=""
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <Input
            type="text"
            className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-blue-600 placeholder:text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <Input
            type="email"
            className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-blue-600 placeholder:text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Subject
          </label>
          <Input
            type="text"
            className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-blue-600 placeholder:text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
            placeholder="Project inquiry"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            rows={5}
            className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-blue-600 placeholder:text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
            placeholder="Tell me about your project..."
          />
        </div>
        <Button
          type="submit"
          className="w-full cursor-pointer rounded bg-blue-600 py-3 font-semibold whitespace-nowrap text-white transition-colors hover:bg-blue-700"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
