import React, { useState } from 'react';
import { Building2, Warehouse, Truck, Anchor, CheckCircle2, MapPin } from 'lucide-react';
import { INFRASTRUCTURE_LOCATIONS } from '../data/companyData';

export const Infrastructure: React.FC = () => {
  const [selectedHubId, setSelectedHubId] = useState<string>('surat');

  const selectedHub = INFRASTRUCTURE_LOCATIONS.find((h) => h.id === selectedHubId) || INFRASTRUCTURE_LOCATIONS[0];

  return (
    <section id="infrastructure" className="py-24 sm:py-32 bg-[#121212] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-6 h-[2px] bg-[#C9A227]" />
            <span className="text-xs font-bold tracking-[0.28em] uppercase text-[#C9A227]">
              OUR PRESENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-display">
            STRATEGICALLY POSITIONED.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-white to-[#9E9E9E]">
              BUILT TO MOVE.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#9A9A9A] mt-4 font-light leading-relaxed">
            Our multi-hub network across Gujarat and Maharashtra ensures immediate access to industrial manufacturing clusters, major highways, and premier deep-water container ports.
          </p>
        </div>

        {/* Interactive Infrastructure Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Corridor Visual Schematic */}
          <div className="lg:col-span-7 bg-[#171717] border border-[#2A2A2A] rounded-xs p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A0A0A0]">
                WESTERN LOGISTICS CORRIDOR SCHEMATIC
              </span>
              <span className="text-[11px] font-mono text-[#C9A227] tracking-widest uppercase">
                4 STRATEGIC HUBS
              </span>
            </div>

            {/* Hub Selector Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INFRASTRUCTURE_LOCATIONS.map((hub) => {
                const isSelected = selectedHubId === hub.id;
                const isHQ = hub.type === 'head_office';

                return (
                  <div
                    key={hub.id}
                    onClick={() => setSelectedHubId(hub.id)}
                    className={`relative p-5 rounded-xs border cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#1E1E1E] border-[#C9A227] shadow-lg shadow-[#C9A227]/10'
                        : 'bg-[#141414] border-[#292929] hover:border-[#3E3E3E]'
                    }`}
                  >
                    {/* Status Pill */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-xs ${
                        isHQ
                          ? 'bg-[#C9A227]/20 text-[#D4AF37] border border-[#C9A227]/40'
                          : 'bg-[#222222] text-[#888888] border border-[#333333]'
                      }`}>
                        {isHQ ? 'HEAD OFFICE' : 'WAREHOUSE'}
                      </span>

                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
                      )}
                    </div>

                    {/* Name */}
                    <div className="flex items-center space-x-2.5 mb-1.5">
                      {isHQ ? (
                        <Building2 className="w-5 h-5 text-[#C9A227]" />
                      ) : hub.id === 'mundra' ? (
                        <Anchor className="w-5 h-5 text-[#C9A227]" />
                      ) : (
                        <Warehouse className="w-5 h-5 text-[#C9A227]" />
                      )}
                      <h3 className="text-xl font-black uppercase tracking-wider text-white font-display">
                        {hub.name}
                      </h3>
                    </div>

                    <p className="text-xs text-[#A0A0A0] font-medium">
                      {hub.role}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#262626] flex items-center justify-between text-[11px] text-[#707070]">
                      <span>{hub.state}</span>
                      <span className="text-[#C9A227] font-semibold">VIEW HUB DETAILS →</span>
                    </div>

                    {/* Active accent strip */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9A227]" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Connecting Corridor Schematic Vector */}
            <div className="mt-8 pt-6 border-t border-[#262626]">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#777777] mb-3">
                TRANSIT CORRIDOR CONNECTIVITY
              </div>
              <div className="relative py-4 bg-[#111111] border border-[#222222] rounded-xs px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-semibold gap-3 text-center sm:text-left">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227]" />
                    <span className="text-white">MUNDRA PORT</span>
                  </div>
                  <div className="hidden sm:block flex-1 mx-2 h-[2px] bg-gradient-to-r from-[#C9A227] to-[#888888] border-b border-dashed border-[#555555]" />
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227]" />
                    <span className="text-white">SURAT (HQ)</span>
                  </div>
                  <div className="hidden sm:block flex-1 mx-2 h-[2px] bg-gradient-to-r from-[#888888] to-[#888888] border-b border-dashed border-[#555555]" />
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227]" />
                    <span className="text-white">NAVSARI</span>
                  </div>
                  <div className="hidden sm:block flex-1 mx-2 h-[2px] bg-gradient-to-r from-[#888888] to-[#C9A227] border-b border-dashed border-[#555555]" />
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227]" />
                    <span className="text-white">MUMBAI (JNPT)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Active Hub Detail View with Dedicated Hub Photo */}
          <div className="lg:col-span-5 bg-[#171717] border border-[#2A2A2A] rounded-xs p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-mono tracking-widest text-[#C9A227] uppercase">
                HUB SPECIFICATION
              </span>
              <span className="h-[1px] flex-1 bg-[#282828]" />
            </div>

            {/* Hub Photo Showcase */}
            <div className="relative h-44 sm:h-52 w-full rounded-xs overflow-hidden border border-[#333333] mb-5 group">
              <img
                src={selectedHub.image}
                alt={`${selectedHub.name} ${selectedHub.role}`}
                className="w-full h-full object-cover grayscale contrast-115 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] tracking-widest uppercase bg-[#C9A227] text-black px-2 py-0.5 font-bold rounded-xs">
                  {selectedHub.type === 'head_office' ? 'CENTRAL HQ' : 'WAREHOUSE NODE'}
                </span>
                <span className="font-mono text-[11px] text-white tracking-wider">
                  {selectedHub.state}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-display">
                {selectedHub.name}
              </h3>
              <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mt-1">
                {selectedHub.role}
              </p>
            </div>

            {/* Address & Connectivity */}
            <div className="space-y-4 mb-6 pb-6 border-b border-[#262626]">
              <div className="bg-[#131313] p-4 rounded-xs border border-[#222222]">
                <div className="flex items-start space-x-3 text-xs text-[#B0B0B0]">
                  <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-white font-semibold mb-0.5">Physical Hub Location:</span>
                    <span>{selectedHub.address}</span>
                  </div>
                </div>
              </div>


              <div className="bg-[#131313] p-4 rounded-xs border border-[#222222]">
                <div className="flex items-start space-x-3 text-xs text-[#B0B0B0]">
                  <Truck className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-white font-semibold mb-0.5">Corridor Connectivity:</span>
                    <span>{selectedHub.connectivity}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operational Features */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                OPERATIONAL ADVANTAGES:
              </h4>
              <div className="space-y-3">
                {selectedHub.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-[#9E9E9E] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="mt-8 pt-6 border-t border-[#262626]">
              <a
                href="#contact"
                className="w-full py-3 bg-[#202020] hover:bg-[#C9A227] text-white hover:text-black border border-[#333333] hover:border-[#C9A227] font-bold text-xs tracking-[0.18em] uppercase transition-all duration-200 block text-center rounded-xs"
              >
                ENQUIRE ABOUT {selectedHub.name} DISPATCH →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

