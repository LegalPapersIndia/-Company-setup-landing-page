import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFileSignature,
  FaExclamationCircle,
  FaGavel,
  FaBalanceScale,
  FaSyncAlt,
  FaTrademark,
  FaCheckCircle,
  FaRegClock,
  FaRegCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { ArrowRight, Sparkles } from "lucide-react";

/* ------------------------------------------------------------------
   Neeche ka array edit karke kisi bhi stage ka text badal sakte ho.
   time: us stage ki deadline ya indicative samay
   note: "Good to know" ka chhota message (optional)
   ------------------------------------------------------------------ */
const CTA_HREF = "#top-form";

const standards = [
  {
    key: "registration",
    icon: FaFileSignature,
    name: "Registration",
    title: "New Trademark Registration",
    tagline: "Protect your name, logo or tagline across India.",
    bestFor: [
      "You are launching a new brand, logo or tagline",
      "Your brand is growing and copycats are a risk",
      "A marketplace or investor asks for a registered mark",
    ],
    gets: [
      "Trademark search and the right class selection",
      "Online filing of Form TM-A in your name",
      "Tracking through examination and publication",
    ],
    time: "Typically 12–18 months if unopposed",
    fact: "™ usable from the filing day",
    cta: "Start Trademark Registration",
    note: "Government fee is ₹4,500 per class for individuals, startups and small enterprises (e-filing), and ₹9,000 per class for others. It is non-refundable, so a proper search first saves money.",
    grad: "from-orange-400 to-amber-500",
    text: "text-orange-600",
    check: "text-orange-500",
    btn: "from-orange-500 to-amber-500 shadow-[0_14px_28px_-10px_rgba(249,115,22,0.7)]",
  },
  {
    key: "objection",
    icon: FaExclamationCircle,
    name: "Objection",
    title: "Examination Report Reply",
    tagline: "Turn an objection into an acceptance.",
    bestFor: [
      "The Registry has issued an examination report",
      "Your mark is called descriptive or similar to another",
      "You received an objection and are unsure how to reply",
    ],
    gets: [
      "Study of the grounds of the objection",
      "A well-argued written reply with supporting evidence",
      "Follow-up until the Registry decides",
    ],
    time: "Reply within 30 days of the report",
    fact: "A missed deadline can abandon the application",
    cta: "Reply to My Objection",
    note: "Most objections can be resolved with a strong reply. If the Registry is not convinced, it may schedule a hearing.",
    grad: "from-sky-400 to-blue-600",
    text: "text-blue-600",
    check: "text-blue-500",
    btn: "from-sky-500 to-blue-600 shadow-[0_14px_28px_-10px_rgba(37,99,235,0.7)]",
  },
  {
    key: "hearing",
    icon: FaGavel,
    name: "Hearing",
    title: "Registrar Hearing",
    tagline: "Present your case clearly before the Registrar.",
    bestFor: [
      "Your objection reply was not accepted",
      "A hearing notice has been issued to you",
      "You want expert arguments prepared for the hearing",
    ],
    gets: [
      "Hearing preparation and written submissions",
      "Assistance on the day of the hearing",
      "Follow-up on the Registrar's order",
    ],
    time: "Date fixed by the Registry",
    fact: "Registrar decides after the hearing",
    cta: "Get Hearing Support",
    note: "If the Registrar is satisfied, your mark moves on to publication in the Trade Marks Journal.",
    grad: "from-violet-400 to-purple-600",
    text: "text-purple-600",
    check: "text-purple-500",
    btn: "from-violet-500 to-purple-600 shadow-[0_14px_28px_-10px_rgba(139,92,246,0.7)]",
  },
  {
    key: "opposition",
    icon: FaBalanceScale,
    name: "Opposition",
    title: "File or Defend an Opposition",
    tagline: "Stop look-alike marks, or defend your own application.",
    bestFor: [
      "A similar mark has appeared in the Trade Marks Journal",
      "Someone has opposed your application",
      "You want to stop a copycat before it gets registered",
    ],
    gets: [
      "Review of the conflicting mark and legal grounds",
      "Drafting of the notice or counter-statement and evidence",
      "Support right up to the hearing",
    ],
    time: "File within 4 months of publication",
    fact: "Govt fee ₹2,700 per class (e-filing)",
    cta: "Get Opposition Help",
    note: "An applicant who does not file a counter-statement within two months of the opposition notice risks the application being treated as abandoned.",
    grad: "from-rose-400 to-red-500",
    text: "text-red-600",
    check: "text-red-500",
    btn: "from-rose-500 to-red-500 shadow-[0_14px_28px_-10px_rgba(239,68,68,0.7)]",
  },
  {
    key: "renewal",
    icon: FaSyncAlt,
    name: "Renewal",
    title: "Trademark Renewal",
    tagline: "Keep your brand protected for the next 10 years.",
    bestFor: [
      "Your registration is close to completing 10 years",
      "Your mark has expired and is in the grace period",
      "You want a reminder so you never miss the date",
    ],
    gets: [
      "Renewal filing for every class you hold",
      "Help with the surcharge or restoration if it has lapsed",
      "A reminder before your next due date",
    ],
    time: "Every 10 years",
    fact: "Govt fee ₹9,000 per class (e-filing)",
    cta: "Renew My Trademark",
    note: "After expiry a grace period applies with an additional surcharge, and a mark that is not renewed can be removed from the register.",
    grad: "from-emerald-400 to-teal-600",
    text: "text-emerald-600",
    check: "text-emerald-500",
    btn: "from-emerald-500 to-teal-600 shadow-[0_14px_28px_-10px_rgba(16,185,129,0.7)]",
  },
];

/* Trademark: sahi symbol aur sahi process ke 4 checks */
const checks = [
  "Use ™ from the day you file. It shows you claim the mark while registration is pending",
  "Use ® only after the registration certificate is issued. Using it earlier is not allowed in India",
  "Search before you file, as government fees are non-refundable even if the application fails",
  "File in the right class. India has 45 (goods 1–34, services 35–45) and a wrong class limits protection",
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

        {/* ---------- middle: when it applies ---------- */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            When it applies
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

        {/* ---------- right: how we help ---------- */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            How we help
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
export default function TmSelector() {
  const [active, setActive] = useState(standards[0].key);
  const current = standards.find((s) => s.key === active);

  return (
    <section
      id="tm-stages"
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
            Find your stage
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#173252] sm:text-4xl md:text-5xl">
            Where is your company{" "}
            <span className="bg-gradient-to-r from-[#126dc4] to-cyan-500 bg-clip-text text-transparent">
              right now?
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            Pick your stage to see what happens next, the deadline to watch and how
            we help. Not sure? Our expert will tell you in a quick call.
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
                    layoutId="tm-active-pill"
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

        {/* ================= SYMBOLS & CLASS NOTE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="mt-10 overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-5 shadow-[0_18px_45px_-24px_rgba(79,70,229,0.35)] sm:mt-14 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <motion.span
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md sm:h-14 sm:w-14"
            >
              <FaTrademark className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.span>
            <div>
              <h3 className="font-display text-xl font-extrabold text-[#173252] sm:text-2xl">
                Use ™ and ® the right way
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                Small mistakes with symbols, classes or deadlines can cost you your
                brand. Check these four things before you file.
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
                className="flex items-start gap-3 rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 text-xs font-extrabold text-white">
                  {i + 1}
                </span>
                <span className="text-sm leading-snug text-slate-700">{c}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-slate-500">
          Government fees are set by the Trade Marks Registry and can change;
          check ipindia.gov.in for the latest. Timelines are indicative and
          depend on the Registry.
        </p>
      </div>
    </section>
  );
}