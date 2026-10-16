import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GSTIN = "09ABCDE1234F1Z5";
const TYPE_SPEED = 90;
const HOLD_MS = 2200;
const RESET_MS = 900;

export default function GstinCertificate() {
  const [typed, setTyped] = useState(0);
  const [stamped, setStamped] = useState(false);

  useEffect(() => {
    let timeout;
    if (typed < GSTIN.length) {
      timeout = setTimeout(() => setTyped((t) => t + 1), TYPE_SPEED);
    } else if (!stamped) {
      timeout = setTimeout(() => setStamped(true), 350);
    } else {
      timeout = setTimeout(() => {
        setStamped(false);
        setTyped(0);
      }, HOLD_MS);
    }
    return () => clearTimeout(timeout);
  }, [typed, stamped]);

  return (
    <div className="relative w-full max-w-sm">
      <div className="relative overflow-hidden rounded-2xl border border-gold-400/25 bg-navy-800 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)]">
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" />
        <div className="relative flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-300">
            Certificate of Registration
          </p>
          <span className="h-2 w-2 rounded-full bg-seal shadow-[0_0_10px_2px_rgba(31,122,92,0.7)]" />
        </div>

        <p className="relative mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
          GSTIN
        </p>
        <p className="relative mt-1 font-mono text-2xl tracking-[0.12em] text-paper">
          {GSTIN.slice(0, typed)}
          <span className="animate-pulse text-gold-400">{typed < GSTIN.length ? "|" : ""}</span>
        </p>

        <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Legal name</p>
            <p className="mt-0.5 text-sm text-paper/90">Your Business Name</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Status</p>
            <p className="mt-0.5 text-sm text-seal">Active</p>
          </div>
        </div>

        <AnimatePresence>
          {stamped && (
            <motion.div
              initial={{ opacity: 0, scale: 2.2, rotate: -18 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.45, ease: [0.2, 1.4, 0.4, 1] }}
              className="absolute -right-2 top-16 flex h-20 w-20 rotate-[-8deg] items-center justify-center rounded-full border-[3px] border-gold-400/80 bg-navy-900/40"
            >
              <div className="flex flex-col items-center gap-0.5">
                <ShieldCheck className="h-5 w-5 text-gold-300" strokeWidth={1.5} />
                <span className="font-mono text-[8px] font-semibold tracking-[0.14em] text-gold-300">
                  VERIFIED
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <p className="mt-3 text-center text-[11px] text-slate-400">
        Illustrative preview — your actual GSTIN, issued by the department.
      </p>
    </div>
  );
}
