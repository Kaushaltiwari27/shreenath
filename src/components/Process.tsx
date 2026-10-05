import React from 'react';
import { PROCESS_STEPS } from '../data/companyData';

export const Process: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#121212] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-6 h-[2px] bg-[#C9A227]" />
            <span className="text-xs font-bold tracking-[0.28em] uppercase text-[#C9A227]">
              OPERATIONAL WORKFLOW
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-display">
            STRUCTURED EXECUTION.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37] to-[#888888]">
              STEP BY STEP.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#9A9A9A] mt-4 font-light leading-relaxed">
            From initial technical brief to final dispatch, our process is built for predictability, compliance, and rigorous quality control.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Hidden on small screens) */}
        <div className="hidden lg:block relative">
          {/* Connecting Track Line */}
          <div className="absolute top-12 left-8 right-8 h-[2px] bg-[#262626] z-0" />
          <div className="absolute top-12 left-8 w-full h-[2px] bg-gradient-to-r from-[#C9A227] via-[#D4AF37]/50 to-transparent z-0" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="group">
                {/* Step Circle / Number */}
                <div className="w-12 h-12 rounded-xs bg-[#181818] border-2 border-[#333333] group-hover:border-[#C9A227] flex items-center justify-center mb-6 shadow-md transition-all duration-300">
                  <span className="text-sm font-black font-display text-white group-hover:text-[#C9A227] transition-colors">
                    {step.step}
                  </span>
                </div>

                <div className="bg-[#171717] border border-[#252525] group-hover:border-[#C9A227]/40 p-5 rounded-xs transition-all duration-300 min-h-[220px] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#C9A227] uppercase block mb-1">
                      PHASE {step.step}
                    </span>
                    <h3 className="text-base font-black uppercase tracking-wider text-white font-display mb-2 group-hover:text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#D0D0D0] leading-snug mb-2">
                      {step.description}
                    </p>
                  </div>
                  <p className="text-[11px] text-[#7A7A7A] leading-relaxed pt-3 border-t border-[#222222]">
                    {step.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-6 sm:pl-8 border-l-2 border-[#262626] space-y-8">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#181818] border-2 border-[#C9A227] flex items-center justify-center">
                <span className="text-[10px] font-black text-[#C9A227]">
                  {step.step}
                </span>
              </div>

              <div className="bg-[#171717] border border-[#262626] p-5 rounded-xs">
                <span className="text-[10px] font-mono tracking-widest text-[#C9A227] uppercase block mb-1">
                  PHASE {step.step}
                </span>
                <h3 className="text-base font-black uppercase tracking-wider text-white font-display mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#D0D0D0] leading-snug mb-2">
                  {step.description}
                </p>
                <p className="text-xs text-[#808080] leading-relaxed pt-2 border-t border-[#242424]">
                  {step.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

