"use client";
import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon, ArrowRightIcon } from "./ui/BannerIcon";
import { ChevronDown } from "lucide-react";
import { useDemoModal } from "@/context/DemoContext"; // Integrated Context

interface SubItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href?: string;
  subItems?: SubItem[];
}

const Header: React.FC = () => {
  const { openDemoModal } = useDemoModal(); // Initialize Modal Function
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
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
    {
      name: "Chess Programs",
      subItems: [
        { name: "Curriculum", href: "/curriculum" },
        { name: "Training Camps", href: "/training-camps" },
      ],
    },
    {
      name: "About Us",
      subItems: [
        { name: "Why Star Chess?", href: "/#why-choose-us" },
        { name: "FAQ", href: "/#faq" },
        { name: "Blogs", href: "/blog" },
        { name: "Coaches", href: "/coaches" },
        { name: "Branches", href: "/contact#branches" },
      ],
    },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMobileSubmenu = (name: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === name ? null : name);
  };

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
                scrolled ? "h-10 sm:h-12" : "h-12 sm:h-14 md:h-16"
              }`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <button className="flex items-center gap-1 px-3 xl:px-4 py-2 text-[12px] xl:text-[13px] font-bold text-black hover:text-yellow-600 transition-colors uppercase tracking-wider">
                    {item.name}
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="px-3 xl:px-4 py-2 text-[12px] xl:text-[13px] font-bold text-black hover:text-yellow-600 transition-colors uppercase tracking-wider relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-2/3"></span>
                  </a>
                )}

                {item.subItems && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                    {item.subItems.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block px-6 py-3 text-[11px] font-bold text-black hover:bg-yellow-50 hover:text-yellow-600 uppercase tracking-wider transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4">
            <a
              href="https://training.starchess.in/"
              className="hidden sm:flex items-center justify-center border-2 border-black text-black hover:bg-black hover:text-white px-4 lg:px-5 py-2 lg:py-3 font-black text-[11px] lg:text-xs uppercase tracking-widest transition-all duration-300"
            >
              Login
            </a>

            {/* Desktop Modal Trigger */}
            <button
              onClick={openDemoModal}
              className="hidden sm:flex items-center gap-2 bg-yellow-400 hover:bg-black hover:text-white text-black px-4 lg:px-6 py-2 lg:py-3 font-black text-[11px] lg:text-xs uppercase tracking-widest transition-all duration-300 border-2 border-yellow-400"
            >
              Book a Demo
              <ArrowRightIcon className="w-4 h-4" />
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-black hover:bg-gray-100 transition-all"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-100 shadow-xl overflow-y-auto`}
      >
        <div className="px-6 py-8 flex flex-col gap-4">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col">
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleMobileSubmenu(item.name)}
                    className="flex items-center justify-between text-xl font-black text-black uppercase py-2"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${
                        activeMobileSubmenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${
                      activeMobileSubmenu === item.name
                        ? "max-h-96 mt-2 mb-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.subItems.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="text-lg font-bold text-gray-600 hover:text-yellow-600 uppercase transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="text-xl font-black text-black hover:text-yellow-500 uppercase transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}

          <hr className="border-gray-200 my-2" />

          <div className="flex flex-col gap-3">
            <a
              href="https://training.starchess.in/"
              className="w-full text-center border-2 border-black text-black py-4 font-black uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </a>
            
            {/* Mobile Modal Trigger */}
            <button
              onClick={() => {
                openDemoModal();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-center bg-yellow-400 text-black py-4 font-black uppercase tracking-widest border-2 border-yellow-400"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;