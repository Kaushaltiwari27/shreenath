import React from 'react';
import { ArrowRight, Info, Check } from 'lucide-react';
import { PRODUCTS } from '../data/companyData';

interface ProductsProps {
  onOpenQuoteModal: (categoryTitle?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="products" className="py-24 sm:py-32 bg-[#111111] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[#262626]">
          <div>
            <div className="inline-flex items-center space-x-3 mb-3">
              <span className="w-6 h-[2px] bg-[#C9A227]" />
              <span className="text-xs font-bold tracking-[0.28em] uppercase text-[#C9A227]">
                CORE PORTFOLIO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-display">
              PRODUCTS & SOLUTIONS
            </h2>
            <p className="text-base sm:text-lg text-[#A0A0A0] mt-3 font-light">
              Sourcing solutions designed around your business requirements.
            </p>
          </div>

          {/* Quick Custom Spec Notification */}
          <div className="mt-6 lg:mt-0 p-4 bg-[#181818] border border-[#2E2E2E] rounded-xs max-w-md">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
              <p className="text-xs text-[#999999] leading-relaxed">
                <strong className="text-white uppercase font-bold tracking-wider block mb-0.5">Flexible Procurement:</strong>
                PRODUCT CATEGORIES CAN BE CUSTOMIZED BASED ON YOUR REQUIREMENTS.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Category Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="group bg-[#161616] border border-[#282828] hover:border-[#C9A227]/50 rounded-xs overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Editorial Dark Wash */}
              <div className="relative h-64 overflow-hidden bg-[#1D1D1D]">
                <img
                  src={prod.image}
                  alt={prod.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center grayscale contrast-120 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-black/30" />
                
                {/* Floating Category Number */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-[#C9A227] tracking-widest border border-white/10 rounded-xs">
                  SUPPLY STREAM
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#C9A227] uppercase block mb-1">
                    {prod.tagline}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white font-display mb-3 group-hover:text-[#F0F0F0] transition-colors">
                    {prod.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8E8E8E] leading-relaxed mb-6 font-normal">
                    {prod.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#242424]">
                    {prod.highlights.map((h, i) => (
                      <div key={i} className="flex items-center text-xs text-[#AAAAAA] space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore / Quote Action */}
                <div className="pt-4 border-t border-[#242424]">
                  <button
                    onClick={() => onOpenQuoteModal(prod.title)}
                    className="w-full group/btn inline-flex items-center justify-between px-4 py-3 bg-[#1F1F1F] hover:bg-[#C9A227] text-white hover:text-black font-bold text-xs tracking-[0.16em] uppercase transition-all duration-200 border border-[#333333] hover:border-[#C9A227] rounded-xs"
                  >
                    <span>REQUEST QUOTATION</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 sm:p-8 bg-[#181818] border border-[#2A2A2A] rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase mb-1">
              Need a specialized grade or unlisted material?
            </h4>
            <p className="text-xs sm:text-sm text-[#888888]">
              We handle tailored procurement briefs and contract manufacturing directly through verified domestic & overseas suppliers.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal("Custom Specification")}
            className="shrink-0 px-6 py-3 bg-transparent hover:bg-white/5 border border-[#C9A227] text-[#C9A227] hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors"
          >
            SUBMIT SPECIFICATIONS →
          </button>
        </div>

      </div>
    </section>
  );
};

