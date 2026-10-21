export const services = [
  {
    title: "Private Limited Company",
    desc: "The most trusted structure for startups and growing businesses, filed end-to-end on the MCA portal.",
    tag: "Most booked",
  },
  {
    title: "Limited Liability Partnership",
    desc: "Limited liability with lighter compliance, ideal for professionals and small businesses.",
  },
  {
    title: "One Person Company",
    desc: "A company for a single founder, with limited liability and a nominee.",
  },
  {
    title: "Partnership Firm",
    desc: "A simple, low-cost setup for two or more people who want to start together.",
  },
  {
    title: "Sole Proprietorship",
    desc: "The fastest way for one person to start, with the lowest paperwork.",
  },
  {
    title: "Producer Company",
    desc: "A company owned by farmers and primary producers who want to work and sell together.",
  },
];

export const processSteps = [
  {
    title: "Fill the form",
    desc: "Share your business idea and contact details in under two minutes.",
  },
  {
    title: "Choose your structure",
    desc: "Our expert compares the options and confirms the right one for you.",
  },
  {
    title: "Name & MCA filing",
    desc: "We reserve your name and file the incorporation forms with all documents.",
  },
  {
    title: "Certificate issued",
    desc: "Your incorporation certificate and PAN land in your inbox.",
  },
];

export const documentsRequired = [
  "PAN card of every director / partner",
  "Aadhaar or other photo ID of every director / partner",
  "Registered office proof: rent agreement or ownership proof with NOC",
  "Latest utility bill of the registered office",
  "Digital signature (DSC) of directors / designated partners — we arrange it",
  "Mobile number & email ID of every director / partner (for OTP)",
];

/* Partnership / Proprietorship documents (same icon order as above) */
export const documentsPartner = [
  "PAN card of the proprietor / every partner",
  "Aadhaar or other photo ID of the proprietor / every partner",
  "Business address proof: rent agreement or ownership proof",
  "Latest utility bill of the business premises",
  "Signed partnership deed (for partnerships) — we draft it",
  "Mobile number & email ID (for OTP and updates)",
];

export const whyUs = [
  { title: "Expert guidance", desc: "Compliance professionals review every application before it's filed." },
  { title: "Fast turnaround", desc: "No back-and-forth — we chase the paperwork so you don't have to." },
  { title: "Transparent pricing", desc: "One quote upfront. No hidden charges after you've paid." },
  { title: "Compliance alerts", desc: "Reminders for returns and renewals so you're never caught off guard." },
];

export const reviewPlatforms = [
  {
    name: "Google Reviews",
    rating: "4.9",
    count: "2,000+ reviews",
    href: "https://share.google/1MYy6yASxWRMA1ZPa",
  },
  {
    name: "Trustpilot",
    rating: "4.9",
    count: "500+ reviews",
    href: "https://www.trustpilot.com/review/legalpapersindia.com",
  },
  {
    name: "Mouthshut",
    rating: "4.9",
    count: "100+ reviews",
    href: "https://www.mouthshut.com/product-reviews/legalpapersindia-reviews-926198492",
  },
];

export const stats = [
  { value: "1,00,000+", label: "Businesses served" },
  { value: "2,000+", label: "Five-star reviews" },
  { value: "35+", label: "States & UTs covered" },
  { value: "24×7", label: "Support" },
];

export const faqs = [
  {
    q: "1. Which business structure should I choose?",
    a: "It depends on liability, funding plans and compliance. Private Limited suits startups and fundraising, LLP suits professionals and small businesses, OPC suits solo founders, and Partnership or Sole Proprietorship suit simple, low-compliance setups. Our expert will help you decide.",
  },
  {
    q: "2. Is there a minimum capital for a company?",
    a: "No. There is no minimum paid-up capital for a Private Limited Company, and the MCA filing fee is nil for authorised capital up to ₹15 lakh. State stamp duty and other charges still apply.",
  },
  {
    q: "3. What are the minimum requirements for a Private Limited Company?",
    a: "At least 2 directors and 2 shareholders (the same people can be both), at least one director resident in India, a registered office address in India and a digital signature for each director.",
  },
  {
    q: "4. How long does company registration take?",
    a: "A Private Limited Company usually takes about 7–15 working days from complete documents, depending on name approval and MCA review. Partnerships and proprietorships are faster, as they do not need MCA incorporation.",
  },
  {
    q: "5. Can a foreigner or NRI be a director?",
    a: "Yes. Foreign nationals and NRIs can be directors and shareholders of a Private Limited Company, subject to the FDI rules for the sector, but at least one director must be resident in India.",
  },
  {
    q: "6. What happens after incorporation?",
    a: "You will need a bank account, GST registration if applicable, and yearly compliance such as ROC and income tax filings. Our team can handle these for you after registration.",
  },
];

