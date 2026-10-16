


// import { motion } from "framer-motion";
// import LeadForm from "./LeadForm";
// import ctaImage from "../assets/cta2.png";

// export default function FinalCTA() {
//   return (
//     <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
//       {/* Decorative Background */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

//         <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-navy-500/5 blur-3xl" />

//         <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/5 blur-3xl" />
//       </div>

//      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
//         <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-20">
//           {/* ================= LEFT - IMAGE + CONTENT ================= */}
//           <div className="order-1 flex flex-col">
//             {/* Heading / Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -35 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="relative z-20"
//             >
//               <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-500">
//                 Ready when you are
//               </p>

//               <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-5xl">
//                 Let’s get your paperwork
//                 <span className="text-navy-900"> sorted.</span>
//               </h2>

//               <p className="mt-4 max-w-lg text-base leading-relaxed text-black sm:text-lg">
//                 Share your details once — our team calls back with next steps,
//                 no obligation.
//               </p>
//             </motion.div>

//             {/* ================= CTA IMAGE ================= */}
//             <motion.div
//               initial={{ opacity: 0, y: 40, scale: 0.94 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.15,
//                 ease: "easeOut",
//               }}
//               className="relative mt-5 flex justify-center lg:-ml-8 lg:justify-start"
//             >
//               {/* Image Glow */}
//               <div className="pointer-events-none absolute bottom-8 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl sm:h-72 sm:w-72 lg:left-[42%]" />

//               <motion.img
//                 src={ctaImage}
//                 alt="Legal Papers India professional"
//                 loading="lazy"
//                 animate={{
//                   y: [0, -7, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="
//                   relative z-10
//                   h-auto
//                   w-full
//                   max-w-[420px]
//                   object-contain
//                   drop-shadow-[0_25px_35px_rgba(10,20,40,0.18)]
//                   sm:max-w-[500px]
//                   lg:max-w-[570px]
//                   xl:max-w-[600px]
//                 "
//               />
//             </motion.div>
//           </div>

//           {/* ================= RIGHT - LEAD FORM ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: 35 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.6,
//               delay: 0.15,
//             }}
//             className="
//               order-2
//               flex
//               w-full
//               justify-center
//               lg:justify-end
//             "
//           >
//             <div className="relative w-full max-w-md">
//               {/* Form Glow */}
//               <div className="absolute -inset-4 rounded-[2rem] bg-gold-500/10 blur-2xl" />

//               {/* Form Card */}
//               <div
//                 className="
//                   relative
//                   rounded-2xl
//                   border
//                   border-navy-900/10
//                   bg-white
//                   p-1
//                   shadow-[0_25px_70px_-30px_rgba(10,20,40,0.35)]
//                 "
//               >
//                 <LeadForm />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { Phone, Clock, ShieldCheck, Sparkles } from "lucide-react";
import LeadForm from "./LeadForm";
import ctaImage from "../assets/cta2.png";

const perks = [
  { icon: Clock, text: "Callback in 30 minutes" },
  { icon: ShieldCheck, text: "No obligation" },
  { icon: Phone, text: "Talk to a real expert" },
];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff] py-14 sm:py-20 lg:py-24">
      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(30,91,160,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-20">
          {/* =====================================================
              LEFT - CONTENT + IMAGE
          ====================================================== */}
          <div className="order-1 flex flex-col">
            {/* Heading / Content */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-20 text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 ring-1 ring-orange-200">
                <Sparkles className="h-4 w-4" />
                Ready when you are
              </span>

              <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-extrabold leading-tight text-[#173252] sm:text-4xl lg:mx-0 lg:text-5xl">
                Let’s get your paperwork{" "}
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  sorted.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
                Share your details once — our team calls back with next steps,
                no obligation.
              </p>

              {/* perks */}
              <div className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                {perks.map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-bold text-[#173252] shadow-[0_8px_20px_-10px_rgba(10,30,70,0.35)] ring-1 ring-slate-200 sm:text-sm"
                  >
                    <Icon className="h-4 w-4 text-[#126dc4]" />
                    {text}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ================= CTA IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="relative mt-5 flex justify-center lg:-ml-8 lg:justify-start"
            >
              {/* Image Glow */}
              <div className="pointer-events-none absolute bottom-8 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-300/30 blur-3xl sm:h-72 sm:w-72 lg:left-[42%]" />

              <motion.img
                src={ctaImage}
                alt="Legal Papers India professional"
                loading="lazy"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 h-auto w-full max-w-[420px] object-contain drop-shadow-[0_25px_35px_rgba(10,20,40,0.18)] sm:max-w-[500px] lg:max-w-[570px] xl:max-w-[600px]"
              />
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT - LEAD FORM
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-2 flex w-full justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Form Glow */}
              <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-400/25 via-cyan-300/15 to-orange-300/25 blur-2xl" />

              {/* LeadForm ka apna card hai, isliye extra wrapper nahi */}
              <div className="relative">
                <LeadForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}