import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ValuemarksLogo } from './ValuemarksLogo';

interface NavbarProps {
  activeSection: string;
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Main Top Bar Contract: Brand | Links | Primary Action */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#161324]/95 backdrop-blur-md shadow-md border-b border-[#27223c]'
            : 'bg-[#161324] border-b border-[#231e38]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single Brand Wordmark Element with Authentic VMC Logo */}
          <a
            href="#home"
            className="flex items-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5883e] rounded-sm shrink-0 group"
          >
            <ValuemarksLogo size="md" textColor="light" />
          </a>

          {/* Zone 2: 4-6 Clean Single-Line Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive
                      ? 'text-[#d8aa58] font-semibold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b5883e] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onRequestQuote}
              type="button"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#b5883e] hover:bg-[#c89b4b] active:bg-[#946b2b] transition-colors rounded-none tracking-wide shadow-sm uppercase whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 text-neutral-300 hover:text-white hover:bg-[#231e38] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#161324] border-t border-[#27223c] px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#231e38] text-[#d8aa58]'
                    : 'text-neutral-300 hover:bg-[#1e1930] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#27223c]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase text-white bg-[#b5883e] hover:bg-[#c89b4b]"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
