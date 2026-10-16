
import { motion } from "framer-motion";
import { FileCheck2 } from "lucide-react";
import { FaUserGraduate, FaBolt, FaTags, FaBell } from "react-icons/fa";
import { whyUs, documentsRequired } from "../data";

const whyUsIcons = [FaUserGraduate, FaBolt, FaTags, FaBell];

export default function WhyUsAndDocuments() {
  return (
    <section className="relative overflow-hidden bg-white">
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

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 py-20 lg:grid-cols-2">
        {/* ================= Why Legal Papers India ================= */}
        <div>
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
            Why Legal Papers India
          </p>

          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-black sm:text-3xl">
            The details that stall an application
          </h2>

          <div
            className="mt-8 grid gap-3 sm:gap-4"
            style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
          >
            {whyUs.map((item, i) => {
              const Icon = whyUsIcons[i % whyUsIcons.length];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-transparent
                    bg-blue-600
                    p-4

                    shadow-[0_8px_16px_-6px_rgba(10,20,40,0.2),0_18px_35px_-16px_rgba(10,20,40,0.4)]

                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:shadow-[0_12px_20px_-6px_rgba(37,99,235,0.3),0_26px_48px_-16px_rgba(37,99,235,0.5)]

                    sm:p-5
                  "
                >
                  {/* Shimmer sweep — white, on blue bg */}
                  <div
                    className="
                      card-shimmer
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-transparent
                      via-white/15
                      to-transparent
                    "
                  />

                  <div className="relative z-10">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/15
                        ring-1
                        ring-white/25

                        transition-all
                        duration-500

                        group-hover:scale-110
                        group-hover:bg-orange-500
                        group-hover:ring-orange-500
                      "
                    >
                      <Icon className="h-4 w-4 text-white transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    <p className="mt-3 font-display text-base font-bold text-white sm:text-lg">
                      {item.title}
                    </p>

                    <p className="mt-1.5 text-sm leading-relaxed text-white/75 sm:text-base">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 z-10 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-orange-400 to-orange-500 transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= Documents ================= */}
        <div>
          <div className="flex items-center gap-2">
            <FileCheck2 className="h-6 w-6 text-seal" strokeWidth={1.5} />

            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
              Keep ready
            </p>
          </div>

          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
            Documents you'll need
          </h2>

          <ul
            className="
              relative
              mt-8
              overflow-hidden
              rounded-2xl
              border
              border-slate-200/70
              bg-white

              shadow-[0_10px_20px_-8px_rgba(10,20,40,0.14),0_24px_45px_-18px_rgba(10,20,40,0.3)]
            "
          >
            {documentsRequired.map((doc, i) => (
              <motion.li
                key={doc}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`
                  group
                  flex
                  items-center
                  gap-3
                  px-5
                  py-4
                  text-base
                  text-black
                  transition-colors
                  duration-300

                  hover:bg-blue-50/60

                  sm:text-lg

                  ${i !== documentsRequired.length - 1 ? "border-b border-slate-100" : ""}
                `}
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600/10
                    font-mono
                    text-xs
                    font-bold
                    text-blue-700

                    transition-all
                    duration-300

                    group-hover:bg-blue-600
                    group-hover:text-white
                  "
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {doc}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}