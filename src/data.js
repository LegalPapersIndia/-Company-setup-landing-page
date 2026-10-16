export const services = [
  {
    title: "GeM Seller Registration",
    desc: "Set up your verified seller or service provider profile on gem.gov.in.",
    tag: "Most booked",
  },
  {
    title: "Brand Registration on GeM",
    desc: "Get your brand approved so you can list products under your own name.",
  },
  {
    title: "Deemed OEM Registration",
    desc: "Apply for the Deemed OEM panel when you are not the original manufacturer.",
  },
  {
    title: "GeM Vendor Assessment",
    desc: "Clear the desktop and video assessment for OEM status and brand approval.",
  },
  {
    title: "Catalogue Upload & Listing",
    desc: "Get your products and services listed correctly so buyers can find and order them.",
  },
  {
    title: "Bid & Tender Support",
    desc: "Guidance on finding the right bids, preparing your offer and taking part on GeM.",
  },
];

export const processSteps = [
  {
    title: "Fill the form",
    desc: "Share your business details in under two minutes.",
  },
  {
    title: "Profile & document check",
    desc: "We match your PAN, GST and Aadhaar details before anything is submitted.",
  },
  {
    title: "Registration & approvals",
    desc: "We register you on GeM and handle brand, OEM or assessment requests.",
  },
  {
    title: "Start bidding",
    desc: "List your products and start bidding for government orders.",
  },
];

export const documentsRequired = [
  "PAN card of the business / proprietor",
  "Aadhaar of the authorised signatory",
  "Cancelled cheque / bank account details",
  "GST certificate & business address proof",
  "Business registration proof (incorporation / partnership deed / Udyam)",
  "Aadhaar-linked mobile number & email ID (for OTP)",
];

/* OEM & Brand documents (same icon order as above) */
export const documentsOem = [
  "Trademark certificate or brand registration proof",
  "Vendor Assessment report (for OEM panel and brand approval)",
  "Manufacturing unit or factory details (for OEM)",
  "Factory / premises address proof & licences",
  "OEM authorisation letter (for Deemed OEM) or brand authorisation",
  "Beneficial ownership details of the business",
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
    q: "1. Is GeM registration free?",
    a: "Yes. Registering as a seller on GeM carries no government registration fee. You pay only our professional fee for handling it. GeM's transaction charges apply later, and only on larger orders.",
  },
  {
    q: "2. What are GeM's transaction charges?",
    a: "Under GeM's revenue policy effective 9 August 2024, orders up to ₹10 lakh carry no transaction charge, orders above ₹10 lakh and up to ₹10 crore carry 0.30%, and orders above ₹10 crore carry a flat ₹3 lakh. Many older websites still show outdated rates.",
  },
  {
    q: "3. Who can register as a seller?",
    a: "Manufacturers, traders, resellers, startups and service providers with a valid PAN, business registration proof and a bank account. Your name, address and PAN must match your GST and tax records.",
  },
  {
    q: "4. Which documents do I need?",
    a: "PAN of the business or proprietor, Aadhaar of the authorised signatory (linked to a mobile for OTP), GST certificate, business registration proof and bank details. Udyam registration is needed to claim MSME benefits.",
  },
  {
    q: "5. What is Deemed OEM and when do I need it?",
    a: "Deemed OEM status lets a seller bid as an OEM in categories that give OEMs exemptions, usually based on an authorisation from the original manufacturer. GeM checks that authorisation letter with the manufacturer. We guide you through the application.",
  },
  {
    q: "6. What is vendor assessment?",
    a: "It is a verification of your business by GeM-appointed agencies in two stages: a desktop assessment of your documents and a video assessment. It is used for the OEM panel and brand approval, and it also helps your seller rating.",
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

// PLACEHOLDER pricing — replace with the real GeM plan prices and inclusions before going live.
export const pricingPlans = [
  {
    name: "Seller",
    desc: "For businesses that want a verified seller profile on GeM.",
    originalPrice: 4999,
    discount: "50% off",
    price: 2499,
    instantOff: 2500,
    emi: false,
    highlight: false,
    features: [
      "GeM Seller Registration",
      "Profile & Document Check",
      "Udyam / MSME Benefits Setup",
      "Dedicated Advisor for GeM",
    ],
  },
  {
    name: "OEM & Brand",
    desc: "For manufacturers and brand owners who want OEM and brand status.",
    originalPrice: 15999,
    discount: "50% off",
    price: 7999,
    instantOff: 8000,
    emi: false,
    highlight: true,
    features: [
      "Everything in Seller",
      "Brand Approval Filing",
      "Deemed OEM Application Support",
      "Vendor Assessment Guidance",
    ],
  },
  {
    name: "Complete",
    desc: "Everything you need to start listing and bidding on GeM.",
    originalPrice: 29999,
    discount: "50% off",
    price: 14999,
    instantOff: 15000,
    emi: true,
    highlight: false,
    features: [
      "Everything in OEM & Brand",
      "Catalogue Upload & Listing Support",
      "Bid & Tender Participation Guidance",
      "Dedicated Support & Fast Process",
    ],
  },
];

export const whoNeedsGem = [
  {
    title: "Manufacturers & MSMEs",
    desc: "Sell directly to government departments and PSUs, with Udyam benefits such as EMD exemption and purchase preference.",
    tag: "MSME benefits",
  },
  {
    title: "Traders, resellers & distributors",
    desc: "List and sell products from authorised brands and manufacturers to government buyers.",
    tag: "Resellers welcome",
  },
  {
    title: "Service providers",
    desc: "Transport, manpower, IT, housekeeping, consulting and more can be offered on GeM.",
    tag: "Services accepted",
  },
  {
    title: "Startups & new businesses",
    desc: "Reach government buyers early, without paying any government fee to register.",
    tag: "No registration fee",
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