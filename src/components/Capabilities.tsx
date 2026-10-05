import React from 'react';
import { Globe2, Layers, Ship, Truck, Warehouse, Compass, ArrowUpRight } from 'lucide-react';
import { CAPABILITIES } from '../data/companyData';

interface CapabilitiesProps {
  onSelectCapability: (title: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectCapability }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-[#C9A227]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#C9A227]" />;
      case 'Ship':
        return <Ship className="w-6 h-6 text-[#C9A227]" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-[#C9A227]" />;
      case 'Warehouse':
        return <Warehouse className="w-6 h-6 text-[#C9A227]" />;
      case 'Compass':
      default:
        return <Compass className="w-6 h-6 text-[#C9A227]" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#141414] border-t border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#262626]">
          <div>
            <div className="inline-flex items-center space-x-3 mb-3">
              <span className="w-6 h-[2px] bg-[#C9A227]" />
              <span className="text-xs font-bold tracking-[0.28em] uppercase text-[#C9A227]">
                OUR CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-display">
              WHAT WE DO
            </h2>
          </div>

          <p className="text-sm text-[#999999] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            Scalable supply chain solutions built for commercial and industrial enterprises requiring precision, timeliness, and dependable partnerships.
          </p>
        </div>

        {/* Large Horizontal Cards with Industrial Visual Thumbnails */}
        <div className="space-y-4 sm:space-y-5">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.number}
              onClick={() => onSelectCapability(cap.title)}
              className="group relative bg-[#181818] hover:bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#C9A227]/60 p-5 sm:p-7 lg:p-8 transition-all duration-300 rounded-xs cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 overflow-hidden"
            >
              {/* Left Side: Number, Thumbnail Image, Icon, Title */}
              <div className="flex items-center space-x-5 sm:space-x-6 lg:w-5/12">
                <span className="text-xl sm:text-2xl font-black font-display text-[#555555] group-hover:text-[#C9A227] transition-colors duration-300 shrink-0">
                  {cap.number}
                </span>

                {/* Industrial Photo Thumbnail */}
                <div className="w-20 sm:w-28 h-16 sm:h-20 rounded-xs overflow-hidden shrink-0 border border-[#333333] group-hover:border-[#C9A227]/50 relative">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-115 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="p-1.5 bg-[#111111] border border-[#2B2B2B] rounded-xs group-hover:border-[#C9A227]/40 transition-colors shrink-0">
                      {getIcon(cap.iconName)}
                    </div>
                    <span className="inline-block text-[10px] font-semibold text-[#777777] uppercase tracking-wider">
                      Industrial Solution
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black tracking-[0.06em] text-white uppercase font-display group-hover:text-white transition-colors">
                    {cap.title}
                  </h3>
                </div>
              </div>

              {/* Middle: Description */}
              <div className="lg:w-5/12 text-xs sm:text-sm text-[#B4B4B4] group-hover:text-[#D5D5D5] transition-colors leading-relaxed">
                <p>{cap.description}</p>
                <p className="text-[11px] text-[#7A7A7A] mt-1 font-light">
                  {cap.detail}
                </p>
              </div>

              {/* Right Side: Action Indicator */}
              <div className="lg:w-2/12 flex items-center lg:justify-end">
                <span className="inline-flex items-center text-xs font-bold tracking-[0.18em] text-[#999999] group-hover:text-[#C9A227] transition-colors uppercase">
                  <span>ENQUIRE</span>
                  <ArrowUpRight className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#C9A227]" />
                </span>
              </div>

              {/* Gold Bottom Border Accent on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#C9A227] transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

