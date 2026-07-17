import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Gallery', href: '#gallery' },
    { name: 'Wood Types', href: '#woods' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled ? 'bg-[#151312]/95 backdrop-blur-md border-b border-[#C97B63]/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl tracking-wider text-[#F9F6F0] hover:text-[#C97B63] transition-colors">
          BIRUK TEFERI
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-[#E8E2DC] hover:text-[#C97B63] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#quote"
            className="border border-[#F9F6F0]/20 text-[#F9F6F0] px-6 py-2 rounded-sm text-xs uppercase tracking-widest font-medium hover:bg-[#C97B63] hover:text-[#1E1B1A] transition-all"
          >
            Book Consultation
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-[#F9F6F0] hover:text-[#C97B63] transition-colors"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#151312] p-6 flex flex-col border-b border-[#C97B63]/20"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl tracking-wider text-[#F9F6F0]">
                BIRUK TEFERI
              </span>
              <button
                className="p-2 -mr-2 text-[#F9F6F0] hover:text-[#C97B63]"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-8 items-center mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl uppercase tracking-widest font-serif text-[#F9F6F0] hover:text-[#C97B63] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 border border-[#C97B63] bg-[#C97B63]/10 text-[#C97B63] px-8 py-3 rounded-sm text-sm uppercase tracking-widest font-medium hover:bg-[#1E1B1A] hover:text-[#F9F6F0] transition-colors w-full max-w-xs text-center"
              >
                Book Consultation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
