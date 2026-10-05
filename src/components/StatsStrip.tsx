import React from 'react';
import { STATS_STRIP } from '../data/companyData';

export const StatsStrip: React.FC = () => {
  return (
    <section id="stats" className="relative z-20 bg-[#161616] border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#262626]">
          {STATS_STRIP.map((item) => (
            <div
              key={item.number}
              className="py-8 sm:py-10 px-4 sm:px-8 group hover:bg-[#1A1A1A] transition-colors duration-300"
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-sm font-black font-display tracking-widest text-[#C9A227]">
                  {item.number}
                </span>
                <span className="h-[1px] w-6 bg-[#C9A227]/40 group-hover:w-10 transition-all duration-300" />
              </div>
              <h3 className="text-base sm:text-lg font-black tracking-[0.14em] text-white uppercase font-display leading-snug mb-1">
                {item.title}<br />
                <span className="text-[#C0C0C0] font-bold">{item.subtitle}</span>
              </h3>
              <p className="text-xs text-[#808080] mt-2 font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

