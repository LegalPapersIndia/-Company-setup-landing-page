

import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBolt,
  FaTags,
  FaBell,
} from "react-icons/fa";
import { whyUs } from "../data";

const whyUsIcons = [FaUserGraduate, FaBolt, FaTags, FaBell];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden border-t border-navy-900/5 bg-[#f4f8ff] py-20">
      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmerSlide {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        .card-shimmer {
          animation: shimmerSlide 3.4s ease-in-out infinite;
        }
        .group:hover .card-shimmer {
          animation-duration: 1.5s;
        }
      `}</style>

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* ================= HEADING — left aligned like other sections ================= */}
        <div>
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
            Why Legal Papers India
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
            The details that stall an application
          </h2>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => {
            const Icon = whyUsIcons[i % whyUsIcons.length];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200/70
                  bg-white
                  p-6

                  shadow-[0_10px_20px_-6px_rgba(10,20,40,0.14),0_24px_48px_-18px_rgba(10,20,40,0.32)]

                  transition-all
                  duration-500

                  hover:border-blue-300
                  hover:shadow-[0_14px_24px_-6px_rgba(37,99,235,0.2),0_34px_60px_-18px_rgba(37,99,235,0.4)]
                "
              >
                {/* Shimmer sweep — blue, like Services section */}
                <div
                  className="
                    card-shimmer
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-blue-400/15
                    to-transparent
                  "
                />

                {/* Decorative corner glow */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-50 opacity-70 transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-100" />

                {/* Icon */}
                <div className="relative z-10">
                  <div className="absolute inset-0 h-16 w-16 rounded-2xl bg-blue-500/0 blur-lg transition-all duration-500 group-hover:bg-blue-500/25" />

                  <div
                    className="
                      relative
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-blue-600
                      to-blue-700
                      shadow-[0_10px_20px_-6px_rgba(37,99,235,0.5)]

                      transition-all
                      duration-500

                      group-hover:scale-110
                      group-hover:from-orange-400
                      group-hover:to-orange-500
                    "
                  >
                    <Icon className="h-7 w-7 text-white transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>

                {/* Title */}
                <p className="relative z-10 mt-5 font-display text-lg font-bold text-[#173252] transition-colors duration-300 group-hover:text-blue-700">
                  {item.title}
                </p>

                {/* Description */}
                <p className="relative z-10 mt-1.5 text-base leading-relaxed text-slate-600">
                  {item.desc}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 z-10 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-orange-500 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}