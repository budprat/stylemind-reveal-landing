
import { Heart, Leaf, Palette, Smile } from "lucide-react";

const benefits = [
  {
    title: "Mood-based Outfit Suggestions",
    description: "Get personalized outfit recommendations based on how you want to feel—calm, confident, creative, or anything in between.",
    icon: <Smile className="h-6 w-6 text-white" />,
    iconBg: "bg-indigo-600",
    delay: "100ms"
  },
  {
    title: "Sustainable Styling",
    description: "Discover how to upcycle your wardrobe and make eco-friendly fashion choices with our sustainable style tips.",
    icon: <Leaf className="h-6 w-6 text-white" />,
    iconBg: "bg-indigo-500",
    delay: "300ms"
  },
  {
    title: "Body-positive Affirmations",
    description: "Embrace your unique style with confidence through personalized body-positive fashion affirmations.",
    icon: <Heart className="h-6 w-6 text-white" />,
    iconBg: "bg-indigo-400",
    delay: "500ms"
  },
  {
    title: "Style Generation",
    description: "Transform your wardrobe with AI-powered style suggestions tailored to your personal aesthetic and preferences.",
    icon: <Palette className="h-6 w-6 text-white" />,
    iconBg: "bg-purple-500",
    delay: "700ms"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-950/95 to-indigo-950/95 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-indigo-900/50 rounded-full text-indigo-300 text-sm font-medium mb-4">Style Generator</span>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-200 mb-4">
            Fashion Psychology<span className="text-purple-400">.</span> Personalized Style<span className="text-purple-400">.</span>
          </h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            StyleMind combines psychology with fashion to help you dress with intention and create the impact you desire.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card animate-fade-in border-t-2 border-opacity-30" 
              style={{
                animationDelay: benefit.delay,
                borderColor: index === 0 ? "#818cf8" : 
                             index === 1 ? "#6366f1" : 
                             index === 2 ? "#4f46e5" : 
                             "#7e22ce"
              }}
            >
              <div className={`card-icon ${benefit.iconBg} shadow-lg shadow-indigo-500/20`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-indigo-200 mb-3">
                {benefit.title}
              </h3>
              <p className="text-indigo-100/90">
                {benefit.description}
              </p>
              
              {index === 3 && (
                <a 
                  href="#image-upload" 
                  className="inline-flex items-center mt-4 text-purple-300 hover:text-purple-200 transition-colors"
                >
                  <span>Try Style Generator</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
