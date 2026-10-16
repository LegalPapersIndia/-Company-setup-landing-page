

import { motion } from "framer-motion";
import screenshotOne from "../assets/app.jpeg";
import screenshotTwo from "../assets/app1.jpeg";

const PLAYSTORE_BADGE =
  "https://www.legalpapersindia.com/assets/images/category/app-advertisement-section-ppn.webp";

const PLAYSTORE_URL =
  "https://play.google.com/store/apps/details?id=com.legalpapers.india&pcampaignid=web_share";

export default function AppPromo() {
  return (
    <section className="relative w-full overflow-hidden bg-navy-600">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-5 py-16 sm:gap-14 lg:flex-row lg:justify-between lg:gap-8 lg:py-20">
        {/* LEFT CONTENT */}
        <div className="w-full max-w-md text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl leading-snug text-white sm:text-3xl"
          >
            NOW YOUR COMPLIANCE PARTNER ONE CLICK AWAY WITH LEGAL PAPERS INDIA
            APP !
          </motion.p>
{/* 
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/70 lg:mx-0"
          >
            Download our free application from Play store to get current time
            compliances update and track your order status.
            <br />
            Easy to connect with our professional on call, chat & email.
          </motion.p> */}

          {/* PLAY STORE */}
          <motion.a
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href={PLAYSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Get it on Google Play"
            className="mt-7 inline-block transition hover:opacity-90"
          >
            <img
              src={PLAYSTORE_BADGE}
              alt="Get it on Google Play"
              loading="lazy"
              className="h-12 w-auto"
            />
          </motion.a>
        </div>

        {/* RIGHT APP SCREENSHOTS */}
        <div className="relative flex h-72 w-full max-w-xs items-center justify-center sm:h-80">
          {/* First screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -10 }}
            whileInView={{ opacity: 1, y: 0, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute left-0 top-4 w-40 -rotate-6 overflow-hidden rounded-[1.75rem] border-4 border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] sm:w-44"
          >
            <img
              src={screenshotOne}
              alt="Legal Papers India app screenshot"
              loading="lazy"
              className="aspect-[9/19] w-full object-cover"
            />
          </motion.div>

          {/* Second screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: 10 }}
            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="absolute bottom-4 right-0 w-40 rotate-6 overflow-hidden rounded-[1.75rem] border-4 border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] sm:w-44"
          >
            <img
              src={screenshotTwo}
              alt="Legal Papers India app screenshot"
              loading="lazy"
              className="aspect-[9/19] w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

