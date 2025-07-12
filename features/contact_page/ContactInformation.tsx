import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const contacts = [
  { icons: <FaEnvelope />, type: "Email", mode: "ganiyumubarak09@gmail.com" },
  { icons: <FaPhone />, type: "Phone", mode: "+234-8147723014" },
  { icons: <FaMapMarkerAlt />, type: "Location", mode: "Ayobo, Lagos" },
];

export default function ContactInformation() {
  return (
    <section className="rounded-lg bg-white p-4 sm:p-6 md:p-8 shadow-lg dark:bg-gray-800">
      <h2 className="mb-6 md:text-2xl text-xl font-semibold text-gray-900 dark:text-white">
        Contact Information
      </h2>
      <div className="space-y-4">
        {contacts.map((contact, i) => (
          <div key={i} className="flex items-center break-words max-w-full">
            <span className="mr-4 text-xl text-blue-600 shrink-0">{contact.icons}</span>
            <div className="min-w-0">
              <p className="font-medium text-gray-900 dark:text-white">
                {contact.type}
              </p>
              <p className="text-gray-600 dark:text-gray-300 break-all">{contact.mode}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
