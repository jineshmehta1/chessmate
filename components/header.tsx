"use client";
import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon, ArrowRightIcon } from "./ui/BannerIcon";

interface NavItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Chess Programs", href: "/courses" },
  { name: "Coaches", href: "/coaches" },
  { name: "Achievements", href: "/achievements" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/90 backdrop-blur-md py-3 md:py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/logo.webp"
              alt="Star Chess Academy"
              className={`object-contain transition-all duration-300 ${
                scrolled
                  ? "h-10 sm:h-12"
                  : "h-12 sm:h-14 md:h-16"
              }`}
            />
          </a>

          {/* Desktop Nav (Visible from lg and up) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 xl:px-4 py-2 text-[12px] xl:text-[13px] font-bold text-black hover:text-yellow-600 transition-colors uppercase tracking-wider relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-2/3"></span>
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4">

  {/* Login Button */}
  <a
    href="/login"
    className="hidden sm:flex items-center justify-center border-2 border-black text-black hover:bg-black hover:text-white px-4 lg:px-5 py-2 lg:py-3 font-black text-[11px] lg:text-xs uppercase tracking-widest transition-all duration-300"
  >
    Login
  </a>

  {/* Book Demo Button */}
  <a
    href="/bookdemo"
    className="hidden sm:flex items-center gap-2 bg-yellow-400 hover:bg-black hover:text-white text-black px-4 lg:px-6 py-2 lg:py-3 font-black text-[11px] lg:text-xs uppercase tracking-widest transition-all duration-300 border-2 border-yellow-400"
  >
    Book a Demo
    <ArrowRightIcon className="w-4 h-4" />
  </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-black hover:bg-gray-100 transition-all"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-7 h-7" />
              ) : (
                <MenuIcon className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        } bg-white border-t border-gray-100 shadow-xl`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl sm:text-2xl font-black text-black hover:text-yellow-500 uppercase transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <hr className="border-gray-200" />

          <a
  href="/login"
  className="w-full text-center border-2 border-black text-black py-3 font-black uppercase tracking-widest"
  onClick={() => setIsMobileMenuOpen(false)}
>
  Login
</a>

          <a
            href="/bookdemo"
            className="w-full text-center bg-yellow-400 text-black py-3 font-black uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;