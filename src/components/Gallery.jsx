import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  useMotionValue,
  useAnimationFrame,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

import lpi from "../assets/Gallery/lpi.webp";
import lpi1 from "../assets/Gallery/lpi1.webp";
import lpi2 from "../assets/Gallery/lpi2.webp";
import lpi3 from "../assets/Gallery/lpi3.webp";
import lpi8Webp from "../assets/Gallery/lpi8.webp";
import lpi5 from "../assets/Gallery/lpi5.webp";
import lpi6 from "../assets/Gallery/lpi6.jpg";
import lpi7 from "../assets/Gallery/lpi7.jpg";

/* ------------------------------------------------------------------
   SETTINGS
   DURATION : photos ka ek poora set scroll hone ka time (seconds).
              Zyada number = slow scroll, kam number = fast scroll.
   category : "Team" | "Office" | "Events"
   ------------------------------------------------------------------ */
const DURATION = 70;

/* Line ko 3 baar repeat karte hain, taaki loop kabhi khali na dikhe */
const SETS = 3;

const gallery = [
  {
    id: 1,
    category: "Team",
    title: "Our compliance experts",
    caption: "The team that files your applications every day.",
    src: lpi,
  },
  {
    id: 2,
    category: "Office",
    title: "Our Noida office",
    caption: "Where your paperwork gets sorted.",
    src: lpi6,
  },
  {
    id: 3,
    category: "Events",
    title: "Festival celebration",
    caption: "Work hard, celebrate together.",
    src: lpi2,
  },
  {
    id: 4,
    category: "Team",
    title: "Customer support team",
    caption: "Real people on every call and chat.",
    src: lpi3,
  },
  {
    id: 5,
    category: "Office",
    title: "The filing desk",
    caption: "Documents checked twice before they go to the portal.",
    src: lpi8Webp,
  },
  {
    id: 6,
    category: "Team",
    title: "Director with the team",
    caption: "Leading from the front.",
    src: lpi1,
  },
  {
    id: 7,
    category: "Team",
    title: "Meet your advisor",
    caption: "A dedicated expert for your registration.",
    src: lpi5,
  },
  {
    id: 8,
    category: "Office",
    title: "Reception",
    caption: "Walk in and say hello.",
    src: lpi7,
  },
];

/* Har category ka apna colour */
const categoryGrad = {
  Team: "from-orange-400 to-amber-500",
  Office: "from-sky-400 to-blue-600",
  Events: "from-violet-400 to-purple-600",
};

/* x ko hamesha (-setWidth, 0] ke beech rakhta hai (seamless loop) */
const wrapX = (value, setWidth) => {
  const v = value % setWidth;
  return v > 0 ? v - setWidth : v;
};

/* ------------------------------------------------------------------
   Single photo card (scrolling line ke andar)
   ------------------------------------------------------------------ */
