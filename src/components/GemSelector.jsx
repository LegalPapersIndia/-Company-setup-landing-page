import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStore,
  FaTrademark,
  FaUserCheck,
  FaClipboardCheck,
  FaCheckCircle,
  FaRegClock,
  FaRegCheckCircle,
  FaInfoCircle,
  FaRupeeSign,
} from "react-icons/fa";
import { ArrowRight, Sparkles } from "lucide-react";

/* ------------------------------------------------------------------
   Neeche ka array edit karke kisi bhi option ka text badal sakte ho.
   time: sirf indicative hai (GeM ke review pe depend karta hai)
   note: "Good to know" ka chhota message (optional)
   ------------------------------------------------------------------ */
const CTA_HREF = "#top-form";

const standards = [
  {
    key: "seller",
    icon: FaStore,
    name: "Seller Registration",
    title: "Seller / Service Provider",
    tagline: "Your entry ticket to government orders.",
    bestFor: [
      "Manufacturers and traders selling to government",
      "Service providers such as transport, manpower and IT",
      "Startups and MSMEs starting with government buyers",
    ],
    gets: [
      "A verified seller profile on gem.gov.in",
      "Access to bids and direct purchase orders",
      "Setup for Udyam and MSME benefits",
    ],
    time: "Quick once your details match",
    fact: "No government registration fee",
    cta: "Get GeM Seller Registration",
    note: "Transaction charges apply only on larger orders: nil up to ₹10 lakh per order, and 0.30% above that (up to ₹10 crore).",
    grad: "from-orange-400 to-amber-500",
    text: "text-orange-600",
    check: "text-orange-500",
    btn: "from-orange-500 to-amber-500 shadow-[0_14px_28px_-10px_rgba(249,115,22,0.7)]",
  },
  {
    key: "brand",
    icon: FaTrademark,
    name: "Brand Approval",
    title: "Brand Registration on GeM",
    tagline: "List your products under your own brand.",
    bestFor: [
      "Brand owners and manufacturers",
      "Sellers with a registered trademark",
      "OEMs who want their brand listed on GeM",
    ],
    gets: [
      "Your brand approved in the GeM brand list",
      "Permission to upload products under your brand",
      "Stronger buyer trust and visibility",
    ],
    time: "Depends on GeM review",
    fact: "Checked against your trademark",
    cta: "Get Brand Approval",
    note: "Brand requests are checked against your trademark certificate. If you have no trademark, GeM can treat your company name as the brand name.",
    grad: "from-sky-400 to-blue-600",
    text: "text-blue-600",
    check: "text-blue-500",
    btn: "from-sky-500 to-blue-600 shadow-[0_14px_28px_-10px_rgba(37,99,235,0.7)]",
  },
  {
    key: "deemed",
    icon: FaUserCheck,
    name: "Deemed OEM",
    title: "Deemed OEM Panel",
    tagline: "Bid as an OEM when you are not the original manufacturer.",
    bestFor: [
      "Assemblers, integrators and brand-led sellers",
      "Traders sourcing from an original manufacturer",
      "Sellers whose OEM is not registered on GeM",
    ],
    gets: [
      "OEM-panel access in eligible categories",
      "Benefits that GeM gives to OEM sellers in bids",
      "Application and authorisation letter support",
    ],
    time: "GeM turnaround: about 5 working days",
    fact: "Authorisation letter required",
    cta: "Get Deemed OEM Status",
    note: "GeM checks your authorisation letter with the original manufacturer, and rejects the request if that manufacturer is already registered on GeM.",
    grad: "from-violet-400 to-purple-600",
    text: "text-purple-600",
    check: "text-purple-500",
    btn: "from-violet-500 to-purple-600 shadow-[0_14px_28px_-10px_rgba(139,92,246,0.7)]",
  },
  {
    key: "assessment",
    icon: FaClipboardCheck,
    name: "Vendor Assessment",
    title: "Vendor Assessment",
    tagline: "Get your business verified and rated higher.",
    bestFor: [
      "OEMs and manufacturers seeking OEM-panel status",
      "Sellers who need brand approval",
      "Businesses that want a stronger seller rating",
    ],
    gets: [
      "Guidance through desktop and video assessment",
      "Document checks and gap fixes before the assessment",
      "A vendor assessment report for OEM and brand requests",
    ],
    time: "Depends on category & turnover",
    fact: "Desktop + video assessment",
    cta: "Get Vendor Assessment Help",
    note: "Assessments are conducted by GeM-appointed agencies. Requirements and fees depend on your category and turnover.",
    grad: "from-emerald-400 to-teal-600",
    text: "text-emerald-600",
    check: "text-emerald-500",
    btn: "from-emerald-500 to-teal-600 shadow-[0_14px_28px_-10px_rgba(16,185,129,0.7)]",
  },
];

/* GeM registration: sahi jankari ke 4 checks */
const checks = [
  "The official portal is gem.gov.in, and seller registration carries no government fee",
  "Your name, address and PAN must match your GST records, as most rejections come from mismatches",
  "Transaction charges are nil up to ₹10 lakh per order and 0.30% above that",
  "Ask for a written quote that shows our professional fee separately from government charges",
];

/* ------------------------------------------------------------------
   Detail panel
   ------------------------------------------------------------------ */
