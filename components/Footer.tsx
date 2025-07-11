'use client'

import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Subscribe from "./Subscribe";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
              Ganiyu Mubarak
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Frontend developer passionate about creating beautiful and
              functional web experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="block cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

         <Subscribe />
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Ganiyu Mubarak. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
