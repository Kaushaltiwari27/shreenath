import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { Products } from './components/Products';
import { GlobalTrade } from './components/GlobalTrade';
import { Infrastructure } from './components/Infrastructure';
import { WhyShreenath } from './components/WhyShreenath';
import { Process } from './components/Process';
import { Credentials } from './components/Credentials';
import { CTA } from './components/CTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from './data/companyData';

export function App() {
  // Direct WhatsApp Connection with tailored procurement brief
  const handleConnect = (category?: string) => {
    const text = category
      ? `Hello Shreenath Enterprise, I would like to inquire regarding ${category}.`
      : `Hello Shreenath Enterprise, I have a commercial sourcing and supply requirement.`;
    window.open(`https://wa.me/917041172623?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSelectCapability = (title: string) => {
    const text = `Hello Shreenath Enterprise, I am inquiring regarding ${title}.`;
    window.open(`https://wa.me/917041172623?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#E0E0E0] font-sans selection:bg-[#C9A227] selection:text-black">
      {/* Top Sticky Header */}
      <Navbar onOpenQuoteModal={() => handleConnect()} />

      {/* Main Corporate Sections */}
      <main>
        {/* Fullscreen Cinematic Hero */}
        <Hero onOpenQuoteModal={() => handleConnect()} />

        {/* Immediate Capability Statistics Strip */}
        <StatsStrip />

        {/* Split Screen About Section */}
        <About />

        {/* Core Capabilities Horizontal Cards */}
        <Capabilities onSelectCapability={handleSelectCapability} />

        {/* Products & Solutions Showcase */}
        <Products onOpenQuoteModal={handleConnect} />

        {/* India-Centric Global Trade Corridor Network */}
        <GlobalTrade />

        {/* Interactive Gujarat & Maharashtra Infrastructure Corridor */}
        <Infrastructure />

        {/* 5 Core Principles */}
        <WhyShreenath />

        {/* 5-Step Process Timeline */}
        <Process />

        {/* Document-style Company Credentials (GSTIN & IEC) */}
        <Credentials />

        {/* High-Impact Full-width Call to Action */}
        <CTA onOpenQuoteModal={() => handleConnect()} />

        {/* Form-Free Direct Commercial Desk & Headquarters Contact Hub */}
        <ContactSection />
      </main>

      {/* Corporate Dark Footer */}
      <Footer />

      {/* Floating Instant Communication Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        <a
          href={COMPANY_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
          title="Chat on WhatsApp (+91 70411 72623)"
          aria-label="WhatsApp Shreenath Enterprise"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
        </a>

        <a
          href={`tel:${COMPANY_DETAILS.phoneRaw}`}
          className="w-12 h-12 bg-[#C9A227] hover:bg-[#D4AF37] text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
          title="Call Direct (+91 70411 72623)"
          aria-label="Call Shreenath Enterprise"
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>
      </div>
    </div>
  );
}

export default App;
