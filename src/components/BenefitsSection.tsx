
import { Heart, Leaf, Smile } from "lucide-react";

const benefits = [
  {
    title: "Mood-based Outfit Suggestions",
    description: "Get personalized outfit recommendations based on how you want to feel—calm, confident, creative, or anything in between.",
    icon: <Smile className="h-6 w-6 text-white" />,
    iconBg: "bg-sky-500",
    delay: "100ms"
  },
  {
    title: "Sustainable Styling",
    description: "Discover how to upcycle your wardrobe and make eco-friendly fashion choices with our sustainable style tips.",
    icon: <Leaf className="h-6 w-6 text-white" />,
    iconBg: "bg-sky-400",
    delay: "300ms"
  },
  {
    title: "Body-positive Affirmations",
    description: "Embrace your unique style with confidence through personalized body-positive fashion affirmations.",
    icon: <Heart className="h-6 w-6 text-white" />,
    iconBg: "bg-sky-300",
    delay: "500ms"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">
            Fashion Psychology<span className="text-sky-500">.</span> Personalized Style<span className="text-sky-500">.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            StyleMind combines psychology with fashion to help you dress with intention and create the impact you desire.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card animate-fade-in" 
              style={{animationDelay: benefit.delay}}
            >
              <div className={`card-icon ${benefit.iconBg}`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-sky-700 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
