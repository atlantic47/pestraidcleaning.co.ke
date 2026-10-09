"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-green-900/5 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          id="navbar-logo"
        >
          <div className="relative flex items-center gap-2">
            {/* Real logo — inverted to white when on dark hero, normal on white navbar */}
            <Image
              src="/logo-pestraid.png"
              alt="Pestraid Cleaning Kenya logo"
              width={160}
              height={52}
              priority
              className="transition-all duration-500 h-10 sm:h-12 w-auto object-contain"
              style={{
                filter: scrolled
                  ? "none"
                  : "brightness(0) invert(1)",
              }}
            />
            <span
              className={`hidden sm:block text-xs font-semibold font-display tracking-widest uppercase transition-colors duration-300 border-l pl-3 ${
                scrolled
                  ? "text-brand-green border-brand-green/30"
                  : "text-green-200 border-white/30"
              }`}
            >
              Cleaning Kenya
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-brand-green/10 hover:text-brand-green ${
                scrolled ? "text-gray-700" : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+254710907628"
            id="navbar-call-btn"
            className="flex items-center gap-2 btn-primary text-sm py-2.5 px-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0710 907 628
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="navbar-mobile-menu-btn"
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-green-100 shadow-xl transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`mobile-nav-${link.label.toLowerCase()}`}
              className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-brand-green-50 hover:text-brand-green transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+254710907628"
            id="mobile-navbar-call-btn"
            className="mt-2 btn-primary justify-center"
            onClick={() => setMenuOpen(false)}
          >
            📞 0710 907 628
          </a>
        </nav>
      </div>
    </header>
  );
}
