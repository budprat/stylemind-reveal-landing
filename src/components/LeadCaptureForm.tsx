
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const LeadCaptureForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // This would be replaced with your actual Supabase integration code
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Lead submitted:", email);
      
      toast({
        title: "Thank you!",
        description: "You'll be the first to know when we launch",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-red-900 to-rose-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Early Access
          </h2>
          <p className="text-lg text-red-100 mb-8">
            Be among the first to experience the future of fashion psychology.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-red-400"
              required
            />
            <Button 
              type="submit" 
              className="bg-red-500 hover:bg-red-600 text-white font-medium"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Get Started"}
            </Button>
          </form>
          
          <p className="text-sm text-red-200 mt-4">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
