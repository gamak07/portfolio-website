import Link from "next/link";
import React from "react";

interface Props {
  show: string;
  onClose: () => void;
}

const navs = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function MobileNav({ show, onClose }: Props) {
  return (
    <nav className="border-t border-gray-200 py-4 md:hidden dark:border-gray-700 px-6">
      <ul className="flex flex-col space-y-2">
        {navs.map((nav) => (
          <li key={nav.name}>
            <Link
              href={nav.href}
              className={`block cursor-pointer rounded px-4 py-2 text-left transition-colors w-full ${show === nav.href ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-500 hover:text-gray-900"}`}
              onClick={onClose}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
