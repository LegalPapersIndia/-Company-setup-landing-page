import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, ChevronDown } from "lucide-react";

const STATES_API = "https://countriesnow.space/api/v0.1/countries/states";

export default function LeadForm({ variant = "card" }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", state: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [states, setStates] = useState([]);
  const [statesLoading, setStatesLoading] = useState(true);
  const [statesError, setStatesError] = useState(false);

  const [stateOpen, setStateOpen] = useState(false);
  const stateRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const loadStates = async () => {
      setStatesLoading(true);
      setStatesError(false);
      try {
        const res = await fetch(STATES_API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country: "India" }),
        });
        if (!res.ok) throw new Error("Request failed");
        const json = await res.json();
        const list = json?.data?.states?.map((s) => s.name) ?? [];
        if (!cancelled) setStates(list);
      } catch (err) {
        if (!cancelled) setStatesError(true);
      } finally {
        if (!cancelled) setStatesLoading(false);
      }
    };

    loadStates();
    return () => {
      cancelled = true;
    };
  }, []);

  // close the custom dropdown when clicking outside it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (stateRef.current && !stateRef.current.contains(e.target)) {
        setStateOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectState = (name) => {
    setForm({ ...form, state: name });
    setStateOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (
      !form.name.trim() ||
      !/^[0-9]{10}$/.test(form.phone) ||
      !emailValid ||
      !form.state
    ) {
      setError("Please fill every field correctly (10-digit phone, valid email).");
      return;
    }
    setError("");
    // TODO: wire this up to the real lead-capture endpoint.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-seal/30 bg-seal/5 px-6 py-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-seal" strokeWidth={1.5} />
        <p className="font-display text-xl font-bold text-black">Request received</p>
        <p className="text-base text-slate-800">
          A compliance expert will call {form.name.split(" ")[0]} within 30 minutes.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        variant === "card"
          ? "rounded-2xl border border-navy-700/10 bg-white/95 p-6 shadow-[0_20px_60px_-25px_rgba(10,20,40,0.45)] backdrop-blur"
          : ""
      }
    >
      {variant === "card" && (
  <div className="-mx-6 -mt-6 mb-5 relative overflow-hidden rounded-t-2xl bg-blue-600 px-6 py-3.5">
    
    {/* Background shine */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500" />

    {/* Decorative glow */}
    <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

    <p className="relative z-10 font-display text-xl font-bold text-white sm:text-2xl">
      Start your ISO certificate registration
    </p>
  </div>
)}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
          className="col-span-1 rounded-lg border border-blue-600/50 bg-paper/60 px-4 py-3 text-base text-ink outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40 sm:col-span-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Mobile number"
          value={form.phone}
          onChange={handleChange}
          maxLength={10}
          className="rounded-lg border border-blue-600/50 bg-paper/60 px-4 py-3 text-base text-ink outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          className="rounded-lg border border-blue-600/50 bg-paper/60 px-4 py-3 text-base text-ink outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40"
        />

        {/* custom dropdown — always opens downward, unlike native <select> */}
        <div className="relative col-span-1 sm:col-span-2" ref={stateRef}>
          <button
            type="button"
            onClick={() => !statesLoading && setStateOpen((o) => !o)}
            disabled={statesLoading}
            className="flex w-full items-center justify-between rounded-lg border border-blue-600/50 bg-paper/60 px-4 py-3 text-left text-base outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40 disabled:text-slate-400"
          >
            <span className={form.state ? "text-ink" : "text-slate-400"}>
              {statesLoading
                ? "Loading states…"
                : statesError
                ? "Couldn't load states"
                : form.state || "Select state"}
            </span>
            {statesLoading ? (
              <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
            ) : (
              <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${stateOpen ? "rotate-180" : ""}`} />
            )}
          </button>

          <AnimatePresence>
            {stateOpen && states.length > 0 && (
              <motion.ul
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 right-0 top-full z-50 mt-1 max-h-56 overflow-y-auto rounded-lg border border-navy-700/15 bg-white shadow-[0_20px_40px_-15px_rgba(10,20,40,0.35)]"
              >
                {states.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => selectState(s)}
                      className={`block w-full px-4 py-2.5 text-left text-base hover:bg-gold-300/15 ${
                        s === form.state ? "bg-gold-300/20 text-black" : "text-ink"
                      }`}
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      {statesError && (
        <p className="mt-2 text-sm text-red-500">
          State list couldn't be fetched right now — please retry, or the field will stay blank.
        </p>
      )}
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <motion.button
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-navy-600 px-5 py-3.5 text-base font-bold text-white transition hover:bg-navy-700"
      >
        Get free consultation
        <ArrowRight className="h-4 w-4" />
      </motion.button>
      <p className="mt-3 text-center text-xs text-slate-500">
        No spam. Just a callback from a real compliance expert.
      </p>
    </form>
  );
}