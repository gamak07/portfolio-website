import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaTwitter />,
    url: "https://x.com/Gamak_07",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/ganiyu-mubarak/",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/gamak07",
  },
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/234814773014",
  },
];

export default function Follow() {
  return (
    <section className="rounded-lg bg-white p-4 sm:p-6 md:p-8 shadow-lg dark:bg-gray-800">
      <h1 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Follow Me</h1>
      <div className="flex space-x-4">
        {socialLinks.map((link, i) => (
          <a
            href={link.url}
            target="_blank"
            key={i}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
