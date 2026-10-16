

// import { motion } from "framer-motion";
// import {
//   FaBriefcase,
//   FaStar,
//   FaMapMarkedAlt,
//   FaHeadset,
// } from "react-icons/fa";
// import { stats } from "../data";

// const statIcons = [FaBriefcase, FaStar, FaMapMarkedAlt, FaHeadset];

// export default function TrustStrip() {
//   return (
//     <section className="relative overflow-hidden border-y border-navy-900/10 bg-blue-600">
//       {/* Shimmer keyframes */}
//       <style>{`
//         @keyframes shimmerSlide {
//           0% { transform: translateX(-120%); }
//           100% { transform: translateX(120%); }
//         }
//         .section-shimmer {
//           animation: shimmerSlide 4s ease-in-out infinite;
//         }
//         .card-shimmer {
//           animation: shimmerSlide 3.2s ease-in-out infinite;
//         }
//         .group:hover .card-shimmer {
//           animation-duration: 1.6s;
//         }
//       `}</style>

//       {/* Section-wide shimmer sweep */}
//       <div
//         className="
//           section-shimmer
//           pointer-events-none
//           absolute
//           inset-0
//           bg-gradient-to-r
//           from-transparent
//           via-white/10
//           to-transparent
//         "
//       />

//       {/* Dotted texture */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.5]"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
//           backgroundSize: "20px 20px",
//         }}
//       />

//       {/* Decorative glows */}
//       <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

//       <div className="relative mx-auto max-w-[1400px] px-5 py-14 sm:py-16 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 14 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-8"
//         >
//           <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-400">
//             Why businesses trust us
//           </p>

//           <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
//             Numbers that speak for themselves
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
//           {stats.map((s, i) => {
//             const Icon = statIcons[i % statIcons.length];

//             return (
//               <motion.div
//                 key={s.label}
//                 initial={{ opacity: 0, y: 24, scale: 0.94 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 viewport={{ once: true, margin: "-40px" }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 whileHover={{ y: -10, scale: 1.03 }}
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-transparent
//                   bg-white
//                   px-4
//                   py-8
//                   text-center

//                   shadow-[0_8px_16px_-4px_rgba(10,20,40,0.18),0_20px_45px_-15px_rgba(10,20,40,0.5)]

//                   transition-shadow
//                   duration-500

//                   hover:shadow-[0_12px_20px_-4px_rgba(10,20,40,0.22),0_30px_60px_-15px_rgba(10,20,40,0.4)]
//                 "
//               >
//                 {/* Card shimmer sweep */}
//                 <div
//                   className="
//                     card-shimmer
//                     pointer-events-none
//                     absolute
//                     inset-0
//                     bg-gradient-to-r
//                     from-transparent
//                     via-gold-400/10
//                     to-transparent
//                   "
//                 />

//                 {/* Radial glow that grows on hover, stays behind content */}
//                 <div className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/15 blur-2xl transition-all duration-500 group-hover:h-44 group-hover:w-44" />

//                 <motion.div
//                   className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/10 ring-1 ring-gold-500/15"
//                   whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.15 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <Icon className="h-8 w-8 text-gold-600" />
//                 </motion.div>

//                 <p className="relative z-10 mt-4 font-mono text-2xl font-bold text-black sm:text-3xl">
//                   {s.value}
//                 </p>

//                 <p className="relative z-10 mt-2 font-display text-base font-medium text-black sm:text-lg">
//                   {s.label}
//                 </p>

//                 {/* Bottom accent line grows on hover */}
//                 <div className="absolute bottom-0 left-0 z-10 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-gold-500/0 via-gold-500 to-gold-500/0 transition-transform duration-500 group-hover:scale-x-100" />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }




import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import {
  FaBriefcase,
  FaStar,
  FaMapMarkedAlt,
  FaHeadset,
} from "react-icons/fa";
import { stats } from "../data";

const statIcons = [FaBriefcase, FaStar, FaMapMarkedAlt, FaHeadset];

/* Har card ka apna halka accent (icon ke liye) */
const accents = [
  "from-orange-400 to-amber-500",
  "from-yellow-400 to-orange-400",
  "from-sky-400 to-blue-500",
  "from-emerald-400 to-teal-500",
];

/* ------------------------------------------------------------------
   CountUp: "25K+", "4.9/5", "1,200+" jaise strings mein number ko
   animate karta hai, baaki text (K, +, /5) waise hi rehta hai.
   Agar value mein number nahi hai toh as-it-is dikhata hai.
   ------------------------------------------------------------------ */
function CountUp({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const str = String(value);
  const match = str.match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);

  const prefix = match ? match[1] : "";
  const rawNum = match ? match[2] : "";
  const suffix = match ? match[3] : "";
  const target = match ? parseFloat(rawNum.replace(/,/g, "")) : 0;
  const decimals = rawNum.includes(".") ? rawNum.split(".")[1].length : 0;
  const useComma = rawNum.includes(",");

  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView || !match) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target]);

  if (!match) return <span ref={ref}>{str}</span>;

  const shown = useComma
    ? val.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : val.toFixed(decimals);

  return (
    <span ref={ref}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------
   Single stat card
   ------------------------------------------------------------------ */
function StatCard({ s, i }) {
  const Icon = statIcons[i % statIcons.length];
  const accent = accents[i % accents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl bg-white p-5 text-center shadow-[0_12px_30px_-12px_rgba(5,20,60,0.45)] transition-shadow duration-300 hover:shadow-[0_26px_50px_-14px_rgba(5,20,60,0.55)] sm:p-7"
    >
      {/* top coloured line */}
      <div
        className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent}`}
      />

      {/* big faded icon in background */}
      <Icon className="pointer-events-none absolute -bottom-5 -right-5 h-28 w-28 text-slate-100 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-32 sm:w-32" />

      {/* icon badge */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className={`relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg sm:h-16 sm:w-16`}
      >
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.div>

      {/* value */}
      <p className="relative mt-4 font-display text-3xl font-extrabold leading-none text-[#173252] sm:mt-5 sm:text-4xl lg:text-5xl">
        <CountUp value={s.value} />
      </p>

      {/* small divider */}
      <div
        className={`relative mx-auto mt-3 h-1 w-10 rounded-full bg-gradient-to-r ${accent} transition-all duration-300 group-hover:w-16`}
      />

      {/* label */}
      <p className="relative mt-3 text-sm font-semibold leading-snug text-slate-600 sm:text-base">
        {s.label}
      </p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Section
   ------------------------------------------------------------------ */
export default function TrustStrip() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b4f99] via-[#126dc4] to-[#1e88e5]">
      {/* dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-orange-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl" />

      {/* slow shimmer sweep */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-120%" }}
        animate={{ x: "420%" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-14 sm:py-16 lg:px-8 lg:py-20">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber-300 ring-1 ring-white/25 backdrop-blur sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-300" />
            Why businesses trust us
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Numbers that{" "}
            <span className="relative inline-block text-amber-300">
              speak for themselves
              <svg
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-2.5 w-full text-amber-300/80"
              >
                <path
                  d="M2 8C60 2 140 2 298 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
        </motion.div>

        {/* cards: mobile 2 col, desktop 4 col */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {stats.map((s, i) => (
            <StatCard key={s.label} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}