import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PRODUCTS, COMPANY_DETAILS } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    category: defaultCategory || PRODUCTS[0].title,
    volumeQuantity: '',
    destinationCity: 'Surat',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultCategory) {
      setFormData((prev) => ({ ...prev, category: defaultCategory }));
    }
  }, [defaultCategory]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const existing = JSON.parse(localStorage.getItem('shreenath_rfq') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('shreenath_rfq', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#141414] border-2 border-[#2A2A2A] w-full max-w-2xl rounded-xs shadow-2xl z-10 overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="bg-[#1A1A1A] border-b border-[#262626] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-white">
              REQUEST FOR QUOTATION (RFQ)
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-[#888888] hover:text-white transition-colors p-1"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A227]/10 border border-[#C9A227] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#C9A227]" />
              </div>
              
              <h3 className="text-2xl font-black uppercase text-white font-display">
                QUOTATION REQUEST SUBMITTED
              </h3>

              <p className="text-sm text-[#CCCCCC] max-w-md mx-auto leading-relaxed">
                Thank you. Our team will get back to you shortly with pricing and availability.
              </p>

              <div className="pt-6">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-8 py-3 bg-[#C9A227] hover:bg-[#D4AF37] text-black font-bold text-xs tracking-widest uppercase rounded-xs transition-colors"
                >
                  RETURN TO WEBSITE
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full name"
                    className="w-full bg-[#181818] border border-[#2E2E2E] focus:border-[#C9A227] px-3.5 py-2.5 text-sm text-white placeholder-[#555555] rounded-xs outline-none"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Company name"
                    className="w-full bg-[#181818] border border-[#2E2E2E] focus:border-[#C9A227] px-3.5 py-2.5 text-sm text-white placeholder-[#555555] rounded-xs outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91..."
                    className="w-full bg-[#181818] border border-[#2E2E2E] focus:border-[#C9A227] px-3.5 py-2.5 text-sm text-white placeholder-[#555555] rounded-xs outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#181818] border border-[#2E2E2E] focus:border-[#C9A227] px-3.5 py-2.5 text-sm text-white placeholder-[#555555] rounded-xs outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Product Stream */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                    Product Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#181818] border border-[#2E2E2E] focus:border-[#C9A227] px-3.5 py-2.5 text-sm text-white rounded-xs outline-none"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                    <option value="CUSTOM SOURCING">CUSTOM SOURCING / BESPOKE SPEC</option>
                  </select>
                </div>

                {/* Volume / Quantity */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                    Estimated Quantity / Volume
                  </label>
                  <input
                    type="text"
                    value={formData.volumeQuantity}
                    onChange={(e) => setFormData({ ...formData, volumeQuantity: e.target.value })}
                    placeholder="e.g. 50 MT, 1 Container, Continuous"
                    className="w-full bg-[#181818] border border-[#2E2E2E] focus:border-[#C9A227] px-3.5 py-2.5 text-sm text-white placeholder-[#555555] rounded-xs outline-none"
                  />
                </div>
              </div>

              {/* Requirement Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                  Specification Details & Target Destination
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention grade, technical standards, port/warehouse destination, delivery timeline..."
                  className="w-full bg-[#181818] border border-[#2E2E2E] focus:border-[#C9A227] px-3.5 py-2.5 text-sm text-white placeholder-[#555555] rounded-xs outline-none resize-none"
                />
              </div>

              {/* Security info */}
              <div className="flex items-center space-x-2 text-[11px] text-[#777777] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>GSTIN & IEC Registered Entity: {COMPANY_DETAILS.gstin}</span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#C9A227] hover:bg-[#D4AF37] text-black font-extrabold text-xs tracking-[0.2em] uppercase transition-all duration-200 shadow-lg shadow-[#C9A227]/20 flex items-center justify-center space-x-2 rounded-xs"
                >
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT QUOTE REQUEST'}</span>
                  <Send className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

