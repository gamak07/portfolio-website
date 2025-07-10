"use client";
import Button from "@/ui/Button";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const handleActiveTab = (tab: string) => {
    setActive(tab);
  };
  return (
    <header className="top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="/" className="cursor-pointer text-gray-900">
              Ganiyu Mubarak
            </Link>
          </div>
          <ul className="hidden space-x-8 md:flex">
            <li>
              <Link
                href="/"
                className={`transition-color cursor-pointer font-medium ${active === "home" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}
                onClick={() => handleActiveTab("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`transition-color cursor-pointer font-medium ${active === "projects" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}
                onClick={() => handleActiveTab("projects")}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`transition-color cursor-pointer font-medium ${active === "blog" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}
                onClick={() => handleActiveTab("blog")}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`transition-color cursor-pointer font-medium ${active === "about" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}
                onClick={() => handleActiveTab("about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`transition-color cursor-pointer font-medium ${active === "contact" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}
                onClick={() => handleActiveTab("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <Button className="cursor-pointer rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100">
              <FaMoon />
            </Button>
            <Button className="cursor-pointer rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 md:hidden">
              <FaBars />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
