import React from 'react';
import { ArrowRight, CheckCircle2, Building2, Anchor } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#111111] relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Editorial Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative group">
              {/* Gold Accent Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C9A227]/20 via-[#262626] to-[#C9A227]/30 rounded-xs blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative overflow-hidden rounded-xs border border-[#2A2A2A] bg-[#161616]">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern industrial supply warehouse and freight operations"
                  className="w-full h-[440px] sm:h-[520px] object-cover object-center grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                {/* Floating Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-[#141414]/90 backdrop-blur-md border border-[#333333] rounded-xs">
                  <div className="flex items-center space-x-3 text-[#C9A227] text-xs font-bold tracking-[0.2em] uppercase mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>SURAT HEAD OFFICE & MULTI-HUB NETWORK</span>
                  </div>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed">
                    Synchronized freight and warehousing across South Gujarat industrial clusters and western maritime gateways.
                  </p>
                </div>
              </div>
            </div>

            {/* Accent Floating Secondary Image */}
            <div className="hidden md:block absolute -bottom-6 -right-6 w-52 sm:w-60 h-36 sm:h-44 rounded-xs overflow-hidden border-2 border-[#C9A227] shadow-2xl z-20 bg-[#161616]">
              <img
                src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80"
                alt="International Port and Container Carrier"
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#D4AF37] uppercase">
                  MUNDRA & JNPT CORRIDORS
                </span>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="hidden sm:flex absolute -top-5 -right-3 bg-[#1A1A1A] border border-[#C9A227]/40 px-5 py-3 shadow-2xl items-center space-x-3 rounded-xs z-20">
              <Anchor className="w-5 h-5 text-[#C9A227]" />
              <div>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#888888] font-bold">PORT CONNECTIVITY</span>
                <span className="text-xs font-black tracking-wider text-white">DEEP-WATER SEZ TERMINALS</span>
              </div>
            </div>
          </div>


          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Label */}
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="w-6 h-[2px] bg-[#C9A227]" />
              <span className="text-xs font-bold tracking-[0.26em] uppercase text-[#C9A227]">
                ABOUT {COMPANY_DETAILS.name}
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.1] mb-8 font-display">
              A RELIABLE PARTNER FOR<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0E0E0] to-[#999999]">
                MODERN TRADE.
              </span>
            </h2>

            {/* Body Paragraphs */}
            <div className="space-y-6 text-sm sm:text-base text-[#B0B0B0] font-normal leading-relaxed">
              <p>
                <strong className="text-white font-semibold">Shreenath Enterprise</strong> is built around reliable sourcing, efficient supply and dependable business relationships. With a strategic presence across Surat, Navsari, Mumbai and Mundra, the company is positioned to support businesses through a connected supply and logistics network.
              </p>

              <p>
                Our approach combines sourcing capabilities, operational coordination and a commitment to dependable service — helping businesses move materials efficiently from source to destination.
              </p>
            </div>

            {/* Key Business Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-8 pt-6 border-t border-[#262626]">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-[#D0D0D0] tracking-wide">Multi-location supply coordination</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-[#D0D0D0] tracking-wide">Commercial & industrial procurement</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-[#D0D0D0] tracking-wide">Import & Export compliance readiness</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-[#D0D0D0] tracking-wide">Committed client communication</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#capabilities"
                className="group inline-flex items-center text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-black bg-[#C9A227] hover:bg-[#D4AF37] px-7 py-3.5 transition-all duration-300 shadow-lg shadow-[#C9A227]/15 rounded-xs"
              >
                <span>DISCOVER SHREENATH</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

