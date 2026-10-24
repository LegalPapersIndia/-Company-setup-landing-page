import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { Star, Users, BadgeCheck, ShieldCheck } from "lucide-react";

import googleLogo from "../assets/G.png";
import trustpilotLogo from "../assets/T.png";
import mouthshutLogo from "../assets/M.png";

/* ------------------------------------------------------------------
   DATA: yahan se numbers change karo
   ringFill (optional): ring kitni bhari dikhe (0 se 1).
   Na likho toh ring asli rating (rating / 5) jitni bharegi.
   ------------------------------------------------------------------ */
const platforms = [
  {
    name: "Google Reviews",
    logo: googleLogo,
    logoClass: "h-9",
    accent: "#4285F4",
    rating: 4.9,
    caption: "Google Review 4.9 out of 5",
    badge: "2,401 reviews",
  },
  {
    name: "Trustpilot Reviews",
    logo: trustpilotLogo,
    logoClass: "h-9",
    accent: "#00b67a",
    rating: 4.7,
    caption: "Trustpilot Rating 4.7 out of 5",
    badge: "176 reviews",
  },
  {
    name: "MouthShut Reviews",
    logo: mouthshutLogo,
    logoClass: "h-11", // logo mai padding zyada hai, isliye thoda bada
    accent: "#7c3aed",
    rating: 4,
    ringFill: 0.92, // sirf MouthShut ki ring zyada bhari dikhane ke liye
    caption: "MouthShut Score 75%. Rated 4 out of 5 by MouthShut users",
    badge: "476 votes",
  },
];

const summary = [
  { value: "3,000+", label: "Verified reviews" },
  { value: "4.8", label: "Average rating" },
  { value: "100%", label: "Online process" },
];

/* ------------------------------------------------------------------
   Helpers
   ------------------------------------------------------------------ */
function CountUp({ to, decimals = 1 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{val.toFixed(decimals)}</span>;
}

/* Circular progress ring with the rating inside */
function RatingRing({ rating, accent, fill }) {
  const size = 148;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const C = 2 * Math.PI * r;
  const pct = fill ?? rating / 5;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#e8eef7"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={accent}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={C}
          initial={{ strokeDashoffset: C }}
          whileInView={{ strokeDashoffset: C * (1 - pct) }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-display text-5xl font-extrabold leading-none"
          style={{ color: accent }}
        >
          <CountUp to={rating} decimals={rating % 1 === 0 ? 0 : 1} />
        </span>
        <span className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
          out of 5
        </span>
      </div>
    </div>
  );
}

function Stars({ rating, accent }) {
  const pct = (rating / 5) * 100;

  const row = (className) => (
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={`h-6 w-6 ${className}`} />
      ))}
    </div>
  );

  return (
    <div
      className="relative inline-block"
      aria-label={`${rating} out of 5 stars`}
    >
      {row("fill-slate-200 text-slate-200")}

      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <div className="w-max" style={{ color: accent }}>
          {row("fill-current text-current")}
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Single review card
   ------------------------------------------------------------------ */
function ReviewCard({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_10px_30px_-12px_rgba(15,40,80,0.18)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_55px_-14px_rgba(15,40,80,0.32)]"
    >
      {/* coloured header strip */}
      <div
        className="relative flex items-center justify-between gap-3 px-6 py-4"
        style={{
          background: `linear-gradient(135deg, ${p.accent}18 0%, ${p.accent}05 100%)`,
          borderBottom: `1px solid ${p.accent}22`,
        }}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-14 min-w-[3.5rem] items-center justify-center rounded-2xl bg-white px-2.5 shadow-sm ring-1 ring-slate-200">
            <img
              src={p.logo}
              alt={p.name}
              title={p.name}
              loading="lazy"
              className={`${p.logoClass} w-auto max-w-[96px] object-contain`}
            />
          </span>
          <p className="font-display text-base font-bold leading-tight text-[#173252] sm:text-lg">
            {p.name}
          </p>
        </div>

        <span
          className="hidden shrink-0 items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold shadow-sm ring-1 ring-slate-200 sm:inline-flex"
          style={{ color: p.accent }}
        >
          <BadgeCheck className="h-3.5 w-3.5" />
          Verified
        </span>
      </div>

      {/* soft glow blob */}
      <div
        className="pointer-events-none absolute -bottom-20 -right-16 h-52 w-52 rounded-full opacity-[0.08] blur-3xl transition-opacity duration-500 group-hover:opacity-20"
        style={{ backgroundColor: p.accent }}
      />

      {/* body */}
      <div className="relative flex flex-1 flex-col items-center px-6 pb-6 pt-7 text-center">
        <RatingRing rating={p.rating} accent={p.accent} fill={p.ringFill} />

        <div className="mt-5">
          <Stars rating={p.rating} accent={p.accent} />
        </div>

        <p className="mt-4 max-w-[17rem] text-sm leading-relaxed text-slate-600">
          {p.caption}
        </p>

        {/* badge (hamesha neeche) */}
        <div className="mt-auto pt-6">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
            style={{ backgroundColor: `${p.accent}14`, color: p.accent }}
          >
            <Users className="h-4 w-4" />
            {p.badge}
          </div>
        </div>
      </div>

      {/* bottom accent line */}
      <div className="h-1.5 w-full" style={{ backgroundColor: p.accent }} />
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Section
   ------------------------------------------------------------------ */
export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f3f8ff] to-white"
    >
      {/* background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-orange-300/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(30,91,160,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:py-20 lg:px-8">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 ring-1 ring-orange-200">
            <ShieldCheck className="h-4 w-4" />
            Client Reviews
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#173252] sm:text-4xl lg:text-5xl">
            Trusted by thousands of{" "}
            <span className="bg-gradient-to-r from-[#126dc4] to-cyan-500 bg-clip-text text-transparent">
              happy clients
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Real ratings from our clients on independent review platforms.
          </p>
        </motion.div>

        {/* summary strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white/80 py-4 shadow-[0_10px_30px_-15px_rgba(15,40,80,0.25)] backdrop-blur sm:py-5"
        >
          {summary.map((s) => (
            <div key={s.label} className="px-2 text-center sm:px-4">
              <p className="font-display text-xl font-extrabold text-[#126dc4] sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase leading-tight tracking-wide text-slate-500 sm:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* cards */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 sm:mt-12 md:grid-cols-3">
          {platforms.map((p, i) => (
            <ReviewCard key={p.name} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}