import { motion } from "framer-motion";
import {
  Quote,
  ShieldCheck,
  Users,
  Headphones,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

import directorImg from "../assets/director1.jpeg";

/* CTA kahan jaye: top wale form ki id */
const CTA_HREF = "#top-form";

/* ------------------------------------------------------------------
   DATA: change name, role and message here
   ------------------------------------------------------------------ */
const director = {
  name: "Sarthak Gupta",
  role: "Director, Legal Papers India",
  eyebrow: "From the Director's desk",
  heading: "Compliance should never slow your business down",
  message: [
    "Every business owner dreams of growing without unnecessary roadblocks. That is the thought behind Legal Papers India: to make ISO certification and compliance simple, so you never lose valuable time to complicated paperwork.",
    "Our focus is straightforward: the right guidance, a clear process and delivery on time. You only need to share your documents. We take care of the rest.",
  ],
};

const points = [
  {
    icon: ShieldCheck,
    text: "Expert-led guidance",
    grad: "from-orange-400 to-amber-500",
  },
  {
    icon: Users,
    text: "Dedicated support team",
    grad: "from-sky-400 to-blue-600",
  },
  {
    icon: Headphones,
    text: "Clear, transparent process",
    grad: "from-emerald-400 to-teal-600",
  },
];

export default function DirectorMessage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-white to-[#fff7ed] py-12 sm:py-16 lg:py-20">
      {/* ================= BACKGROUND DECORATION ================= */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-400/15 blur-3xl"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,91,160,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[340px_1fr] lg:gap-14 xl:grid-cols-[380px_1fr]">
          {/* =========================================================
              LEFT: DIRECTOR IMAGE
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[270px] pb-6 sm:max-w-[310px] lg:mx-0 lg:max-w-none"
          >
            {/* Offset gradient frame */}
            <div className="absolute -bottom-2 -right-3 top-3 left-3 rounded-[2rem] bg-gradient-to-br from-orange-400 to-[#126dc4] opacity-90" />

            {/* Dotted pattern */}
            <div
              className="pointer-events-none absolute -left-4 -top-4 z-10 h-16 w-16 opacity-70 sm:-left-5 sm:-top-5 sm:h-20 sm:w-20"
              style={{
                backgroundImage:
                  "radial-gradient(#f97316 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
              }}
            />

            {/* Image card */}
            <div className="relative aspect-[5/5.5] overflow-hidden rounded-[2rem] border-4 border-white bg-gradient-to-br from-blue-100 via-white to-orange-100 shadow-[0_25px_60px_-18px_rgba(10,20,40,0.5)]">
              <img
                src={directorImg}
                alt={director.name}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />

              {/* Bottom fade */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating name badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-0 left-3 right-3 z-20 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-[0_18px_40px_-14px_rgba(10,20,40,0.45)] backdrop-blur"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-white">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-display text-base font-extrabold text-[#173252]">
                  {director.name}
                </p>
                <p className="truncate text-xs font-semibold text-orange-600 sm:text-sm">
                  {director.role}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =========================================================
              RIGHT: MESSAGE
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 ring-1 ring-orange-200">
              <Quote className="h-4 w-4" />
              {director.eyebrow}
            </span>

            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#173252] sm:text-4xl">
              Compliance should never{" "}
              <span className="bg-gradient-to-r from-[#126dc4] to-cyan-500 bg-clip-text text-transparent">
                slow your business down
              </span>
            </h2>

            {/* Quote block */}
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-[0_18px_45px_-20px_rgba(10,30,70,0.35)] sm:p-8">
              {/* left accent bar */}
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-orange-400 via-[#126dc4] to-cyan-400" />

              {/* giant faded quote mark */}
              <Quote className="pointer-events-none absolute right-4 top-4 h-20 w-20 rotate-180 fill-slate-100 text-slate-100 sm:h-24 sm:w-24" />

              <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-lg">
                <Quote className="h-5 w-5 fill-white" />
              </span>

              <div className="relative mt-4 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base sm:leading-7">
                {director.message.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              <div className="relative mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <span className="h-[3px] w-8 rounded-full bg-gradient-to-r from-orange-400 to-amber-500" />
                <div>
                  <p className="text-sm font-extrabold text-[#173252] sm:text-base">
                    {director.name}
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    {director.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Trust points */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {points.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-left shadow-[0_8px_20px_-12px_rgba(10,30,70,0.3)] transition-shadow duration-300 hover:shadow-[0_16px_30px_-12px_rgba(10,30,70,0.4)]"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${p.grad} text-white shadow-md transition-transform duration-500 group-hover:rotate-12`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-bold leading-snug text-[#173252]">
                      {p.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.a
              href={CTA_HREF}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-7 py-4 text-base font-extrabold text-white shadow-[0_14px_28px_-10px_rgba(249,115,22,0.7)] transition-shadow duration-300 hover:shadow-[0_18px_34px_-10px_rgba(249,115,22,0.85)] sm:w-auto"
            >
              Talk to our experts
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}