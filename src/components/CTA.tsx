import React from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface CTAProps {
  onOpenQuoteModal: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#121212] overflow-hidden border-t border-[#262626]">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_bottom] from-[#C9A227]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-3 mb-6">
            <span className="w-8 h-[2px] bg-[#C9A227]" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
              PARTNER WITH SHREENATH
            </span>
            <span className="w-8 h-[2px] bg-[#C9A227]" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05] font-display mb-8">
            LET'S MOVE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF1B8] to-[#C9A227]">
              BUSINESS FORWARD.
            </span>
          </h2>

          {/* Supporting text */}
          <p className="text-base sm:text-xl text-[#B0B0B0] max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Have a sourcing, supply or trading requirement?<br />
            Let's discuss how Shreenath Enterprise can support your business.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            
            {/* Get a quote button */}
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-[#C9A227] hover:bg-[#D4AF37] text-black font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-[#C9A227]/25 rounded-xs group"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* WhatsApp Us */}
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] hover:bg-[#222222] border border-[#333333] hover:border-[#25D366] text-white font-bold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 rounded-xs group"
            >
              <MessageSquare className="w-4 h-4 mr-2.5 text-[#25D366]" />
              <span>WHATSAPP US</span>
            </a>

            {/* Phone button */}
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] hover:bg-[#222222] border border-[#333333] hover:border-[#C9A227] text-white font-bold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 rounded-xs group"
            >
              <Phone className="w-4 h-4 mr-2.5 text-[#C9A227]" />
              <span>CALL DIRECT</span>
            </a>

          </div>

          {/* Verification subtext */}
          <div className="mt-14 pt-8 border-t border-[#262626] flex flex-wrap items-center justify-center gap-6 text-xs text-[#707070] font-mono">
            <span>DIRECT HOTLINE: {COMPANY_DETAILS.phoneDisplay}</span>
            <span>•</span>
            <span>SURAT • NAVSARI • MUMBAI • MUNDRA</span>
          </div>

        </div>
      </div>
    </section>
  );
};

