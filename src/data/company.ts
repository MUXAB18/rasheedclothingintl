export const companyData = {
  name: "Rasheed Clothing International",
  slogan: "Where Imagination Meets Fabrication",
  founded: "2017",
  location: "Sialkot, Pakistan",
  description:
    "Rasheed Clothing International is a premium apparel manufacturing facility dedicated to engineering luxury streetwear, activewear, and corporate uniforms for brands worldwide.",
  tagline:
    "Premium apparel manufacturing and private-label clothing solutions from Pakistan to the world.",

  // Statistics & Achievements
  statistics: {
    yearsOfExperience: new Date().getFullYear() - 2017,
    garmentsProduced: "50,000+",
    countriesServed: "15+",
    clientSatisfaction: "98%",
    sampleTurnaround: "48 hours",
    monthlyCapacity: "10,000+ units",
    qualityRate: "99.5%",
  },

  // ISO certifications. Add `number` and `issuer` (certification body) once you have the certificates;
  // they are then shown on the badges and in structured data.
  isoCertifications: [
    { code: "ISO 9001", name: "ISO 9001 Quality Management", short: "Quality", number: "", issuer: "" },
    { code: "ISO 14001", name: "ISO 14001 Environmental Management", short: "Environment", number: "", issuer: "" },
    { code: "ISO 45001", name: "ISO 45001 Occupational Health & Safety", short: "Health & Safety", number: "", issuer: "" },
  ],

  // Certifications & Accreditations
  accreditations: [
    "Approved Member - Sialkot Chamber of Commerce & Industry",
    "Export Excellence Award 2023",
    "ISO 9001 Certified: Quality Management",
    "ISO 14001 Certified: Environmental Management",
    "ISO 45001 Certified: Occupational Health & Safety",
  ],

  // Manufacturing Capabilities
  capabilities: {
    moq: "50 units per design",
    leadTime: "3-4 weeks",
    sampleLeadTime: "5-7 days",
    productionMethods: [
      "Screen Printing",
      "Embroidery",
      "Sublimation",
      "Heat Transfer",
    ],
    specializations: [
      "Streetwear",
      "Activewear",
      "Corporate Uniforms",
      "Custom Apparel",
    ],
  },

  // Contact Information
  emails: {
    primary: "rasheedclothingintl@gmail.com",
    sales: "sales@rasheedclothingintl.me",
    support: "support@rasheedclothingintl.me",
  },
  phones: [
    { country: "UK", number: "+44 7459 700121", code: "+447459700121" },
    {
      country: "PK",
      number: "+92 349 601 4611",
      code: "+923496014611",
      isWhatsApp: true,
    },
  ],
  businessHours: "Monday – Saturday: 9:00 AM – 7:00 PM PKT",

  // Social Media
  socials: {
    instagram: "https://instagram.com/rasheedclothingintl",
    linkedin:
      "https://www.linkedin.com/company/rasheed-clothing-international/",
    whatsapp: "https://wa.me/923496014611",
  },

  // Export Information
  exportInfo: {
    mainMarkets: [
      "United Kingdom",
      "United States",
      "Canada",
      "Australia",
      "UAE",
      "European Union",
    ],
    shippingPartners: ["DHL", "FedEx", "UPS", "Cargo Services"],
    paymentMethods: ["Bank Transfer", "PayPal", "Western Union", "Wise"],
  },
};
