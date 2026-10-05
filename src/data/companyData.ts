export interface ProductItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
  detail: string;
  image: string;
}

export interface HubLocation {
  id: string;
  name: string;
  role: string;
  type: 'head_office' | 'warehouse';
  address: string;
  state: string;
  connectivity: string;
  features: string[];
  image: string;
}


export const COMPANY_DETAILS = {
  name: "SHREENATH ENTERPRISE",
  shortName: "SHREENATH",
  tagline: "GLOBAL SOURCING | RELIABLE SUPPLY | GROWING TOGETHER",
  eyebrow: "GLOBAL SOURCING. RELIABLE SUPPLY. BUILT FOR BUSINESS.",
  gstin: "24DDHPN8350R1ZS",
  iec: "DDHPN8350R",
  phoneDisplay: "+91 70411 72623",
  phoneRaw: "+917041172623",
  whatsappUrl: "https://wa.me/917041172623?text=Hello%20Shreenath%20Enterprise,%20I%20have%20an%20enquiry%20regarding%20sourcing%20and%20supply.",
  email: "info@shreenathenterprise.com",
  headOffice: {
    address: "503, SNS Business Park",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    pin: "395007",
    fullAddress: "503, SNS Business Park, Surat, Gujarat, India"
  },
  warehouses: ["Navsari", "Mumbai", "Mundra"] as const,
  cities: ["SURAT", "NAVSARI", "MUMBAI", "MUNDRA"] as const,
};

export const STATS_STRIP = [
  {
    number: "01",
    title: "MULTI-LOCATION",
    subtitle: "WAREHOUSING",
    description: "Positioned across Surat, Navsari, Mumbai & Mundra"
  },
  {
    number: "02",
    title: "STRATEGIC",
    subtitle: "LOGISTICS NETWORK",
    description: "Integrated road, rail, and port multimodal corridors"
  },
  {
    number: "03",
    title: "INDUSTRIAL",
    subtitle: "SUPPLY",
    description: "End-to-end procurement and quality-driven distribution"
  },
  {
    number: "04",
    title: "GLOBAL",
    subtitle: "TRADE FOCUS",
    description: "Built for cross-border trade, compliance & documentation"
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    number: "01",
    title: "GLOBAL SOURCING",
    description: "Strategic sourcing and procurement support for businesses seeking reliable supply partners.",
    iconName: "Globe2",
    detail: "Direct supplier vetting, multi-origin comparative procurement, and price optimization.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "02",
    title: "INDUSTRIAL SUPPLY",
    description: "Efficient supply of materials and products based on business requirements.",
    iconName: "Layers",
    detail: "High-spec inventory management, batch consistency, and contracted delivery schedules.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "03",
    title: "IMPORT & EXPORT",
    description: "Supporting cross-border trade with a focus on reliable coordination and documentation.",
    iconName: "Ship",
    detail: "Complete IEC compliance, customs facilitation, Bill of Lading coordination, and port clearances.",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "04",
    title: "LOGISTICS COORDINATION",
    description: "Connecting sourcing, warehousing and transportation across strategic locations.",
    iconName: "Truck",
    detail: "Consolidated freight management, transit visibility, and seamless multi-point dispatch.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "05",
    title: "WAREHOUSING",
    description: "Strategically positioned warehousing support across key commercial locations.",
    iconName: "Warehouse",
    detail: "Secure staging, palletized storage, and rapid dispatch across Western India's key industrial belt.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "06",
    title: "CUSTOM SOURCING",
    description: "Helping businesses identify and source products according to specific requirements.",
    iconName: "Compass",
    detail: "Bespoke grade matching, custom specifications, testing coordination, and tailored merchanting.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "industrial-materials",
    title: "INDUSTRIAL MATERIALS",
    tagline: "Engineered for heavy industrial applications",
    description: "High-grade industrial components, tooling, polymer composites, and precision-engineered consumables tailored to process plants and manufacturing facilities.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    highlights: ["High tensile resistance", "Standard industrial tolerances", "Certified batch testing", "Custom procurement on order"]
  },
  {
    id: "raw-materials",
    title: "RAW MATERIALS",
    tagline: "Consistent feedstock for modern fabrication",
    description: "Primary and secondary raw materials including minerals, metallurgical inputs, specialty chemicals, and bulk industrial commodities for continuous production lines.",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Grade consistency verification", "Bulk volume distribution", "Strategic warehouse buffering", "Flexible delivery cycles"]
  },
  {
    id: "metal-steel",
    title: "METAL & STEEL PRODUCTS",
    tagline: "Structural integrity and metallurgical precision",
    description: "Hot-rolled, cold-rolled, structural steel sections, alloy pipes, sheets, and industrial fasteners meeting demanding engineering specifications.",
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Structural & alloy grades", "Dimensional accuracy", "Corrosion protection options", "Direct mill sourcing"]
  },
  {
    id: "construction-materials",
    title: "CONSTRUCTION MATERIALS",
    tagline: "Foundational materials for commercial infrastructure",
    description: "Commercial building supplies, reinforcing elements, heavy hardware, structural timber, and high-performance adhesives for civil and industrial projects.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Project-scale volumes", "Commercial safety standards", "On-site dispatch scheduling", "Diverse supplier network"]
  },
  {
    id: "commercial-products",
    title: "COMMERCIAL PRODUCTS",
    tagline: "Wholesale commercial commodities and equipment",
    description: "Packaging solutions, commercial facility equipment, handling gears, and intermediate enterprise goods designed for high-turnover operations.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Turnkey B2B supply", "Palletized logistics", "Wholesale volume pricing", "Multi-site fulfillment"]
  },
  {
    id: "custom-sourcing",
    title: "CUSTOM SOURCING",
    tagline: "Tailored procurement for unique specifications",
    description: "Dedicated sourcing solutions for non-standard technical requirements, specialized chemical compounds, obsolete replacements, and contract manufacturing.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Requirement analysis", "Sample verification", "Cross-border vetting", "End-to-end delivery tracking"]
  }
];


