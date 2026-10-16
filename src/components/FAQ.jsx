import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";
import { faqs } from "../data";
import faqImage from "../assets/faq1.png";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f5f9ff] to-white py-12 sm:py-16 lg:py-20">
      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-300/15 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,91,160,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-16">
          {/* =====================================================
              LEFT - FAQ
          ====================================================== */}
          <div className="order-1 w-full">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 ring-1 ring-orange-200">
                <HelpCircle className="h-4 w-4" />
                FAQ
              </span>

              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#173252] sm:text-4xl lg:text-5xl">
                Frequently{" "}
                <span className="bg-gradient-to-r from-[#126dc4] to-cyan-500 bg-clip-text text-transparent">
                  Asked Questions
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
                Quick answers to what people ask us most about GeM
                registration.
              </p>
            </motion.div>

            {/* Accordion */}
            <div className="mt-8 space-y-3">
              {faqs.map((item, i) => {
                const isOpen = open === i;

                return (
                  <motion.div
                    key={item.q}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      isOpen
                        ? "border-[#126dc4]/40 shadow-[0_18px_40px_-18px_rgba(18,109,196,0.5)]"
                        : "border-slate-200 shadow-[0_8px_20px_-14px_rgba(10,30,70,0.25)] hover:border-blue-300"
                    }`}
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className={`flex w-full items-center gap-3 px-4 py-4 text-left transition-colors duration-300 sm:gap-4 sm:px-5 sm:py-5 ${
                        isOpen
                          ? "bg-gradient-to-r from-[#0b4f99] via-[#126dc4] to-[#1e88e5]"
                          : "bg-white hover:bg-blue-50/60"
                      }`}
                    >
                      {/* number */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors duration-300 sm:h-9 sm:w-9 sm:text-sm ${
                          isOpen
                            ? "bg-white/20 text-white"
                            : "bg-blue-50 text-[#126dc4]"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* question */}
                      <span
                        className={`flex-1 font-display text-base font-bold leading-snug transition-colors duration-300 sm:text-lg ${
                          isOpen ? "text-white" : "text-[#173252]"
                        }`}
                      >
                        {item.q}
                      </span>

                      {/* plus icon */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-9 sm:w-9 ${
                          isOpen
                            ? "rotate-45 bg-white text-[#126dc4]"
                            : "bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-md"
                        }`}
                      >
                        <Plus className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
                      </span>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex gap-3 border-t border-blue-100 bg-blue-50/40 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5">
                            {/* spacer: number ke neeche align */}
                            <span className="hidden w-9 shrink-0 sm:block" />
                            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              RIGHT - IMAGE (size pehle jaisa)
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-2 flex w-full items-end justify-center lg:justify-end"
          >
            {/* soft glow behind image */}
            <div className="pointer-events-none absolute bottom-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-300/30 blur-3xl lg:left-auto lg:right-8 lg:translate-x-0" />

            <motion.img
              src={faqImage}
              alt="Frequently asked questions"
              loading="lazy"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-auto w-full max-w-[260px] object-contain drop-shadow-[0_20px_30px_rgba(10,20,40,0.14)] sm:max-w-[300px] md:max-w-[330px] lg:max-w-[350px] xl:max-w-[370px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}