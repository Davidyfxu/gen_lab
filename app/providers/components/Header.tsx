"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-2 md:p-3">
      <div className="mx-auto rounded-full bg-[#f8f3e3] px-4 py-2 md:px-6 md:py-3 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M12.2207 24.4415C13.9428 24.4415 15.3462 22.9343 15.3462 21.0771C15.3462 19.22 13.9428 17.7128 12.2207 17.7128C10.4986 17.7128 9.09521 19.22 9.09521 21.0771C9.09521 22.9343 10.4986 24.4415 12.2207 24.4415Z"
                fill="#4C3022"
              />
              <path
                d="M16.4219 14.6935C18.1439 14.6935 19.5473 13.1863 19.5473 11.3292C19.5473 9.47201 18.1439 7.96484 16.4219 7.96484C14.6998 7.96484 13.2964 9.47201 13.2964 11.3292C13.2964 13.1863 14.6998 14.6935 16.4219 14.6935Z"
                fill="#4C3022"
              />
              <path
                d="M8.01953 14.6935C9.74159 14.6935 11.145 13.1863 11.145 11.3292C11.145 9.47201 9.74159 7.96484 8.01953 7.96484C6.29747 7.96484 4.89404 9.47201 4.89404 11.3292C4.89404 13.1863 6.29747 14.6935 8.01953 14.6935Z"
                fill="#4C3022"
              />
              <path
                d="M12.2207 4.94519C13.9428 4.94519 15.3462 3.43802 15.3462 1.58087C15.3462 -0.276285 13.9428 -1.78345 12.2207 -1.78345C10.4986 -1.78345 9.09521 -0.276285 9.09521 1.58087C9.09521 3.43802 10.4986 4.94519 12.2207 4.94519Z"
                fill="#4C3022"
              />
            </svg>
            <span className="text-[#4C3022] font-bold text-sm leading-none">
              Generation Lab
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <Link
            href="/science"
            className="text-[#4C3022] hover:text-[#6b4a35] text-sm lg:text-base transition-colors"
          >
            Science
          </Link>
          <Link
            href="/about"
            className="text-[#4C3022] hover:text-[#6b4a35] text-sm lg:text-base transition-colors"
          >
            About US
          </Link>
          <Link
            href="/faqs"
            className="text-[#4C3022] hover:text-[#6b4a35] text-sm lg:text-base transition-colors"
          >
            FAQs
          </Link>
          <Link
            href="/blog"
            className="text-[#4C3022] hover:text-[#6b4a35] text-sm lg:text-base transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/providers"
            className="bg-[#4C3022] hover:bg-[#3b2419] text-white text-sm lg:text-base px-4 py-1.5 rounded-full transition-colors"
          >
            For Providers
          </Link>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <Link
            href="/order-test"
            className="bg-[#A16C3B] hover:bg-[#875a31] text-white px-4 py-1.5 rounded-full text-sm lg:text-base font-medium transition-colors"
          >
            Order Test
          </Link>
          <Link
            href="/signin"
            className="hidden md:block text-[#4C3022] hover:text-[#6b4a35] text-sm lg:text-base transition-colors"
          >
            Sign in
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#4C3022]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#f8f3e3] mt-2 p-4 rounded-lg shadow-lg">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/science"
              className="text-[#4C3022] hover:text-[#6b4a35] transition-colors"
            >
              Science
            </Link>
            <Link
              href="/about"
              className="text-[#4C3022] hover:text-[#6b4a35] transition-colors"
            >
              About US
            </Link>
            <Link
              href="/faqs"
              className="text-[#4C3022] hover:text-[#6b4a35] transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/blog"
              className="text-[#4C3022] hover:text-[#6b4a35] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/providers"
              className="bg-[#4C3022] hover:bg-[#3b2419] text-white px-4 py-2 rounded-full inline-block w-fit transition-colors"
            >
              For Providers
            </Link>
            <Link
              href="/signin"
              className="text-[#4C3022] hover:text-[#6b4a35] transition-colors"
            >
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
