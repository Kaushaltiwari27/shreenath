import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Copy, Check, ShieldCheck, Building2, Warehouse } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_DETAILS } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0C0D0F] relative border-t border-[#262626] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-[circle_at_top] from-[#1A1C24] via-transparent to-transparent opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex justify-center mb-6">
            <BrandLogo className="h-12 sm:h-14" />
          </div>

          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[2px] bg-[#C9A227]" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
              DIRECT COMMERCIAL DESK
            </span>
            <span className="w-8 h-[2px] bg-[#C9A227]" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-display">
            CONNECT WITH<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF1B8] to-[#C9A227]">
              SHREENATH ENTERPRISE
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A0A0A0] mt-4 font-light leading-relaxed max-w-2xl mx-auto">
            Direct commercial coordination for material sourcing, bulk supplies, warehousing staging, and cross-border trade logistics. Reach our procurement team directly with zero intermediaries.
          </p>
        </div>

        {/* Primary Contact Channels: 2 High-Impact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Direct Telephone Channel */}
          <div className="bg-[#14161C] border border-[#262933] hover:border-[#C9A227]/50 rounded-xs p-8 sm:p-10 transition-all duration-300 relative group shadow-2xl flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A227]/5 rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 bg-[#1C1F28] border border-[#2F3340] group-hover:border-[#C9A227]/40 rounded-xs text-[#C9A227] transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-xs text-[10px] font-mono tracking-widest text-[#AAAAAA] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  <span>MON - SAT • 9:30 AM - 7:30 PM IST</span>
                </div>
              </div>

              <span className="text-xs font-mono font-bold tracking-widest text-[#7E8494] uppercase block mb-1">
                PRIMARY DIRECT LINE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight mb-3">
                {COMPANY_DETAILS.phoneDisplay}
              </h3>
              <p className="text-xs sm:text-sm text-[#8F94A6] font-light leading-relaxed mb-8">
                Speak directly with our senior commercial team for bulk order pricing, material availability, and supply contracts.
              </p>
            </div>

            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="w-full inline-flex items-center justify-center py-4 px-6 bg-[#C9A227] hover:bg-[#D4AF37] text-black font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-xs transition-all shadow-lg shadow-[#C9A227]/20 group-hover:shadow-[#C9A227]/30"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>CALL COMMERCIAL DESK</span>
            </a>
          </div>

          {/* WhatsApp Direct Channel */}
          <div className="bg-[#14161C] border border-[#262933] hover:border-[#25D366]/50 rounded-xs p-8 sm:p-10 transition-all duration-300 relative group shadow-2xl flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#25D366]/5 rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 bg-[#1C1F28] border border-[#2F3340] group-hover:border-[#25D366]/40 rounded-xs text-[#25D366] transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xs text-[10px] font-mono tracking-widest text-[#25D366] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>ONLINE • INSTANT RESPONSE</span>
                </div>
              </div>

              <span className="text-xs font-mono font-bold tracking-widest text-[#7E8494] uppercase block mb-1">
                INSTANT WHATSAPP ENQUIRY
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight mb-3">
                {COMPANY_DETAILS.phoneDisplay}
              </h3>
              <p className="text-xs sm:text-sm text-[#8F94A6] font-light leading-relaxed mb-8">
                Send your material requirements, BOQs, blueprints, or RFQ documents for prompt commercial evaluation.
              </p>
            </div>

            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-xs transition-all shadow-lg shadow-[#25D366]/20 group-hover:shadow-[#25D366]/30"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              <span>CHAT ON WHATSAPP NOW</span>
            </a>
          </div>

        </div>

        {/* Physical Locations: Head Office & 3 Strategic Warehouses */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#222530]">
            <div className="flex items-center space-x-3">
              <Building2 className="w-4 h-4 text-[#C9A227]" />
              <span className="text-xs font-bold font-mono tracking-widest text-white uppercase">
                PHYSICAL LOCATIONS & STRATEGIC HUBS
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#777777]">
              4 STRATEGIC NODES IN GUJARAT & MAHARASHTRA
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Surat HQ */}
            <div className="bg-[#14161C] border border-[#262933] p-6 rounded-xs relative">
              <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-wider text-[#C9A227] uppercase mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>COMMERCIAL HEADQUARTERS</span>
              </div>
              <h4 className="text-base font-black text-white font-display mb-1">
                SURAT, GUJARAT
              </h4>
              <p className="text-xs text-[#AAAAAA] leading-relaxed mb-4">
                503, SNS Business Park, Surat, Gujarat, India
              </p>
              <div className="text-[11px] text-[#777777] border-t border-[#222530] pt-3">
                Executive procurement desk, client negotiations, export documentation & administration.
              </div>
            </div>

            {/* Navsari Warehouse */}
            <div className="bg-[#14161C] border border-[#262933] p-6 rounded-xs relative">
              <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-wider text-[#9E8B62] uppercase mb-2">
                <Warehouse className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>WAREHOUSE HUB 01</span>
              </div>
              <h4 className="text-base font-black text-white font-display mb-1">
                NAVSARI, GUJARAT
              </h4>
              <p className="text-xs text-[#AAAAAA] leading-relaxed mb-4">
                Central Regional Storage & Staging Depot
              </p>
              <div className="text-[11px] text-[#777777] border-t border-[#222530] pt-3">
                Bulk storage facility serving South Gujarat industrial and manufacturing belt.
              </div>
            </div>

            {/* Mumbai Warehouse */}
            <div className="bg-[#14161C] border border-[#262933] p-6 rounded-xs relative">
              <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-wider text-[#9E8B62] uppercase mb-2">
                <Warehouse className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>WAREHOUSE HUB 02</span>
              </div>
              <h4 className="text-base font-black text-white font-display mb-1">
                MUMBAI, MAHARASHTRA
              </h4>
              <p className="text-xs text-[#AAAAAA] leading-relaxed mb-4">
                Commercial Logistics & Port Gateway
              </p>
              <div className="text-[11px] text-[#777777] border-t border-[#222530] pt-3">
                Proximity to JNPT / Nhava Sheva maritime terminals for direct container consolidation.
              </div>
            </div>

            {/* Mundra Warehouse */}
            <div className="bg-[#14161C] border border-[#262933] p-6 rounded-xs relative">
              <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-wider text-[#9E8B62] uppercase mb-2">
                <Warehouse className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>WAREHOUSE HUB 03</span>
              </div>
              <h4 className="text-base font-black text-white font-display mb-1">
                MUNDRA, GUJARAT
              </h4>
              <p className="text-xs text-[#AAAAAA] leading-relaxed mb-4">
                Deep-Sea Port SEZ Transshipment Hub
              </p>
              <div className="text-[11px] text-[#777777] border-t border-[#222530] pt-3">
                Western India maritime gateway for Middle East, Europe & Africa bulk trade routes.
              </div>
            </div>

          </div>
        </div>

        {/* Statutory Credentials & One-Click Copy */}
        <div className="p-6 sm:p-8 bg-[#14161C] border border-[#262933] rounded-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#C9A227] uppercase mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>STATUTORY COMPLIANCE & REGISTRATION</span>
            </div>
            <p className="text-xs sm:text-sm text-[#8F94A6]">
              Verified business registrations for domestic GST billing and DGFT export-import licensing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* GSTIN */}
            <div className="flex items-center space-x-3 px-4 py-2.5 bg-[#0F1014] border border-[#262933] rounded-xs font-mono text-xs">
              <span className="text-[#777777]">GSTIN:</span>
              <span className="font-bold text-white tracking-wider">{COMPANY_DETAILS.gstin}</span>
              <button
                onClick={() => handleCopy(COMPANY_DETAILS.gstin, 'gstin')}
                className="text-[#AAAAAA] hover:text-[#C9A227] transition-colors p-1"
                title="Copy GSTIN"
              >
                {copiedKey === 'gstin' ? <Check className="w-3.5 h-3.5 text-[#25D366]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* IEC */}
            <div className="flex items-center space-x-3 px-4 py-2.5 bg-[#0F1014] border border-[#262933] rounded-xs font-mono text-xs">
              <span className="text-[#777777]">IEC:</span>
              <span className="font-bold text-white tracking-wider">{COMPANY_DETAILS.iec}</span>
              <button
                onClick={() => handleCopy(COMPANY_DETAILS.iec, 'iec')}
                className="text-[#AAAAAA] hover:text-[#C9A227] transition-colors p-1"
                title="Copy IEC"
              >
                {copiedKey === 'iec' ? <Check className="w-3.5 h-3.5 text-[#25D366]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
