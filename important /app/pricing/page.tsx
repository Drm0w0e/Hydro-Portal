import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export const metadata = { title: "Pricing · Hydro Portal" };

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="pt-[140px]"><Pricing /><CTA /></main>
      <Footer />
    </>
  );
}
