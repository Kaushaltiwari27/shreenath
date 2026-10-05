import React from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

import { COMPANY_DETAILS } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] text-white border-t border-[#222222] relative z-10">
      {/* Main Footer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1E1E1E]">
          
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="inline-block" aria-label="Shreenath Enterprise Home">
              <BrandLogo className="h-11 sm:h-12" />
            </a>


            <div className="pt-2">
              <h4 className="text-sm font-black tracking-widest uppercase text-white font-display">
                SHREENATH ENTERPRISE
              </h4>
              <p className="text-xs text-[#999999] tracking-wider mt-1">
                Global sourcing. Reliable supply.
              </p>
            </div>

            <p className="text-xs text-[#777777] leading-relaxed max-w-sm font-light">
              Connecting reliable sourcing, strategic warehousing and efficient logistics across India and global markets.
            </p>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#C9A227] block mb-4">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs font-semibold tracking-wider text-[#A0A0A0]">
              <li>
                <a href="#home" className="hover:text-[#C9A227] transition-colors">HOME</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C9A227] transition-colors">ABOUT</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#C9A227] transition-colors">PRODUCTS</a>
              </li>
              <li>
                <a href="#global-trade" className="hover:text-[#C9A227] transition-colors">GLOBAL TRADE</a>
              </li>
              <li>
                <a href="#infrastructure" className="hover:text-[#C9A227] transition-colors">INFRASTRUCTURE</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C9A227] transition-colors">CONTACT</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company Credentials (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#C9A227] block mb-4">
              COMPANY IDENTIFIERS
            </span>
            <div className="space-y-3 text-xs text-[#A0A0A0]">
              <div className="bg-[#121212] p-3 rounded-xs border border-[#1F1F1F]">
                <span className="text-[10px] font-mono uppercase text-[#666666] block">GSTIN</span>
                <span className="text-white font-mono font-bold tracking-wider">{COMPANY_DETAILS.gstin}</span>
              </div>

              <div className="bg-[#121212] p-3 rounded-xs border border-[#1F1F1F]">
                <span className="text-[10px] font-mono uppercase text-[#666666] block">IEC (DGFT)</span>
                <span className="text-white font-mono font-bold tracking-wider">{COMPANY_DETAILS.iec}</span>
              </div>

              <div className="pt-1">
                <span className="text-[10px] font-mono uppercase text-[#666666] block mb-1">HEAD OFFICE</span>
                <p className="text-[11px] text-[#888888] leading-tight">
                  {COMPANY_DETAILS.headOffice.address},<br />
                  Surat, Gujarat, India
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Locations (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#C9A227] block mb-4">
              COMMERCIAL DESK
            </span>
            
            <div className="space-y-3 mb-6">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="flex items-center space-x-2.5 text-xs text-[#CCCCCC] hover:text-[#C9A227] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span className="font-mono">{COMPANY_DETAILS.phoneDisplay}</span>
              </a>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 text-xs text-[#CCCCCC] hover:text-[#25D366] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <span className="font-mono">{COMPANY_DETAILS.phoneDisplay}</span>
              </a>
            </div>

            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#C9A227] block mb-2">
              LOCATIONS
            </span>
            <div className="grid grid-cols-2 gap-1 text-xs text-[#888888] font-mono">
              <div className="flex items-center space-x-1.5">
                <span className="w-1 h-1 rounded-full bg-[#C9A227]" />
                <span className="text-white font-semibold">Surat</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-1 h-1 rounded-full bg-[#888888]" />
                <span>Navsari</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-1 h-1 rounded-full bg-[#888888]" />
                <span>Mumbai</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-1 h-1 rounded-full bg-[#888888]" />
                <span>Mundra</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-4">
          <p className="font-mono text-center sm:text-left">
            © 2026 Shreenath Enterprise. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[11px] font-mono text-[#888888] hover:text-[#C9A227] transition-colors uppercase tracking-wider"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

