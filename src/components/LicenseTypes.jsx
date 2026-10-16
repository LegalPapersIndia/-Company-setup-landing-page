import { motion } from "framer-motion";
import {
  FaStore,
  FaIndustry,
  FaGlobeAsia,
  FaRupeeSign,
  FaRegClock,
  FaFileAlt,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { ArrowRight, Sparkles } from "lucide-react";

/* ------------------------------------------------------------------
   Turnover limits: FSSAI ke revised rules (1 April 2026 se).
   Govt fee category ke hisaab se badalti hai, timeline indicative hai.
   Value badalni ho toh sirf neeche ka array edit karo.
   ------------------------------------------------------------------ */
const CTA_HREF = "#top-form";

const types = [
  {
    key: "registration",
    icon: FaStore,
    name: "Basic Registration",
    limit: "Up to ₹1.5 crore",
    fee: "₹100 / year",
    time: "About 7 days",
    form: "Form A",
    who: [
      "Home bakers & tiffin services",
      "Small eateries & tea stalls",
      "Petty retailers & street vendors",
    ],
    cta: "Get Basic Registration",
    bar: "from-emerald-400 to-teal-500",
    limitText: "text-emerald-600",
    check: "text-emerald-500",
    btn: "bg-white text-emerald-700 ring-1 ring-emerald-300 hover:bg-emerald-600 hover:text-white",
  },
  {
    key: "state",
    icon: FaIndustry,
    name: "State License",
    limit: "₹1.5 crore – ₹50 crore",
    fee: "₹2,000 – ₹5,000 / year",
    time: "About 30 days",
    form: "Form B",
    featured: true,
    who: [
      "Restaurants, hotels & caterers",
      "Manufacturers & packers in one state",
      "Distributors, traders & storage",
    ],
    cta: "Get State License",
    bar: "from-orange-400 to-amber-500",
    limitText: "text-orange-500",
    check: "text-orange-500",
    btn: "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_14px_28px_-10px_rgba(249,115,22,0.7)] hover:brightness-105",
  },
  {
    key: "central",
    icon: FaGlobeAsia,
    name: "Central License",
    limit: "Above ₹50 crore",
    fee: "₹7,500 / year",
    time: "30 – 60 days",
    form: "Form B",
    who: [
      "Large manufacturers",
      "Importers & exporters",
      "Multi-state food businesses",
    ],
    cta: "Get Central License",
    bar: "from-[#0b4f99] to-[#1e88e5]",
    limitText: "text-[#126dc4]",
    check: "text-[#126dc4]",
    btn: "bg-white text-[#126dc4] ring-1 ring-blue-300 hover:bg-[#126dc4] hover:text-white",
  },
];

/* ------------------------------------------------------------------
   Single card
   ------------------------------------------------------------------ */
function TypeCard({ t, index }) {
  const Icon = t.icon;
  const rows = [
    { icon: FaRupeeSign, label: "Govt. fee", value: t.fee },
    { icon: FaRegClock, label: "Timeline", value: t.time },
    { icon: FaFileAlt, label: "Application", value: t.form },
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.25, delay: 0 } }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-white shadow-[0_18px_45px_-22px_rgba(10,30,70,0.4)] transition-shadow duration-300 hover:shadow-[0_30px_65px_-24px_rgba(10,30,70,0.5)] ${
        t.featured ? "border-orange-300 ring-2 ring-orange-200" : "border-slate-200"
      }`}
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${t.bar}`} />

      {t.featured && (
        <span className="absolute right-4 top-5 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
          <Sparkles className="h-3 w-3" />
          Most popular
        </span>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${t.bar} text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
        >
          <Icon className="h-6 w-6" />
        </span>

        <h3 className="mt-4 font-display text-xl font-extrabold text-[#173252] sm:text-2xl">
          {t.name}
        </h3>

        <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Annual turnover
        </p>
        <p className={`font-display text-2xl font-extrabold sm:text-3xl ${t.limitText}`}>
          {t.limit}
        </p>

        <ul className="mt-5 space-y-2.5 text-sm">
          {rows.map((r) => {
            const RowIcon = r.icon;
            return (
              <li
                key={r.label}
                className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3.5 py-2.5"
              >
                <span className="flex items-center gap-2 text-slate-600">
                  <RowIcon className="h-3.5 w-3.5 text-slate-400" />
                  {r.label}
                </span>
                <span className="text-right font-bold text-[#173252]">{r.value}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-5 border-t border-dashed border-slate-200 pt-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Ideal for
          </p>
          <ul className="mt-3 space-y-2">
            {t.who.map((w) => (
              <li key={w} className="flex items-start gap-2 text-sm text-slate-700">
                <FaCheckCircle className={`mt-0.5 h-4 w-4 shrink-0 ${t.check}`} />
                {w}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-6">
          <a
            href={CTA_HREF}
            className={`group/btn inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-base font-extrabold transition-all duration-300 ${t.btn}`}
          >
            {t.cta}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------
   Section
   ------------------------------------------------------------------ */
export default function LicenseTypes() {
  return (
    <section
      id="license-types"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f6faff] to-white py-12 sm:py-20"
    >
      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
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
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-200">
            <Sparkles className="h-4 w-4" />
            Choose the right one
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#173252] sm:text-4xl md:text-5xl">
            Which FSSAI do you{" "}
            <span className="bg-gradient-to-r from-[#126dc4] to-cyan-500 bg-clip-text text-transparent">
              need?
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            Your annual turnover and business type decide it. Not sure? Share
            your details and our expert will tell you in a quick call.
          </p>
        </motion.div>

        {/* ================= 3 CARDS ================= */}
        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-3 lg:gap-6">
          {types.map((t, i) => (
            <TypeCard key={t.key} t={t} index={i} />
          ))}
        </div>

        {/* ================= NOTES ================= */}
        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 md:gap-6">
          {/* Central regardless of turnover */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-sky-50 p-5 sm:p-6"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b4f99] to-[#1e88e5] text-white shadow-md">
              <FaGlobeAsia className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-extrabold text-[#173252] sm:text-xl">
                Central License, whatever your turnover
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                Importers, exporters, multi-state operators and e-commerce food
                operators need a Central License even below ₹50 crore.
              </p>
            </div>
          </motion.div>

          {/* Penalty */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-4 rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-5 sm:p-6"
          >
            <motion.span
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-md"
            >
              <FaExclamationTriangle className="h-5 w-5" />
            </motion.span>
            <div className="min-w-0">
              <p className="font-display text-lg font-extrabold text-[#173252] sm:text-xl">
                Running a food business without FSSAI?
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                It is an offence under the Food Safety and Standards Act, with
                penalties of up to ₹5 lakh.
              </p>
              <a
                href={CTA_HREF}
                className="group/p mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-red-600 hover:text-red-700"
              >
                Get compliant now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/p:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-slate-500">
          Turnover limits as per FSSAI&apos;s revised thresholds effective 1
          April 2026. Government fee varies by business category and the exact
          amount is shown on the FoSCoS portal. Timelines are indicative.
        </p>
      </div>
    </section>
  );
}