export const INFRASTRUCTURE_LOCATIONS: HubLocation[] = [
  {
    id: "surat",
    name: "SURAT",
    role: "Corporate Head Office",
    type: "head_office",
    address: "503, SNS Business Park, Surat, Gujarat",
    state: "Gujarat",
    connectivity: "National Highway 48 & Western Railway Trunk Line",
    features: [
      "Executive management and trade documentation",
      "Centralized order coordination and procurement control",
      "Client liaison and contractual agreements"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "navsari",
    name: "NAVSARI",
    role: "Strategic Warehouse Hub",
    type: "warehouse",
    address: "Navsari Industrial Corridor, Gujarat",
    state: "Gujarat",
    connectivity: "Direct proximity to NH-48 & South Gujarat manufacturing belt",
    features: [
      "Rapid staging and buffer stock storage",
      "Consolidation point for regional industrial consignments",
      "Quick-response dispatch to Southern Gujarat and Maharashtra"
    ],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "mumbai",
    name: "MUMBAI",
    role: "Commercial Gateway & Warehouse",
    type: "warehouse",
    address: "Greater Mumbai Logistics Zone, Maharashtra",
    state: "Maharashtra",
    connectivity: "Proximity to Nhava Sheva (JNPT) & National Transit Corridors",
    features: [
      "Access to India's premier container transshipment hub",
      "High-throughput commercial storage and trade staging",
      "Seamless connection to pan-India freight corridors"
    ],
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "mundra",
    name: "MUNDRA",
    role: "Deep Sea Port Logistics Hub",
    type: "warehouse",
    address: "Mundra Port SEZ / Logistics Belt, Kutch, Gujarat",
    state: "Gujarat",
    connectivity: "Direct rail & road links into Adani Ports Mundra terminal",
    features: [
      "Immediate proximity to India's largest private commercial port",
      "Export container stuffing and import bulk deconsolidation",
      "Strategic staging point for international maritime shipments"
    ],
    image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&w=1000&q=80"
  }
];


export const WHY_CHOOSE_US = [
  {
    title: "RELIABLE SOURCING",
    description: "Focused on dependable supplier and sourcing relationships.",
    icon: "ShieldCheck",
    detail: "We cultivate disciplined sourcing partnerships with verified manufacturers and primary suppliers, ensuring steady material availability and consistent quality."
  },
  {
    title: "STRATEGIC LOCATIONS",
    description: "Presence across key commercial and logistics hubs.",
    icon: "MapPin",
    detail: "Operations strategically anchored in Surat with dedicated warehouse nodes in Navsari, Mumbai, and Mundra Port for unmatched transit velocity."
  },
  {
    title: "QUALITY FOCUS",
    description: "Attention to product and supply requirements.",
    icon: "Award",
    detail: "Every batch, consignment, and order adheres strictly to agreed material specifications, industrial standards, and precise customer parameters."
  },
  {
    title: "RESPONSIVE COMMUNICATION",
    description: "Clear coordination from enquiry to delivery.",
    icon: "MessageSquareCheck",
    detail: "Transparent status updates, single-point communication, and proactive documentation handling at every stage of the transaction."
  },
  {
    title: "LONG-TERM PARTNERSHIPS",
    description: "Built around dependable business relationships.",
    icon: "Handshake",
    detail: "We prioritize enduring corporate trust and commercial integrity over transactional margins, growing sustainably alongside our clients."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "REQUIREMENT",
    description: "Understand your product and supply requirement.",
    subtext: "Thorough review of technical specs, volume expectations, delivery schedules, and compliance criteria."
  },
  {
    step: "02",
    title: "SOURCE",
    description: "Identify suitable sourcing options.",
    subtext: "Screening our vetted supplier and manufacturer network to match exact specifications and best pricing."
  },
  {
    step: "03",
    title: "VERIFY",
    description: "Review product and supply requirements.",
    subtext: "Quality checks, documentation audits, and contract terms validation before consignment release."
  },
  {
    step: "04",
    title: "COORDINATE",
    description: "Manage logistics and movement.",
    subtext: "Orchestration of road freight, multimodal transit, port handling, and warehousing staging."
  },
  {
    step: "05",
    title: "DELIVER",
    description: "Coordinate supply to the required destination.",
    subtext: "Timely dispatch, proof of delivery, and smooth post-supply documentation handover."
  }
];

