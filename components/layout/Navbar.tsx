"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact-form" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-semibold text-neutral-700 transition hover:text-black"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-12 items-center justify-center rounded-md border border-neutral-200 md:hidden"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span className="text-2xl leading-none">{isOpen ? "×" : "☰"}</span>
      </button>

      {/* Full Width Mobile Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 w-screen border-b border-neutral-200 bg-white shadow-md md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-neutral-100 py-2 text-base font-semibold text-neutral-700 transition hover:text-black last:border-b-0 text-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
