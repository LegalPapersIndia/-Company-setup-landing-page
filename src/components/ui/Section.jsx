import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-14 lg:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-[1400px] px-5 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ badge, title, highlight, subtitle }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto mb-10 max-w-2xl text-center lg:mb-14"
    >
      {badge && (
        <motion.span
          variants={fadeUp}
          className="inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="mt-4 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl"
      >
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-3 text-base text-slate-600">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}