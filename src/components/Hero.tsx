import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[#0D0D0D]"
    >
      {/* Background Industrial Image with Cinematic Grading */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=85"
          alt="International Logistics and Container Terminal Port"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out brightness-[0.38] contrast-125 saturate-50"
        />
        {/* Multi-tier Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/80" />
        <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-black/40 via-transparent to-black/80" />
        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center space-x-3 mb-6 sm:mb-8">
            <span className="w-8 h-[2px] bg-[#C9A227]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
              {COMPANY_DETAILS.name}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.03] mb-6 sm:mb-8 font-display">
            GLOBAL SOURCING.<br />
            <span className="text-white">RELIABLE SUPPLY.</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF0B8] to-[#C9A227]">
              BUILT FOR BUSINESS.
            </span>
          </h1>

          {/* Alternative supporting line */}
          <p className="text-base sm:text-xl md:text-2xl text-[#C0C0C0] max-w-2xl font-light leading-relaxed mb-10 sm:mb-12">
            Connecting reliable sourcing, strategic warehousing and efficient logistics across India and global markets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <a
              href="#products"
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#C9A227] hover:bg-[#D4AF37] text-black font-extrabold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 shadow-xl shadow-[#C9A227]/20 rounded-xs"
            >
              <span>EXPLORE OUR PRODUCTS</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#181818]/90 hover:bg-[#222222] text-white border border-[#383838] hover:border-[#C9A227] font-bold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 rounded-xs"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="ml-2 w-4 h-4 text-[#C9A227] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Secondary small information */}
          <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs font-semibold tracking-[0.22em] text-[#9A9A9A]">
            <span className="text-[#C9A227] font-bold">LOCATIONS:</span>
            <span>SURAT</span>
            <span className="text-[#444444]">•</span>
            <span>NAVSARI</span>
            <span className="text-[#444444]">•</span>
            <span>MUMBAI</span>
            <span className="text-[#444444]">•</span>
            <span>MUNDRA</span>
          </div>
        </div>
      </div>

      {/* Subtle animated scrolling indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#999999] mb-2 font-medium">SCROLL</span>
        <a href="#stats" aria-label="Scroll down">
          <ChevronDown className="w-4 h-4 text-[#C9A227] animate-bounce" />
        </a>
      </div>
    </section>
  );
};

