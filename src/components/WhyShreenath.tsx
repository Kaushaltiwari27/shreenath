import React from 'react';
import { ShieldCheck, MapPin, Award, MessageSquareCheck, Handshake } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/companyData';

export const WhyShreenath: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C9A227]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#C9A227]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#C9A227]" />;
      case 'MessageSquareCheck':
        return <MessageSquareCheck className="w-6 h-6 text-[#C9A227]" />;
      case 'Handshake':
      default:
        return <Handshake className="w-6 h-6 text-[#C9A227]" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#0E0E0E] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-6 h-[2px] bg-[#C9A227]" />
            <span className="text-xs font-bold tracking-[0.28em] uppercase text-[#C9A227]">
              OUR FOUNDATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-display">
            WHY BUSINESSES<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E8E8E8] to-[#999999]">
              CHOOSE SHREENATH
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#9A9A9A] mt-4 font-light leading-relaxed">
            Commercial trust built through transparency, dependable logistics execution, and dedicated sourcing discipline.
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className={`group bg-[#151515] border border-[#262626] hover:border-[#C9A227]/50 p-8 rounded-xs transition-all duration-300 relative flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header with Icon and Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#1B1B1B] border border-[#2D2D2D] rounded-xs group-hover:border-[#C9A227]/40 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#555555] group-hover:text-[#C9A227] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-white font-display mb-3">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-[#C0C0C0] mb-2 leading-relaxed">
                  {item.description}
                </p>

                <p className="text-xs text-[#7A7A7A] leading-relaxed font-light">
                  {item.detail}
                </p>
              </div>

              {/* Accent corner line */}
              <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between text-[11px] font-mono text-[#555555] uppercase tracking-widest">
                <span>VERIFIED STANDARD</span>
                <span className="text-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

