
import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>StyleMind - Dress with Purpose</title>
        <meta name="description" content="Discover mood-based, sustainable fashion with StyleMind - where psychology meets style for empowering outfit choices." />
        <meta name="keywords" content="fashion psychology, sustainable fashion, mood-based outfits, body positivity" />
        <meta property="og:title" content="StyleMind - Dress with Purpose" />
        <meta property="og:description" content="Discover mood-based, sustainable fashion with StyleMind." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StyleMind - Dress with Purpose" />
        <meta name="twitter:description" content="Discover mood-based, sustainable fashion with StyleMind." />
      </Helmet>

      <div className="min-h-screen overflow-hidden">
        <HeroSection />
        <BenefitsSection />
        <TestimonialSection />
        <LeadCaptureForm />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