export const businessTypes = [
  "Sole Proprietorship",
  "Partnership Firm",
  "LLP",
  "Private Limited Company",
  "One Person Company",
  "Other",
];

// PLACEHOLDER pricing — replace with the real company registration prices and inclusions before going live.
export const pricingPlans = [
  {
    name: "LLP / OPC",
    desc: "For professionals and solo founders who want limited liability.",
    originalPrice: 9999,
    discount: "50% off",
    price: 4999,
    instantOff: 5000,
    emi: false,
    highlight: false,
    features: [
      "Name Check & Reservation",
      "LLP Agreement or OPC Documents",
      "Incorporation Filing with MCA",
      "Dedicated Advisor for Company Setup",
    ],
  },
  {
    name: "Private Limited",
    desc: "For startups and growing businesses that want credibility and funding options.",
    originalPrice: 13999,
    discount: "50% off",
    price: 6999,
    instantOff: 7000,
    emi: false,
    highlight: true,
    features: [
      "Name Check & Reservation",
      "MoA & AoA Drafting",
      "SPICe+ Filing with DIN for Directors",
      "Certificate of Incorporation, PAN & TAN",
      "Dedicated Advisor for Company Setup",
    ],
  },
  {
    name: "Complete Startup",
    desc: "Everything to incorporate and start operating from day one.",
    originalPrice: 29999,
    discount: "50% off",
    price: 14999,
    instantOff: 15000,
    emi: true,
    highlight: false,
    features: [
      "Everything in Private Limited",
      "GST Registration",
      "MSME (Udyam Certificate)",
      "Bank Account Opening Guidance",
      "Dedicated Support & Fast Process",
    ],
  },
];

export const whoNeedsCo = [
  {
    title: "Startups & founders",
    desc: "Raise funds, hire a team and build credibility with a proper company structure.",
    tag: "Pvt Ltd / OPC",
  },
  {
    title: "Freelancers & consultants",
    desc: "Move from a personal PAN to a registered business, with limited liability if you want it.",
    tag: "OPC / LLP",
  },
  {
    title: "Family & small trading businesses",
    desc: "Start together with a simple partnership or proprietorship and minimum paperwork.",
    tag: "Partnership / Proprietorship",
  },
  {
    title: "Farmers & producer groups",
    desc: "Form a producer company to pool resources and sell together.",
    tag: "Producer Company",
  },
];

