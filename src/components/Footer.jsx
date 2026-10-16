

// import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaXTwitter,
// } from "react-icons/fa6";
// import { footerLinkColumns, socialLinks } from "../data";

// const socialIcons = {
//   Facebook: FaFacebookF,
//   Instagram: FaInstagram,
//   LinkedIn: FaLinkedinIn,
//   Twitter: FaXTwitter,
// };

// const ADDRESS =
//   "Legal Papers India Business Solution Private Limited, F 2, Sector 8, Noida, Uttar Pradesh, 201301";

// export default function Footer() {
//   return (
//     <footer className="border-t border-navy-900/10 bg-white">
//       {/* top: wordmark + social */}
//       <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
//         <div>
//           <div className="flex items-baseline justify-center gap-0.5 sm:justify-start">
//             <span className="font-display text-3xl font-bold text-navy-600">
//               Legalpapers
//             </span>
//             <span className="font-display text-3xl font-bold text-gold-500">
//               india.
//             </span>
//             <span className="font-display text-3xl font-bold text-black">
//               com
//             </span>
//           </div>

//           <div className="mt-1 flex w-full items-center gap-2">
//             <span className="h-px flex-1 bg-slate-400/50" />

//             <p className="whitespace-nowrap text-[12px] text-black">
//               Get Business Papers Ready
//             </p>

//             <span className="h-px flex-1 bg-slate-400/50" />

//             <p className="whitespace-nowrap text-xs font-semibold text-black">
//               GROUP
//             </p>
//           </div>
//         </div>

//         <div className="flex items-center gap-3">
//           {socialLinks.map((s) => {
//             const Icon = socialIcons[s.label];

//             return (
//               <a
//                 key={s.label}
//                 href={s.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title={s.label}
//                 className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/10 text-navy-600 transition hover:bg-navy-600 hover:text-white"
//               >
//                 <Icon className="h-3.5 w-3.5" />
//               </a>
//             );
//           })}
//         </div>
//       </div>

//       {/* link columns */}
//       <div className="border-t border-navy-900/5">
//         <div className="mx-auto max-w-6xl px-5 py-12">
//           <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
//             {footerLinkColumns.map((col) => (
//               <div key={col.heading}>
//                 <p className="font-display text-base font-bold text-black">
//                   {col.heading}
//                 </p>

//                 <ul className="mt-4 flex flex-col gap-2.5">
//                   {col.links.map((l) => (
//                     <li key={l.label}>
//                       <a
//                         href={l.href}
//                         className="text-sm leading-relaxed text-black transition hover:text-gold-600"
//                       >
//                         {l.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}

//             {/* business contact */}
//             <div className="col-span-2 sm:col-span-1">
//               <p className="font-display text-base font-bold text-black">
//                 Business Contact
//               </p>

//               <ul className="mt-4 flex flex-col gap-4">
//                 <li className="flex items-start gap-2 text-sm leading-relaxed text-black">
//                   <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
//                   {ADDRESS}
//                 </li>

//                 <li className="flex items-center gap-2 text-sm text-black">
//                   <Phone className="h-4 w-4 shrink-0 text-gold-600" />

//                   <a
//                     href="tel:+919211037448"
//                     className="transition hover:text-gold-600"
//                   >
//                     +91 9211037448
//                   </a>
//                 </li>

//                 <li className="flex items-center gap-2 text-sm text-black">
//                   <Mail className="h-4 w-4 shrink-0 text-gold-600" />

//                   <a
//                     href="mailto:info@legalpapersindia.com"
//                     className="transition hover:text-gold-600"
//                   >
//                     info@legalpapersindia.com
//                   </a>
//                 </li>
//               </ul>

//               <a
//                 href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//                   ADDRESS
//                 )}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-navy-900/15 px-4 py-2 text-xs font-medium text-black transition hover:bg-navy-500/10"
//               >
//                 Get direction
//                 <ArrowUpRight className="h-3.5 w-3.5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* disclaimer */}
//       <div className="border-t border-navy-900/5 bg-navy-500/5">
//         <div className="mx-auto max-w-6xl px-5 py-6">
//           <p className="text-sm leading-relaxed text-black">
//             This is not a Government run website and the form is not the
//             actual registration form, it is just to collect information from
//             our clients so that our expert can easily understand their
//             business or needs. By proceeding forward with this website you are
//             aware that we are a private company managing this website and
//             providing assistance based on the request from our customers, and
//             the fee collected on this website is a consultancy fee.
//           </p>
//         </div>
//       </div>