function Panel({ s }) {
  const Icon = s.icon;

  return (
    <motion.div
      key={s.key}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_60px_-28px_rgba(10,30,70,0.45)]"
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${s.grad}`} />

      <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[0.9fr_1.05fr_1.05fr] lg:gap-8">
        {/* ---------- left: name ---------- */}
        <div>
          <span
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${s.grad} text-white shadow-lg sm:h-20 sm:w-20`}
          >
            <Icon className="h-7 w-7 sm:h-9 sm:w-9" />
          </span>

          <h3 className="mt-4 font-display text-2xl font-extrabold text-[#173252] sm:text-3xl">
            {s.name}
          </h3>
          <p className={`mt-1 text-sm font-bold uppercase tracking-wider ${s.text}`}>
            {s.title}
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {s.tagline}
          </p>

          <div className="mt-5 space-y-2.5 text-sm">
            <div className="flex items-center gap-2.5 rounded-xl bg-slate-50 px-3.5 py-2.5">
              <FaRegClock className="h-4 w-4 shrink-0 text-slate-400" />
              <span className="font-bold text-[#173252]">{s.time}</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-slate-50 px-3.5 py-2.5">
              <FaRegCheckCircle className="h-4 w-4 shrink-0 text-slate-400" />
              <span className="font-bold text-[#173252]">{s.fact}</span>
            </div>
          </div>
        </div>

        {/* ---------- middle: best for ---------- */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Best for
          </p>
          <ul className="mt-3 space-y-3">
            {s.bestFor.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700 sm:text-base">
                <FaCheckCircle className={`mt-1 h-4 w-4 shrink-0 ${s.check}`} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- right: what you get ---------- */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            What you get
          </p>
          <ul className="mt-3 space-y-3">
            {s.gets.map((g) => (
              <li key={g} className="flex items-start gap-2.5 text-sm text-slate-700 sm:text-base">
                <FaCheckCircle className={`mt-1 h-4 w-4 shrink-0 ${s.check}`} />
                {g}
              </li>
            ))}
          </ul>

          <a
            href={CTA_HREF}
            className={`group/btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${s.btn} px-5 py-3.5 text-base font-extrabold text-white transition hover:brightness-105`}
          >
            {s.cta}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>

      {s.note && (
        <div className="flex items-start gap-2.5 border-t border-amber-100 bg-amber-50/70 px-5 py-3 text-xs leading-relaxed text-amber-900 sm:px-8 sm:text-sm">
          <FaInfoCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
          <p>
            <span className="font-bold">Good to know: </span>
            {s.note}
          </p>
        </div>
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Section
   ------------------------------------------------------------------ */
export default function GemSelector() {
  const [active, setActive] = useState(standards[0].key);
  const current = standards.find((s) => s.key === active);

  return (
    <section
      id="gem-services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f6faff] to-white py-12 sm:py-20"
    >
      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-orange-200/25 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,91,160,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 ring-1 ring-blue-200">
            <Sparkles className="h-4 w-4" />
            Choose what you need
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#173252] sm:text-4xl md:text-5xl">
            What do you need on{" "}
            <span className="bg-gradient-to-r from-[#126dc4] to-cyan-500 bg-clip-text text-transparent">
              GeM?
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            Pick one to see who it suits, what you get and how long it takes.
            Not sure? Our expert will tell you in a quick call.
          </p>
        </motion.div>

        {/* ================= CHIPS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3"
        >
          {standards.map((s) => {
            const isActive = active === s.key;
            const ChipIcon = s.icon;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => setActive(s.key)}
                aria-pressed={isActive}
                className={`relative rounded-full border px-4 py-2 text-sm font-bold transition-colors duration-300 sm:px-5 sm:py-2.5 sm:text-base ${
                  isActive
                    ? "border-transparent"
                    : "border-slate-200 bg-white text-[#173252] hover:border-blue-300 hover:text-[#126dc4]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="gem-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0b4f99] via-[#126dc4] to-[#1e88e5] shadow-[0_10px_22px_-8px_rgba(18,109,196,0.7)]"
                  />
                )}
                <span
                  className={`relative z-10 inline-flex items-center gap-2 ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  <ChipIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {s.name}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ================= PANEL ================= */}
        <div className="mt-6 sm:mt-8">
          <AnimatePresence mode="wait">
            <Panel key={current.key} s={current} />
          </AnimatePresence>
        </div>

        {/* ================= "GeM IS FREE" NOTE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="mt-10 overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-5 shadow-[0_18px_45px_-24px_rgba(5,150,105,0.35)] sm:mt-14 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <motion.span
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md sm:h-14 sm:w-14"
            >
              <FaRupeeSign className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.span>
            <div>
              <h3 className="font-display text-xl font-extrabold text-[#173252] sm:text-2xl">
                GeM registration is free. Pay only for expert help.
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                Some websites charge "GeM fees" that do not exist or promise
                guaranteed orders. Check these four things before you pay anyone.
              </p>
            </div>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {checks.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-xs font-extrabold text-white">
                  {i + 1}
                </span>
                <span className="text-sm leading-snug text-slate-700">{c}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-slate-500">
          Government fees and transaction charges are set by GeM and can change;
          check gem.gov.in for the latest. Timelines are indicative and depend
          on GeM's review.
        </p>
      </div>
    </section>
  );
}