export const footerLinkColumns = [
  {
    heading: "Business Startup",
    links: [
      { label: "Sole Proprietorship Firm", href: "https://www.legalpapersindia.com/sole-proprietorship" },
      { label: "Partnership Firm", href: "https://www.legalpapersindia.com/partnership-firm" },
      { label: "Limited Liability Partnership", href: "https://www.legalpapersindia.com/limited-liability-partnership" },
      { label: "One Person Company", href: "https://www.legalpapersindia.com/one-person-company" },
      { label: "Private Limited Company", href: "https://www.legalpapersindia.com/private-limited-company" },
      { label: "Producer Company Registration", href: "https://www.legalpapersindia.com/producer-company-registration" },
    ],
  },
  {
    heading: "Registration & License",
    links: [
      { label: "FSSAI Registration", href: "https://www.legalpapersindia.com/fssai-basic-registration" },
      { label: "FSSAI State License", href: "https://www.legalpapersindia.com/fssai-state-license" },
      { label: "FSSAI Central License", href: "https://www.legalpapersindia.com/fssai-central-license" },
      { label: "FSSAI Returns", href: "https://www.legalpapersindia.com/fssai-returns" },
      { label: "FSSAI Renewal", href: "https://www.legalpapersindia.com/fssai-renewal" },
      { label: "Shop and Establishment Certificate", href: "https://www.legalpapersindia.com/shop-and-establishment-certificate" },
    ],
  },
  {
    heading: "Import & Export",
    links: [
      { label: "IEC Registration", href: "https://www.legalpapersindia.com/iec-registration" },
      { label: "ICEGATE Registration", href: "https://www.legalpapersindia.com/icegate-registration" },
      { label: "AD Code Registration", href: "https://www.legalpapersindia.com/ad-code-certificate" },
      { label: "LUT Registration", href: "https://www.legalpapersindia.com/lut-registration-service" },
      { label: "WPC Certificate", href: "https://www.legalpapersindia.com/wpc-certificate" },
      { label: "LMPC Registration", href: "https://www.legalpapersindia.com/lmpc-registration" },
    ],
  },
  {
    heading: "Tax & Compliance",
    links: [
      { label: "Corporate Tax", href: "https://www.legalpapersindia.com/corporate-tax" },
      { label: "GST Registration", href: "https://www.legalpapersindia.com/gst-registration" },
      { label: "GST Registration for Foreigners", href: "https://www.legalpapersindia.com/gst-registration-for-foreigners" },
      { label: "GST Modification", href: "https://www.legalpapersindia.com/gst-modification" },
      { label: "GST Cancellation & Surrender", href: "https://www.legalpapersindia.com/gst-cancellation-and-surrender" },
      { label: "Professional Tax Registration", href: "https://www.legalpapersindia.com/professional-tax-registration" },
    ],
  },
  {
    heading: "Trademark & IP",
    links: [
      { label: "Brand Name Registration", href: "https://www.legalpapersindia.com/brand-name-registration" },
      { label: "Trademark Registration", href: "https://www.legalpapersindia.com/trademark-registration" },
      { label: "Trademark Objection", href: "https://www.legalpapersindia.com/trademark-objection" },
      { label: "Trademark Hearing", href: "https://www.legalpapersindia.com/trademark-hearing" },
      { label: "Trademark Opposition", href: "https://www.legalpapersindia.com/trademark-opposition" },
      { label: "Trademark Renewal", href: "https://www.legalpapersindia.com/trademark-renewal" },
    ],
  },
  {
    heading: "ISO",
    links: [
      { label: "ISO 9001", href: "https://www.legalpapersindia.com/iso-9001" },
      { label: "ISO 14001", href: "https://www.legalpapersindia.com/iso-14001" },
      { label: "ISO 45001", href: "https://www.legalpapersindia.com/iso-45001" },
      { label: "ISO 22000", href: "https://www.legalpapersindia.com/iso-22000" },
      { label: "ISO 27001", href: "https://www.legalpapersindia.com/iso-27001" },
      { label: "ISO Certificate", href: "https://www.legalpapersindia.com/iso-certification" },
    ],
  },
  {
    heading: "GEM & Other",
    links: [
      { label: "GEM Registration", href: "https://www.legalpapersindia.com/gem-registration" },
      { label: "Brand Registration on GEM", href: "https://www.legalpapersindia.com/brand-registration" },
      { label: "Deemed OEM", href: "https://www.legalpapersindia.com/deemed-oem" },
      { label: "Gem Vendor Assessment", href: "https://www.legalpapersindia.com/gem-vendor-assessment" },
    ],
  },
  {
    heading: "Useful Links",
    links: [
      { label: "Home", href: "https://www.legalpapersindia.com/" },
      { label: "About Us", href: "https://www.legalpapersindia.com/about-us" },
      { label: "Contact Us", href: "https://www.legalpapersindia.com/contact-us" },
      { label: "Blogs", href: "https://www.legalpapersindia.com/blog" },
      { label: "Updates", href: "https://www.legalpapersindia.com/updates" },
      { label: "Due Dates", href: "https://www.legalpapersindia.com/due-dates" },
      { label: "Partner With Us", href: "https://www.legalpapersindia.com/partner-with-us" },
    ],
  },
  {
    heading: "Important Links",
    links: [
      { label: "Career", href: "https://www.legalpapersindia.com/career" },
      { label: "Sitemap", href: "https://www.legalpapersindia.com/sitemap" },
      { label: "Privacy Policy", href: "https://www.legalpapersindia.com/privacy-policy" },
      { label: "Terms & Conditions", href: "https://www.legalpapersindia.com/terms-and-conditions" },
      { label: "Refund & Cancellation Policy", href: "https://www.legalpapersindia.com/refund-and-cancellation-policy" },
      { label: "Our Presence", href: "https://www.legalpapersindia.com/our-presence" },
    ],
  },
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/LegalPapersIndiaofficial" },
  { label: "Instagram", href: "https://www.instagram.com/legalpapersindia/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/legal-papers-india/" },
  { label: "Twitter", href: "https://x.com/LegalPapersInd" },
];

export const mediaMentions = [
  {
    name: "Dailyhunt",
    caption: "Featured for simplifying GST and compliance.",
  },
  {
    name: "Zee News",
    caption: "Featured for accessible business registration.",
  },
  {
    name: "Hindustan Times",
    caption: "Mentioned in India's digital compliance space.",
  },
  {
    name: "Business Standard",
    caption: "Covered for MSME and tax compliance trends.",
  },
];