
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "StyleMind helped me feel empowered at work! The outfit suggestions based on my 'confidence' mood have transformed my approach to dressing for important meetings.",
    author: "Amelia J.",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    quote: "As someone who struggles with body image, the body-positive affirmations paired with outfit suggestions have been game-changing for my self-confidence.",
    author: "Marcus T.",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    quote: "I love that StyleMind helps me choose sustainable options while still looking stylish. It's changed how I think about my wardrobe completely.",
    author: "Sophia L.",
    role: "Environmental Activist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&auto=format&fit=crop&q=80"
  }
];

const partners = [
  { name: "EcoFashion", logo: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=200&h=200&auto=format&fit=crop&q=80" },
  { name: "GreenStyle", logo: "https://images.unsplash.com/photo-1618520929321-c3e5225ee4d5?w=200&h=200&auto=format&fit=crop&q=80" },
  { name: "MindfulWear", logo: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=200&h=200&auto=format&fit=crop&q=80" },
  { name: "SustainChic", logo: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=200&h=200&auto=format&fit=crop&q=80" }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-sage-300/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Loved by <span className="text-coral-400">Fashion-Forward</span> Minds
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how StyleMind is transforming the way people think about fashion and self-expression.
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div 
              className="transition-all duration-500 flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-coral-400"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="font-bold text-navy-800">{testimonial.author}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 gap-3">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-white border border-gray-200 hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button 
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-white border border-gray-200 hover:bg-gray-50"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
        
        {/* Partners */}
        <div>
          <h3 className="text-center text-lg font-medium text-gray-500 mb-6">Trusted by Ethical Fashion Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm grayscale hover:grayscale-0 transition-all"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