//       {/* bottom bar */}
//       <div className="border-t border-navy-900/10">
//         <div className="mx-auto max-w-6xl px-5 py-5">
//           <p className="text-center text-sm leading-relaxed text-black">
//             Copyright © {new Date().getFullYear()} Legal Papers India | All
//             Rights Reserved | Website Design, Developed &amp; Google Promotion
//             by{" "}
//             <a
//               href="https://www.vrdcreative.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="font-semibold text-black transition hover:text-gold-600"
//             >
//               VRD Creative Pvt Ltd
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { footerLinkColumns, socialLinks } from "../data";

const socialIcons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  Twitter: FaXTwitter,
};

const ADDRESS =
  "Legal Papers India Business Solution Private Limited, F 2, Sector 8, Noida, Uttar Pradesh, 201301";

export default function Footer() {
  return (
    <footer className="border-t border-navy-900/10 bg-white">
      {/* top: wordmark + social */}
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row lg:px-8">
        <div>
          <div className="flex items-baseline justify-center gap-0.5 sm:justify-start">
            <span className="font-display text-3xl font-bold text-navy-600">
              Legalpapers
            </span>
            <span className="font-display text-3xl font-bold text-gold-500">
              india.
            </span>
            <span className="font-display text-3xl font-bold text-black">
              com
            </span>
          </div>

          <div className="mt-1 flex w-full items-center gap-2">
            <span className="h-px flex-1 bg-slate-400/50" />

            <p className="whitespace-nowrap text-[12px] text-black">
              Get Business Papers Ready
            </p>

            <span className="h-px flex-1 bg-slate-400/50" />

            <p className="whitespace-nowrap text-xs font-semibold text-black">
              GROUP
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((s) => {
            const Icon = socialIcons[s.label];

            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/10 text-navy-600 transition hover:bg-navy-600 hover:text-white"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* link columns */}
      <div className="border-t border-navy-900/5">
        <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {footerLinkColumns.map((col) => (
              <div key={col.heading}>
                <p className="font-display text-base font-bold text-black">
                  {col.heading}
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm leading-relaxed text-black transition hover:text-gold-600"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* business contact */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-display text-base font-bold text-black">
                Business Contact
              </p>

              <ul className="mt-4 flex flex-col gap-4">
                <li className="flex items-start gap-2 text-sm leading-relaxed text-black">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  {ADDRESS}
                </li>

                <li className="flex items-center gap-2 text-sm text-black">
                  <Phone className="h-4 w-4 shrink-0 text-gold-600" />

                  <a
                    href="tel:+919211037448"
                    className="transition hover:text-gold-600"
                  >
                    +91 9211037448
                  </a>
                </li>

                <li className="flex items-center gap-2 text-sm text-black">
                  <Mail className="h-4 w-4 shrink-0 text-gold-600" />
<a
                  
                    href="mailto:info@legalpapersindia.com"
                    className="transition hover:text-gold-600"
                  >
                    info@legalpapersindia.com
                  </a>
                </li>
              </ul>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  ADDRESS
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-navy-900/15 px-4 py-2 text-xs font-medium text-black transition hover:bg-navy-500/10"
              >
                Get direction
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* disclaimer */}
      <div className="border-t border-navy-900/5 bg-navy-500/5">
        <div className="mx-auto max-w-[1400px] px-5 py-6 lg:px-8">
          <p className="text-sm leading-relaxed text-black">
            This is not a Government run website and the form is not the
            actual registration form, it is just to collect information from
            our clients so that our expert can easily understand their
            business or needs. By proceeding forward with this website you are
            aware that we are a private company managing this website and
            providing assistance based on the request from our customers, and
            the fee collected on this website is a consultancy fee.
          </p>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-navy-900/10">
        <div className="mx-auto max-w-[1400px] px-5 py-5 lg:px-8">
          <p className="text-center text-sm leading-relaxed text-black">
            Copyright © {new Date().getFullYear()} Legal Papers India | All
            Rights Reserved | Website Design, Developed &amp; Google Promotion
            by{" "}
            <a
              href="https://www.vrdcreative.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black transition hover:text-gold-600"
            >
              VRD Creative Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}