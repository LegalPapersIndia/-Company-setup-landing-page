

import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-900/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 lg:px-8">
        <div className="min-w-0">
          <div className="flex items-baseline gap-0.5 whitespace-nowrap">
            <span className="font-display text-xl font-bold text-navy-600 sm:text-3xl">
              Legalpapers
            </span>
            <span className="font-display text-xl font-bold text-gold-500 sm:text-3xl">
              india.
            </span>
            <span className="font-display text-xl font-bold text-ink sm:text-3xl">
              com
            </span>
          </div>

           <div className="mt-0.5 flex w-full items-center gap-2">
            <span className="h-px flex-1 bg-slate-400/50" />
            <p className="whitespace-nowrap text-[12px] text-ink">Get Business Papers Ready</p>
            <span className="h-px flex-1 bg-slate-400/50" />
            <p className="whitespace-nowrap text-[11px] font-semibold text-ink">GROUP</p>
          </div>
        </div>

        {/* <a
          href="tel:+919211037448"
          className="ml-3 flex shrink-0 items-center gap-2 rounded-full border border-navy-600/40 px-3 py-2 text-xs font-medium text-navy-600 transition hover:bg-navy-600/10 sm:px-4"
        >
          <Phone className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">+91 92110 37448</span>
          <span className="sm:hidden">Call now</span>
        </a> */}
      </div>
    </header>
  );
}
