


import { motion } from "framer-motion";
import { FaNewspaper } from "react-icons/fa";
import { mediaMentions } from "../data";

import logoDailyhunt from "../assets/logo (3).png";
import logoZeeNews from "../assets/zee.png";
import logoHindustanTimes from "../assets/hd.png";
import logoBusinessStandard from "../assets/bs.png";

const logos = {
  Dailyhunt: logoDailyhunt,
  "Zee News": logoZeeNews,
  "Hindustan Times": logoHindustanTimes,
  "Business Standard": logoBusinessStandard,
};

// Brand-inspired accent theme for each publication
const mediaThemes = {
  Dailyhunt: {
    accent: "#FB6D2C",
    soft: "rgba(251,109,44,0.12)",
    badgeBg: "rgba(251,109,44,0.12)",
    badgeText: "#C2410C",
  },
  "Zee News": {
    accent: "#E11D2E",
    soft: "rgba(225,29,46,0.12)",
    badgeBg: "rgba(225,29,46,0.12)",
    badgeText: "#B91C1C",
  },
  "Hindustan Times": {
    accent: "#0B5FA5",
    soft: "rgba(11,95,165,0.12)",
    badgeBg: "rgba(11,95,165,0.12)",
    badgeText: "#0B5FA5",
  },
  "Business Standard": {
    accent: "#123E7C",
    soft: "rgba(18,62,124,0.12)",
    badgeBg: "rgba(18,62,124,0.12)",
    badgeText: "#123E7C",
  },
};

const defaultTheme = {
  accent: "#1e5ba0",
  soft: "rgba(30,91,160,0.12)",
  badgeBg: "rgba(30,91,160,0.12)",
  badgeText: "#1e5ba0",
};

export default function InTheNews() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
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

    <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4">
          <p className="text-center font-mono text-0.5xl font-extrabold uppercase tracking-[0.2em] text-gold-500 lg:text-left">
            In the media
          </p>

          <span className="h-px w-8 bg-navy-900/15" />
        </div>

        <h2 className="mt-4 text-center font-display text-3xl font-bold text-black sm:text-4xl">
          As featured in
        </h2>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mediaMentions.map((item, i) => {
            const theme = mediaThemes[item.name] || defaultTheme;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                style={{
                  background: `linear-gradient(180deg, ${theme.soft} 0%, #ffffff 55%)`,
                }}
                className="
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-navy-900/10
                  px-5
                  py-8
                  text-center

                  shadow-[0_8px_16px_-6px_rgba(10,20,40,0.1),0_20px_45px_-20px_rgba(10,20,40,0.3)]

                  transition-all
                  duration-500

                  hover:border-blue-300
                  hover:shadow-[0_12px_20px_-6px_rgba(37,99,235,0.15),0_28px_55px_-20px_rgba(37,99,235,0.3)]

                  sm:py-9
                "
              >
                {/* Top brand accent bar */}
                <div
                  className="absolute inset-x-0 top-0 z-10 h-1.5"
                  style={{ backgroundColor: theme.accent }}
                />

                {/* Halka blue shimmer sweep */}
                <div
                  className="
                    card-shimmer
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-blue-400/10
                    to-transparent
                  "
                />

                {/* Featured badge — brand-tinted */}
                <span
                  className="relative z-10 mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider sm:text-[11px]"
                  style={{
                    backgroundColor: theme.badgeBg,
                    color: theme.badgeText,
                  }}
                >
                  <FaNewspaper className="text-[10px]" />
                  {item.name}
                </span>

                {/* Logo with soft brand-colored glow behind it */}
                <div className="relative z-10 flex h-20 w-full items-center justify-center sm:h-24">
                  <div
                    className="pointer-events-none absolute h-20 w-20 rounded-full blur-2xl sm:h-24 sm:w-24"
                    style={{ backgroundColor: theme.soft }}
                  />

                  <img
                    src={logos[item.name]}
                    alt={item.name}
                    loading="lazy"
                    className="relative z-10 h-16 w-auto max-w-[11rem] object-contain sm:h-20 sm:max-w-[13rem]"
                  />
                </div>

                <p className="relative z-10 mt-5 max-w-[16rem] text-base font-medium leading-relaxed text-black sm:text-lg">
                  {item.caption}
                </p>

                {/* Bottom brand accent line */}
                <div
                  className="absolute bottom-0 left-0 z-10 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: theme.accent }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}