import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaSearch,
  FaPaperPlane,
  FaCertificate,
} from "react-icons/fa";
import { Workflow, ArrowRight, ChevronDown } from "lucide-react";
import { processSteps } from "../data";

const stepIcons = [FaClipboardList, FaSearch, FaPaperPlane, FaCertificate];

/* Har step ka apna colour theme */
const themes = [
  { grad: "from-orange-400 to-amber-500", text: "text-orange-600", soft: "bg-orange-50", hover: "hover:border-orange-300" },
  { grad: "from-sky-400 to-blue-600", text: "text-blue-600", soft: "bg-blue-50", hover: "hover:border-blue-300" },
  { grad: "from-violet-400 to-purple-600", text: "text-purple-600", soft: "bg-purple-50", hover: "hover:border-purple-300" },
  { grad: "from-emerald-400 to-teal-600", text: "text-emerald-600", soft: "bg-emerald-50", hover: "hover:border-emerald-300" },
];

function StepCard({ step, i, isLast }) {
  const Icon = stepIcons[i % stepIcons.length];
  const t = themes[i % themes.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="relative h-full"
    >
      {/* ================= CARD ================= */}
      <div
        className={`group relative flex h-full flex-col items-center overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 pb-6 pt-7 text-center shadow-[0_10px_28px_-14px_rgba(10,30,70,0.25)] transition-all duration-300 hover:shadow-[0_28px_55px_-18px_rgba(10,30,70,0.35)] sm:px-6 sm:pb-7 ${t.hover}`}
      >
        {/* top coloured line */}
        <div
          className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${t.grad}`}
        />

        {/* glow blob */}
        <div
          className={`pointer-events-none absolute -bottom-14 -left-14 h-36 w-36 rounded-full bg-gradient-to-br ${t.grad} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
        />

        {/* icon (card ke andar, top center) */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * 0.12 + 0.2,
            type: "spring",
            stiffness: 200,
          }}
          className="relative"
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.08 }}
            transition={{ duration: 0.5 }}
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${t.grad} text-white shadow-lg sm:h-16 sm:w-16`}
          >
            <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
          </motion.div>
        </motion.div>

        {/* step label */}
        <span
          className={`relative mt-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${t.soft} ${t.text}`}
        >
          Step {i + 1}
        </span>

        {/* title */}
        <h3 className="relative mt-3 font-display text-xl font-extrabold leading-snug text-[#173252] sm:text-[22px]">
          {step.title}
        </h3>

        {/* small divider */}
        <div
          className={`relative mt-3 h-1 w-10 rounded-full bg-gradient-to-r ${t.grad} transition-all duration-500 group-hover:w-20`}
        />

        {/* desc */}
        <p className="relative mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          {step.desc}
        </p>

        {/* bottom accent line */}
        <span
          className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${t.grad} transition-all duration-500 group-hover:w-full`}
        />
      </div>

      {/* ================= CONNECTORS ================= */}
      {!isLast && (
        <>
          {/* Mobile (1 column): neeche arrow */}
          <span className="absolute -bottom-10 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-white text-slate-400 shadow-md ring-1 ring-slate-200 sm:hidden">
            <ChevronDown className="h-4 w-4" />
          </span>

          {/* Desktop (4 columns): side arrow */}
          <span className="absolute -right-[18px] top-[3.4rem] z-10 hidden h-8 w-8 items-center justify-center rounded-full bg-white text-slate-400 shadow-md ring-1 ring-slate-200 lg:flex">
            <ArrowRight className="h-4 w-4" />
          </span>
        </>
      )}
    </motion.div>
  );
}

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f5f9ff] to-white py-12 sm:py-20">
      {/* background decoration */}
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-orange-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,91,160,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 ring-1 ring-orange-200">
            <Workflow className="h-4 w-4" />
            How it works
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#173252] sm:text-4xl md:text-5xl">
            Four steps to{" "}
            <span className="bg-gradient-to-r from-[#126dc4] to-cyan-500 bg-clip-text text-transparent">
              your ISO certificate
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            From documents to certificate, we handle every step for you.
          </p>
        </motion.div>

        {/* ================= STEPS ================= */}
        <div className="mt-10 grid grid-cols-1 gap-12 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, i) => (
            <StepCard
              key={step.title}
              step={step}
              i={i}
              isLast={i === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}