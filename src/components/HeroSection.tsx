
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSignUp = async (values: z.infer<typeof signUpSchema>) => {
    setIsSubmitting(true);
    try {
      // Here you would integrate with Supabase
      console.log("Sign up with:", values.email);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSignupSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blush-100/30 to-sage-300/30 py-20 md:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left on desktop */}
          <div className="animate-fade-in [animation-delay:200ms]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 leading-tight mb-4">
              Dress Your Mind: <br />
              <span className="text-coral-400">Style with Purpose</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Choose outfits that boost your mood, celebrate your body, and align with your values—all while promoting sustainability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-primary group transition-all hover:scale-105" 
                onClick={() => setIsDialogOpen(true)}
                aria-label="Try StyleMind for free"
              >
                Try StyleMind Free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center mt-8 text-sm text-gray-500">
              <div className="flex -space-x-2 mr-3">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50" alt="User" className="w-6 h-6 rounded-full border border-white" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50" alt="User" className="w-6 h-6 rounded-full border border-white" />
                <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=50&h=50" alt="User" className="w-6 h-6 rounded-full border border-white" />
              </div>
              <span>Joined by 2,000+ style enthusiasts</span>
            </div>
          </div>
          
          {/* Hero Image - Right on desktop */}
          <div className="relative animate-fade-in [animation-delay:400ms]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020"
                alt="Confident, diverse person in sustainable outfit"
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

      {/* Sign-up Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-navy-800">Join StyleMind</DialogTitle>
            <DialogDescription>
              {!signupSuccess 
                ? "Get personalized outfit recommendations based on your mood and style preferences."
                : "Thanks for joining! Check your email for next steps."}
            </DialogDescription>
          </DialogHeader>
          
          {!signupSuccess ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="you@example.com" 
                          {...field} 
                          disabled={isSubmitting} 
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    className="btn-primary w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing up..." : "Get Started"}
                  </Button>
                </div>
              </form>
            </Form>
          ) : (
            <div className="py-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Welcome to StyleMind!</h3>
              <Button 
                className="mt-4" 
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
