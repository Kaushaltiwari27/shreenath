import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_DETAILS } from '../data/companyData';

interface NavbarProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PRODUCTS', href: '#products' },
    { label: 'GLOBAL TRADE', href: '#global-trade' },
    { label: 'INFRASTRUCTURE', href: '#infrastructure' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111]/95 backdrop-blur-md border-b border-[#262626] py-3 shadow-xl shadow-black/30'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center transition-opacity hover:opacity-95 focus:outline-none"
              aria-label="Shreenath Enterprise Home"
            >
              <BrandLogo className="h-10 sm:h-12 md:h-13" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold tracking-[0.18em] text-[#C0C0C0] hover:text-[#C9A227] transition-colors duration-200 relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A227] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="hidden xl:inline-flex items-center text-xs tracking-wider text-[#A0A0A0] hover:text-white transition-colors"
                title="Direct Phone Line"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-[#C9A227]" />
                <span>{COMPANY_DETAILS.phoneDisplay}</span>
              </a>

              <button
                onClick={() => onOpenQuoteModal()}
                className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-[0.16em] uppercase text-black bg-[#C9A227] hover:bg-[#D4AF37] transition-all duration-200 shadow-md shadow-[#C9A227]/20 hover:shadow-[#D4AF37]/30 rounded-xs overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  GET A QUOTE
                  <ArrowUpRight className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-black bg-[#C9A227] rounded-xs"
              >
                QUOTE
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#C9A227] focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#111111] transition-all duration-300 flex flex-col justify-between px-6 pt-24 pb-8 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-6">
          <div className="pb-4 border-b border-[#262626]">
            <BrandLogo className="h-10" />
          </div>
          <div className="text-[11px] tracking-[0.25em] text-[#C9A227] uppercase font-bold border-b border-[#262626] pb-2">
            NAVIGATION
          </div>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-bold tracking-[0.12em] text-[#E0E0E0] hover:text-[#C9A227] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#666666]">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu bottom contact & badges */}
        <div className="border-t border-[#262626] pt-6 space-y-4">
          <div className="text-xs text-[#888888] space-y-1">
            <p className="font-semibold text-white tracking-wider">SHREENATH ENTERPRISE</p>
            <p>503, SNS Business Park, Surat, Gujarat</p>
            <p className="text-[#C9A227] font-medium pt-1">Surat • Navsari • Mumbai • Mundra</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="flex items-center justify-center py-3 bg-[#1A1A1A] border border-[#2E2E2E] text-xs font-semibold tracking-wider text-white hover:border-[#C9A227] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-[#C9A227]" />
              CALL US
            </a>
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-3 bg-[#1A1A1A] border border-[#2E2E2E] text-xs font-semibold tracking-wider text-white hover:border-[#25D366] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-2 text-[#25D366]" />
              WHATSAPP
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuoteModal();
            }}
            className="w-full py-3.5 bg-[#C9A227] text-black font-bold text-xs tracking-[0.18em] uppercase hover:bg-[#D4AF37] transition-colors text-center"
          >
            REQUEST A QUOTE →
          </button>
        </div>
      </div>
    </>
  );
};

