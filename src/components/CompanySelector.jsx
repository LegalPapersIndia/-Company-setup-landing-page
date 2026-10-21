import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBuilding,
  FaHandshake,
  FaUser,
  FaUsers,
  FaStore,
  FaSeedling,
  FaCheckCircle,
  FaRegClock,
  FaRegCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { ArrowRight, Sparkles } from "lucide-react";

/* ------------------------------------------------------------------
   Neeche ka array edit karke kisi bhi structure ka text badal sakte ho.
   time: indicative samay (MCA ke review pe depend karta hai)
   note: "Good to know" ka chhota message (optional)
   ------------------------------------------------------------------ */
const CTA_HREF = "#top-form";

const standards = [
  {
    key: "pvt",
    icon: FaBuilding,
    name: "Private Limited",
    title: "Private Limited Company",
    tagline: "The most trusted structure for startups and growing businesses.",
    bestFor: [
      "Startups planning to raise funds from investors",
      "Founders who want limited liability",
      "Businesses that want credibility with banks and clients",
    ],
    gets: [
      "Name check and reservation on the MCA portal",
      "SPICe+ filing with MoA and AoA drafting",
      "Certificate of Incorporation, PAN and TAN",
    ],
    time: "Typically 7–15 working days",
    fact: "No minimum capital required",
    cta: "Register Private Limited",
    note: "MCA filing fee is nil for authorised capital up to ₹15 lakh. State stamp duty, DSC and professional fees apply separately.",
    grad: "from-orange-400 to-amber-500",
    text: "text-orange-600",
    check: "text-orange-500",
    btn: "from-orange-500 to-amber-500 shadow-[0_14px_28px_-10px_rgba(249,115,22,0.7)]",
  },
  {
    key: "llp",
    icon: FaHandshake,
    name: "LLP",
    title: "Limited Liability Partnership",
    tagline: "Limited liability with lighter compliance.",
    bestFor: [
      "Professionals, consultants and agencies",
      "Partners who want limited liability",
      "Small businesses not planning equity funding",
    ],
    gets: [
      "Name reservation and LLP agreement drafting",
      "Incorporation filing on the MCA portal",
      "Certificate of Incorporation and PAN",
    ],
    time: "Depends on MCA name approval",
    fact: "2 designated partners, 1 resident in India",
    cta: "Register an LLP",
    note: "An LLP has no minimum capital. How much each partner contributes is decided in the LLP agreement.",
    grad: "from-sky-400 to-blue-600",
    text: "text-blue-600",
    check: "text-blue-500",
    btn: "from-sky-500 to-blue-600 shadow-[0_14px_28px_-10px_rgba(37,99,235,0.7)]",
  },
  {
    key: "opc",
    icon: FaUser,
    name: "OPC",
    title: "One Person Company",
    tagline: "A company for one founder.",
    bestFor: [
      "Solo founders who want limited liability",
      "Freelancers and consultants growing into a business",
      "Founders who may add partners and convert later",
    ],
    gets: [
      "Name check and reservation",
      "Incorporation filing with a nominee",
      "Certificate of Incorporation, PAN and TAN",
    ],
    time: "Depends on MCA name approval",
    fact: "1 member + 1 nominee",
    cta: "Register an OPC",
    note: "An OPC can convert into a Private Limited Company when a second shareholder joins.",
    grad: "from-violet-400 to-purple-600",
    text: "text-purple-600",
    check: "text-purple-500",
    btn: "from-violet-500 to-purple-600 shadow-[0_14px_28px_-10px_rgba(139,92,246,0.7)]",
  },
  {
    key: "partnership",
    icon: FaUsers,
    name: "Partnership",
    title: "Partnership Firm",
    tagline: "The simplest way for two or more people to start together.",
    bestFor: [
      "Family businesses and small trading firms",
      "Partners who want a low-cost setup",
      "Businesses that want minimum compliance",
    ],
    gets: [
      "Partnership deed drafting",
      "PAN for the firm",
      "Optional registration with the Registrar of Firms",
    ],
    time: "Quick, no MCA incorporation",
    fact: "Registration is optional",
    cta: "Start a Partnership Firm",
    note: "Partners have unlimited personal liability, and an unregistered firm can face limits when enforcing claims in court.",
    grad: "from-rose-400 to-red-500",
    text: "text-red-600",
    check: "text-red-500",
    btn: "from-rose-500 to-red-500 shadow-[0_14px_28px_-10px_rgba(239,68,68,0.7)]",
  },
  {
    key: "proprietorship",
    icon: FaStore,
    name: "Sole Proprietorship",
    title: "Sole Proprietorship",
    tagline: "One person, minimum paperwork.",
    bestFor: [
      "Freelancers, shopkeepers and small traders",
      "New businesses testing an idea",
      "Owners who want the lowest compliance",
    ],
    gets: [
      "Guidance on GST, Udyam and Shop Act registration as needed",
      "Business name and bank account guidance",
      "Support with the right licences for your trade",
    ],
    time: "Fast, no MCA incorporation",
    fact: "No separate registration act",
    cta: "Start a Proprietorship",
    note: "A proprietorship is not a separate legal entity, so the owner is personally liable for business debts.",
    grad: "from-emerald-400 to-teal-600",
    text: "text-emerald-600",
    check: "text-emerald-500",
    btn: "from-emerald-500 to-teal-600 shadow-[0_14px_28px_-10px_rgba(16,185,129,0.7)]",
  },
  {
    key: "producer",
    icon: FaSeedling,
    name: "Producer Company",
    title: "Producer Company",
    tagline: "A company owned by farmers and primary producers.",
    bestFor: [
      "Farmer groups and producer organisations",
      "Primary producers pooling resources",
      "Agri and allied businesses selling together",
    ],
    gets: [
      "Name reservation and charter documents",
      "Incorporation filing with the MCA",
      "Support with member and director details",
    ],
    time: "Depends on documents and name approval",
    fact: "Only primary producers can be members",
    cta: "Register a Producer Company",
    note: "Producer companies are formed under the Companies Act for businesses owned by their producer members.",
    grad: "from-cyan-400 to-indigo-500",
    text: "text-indigo-600",
    check: "text-indigo-500",
    btn: "from-cyan-500 to-indigo-500 shadow-[0_14px_28px_-10px_rgba(79,70,229,0.7)]",
  },
];

