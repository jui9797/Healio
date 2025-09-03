"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useClerk, UserButton, useUser } from "@clerk/nextjs";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 bg-[#005350] ${
        isScrolled
          ? "bg-gray-400/50 shadow-md text-black backdrop-blur-lg py-3 md:py-4"
          : "text-white py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 font-bold text-xl">
        Healio
      </Link>

      {/* Desktop Nav */}
      <div
        className={`hidden md:flex items-center gap-4 lg:gap-8 px-6 py-2 rounded-full transition-all duration-300 ${
          isScrolled ? "text-gray-800" : ""
        }`}
      >
        <Link href="/" className="hover:underline">
          Doctors
        </Link>
        <Link href="/about" className="hover:underline">
          Appointments
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <UserButton />
        ) : (
          <>
            <button
              onClick={openSignIn}
              className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
                isScrolled ? "text-white bg-black" : "bg-white text-black"
              }`}
            >
              Login
            </button>
            <button
              className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
                isScrolled ? "text-white bg-black" : "bg-white text-black"
              }`}
            >
              <Link href="/signup">Sign up</Link>
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className="bg-black text-white px-4 py-2 rounded-full"
          >
            Login
          </button>
        )}

        {/* Hamburger Button */}
        <button onClick={() => setIsMenuOpen(true)}>
          <Menu className="w-7 h-7 text-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 p-4 left-0 w-full h-[100px] bg-white text-base flex flex-col md:hidden items-center justify-center gap-2 font-medium text-gray-800 transition-all duration-500  ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="w-7 h-7" />
        </button>

        <Link
          href="/"
          className="hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Doctors
        </Link>
        <Link
          href="/about"
          className="hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Appointments
        </Link>
        <Link
          href="/about"
          className="hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
