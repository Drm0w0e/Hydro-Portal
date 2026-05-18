import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import AgentNetwork from "@/components/sections/AgentNetwork";
import DemoPreview from "@/components/sections/DemoPreview";
import Features from "@/components/sections/Features";
import MobileMockup from "@/components/sections/MobileMockup";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <AgentNetwork />
        <DemoPreview />
        <Features />
        <MobileMockup />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