function MarqueeCard({ item, onOpen, hidden = false }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      tabIndex={hidden ? -1 : 0}
      aria-hidden={hidden || undefined}
      aria-label={`Open photo: ${item.title}`}
      className="group relative mr-3 block h-[190px] w-[250px] shrink-0 overflow-hidden rounded-2xl border border-white bg-white text-left shadow-[0_10px_28px_-14px_rgba(10,30,70,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_-18px_rgba(10,30,70,0.5)] sm:mr-4 sm:h-[240px] sm:w-[320px] sm:rounded-3xl lg:h-[280px] lg:w-[380px]"
    >
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        draggable={false}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* neeche ka dark gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06213d]/80 via-transparent to-transparent" />

      {/* category + title */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <span
          className={`inline-flex rounded-full bg-gradient-to-r ${
            categoryGrad[item.category]
          } px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow sm:text-[10px]`}
        >
          {item.category}
        </span>
        <p className="mt-1.5 line-clamp-1 font-display text-sm font-extrabold text-white sm:text-base">
          {item.title}
        </p>
      </div>

      {/* expand icon (hover pe) */}
      <span className="absolute right-3 top-3 hidden h-9 w-9 scale-75 items-center justify-center rounded-full bg-white/90 text-[#126dc4] opacity-0 shadow-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:flex">
        <Maximize2 className="h-4 w-4" />
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------
   Lightbox (full screen viewer)
   ------------------------------------------------------------------ */
function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, onNext]);

  const stop = (e) => e.stopPropagation();

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#041a31]/90 p-3 backdrop-blur-md sm:p-6"
    >
      {/* counter */}
      <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3.5 py-1.5 font-mono text-xs font-bold text-white ring-1 ring-white/20 sm:left-6 sm:top-6">
        {index + 1} / {items.length}
      </span>

      {/* close */}
      <button
        type="button"
        onClick={(e) => {
          stop(e);
          onClose();
        }}
        aria-label="Close gallery"
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white hover:text-[#126dc4] sm:right-6 sm:top-6 sm:h-11 sm:w-11"
      >
        <X className="h-5 w-5" />
      </button>

      {/* prev */}
      <button
        type="button"
        onClick={(e) => {
          stop(e);
          onPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white hover:text-[#126dc4] sm:left-6 sm:h-12 sm:w-12"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* next */}
      <button
        type="button"
        onClick={(e) => {
          stop(e);
          onNext();
        }}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white hover:text-[#126dc4] sm:right-6 sm:h-12 sm:w-12"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* photo + caption (mobile pe left/right swipe) */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.figure
          key={item.id}
          onClick={stop}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x < -80 || velocity.x < -500) onNext();
            else if (offset.x > 80 || velocity.x > 500) onPrev();
          }}
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="relative mx-10 flex max-w-full cursor-grab flex-col items-center active:cursor-grabbing sm:mx-20"
        >
          <div className="overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/20">
            <img
              src={item.src}
              alt={item.title}
              draggable={false}
              className="max-h-[68vh] w-auto max-w-full select-none object-contain"
            />
          </div>

          <figcaption className="mt-4 max-w-xl text-center sm:mt-5">
            <span
              className={`inline-flex rounded-full bg-gradient-to-r ${
                categoryGrad[item.category]
              } px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs`}
            >
              {item.category}
            </span>
            <p className="mt-2 font-display text-xl font-extrabold text-white sm:text-2xl">
              {item.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-white/70 sm:text-base">
              {item.caption}
            </p>
          </figcaption>
        </motion.figure>
      </AnimatePresence>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Section
   ------------------------------------------------------------------ */
export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const inView = useInView(sectionRef);
  const reduceMotion = useReducedMotion();

  /* line ki position (px) */
  const x = useMotionValue(0);

  const setWidth = useRef(0); // ek set ki width
  const stepWidth = useRef(0); // ek card + gap ki width
  const hovering = useRef(false); // desktop pe mouse line par hai
  const animating = useRef(false); // button se slide chal rahi hai
  const animRef = useRef(null);

  /* widths measure karo (breakpoint badalne par bhi) */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      setWidth.current = el.scrollWidth / SETS;
      const kids = el.children;
      if (kids.length > 1) {
        stepWidth.current = kids[1].offsetLeft - kids[0].offsetLeft;
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* slow auto-scroll */
  useAnimationFrame((_, delta) => {
    if (
      reduceMotion ||
      !inView ||
      hovering.current ||
      animating.current ||
      openIndex !== null ||
      !setWidth.current
    ) {
      return;
    }
    const speed = setWidth.current / DURATION; // px per second
    const move = (speed * Math.min(delta, 64)) / 1000;
    x.set(wrapX(x.get() - move, setWidth.current));
  });

  /* next / back button: dir = 1 (next), -1 (back) */
  const slide = (dir) => {
    const sW = setWidth.current;
    const step = stepWidth.current;
    if (!sW || !step) return;

    if (animRef.current) animRef.current.stop();

    let from = wrapX(x.get(), sW);
    if (dir < 0 && from + step > 0) from -= sW; // back jaate waqt left khali na dikhe
    x.set(from);

    animating.current = true;
    animRef.current = animate(x, from + (dir > 0 ? -step : step), {
      duration: 0.55,
      ease: [0.4, 0, 0.2, 1],
      onComplete: () => {
        animating.current = false;
        x.set(wrapX(x.get(), sW));
      },
    });
  };

  const handleClose = useCallback(() => setOpenIndex(null), []);
  const handleNext = useCallback(
    () => setOpenIndex((i) => (i + 1) % gallery.length),
    []
  );
  const handlePrev = useCallback(
    () => setOpenIndex((i) => (i - 1 + gallery.length) % gallery.length),
    []
  );

  const arrowClass =
    "absolute top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#126dc4] shadow-[0_10px_24px_-8px_rgba(10,30,70,0.5)] ring-1 ring-blue-100 transition duration-300 hover:bg-[#126dc4] hover:text-white active:scale-95 sm:h-12 sm:w-12";

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff] py-10 sm:py-14"
    >
      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="pointer-events-none absolute -left-24 top-0 h-60 w-60 rounded-full bg-blue-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-60 w-60 rounded-full bg-orange-300/20 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,91,160,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* ================= HEADING ================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-3xl px-4 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 ring-1 ring-orange-200">
          <Camera className="h-4 w-4" />
          Our Gallery
        </span>

        <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-[#173252] sm:text-3xl md:text-4xl">
          A peek into our{" "}
          <span className="bg-gradient-to-r from-[#126dc4] to-cyan-500 bg-clip-text text-transparent">
            team & office
          </span>
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
          The people and the place behind every registration we file.
        </p>
      </motion.div>

      {/* ================= SCROLLING LINE ================= */}
      <div
        className="relative mt-6 overflow-hidden sm:mt-8"
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") hovering.current = true;
        }}
        onPointerLeave={() => {
          hovering.current = false;
        }}
      >
        {/* left / right fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#eef6ff] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#eaf3ff] to-transparent sm:w-24" />

        {/* BACK button */}
        <button
          type="button"
          onClick={() => slide(-1)}
          aria-label="Previous photos"
          className={`${arrowClass} left-2 sm:left-5`}
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* NEXT button */}
        <button
          type="button"
          onClick={() => slide(1)}
          aria-label="Next photos"
          className={`${arrowClass} right-2 sm:right-5`}
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max py-3 will-change-transform"
        >
          {Array.from({ length: SETS }).map((_, setIndex) =>
            gallery.map((item, i) => (
              <MarqueeCard
                key={`${setIndex}-${item.id}`}
                item={item}
                hidden={setIndex > 0}
                onOpen={() => setOpenIndex(i)}
              />
            ))
          )}
        </motion.div>
      </div>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            items={gallery}
            index={openIndex}
            onClose={handleClose}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </section>
  );
}