
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set document title
    document.title = "StyleMind - Dress with Purpose";
    
    // Remove existing meta tags to avoid duplicates
    const existingMetas = document.querySelectorAll('meta[name], meta[property]');
    existingMetas.forEach(meta => {
      const name = meta.getAttribute('name');
      const property = meta.getAttribute('property');
      if (name === 'description' || name === 'keywords' || 
          name?.startsWith('twitter:') || property?.startsWith('og:')) {
        meta.remove();
      }
    });
    
    // Helper function to create and append meta tags
    const createMeta = (attributes: Record<string, string>) => {
      const meta = document.createElement('meta');
      Object.entries(attributes).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      document.head.appendChild(meta);
    };
    
    // Create all necessary meta tags
    createMeta({ 
      name: "description", 
      content: "Discover mood-based, sustainable fashion with StyleMind - where psychology meets style for empowering outfit choices." 
    });
    
    createMeta({ 
      name: "keywords", 
      content: "fashion psychology, sustainable fashion, mood-based outfits, body positivity" 
    });
    
    createMeta({ 
      property: "og:title", 
      content: "StyleMind - Dress with Purpose" 
    });
    
    createMeta({ 
      property: "og:description", 
      content: "Discover mood-based, sustainable fashion with StyleMind." 
    });
    
    createMeta({ 
      property: "og:type", 
      content: "website" 
    });
    
    createMeta({ 
      name: "twitter:card", 
      content: "summary_large_image" 
    });
    
    createMeta({ 
      name: "twitter:title", 
      content: "StyleMind - Dress with Purpose" 
    });
    
    createMeta({ 
      name: "twitter:description", 
      content: "Discover mood-based, sustainable fashion with StyleMind." 
    });
    
  }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection />
      <BenefitsSection />
      <TestimonialSection />
      <LeadCaptureForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
