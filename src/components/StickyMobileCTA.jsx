import { Phone, FileText } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-navy-900/10 bg-white/95 p-3 backdrop-blur lg:hidden">
      <a
        href="tel:+919211037448"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-navy-900/15 py-3 text-sm font-medium text-navy-900"
      >
        <Phone className="h-4 w-4" />
        Call
      </a>
      <a
        href="#top-form"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-navy-900 py-3 text-sm font-medium text-paper"
      >
        <FileText className="h-4 w-4" />
        Register on GeM
      </a>
    </div>
  );
}