"use client";
import Button from "@/ui/Button";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const navs = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  // const [active, setActive] = useState<string>("home");
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
  const pathname = usePathname();

  const handleShowNavMenu = () => {
    setShowNavMenu((prev) => !prev);
  };
  // const handleActiveTab = (tab: string) => {
  //   setActive(tab);
  // };
  return (
    <>
      <header className="sticky top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white opacity-90 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold">
              <Link
                href="/"
                className="cursor-pointer text-gray-900 dark:text-white"
              >
                Ganiyu Mubarak
              </Link>
            </div>
            <ul className="hidden space-x-8 md:flex">
              {navs.map((nav) => (
                <li key={nav.name}>
                  <Link
                    href={nav.href}
                    className={`transition-color cursor-pointer font-semibold ${pathname === nav.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"}`}
                    // onClick={() => handleActiveTab(nav.name.toLowerCase())}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              <Button
                className={`cursor-pointer rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${theme === "dark" ? "text-yellow-400" : "text-gray-600"}`}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </Button>
              <Button
                className="cursor-pointer rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 md:hidden"
                onClick={handleShowNavMenu}
              >
                {showNavMenu ? <FaTimes /> : <FaBars />}
              </Button>
            </div>
          </div>
        </div>
        {showNavMenu && (
          <MobileNav show={pathname} onClose={() => setShowNavMenu(false)} />
        )}
      </header>
    </>
  );
}
