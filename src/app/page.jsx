"use client"
import GadgetTwoPageView from "pages-sections/gadget-2/page-view";
import { useRouter } from "next/navigation";
// export const metadata = {
//   title: "Gadget Shop Two - Bazaar Next.js E-commerce Template",
//   description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
//   authors: [{
//     name: "UI-LIB",
//     url: "https://ui-lib.com"
//   }],
//   keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
// };
export default function GadgetShopTwo() {
  if(typeof window !== 'undefined') {
    window.location.href = "/home"
  }
}