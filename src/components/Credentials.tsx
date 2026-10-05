import React, { useState } from 'react';
import { Copy, Check, ShieldCheck, Building, Warehouse } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';


export const Credentials: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="credentials" className="py-24 sm:py-32 bg-[#0E0E0E] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-6 h-[2px] bg-[#C9A227]" />
            <span className="text-xs font-bold tracking-[0.28em] uppercase text-[#C9A227]">
              VERIFIED IDENTIFIERS
            </span>
            <span className="w-6 h-[2px] bg-[#C9A227]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-display">
            COMPANY CREDENTIALS
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] mt-3 font-light">
            Authorized statutory filings and commercial infrastructure identifiers.
          </p>
        </div>

        {/* Certificate / Corporate Document Layout */}
        <div className="max-w-4xl mx-auto bg-[#141414] border-2 border-[#2A2A2A] rounded-xs shadow-2xl relative overflow-hidden">
          
          {/* Top Document Header Bar */}
          <div className="bg-[#1A1A1A] border-b border-[#2A2A2A] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-[#C9A227]" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-white">
                STATUTORY COMPLIANCE PROFILE
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span className="text-[11px] font-mono tracking-wider text-[#A0A0A0] uppercase">
                STATUS: ACTIVE & VERIFIED
              </span>
            </div>
          </div>

          {/* Document Content */}
          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Entity Name Lockup */}
            <div className="text-center pb-8 border-b border-[#242424]">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C9A227] block mb-1">
                REGISTERED ENTERPRISE
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white font-display tracking-wider">
                {COMPANY_DETAILS.name}
              </h3>
              <p className="text-xs text-[#808080] tracking-widest mt-1">
                COMMERCIAL TRADING, SOURCING & LOGISTICS
              </p>
            </div>

            {/* Statutory Numbers Grid (GSTIN & IEC) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* GSTIN Card */}
              <div className="bg-[#181818] border border-[#2B2B2B] hover:border-[#C9A227]/40 p-5 rounded-xs transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#999999] uppercase">
                    GOODS & SERVICES TAX (GSTIN)
                  </span>
                  <button
                    onClick={() => handleCopy(COMPANY_DETAILS.gstin, 'gstin')}
                    className="flex items-center space-x-1 text-[11px] font-mono text-[#C9A227] hover:text-white transition-colors"
                    title="Copy GSTIN"
                  >
                    {copiedField === 'gstin' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#25D366]" />
                        <span className="text-[#25D366]">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-widest select-all">
                  {COMPANY_DETAILS.gstin}
                </div>
                <div className="text-[11px] text-[#707070] mt-2 flex items-center justify-between">
                  <span>State: Gujarat (24)</span>
                  <span className="text-[#C9A227]">State & Central Compliant</span>
                </div>
              </div>

              {/* IEC Card */}
              <div className="bg-[#181818] border border-[#2B2B2B] hover:border-[#C9A227]/40 p-5 rounded-xs transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#999999] uppercase">
                    IMPORT EXPORT CODE (IEC)
                  </span>
                  <button
                    onClick={() => handleCopy(COMPANY_DETAILS.iec, 'iec')}
                    className="flex items-center space-x-1 text-[11px] font-mono text-[#C9A227] hover:text-white transition-colors"
                    title="Copy IEC"
                  >
                    {copiedField === 'iec' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#25D366]" />
                        <span className="text-[#25D366]">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-widest select-all">
                  {COMPANY_DETAILS.iec}
                </div>
                <div className="text-[11px] text-[#707070] mt-2 flex items-center justify-between">
                  <span>Authority: DGFT India</span>
                  <span className="text-[#C9A227]">Foreign Trade Authorized</span>
                </div>
              </div>

            </div>

            {/* Address & Network Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#242424]">
              
              {/* Head Office */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider mb-2">
                  <Building className="w-4 h-4 text-[#C9A227]" />
                  <span>HEAD OFFICE</span>
                </div>
                <p className="text-sm text-[#CCCCCC] font-medium">
                  {COMPANY_DETAILS.headOffice.address}
                </p>
                <p className="text-xs text-[#888888]">
                  {COMPANY_DETAILS.headOffice.city}, {COMPANY_DETAILS.headOffice.state}, {COMPANY_DETAILS.headOffice.country}
                </p>
              </div>

              {/* Warehouse Network */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider mb-2">
                  <Warehouse className="w-4 h-4 text-[#C9A227]" />
                  <span>WAREHOUSE NETWORK</span>
                </div>
                <p className="text-sm font-semibold text-white tracking-wide">
                  Navsari • Mumbai • Mundra
                </p>
                <p className="text-xs text-[#888888]">
                  Strategic distribution and staging facilities across Gujarat & Maharashtra.
                </p>
              </div>

            </div>

          </div>

          {/* Bottom Security / Authenticity Footer */}
          <div className="bg-[#111111] px-6 py-3 border-t border-[#242424] flex items-center justify-between text-[11px] font-mono text-[#666666]">
            <span>OFFICIAL CORPORATE RECORD</span>
            <span>SHREENATH ENTERPRISE © 2026</span>
          </div>

        </div>

      </div>
    </section>
  );
};

