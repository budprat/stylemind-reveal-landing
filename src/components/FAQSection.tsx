
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does StyleMind use psychology?",
    answer: "StyleMind leverages the principles of fashion psychology to establish connections between colors, styles, and emotional states. Our algorithm analyzes your preferences, personality traits, and goals to suggest outfits that can help evoke specific emotional responses like confidence, calm, or creativity."
  },
  {
    question: "Is StyleMind focused on sustainability?",
    answer: "Absolutely! Sustainability is a core value of StyleMind. We help you maximize your existing wardrobe through creative styling suggestions, provide tips for upcycling items, and when we do recommend new pieces, we prioritize ethical and sustainable brands."
  },
  {
    question: "How does the body positivity aspect work?",
    answer: "StyleMind takes a holistic approach to body positivity. Rather than focusing solely on body type or 'flattering' styles, we help you identify pieces that make you feel good, both physically and emotionally. Our recommendations come paired with positive affirmations tailored to your personal style journey."
  },
  {
    question: "Can I use StyleMind for specific occasions or events?",
    answer: "Yes! StyleMind allows you to input specific social contexts, occasions, or goals for your outfit. Whether it's a job interview where you want to project confidence, a social gathering where you want to feel approachable, or a relaxed day at home, we provide targeted recommendations."
  },
  {
    question: "Do I need to upload my entire wardrobe?",
    answer: "While StyleMind works best when it knows what items you own, you don't need to upload everything at once. Start with key pieces, and our quick-start algorithm will still provide valuable recommendations. You can gradually build your digital wardrobe over time."
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about StyleMind and fashion psychology.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium text-navy-800 hover:text-coral-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
