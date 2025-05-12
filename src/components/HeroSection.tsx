
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blush-100/30 to-sage-300/30 py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in [animation-delay:200ms]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 leading-tight mb-4">
              Dress Your Mind: <br />
              <span className="text-coral-400">Style with Purpose</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Discover outfits that match your mood, celebrate your body, and align with your values—all while promoting sustainability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group">
                Try StyleMind Free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in [animation-delay:400ms]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020"
                alt="Confident person in sustainable outfit"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/80 to-transparent p-6">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-sage-500"></div>
                  <span className="text-white font-medium">Mood: Confident & Empowered</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
              <p className="font-display text-navy-800 text-sm">
                "Find outfits that match how you want to feel"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
