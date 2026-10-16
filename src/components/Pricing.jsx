import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCheckCircle,
  FaTag,
  FaShieldAlt,
  FaCoins,
  FaStar,
  FaWallet,
} from "react-icons/fa";

import { pricingPlans } from "../data";

function PricingCard({ plan, index }) {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative h-full"
    >
      {/* Most Popular badge — half above, half below the card's top edge */}
      {plan.highlight && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -8 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 250,
            damping: 18,
          }}
          className="absolute inset-x-0 top-0 z-30 flex -translate-y-1/2 justify-center"
        >
          <motion.div
  animate={{
    boxShadow: [
      "0 0 0 rgba(234,179,8,0)",
      "0 0 26px rgba(234,179,8,0.5)",
      "0 0 0 rgba(234,179,8,0)",
    ],
  }}
  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
  className="flex items-center gap-1.5 rounded-full border border-[#e0a52e] bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] "
>
  <FaStar className="text-[10px]" />
  Most Popular
</motion.div>
        </motion.div>
      )}

      {/* ================= CARD ================= */}
      <div
        className={`
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-3xl
          border
          bg-white
          p-3
          pb-6

          transition-all
          duration-500

          sm:p-4
          sm:pb-7

          ${
            btnHover
              ? "border-orange-400 shadow-[0_16px_28px_-6px_rgba(249,115,22,0.3),0_36px_70px_-20px_rgba(249,115,22,0.5)]"
              : plan.highlight
              ? "border-gold-400 shadow-[0_10px_20px_-6px_rgba(234,179,8,0.25),0_28px_60px_-20px_rgba(234,179,8,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(234,179,8,0.3),0_36px_70px_-20px_rgba(234,179,8,0.55)]"
              : "border-slate-200 shadow-[0_10px_20px_-6px_rgba(10,20,40,0.14),0_28px_55px_-22px_rgba(10,20,40,0.32)] hover:border-blue-300 hover:shadow-[0_16px_28px_-6px_rgba(37,99,235,0.2),0_36px_65px_-22px_rgba(37,99,235,0.4)]"
          }
        `}
      >
        {/* ================= HEADER BOX — blue animated, fixed (smaller) height ================= */}
        <div
          className={`
            relative
            mt-4
            flex
            min-h-[100px]
            flex-col
            justify-center
            overflow-hidden
            rounded-2xl
            bg-blue-600
            px-5
            py-4

            shadow-[0_10px_20px_-8px_rgba(37,99,235,0.5)]
            ${plan.highlight ? "ring-2 ring-gold-400/60" : ""}
          `}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              animation: "shimmerSlide 3s ease-in-out infinite",
            }}
          />

          <div className="relative z-10 flex items-start justify-between gap-3">
            <p className="font-display text-2xl font-bold text-white">
              {plan.name}
            </p>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
              <FaTag className="text-base text-white" />
            </div>
          </div>

          <p className="relative z-10 mt-2 text-sm leading-6 text-white/85 sm:text-base">
            {plan.desc}
          </p>
        </div>

        {/* Card shimmer sweep (body) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(96,165,250,0.08), transparent)",
            animation: "shimmerSlide 3.6s ease-in-out infinite",
          }}
        />

        <div className="relative z-10 px-2 sm:px-3">
          {/* Price */}
          <div className="mt-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-sm text-slate-400 line-through">
                ₹{plan.originalPrice}
              </span>

              <span className="flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700">
                <FaTag className="text-[9px]" />
                {plan.discount}
              </span>
            </div>

            <p className="mt-1 font-mono text-3xl font-bold text-black sm:text-4xl">
              ₹{plan.price}
            </p>

            <p className="mt-1 text-xs font-medium text-slate-500">
              + Govt. Fee (to be paid later)
            </p>

            {plan.emi && (
              <div className="mt-2 flex w-fit items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                <FaWallet className="text-sm" />
                EMI options available
              </div>
            )}
          </div>

          {/* Benefit box 1 — Lowest cost — light blue */}
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/70 p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <FaShieldAlt className="text-base" />
            </div>

            <p className="text-xs leading-5 text-slate-700">
              <strong className="text-sm text-black">
                Lowest Cost first time ever
              </strong>
              <br />
              We offer competitive professional fees without compromising on
              quality
            </p>
          </div>

          {/* Benefit box 2 — Instant off — orange */}
          <div className="mt-3 flex items-start gap-3 rounded-xl border border-orange-100 bg-orange-50/80 p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <FaCoins className="text-base" />
            </div>

            <p className="text-xs leading-5 text-slate-700">
              <strong className="text-sm text-black">
                Instant ₹{plan.instantOff} less
              </strong>
              <br />
              Available for 24 hours to do fast checkout process and unlock
              your offer.
            </p>
          </div>

          {/* Get started */}
          <a href="#top-form" className="mt-5 block w-full">
            <motion.div
              onHoverStart={() => setBtnHover(true)}
              onHoverEnd={() => setBtnHover(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_-10px_rgba(249,115,22,0.6)] transition-all duration-300 ${
                btnHover ? "bg-orange-500" : "bg-blue-600"
              }`}
            >
              Get Started
            </motion.div>
          </a>

          {/* Features */}
          <div className="mt-6 flex-1 border-t border-slate-200 pt-6">
            <p className="text-sm font-bold text-black">What you'll get</p>

            <ul className="mt-4 flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm leading-5 text-slate-700 sm:text-base"
                >
                  <FaCheckCircle
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      btnHover
                        ? "text-orange-500"
                        : plan.highlight
                        ? "text-gold-500"
                        : "text-blue-600"
                    }`}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className={`absolute bottom-0 left-0 z-10 h-1 w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${
            btnHover
              ? "from-transparent via-orange-500 to-transparent"
              : plan.highlight
              ? "from-transparent via-gold-500 to-transparent"
              : "from-transparent via-blue-600 to-transparent"
          }`}
        />
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmerSlide {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-gold-500/5 blur-3xl" />

     <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
            Transparent pricing
          </p>

          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Pick a plan that fits
            <span className="block text-blue-600">your business</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Simple plans with professional support, transparent pricing and
            everything you need to get your ISO certificate registered and stay compliant.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3 md:items-stretch">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}