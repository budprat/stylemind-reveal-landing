
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-xl mb-4">StyleMind</h3>
            <p className="text-gray-300 text-sm">
              Empowering you to dress with purpose and impact through fashion psychology.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} StyleMind. All rights reserved.</p>
          <p className="mt-2">Crafted with intention for mindful fashion lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