/* Comparison table (same keys as above) */
const compare = [
  { key: "pvt", name: "Private Limited", liability: "Limited", people: "2 directors + 2 shareholders", registration: "Mandatory (MCA)", compliance: "Higher" },
  { key: "llp", name: "LLP", liability: "Limited", people: "2 designated partners", registration: "Mandatory (MCA)", compliance: "Moderate" },
  { key: "opc", name: "OPC", liability: "Limited", people: "1 member + 1 nominee", registration: "Mandatory (MCA)", compliance: "Moderate" },
  { key: "partnership", name: "Partnership", liability: "Unlimited", people: "2 partners", registration: "Optional", compliance: "Low" },
  { key: "proprietorship", name: "Sole Proprietorship", liability: "Unlimited", people: "1 proprietor", registration: "No separate registration", compliance: "Lowest" },
  { key: "producer", name: "Producer Company", liability: "Limited", people: "10 producers or 2 producer institutions", registration: "Mandatory (MCA)", compliance: "Moderate" },
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
export default function CompanySelector() {
  const [active, setActive] = useState(standards[0].key);
  const current = standards.find((s) => s.key === active);

  return (
    <section
      id="co-structures"
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
            Choose your structure
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#173252] sm:text-4xl md:text-5xl">
            Which structure is{" "}
            <span className="bg-gradient-to-r from-[#126dc4] to-cyan-500 bg-clip-text text-transparent">
              right for you?
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            Pick a structure to see who it suits, what you get and how long it
            takes. Not sure? Our expert will help you choose in a quick call.
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
                    layoutId="co-active-pill"
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

        {/* ================= COMPARISON TABLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_45px_-24px_rgba(10,30,70,0.35)] sm:mt-14"
        >
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-orange-50 px-5 py-4 sm:px-8 sm:py-5">
            <h3 className="font-display text-xl font-extrabold text-[#173252] sm:text-2xl">
              Compare at a glance
            </h3>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              The key differences between the six structures.
            </p>
          </div>

          {/* desktop / tablet table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <th className="px-6 py-3">Structure</th>
                  <th className="px-4 py-3">Liability</th>
                  <th className="px-4 py-3">Minimum people</th>
                  <th className="px-4 py-3">Registration</th>
                  <th className="px-4 py-3">Compliance</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((r) => (
                  <tr
                    key={r.key}
                    onClick={() => setActive(r.key)}
                    className={`cursor-pointer border-t border-slate-100 transition-colors hover:bg-blue-50/60 ${
                      active === r.key ? "bg-blue-50/80" : ""
                    }`}
                  >
                    <td className="px-6 py-3.5 font-extrabold text-[#173252]">
                      {r.name}
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                          r.liability === "Limited"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-rose-50 text-rose-700"
                        }`}
                      >
                        {r.liability}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-slate-700">{r.people}</td>
                    <td className="px-4 py-3.5 text-slate-700">{r.registration}</td>
                    <td className="px-4 py-3.5 text-slate-700">{r.compliance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* mobile cards */}
          <ul className="divide-y divide-slate-100 md:hidden">
            {compare.map((r) => (
              <li
                key={r.key}
                onClick={() => setActive(r.key)}
                className={`cursor-pointer px-5 py-4 ${
                  active === r.key ? "bg-blue-50/80" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-extrabold text-[#173252]">{r.name}</p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                      r.liability === "Limited"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-rose-50 text-rose-700"
                    }`}
                  >
                    {r.liability} liability
                  </span>
                </div>
                <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
                  <dt className="text-slate-500">People</dt>
                  <dd className="text-slate-700">{r.people}</dd>
                  <dt className="text-slate-500">Registration</dt>
                  <dd className="text-slate-700">{r.registration}</dd>
                  <dt className="text-slate-500">Compliance</dt>
                  <dd className="text-slate-700">{r.compliance}</dd>
                </dl>
              </li>
            ))}
          </ul>
        </motion.div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-slate-500">
          Requirements as per the Companies Act, 2013, the LLP Act, 2008 and the
          Indian Partnership Act, 1932. MCA fees depend on authorised capital and
          state stamp duty. Timelines are indicative and depend on MCA review.
        </p>
      </div>
    </section>
  );
}