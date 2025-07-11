import Link from "next/link";
import React from "react";

interface props {
  show: string;
}

const navs = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function MobileNav({ show }: props) {
  return (
    <nav className="border-t border-gray-200 py-4 md:hidden dark:border-gray-700">
      <ul className="flex flex-col space-y-2">
        {navs.map((nav) => (
          <li key={nav.name}>
            <Link
              href={nav.href}
              className={`cursor-pointer rounded px-4 py-2 text-left transition-colors ${show === nav.name.toLowerCase() ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-500 hover:text-gray-900"}`}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
