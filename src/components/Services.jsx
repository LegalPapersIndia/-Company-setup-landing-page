import { motion } from "framer-motion";
import {
  FaStore,
  FaTrademark,
  FaUserCheck,
  FaClipboardCheck,
  FaBoxOpen,
  FaGavel,
} from "react-icons/fa";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "../data";

import imgSeller from "../assets/services/gem-seller.png";
import imgBrand from "../assets/services/gem-brand.png";
import imgDeemed from "../assets/services/gem-deemed-oem.png";
import imgAssessment from "../assets/services/gem-vendor-assessment.png";
import imgCatalogue from "../assets/services/gem-catalogue.png";
import imgBids from "../assets/services/gem-bids.png";

/* "Get started" link kahan jaye: top wale form ki id */
const CTA_HREF = "#top-form";

const serviceImages = [
  imgSeller,
  imgBrand,
  imgDeemed,
  imgAssessment,
  imgCatalogue,
  imgBids,
];

const serviceIcons = [
  FaStore,
  FaTrademark,
  FaUserCheck,
  FaClipboardCheck,
  FaBoxOpen,
  FaGavel,
];

/* Har card ka apna colour theme */
const themes = [
  { grad: "from-orange-400 to-amber-500", soft: "from-orange-50 to-amber-50", text: "text-orange-600", ring: "hover:border-orange-300" },
  { grad: "from-sky-400 to-blue-600", soft: "from-sky-50 to-blue-50", text: "text-blue-600", ring: "hover:border-blue-300" },
  { grad: "from-violet-400 to-purple-600", soft: "from-violet-50 to-purple-50", text: "text-purple-600", ring: "hover:border-purple-300" },
  { grad: "from-rose-400 to-red-500", soft: "from-rose-50 to-red-50", text: "text-red-600", ring: "hover:border-red-300" },
  { grad: "from-emerald-400 to-teal-600", soft: "from-emerald-50 to-teal-50", text: "text-emerald-600", ring: "hover:border-emerald-300" },
  { grad: "from-cyan-400 to-indigo-500", soft: "from-cyan-50 to-indigo-50", text: "text-indigo-600", ring: "hover:border-indigo-300" },
];

function ServiceCard({ s, i }) {
  const image = serviceImages[i % serviceImages.length];
  const Icon = serviceIcons[i % serviceIcons.length];
  const t = themes[i % themes.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (i % 3) * 0.12, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_28px_-14px_rgba(10,30,70,0.25)] transition-all duration-300 hover:shadow-[0_28px_55px_-18px_rgba(10,30,70,0.35)] sm:rounded-3xl ${t.ring}`}
    >
      {/* ================= IMAGE ================= */}
      <div
        className={`relative h-32 overflow-hidden bg-gradient-to-br ${t.soft} sm:h-52`}
      >
        {/* dotted texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(rgba(30,91,160,0.10) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* glow circle behind image */}
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${t.grad} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40 sm:h-44 sm:w-44`}
        />

        {/* image: card wahi, image andar se bada (zoom) */}
        <img
          src={image}
          alt={s.title}
          loading="lazy"
          className="relative h-full w-full origin-center scale-125 object-contain p-0 transition-transform duration-700 ease-out group-hover:scale-[1.35] sm:scale-[1.3] sm:group-hover:scale-[1.4]"
        />

        {/* big number */}
        <span className="absolute left-2.5 top-1.5 z-10 font-display text-3xl font-extrabold leading-none text-slate-900/10 sm:left-4 sm:top-3 sm:text-5xl">
          {String(i + 1).padStart(2, "0")}
        </span>

        {/* tag */}
        {s.tag && (
          <span className="absolute right-2 top-2 z-10 rounded-full bg-green-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-green-700 shadow-sm ring-1 ring-green-200 sm:right-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs">
            {s.tag}
          </span>
        )}
      </div>

      {/* ================= ICON BADGE ================= */}
      <motion.div
        whileHover={{ rotate: [0, -12, 12, 0] }}
        transition={{ duration: 0.5 }}
        className={`relative z-10 -mt-5 ml-3 flex h-10 w-10 items-center justify-center rounded-xl border-[3px] border-white bg-gradient-to-br ${t.grad} text-white shadow-lg sm:-mt-7 sm:ml-5 sm:h-14 sm:w-14 sm:rounded-2xl sm:border-4`}
      >
        <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col px-3 pb-4 pt-2.5 sm:px-5 sm:pb-6 sm:pt-3">
        <h3 className="text-sm font-extrabold leading-snug text-[#173252] sm:text-xl">
          {s.title}
        </h3>

        <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
          {s.desc}
        </p>

        {/* get started row */}
        <a
          href={CTA_HREF}
          className={`mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-bold sm:pt-5 sm:text-sm ${t.text}`}
        >
          Get started
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5 sm:h-4 sm:w-4" />
        </a>
      </div>

      {/* bottom accent line */}
      <span
        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${t.grad} transition-all duration-500 group-hover:w-full`}
      />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff] py-12 sm:py-20"
    >
      {/* background decoration */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-300/15 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
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
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 ring-1 ring-orange-200">
            <Sparkles className="h-4 w-4" />
            Our Services
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#173252] sm:text-4xl md:text-5xl">
            Everything on GeM,{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              handled in one place
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            Registration is usually the start, not the end. We stay on as your
            compliance desk for whatever comes after.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 xl:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}