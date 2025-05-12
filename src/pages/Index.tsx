
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
      content: "Mood-based, sustainable fashion for confidence. StyleMind helps you dress to express your authentic self." 
    });
    
    createMeta({ 
      name: "keywords", 
      content: "fashion psychology, sustainable fashion, mood-based outfits, body positivity, style confidence" 
    });
    
    createMeta({ 
      property: "og:title", 
      content: "StyleMind - Dress with Purpose" 
    });
    
    createMeta({ 
      property: "og:description", 
      content: "Mood-based, sustainable fashion for confidence and self-expression." 
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
      content: "Mood-based, sustainable fashion for confidence and self-expression." 
    });
    
  }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Reddish inspired background with layered design */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-50/80 via-white/70 to-red-100/50 -z-20"></div>
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23EA384C%22 fill-opacity=%220.07%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat opacity-30 -z-10"></div>
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-f4ba5d3585df?q=80&w=2148')] bg-cover bg-center opacity-10 mix-blend-overlay -z-20"></div>
      
      <div className="relative z-10">
        <HeroSection />
        <BenefitsSection />
        <TestimonialSection />
        <LeadCaptureForm />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
