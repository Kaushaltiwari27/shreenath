import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, FileCheck, Layers } from 'lucide-react';
import { Globe3D } from './Globe3D';
import { ErrorBoundary } from './ErrorBoundary';

interface RouteInfo {
  id: string;
  name: string;
  region: string;
  corridor: string;
  description: string;
}

export const GlobalTrade: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState<string | null>(null);

  const routes: RouteInfo[] = [
    {
      id: 'middle-east',
      name: 'MIDDLE EAST',
      region: 'Gulf & Arabian Sea Corridors',
      corridor: 'Surat / Mundra ➔ Jebel Ali & GCC Commercial Hubs',
      description: 'Strategic proximity for direct maritime bulk shipments, container lines, and rapid clearance.'
    },
    {
      id: 'europe',
      name: 'EUROPE',
      region: 'Mediterranean & North Sea Corridors',
      corridor: 'Western Indian Ports ➔ Red Sea / Suez ➔ European Terminals',
      description: 'Direct access to major European industrial markets through established international shipping routes.'
    },
    {
      id: 'asia',
      name: 'ASIA & ASEAN',
      region: 'Southeast & East Asian Lanes',
      corridor: 'Indian Ocean ➔ Malacca Strait ➔ East Asian Gateways',
      description: 'High-frequency sea freight lanes connecting manufacturing sources and distribution hubs.'
    },
    {
      id: 'africa',
      name: 'AFRICA',
      region: 'East & Southern African Ports',
      corridor: 'Mundra & JNPT ➔ Indian Ocean Corridor ➔ Mombasa & Durban',
      description: 'Reliable cross-continental transport routes for raw commodities, steel, and industrial consumables.'
    },
    {
      id: 'global-transit',
      name: 'OTHER INTERNATIONAL MARKETS',
      region: 'Global Transshipment & Multimodal Connectors',
      corridor: 'Hub Consolidation ➔ Global Feeder & Deep Sea Feeder Routes',
      description: 'Built to adapt to customized international trading requirements with rigorous trade compliance.'
    }
  ];

  return (
    <section id="global-trade" className="py-24 sm:py-32 bg-[#0E0E0E] text-white relative overflow-hidden border-t border-[#262626]">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-[#1A1A1A] via-[#0E0E0E] to-[#0A0A0A] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[2px] bg-[#C9A227]" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
              GLOBAL TRADE READY
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05] font-display">
            FROM SOURCE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EAEAEA] to-[#888888]">
              TO DESTINATION.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#A0A0A0] mt-4 font-light leading-relaxed">
            Built to support sourcing, supply and international trade requirements.
          </p>
        </div>

        {/* Map Visualization Container */}
        <div className="relative bg-[#141414] border border-[#262626] rounded-xs p-4 sm:p-8 lg:p-10 overflow-hidden shadow-2xl">
          
          {/* Top Map Bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-4 border-b border-[#222222] gap-4">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-xs font-mono tracking-wider text-[#A0A0A0] uppercase">
                STRATEGIC ORIGIN: INDIA (WESTERN MARITIME CORRIDOR)
              </span>
            </div>

            <div className="flex items-center space-x-6 text-[11px] font-mono tracking-wider text-[#777777]">
              <span className="hidden sm:inline">IEC: DDHPN8350R</span>
              <span>PORT ACCESS: MUNDRA & JNPT</span>
            </div>
          </div>

          {/* Interactive 3D Realistic Globe */}
          <div className="relative w-full rounded-xs overflow-hidden border border-[#202020] bg-radial from-[#151922] via-[#0d0f14] to-[#07080a] shadow-inner">
            <ErrorBoundary>
              <Globe3D
                activeRouteId={activeRoute}
                onSelectRoute={(id) => setActiveRoute(activeRoute === id ? null : id)}
              />
            </ErrorBoundary>
          </div>

          {/* Interactive Route Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {routes.map((route) => {
              const isSelected = activeRoute === route.id;
              return (
                <div
                  key={route.id}
                  onClick={() => setActiveRoute(isSelected ? null : route.id)}
                  className={`p-4 sm:p-5 rounded-xs border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#1C1C1C] border-[#C9A227] shadow-lg shadow-[#C9A227]/10'
                      : 'bg-[#161616] border-[#262626] hover:border-[#383838]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#C9A227] uppercase">
                      {route.region}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                  </div>
                  <h4 className="text-sm font-black tracking-wider text-white uppercase font-display mb-1.5">
                    {route.name}
                  </h4>
                  <p className="text-xs text-[#999999] leading-relaxed mb-2">
                    {route.description}
                  </p>
                  <div className="text-[11px] font-mono text-[#777777] border-t border-[#262626] pt-2 mt-2">
                    {route.corridor}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Trade Ready Feature Bar & CTA */}
          <div className="mt-8 pt-8 border-t border-[#222222] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#A0A0A0]">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                <span>IEC Compliant Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileCheck className="w-4 h-4 text-[#C9A227]" />
                <span>Port & Customs Documentation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4 text-[#C9A227]" />
                <span>Multimodal Consolidation</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#C9A227] hover:bg-[#D4AF37] text-black font-extrabold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-[#C9A227]/15 rounded-xs"
            >
              <span>START A CONVERSATION</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

