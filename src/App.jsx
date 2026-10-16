import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import WhoNeedsGem from "./components/WhoNeedsGem";
import GemSelector from "./components/GemSelector";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import ProcessSteps from "./components/ProcessSteps";
import WhyUsAndDocuments from "./components/WhyUsAndDocuments";
import Reviews from "./components/Reviews";
import InTheNews from "./components/InTheNews";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import AppPromo from "./components/AppPromo";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";
import WhatsAppButton from "./components/WhatsAppButton";
// import WhyUs from "./components/WhyUs";
import DocumentsRequired from "./components/DocumentsRequired";
import DirectorMessage from "./components/DirectorMessage";

export default function App() {
  return (
    <div id="top-form">
      <Navbar />
      <Hero />
      <DirectorMessage />
      <Reviews />
      <TrustStrip />
      <WhoNeedsGem />
      <GemSelector />
      <Services />
      <Pricing />
      <ProcessSteps />
      {/* <WhyUs /> */}
      <DocumentsRequired />
      <InTheNews />
      <Gallery />
      <FAQ />
      <AppPromo />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
      <WhatsAppButton />
      <div className="h-16 lg:hidden" />
    </div>
  );
}