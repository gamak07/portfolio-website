import Availability from "@/features/contact_page/Availability";
import ContactInformation from "@/features/contact_page/ContactInformation";
import Follow from "@/features/contact_page/Follow";
import SendMessage from "@/features/contact_page/SendMessage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ganiyu Mubarak for collaborations, job opportunities, or tech questions.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white md:py-20 py-10 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-12 text-center text-2xl md:text-4xl font-bold text-gray-900 dark:text-white ">
          Get In Touch
        </h1>
        <div className="grid gap-12 lg:grid-cols-2">
          <SendMessage />
          <div className="space-y-8">
            <ContactInformation />
            <Follow />
            <Availability />
          </div>
        </div>
      </div>
    </main>
  );
}
