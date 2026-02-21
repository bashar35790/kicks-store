import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 relative overflow-hidden pt-20 pb-10 mt-auto">
      {/* Huge Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 tracking-tighter pointer-events-none select-none z-0">
        KICKS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About us */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We are the premier destination for sneaker enthusiasts, providing the latest drops, exclusive collections, and classic styles from top brands worldwide.
            </p>
            <Link href="/" className="font-extrabold text-3xl tracking-tighter text-white">
              KICKS
            </Link>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Categories</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/lifestyle" className="hover:text-primary transition-colors">Lifestyle Shoes</Link></li>
              <li><Link href="/basketball" className="hover:text-primary transition-colors">Basketball Shoes</Link></li>
              <li><Link href="/running" className="hover:text-primary transition-colors">Running Shoes</Link></li>
              <li><Link href="/training" className="hover:text-primary transition-colors">Training Gym</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ & Support</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary hover:text-white transition-all text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary hover:text-white transition-all text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary hover:text-white transition-all text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary hover:text-white transition-all text-white">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8 border-l-2 border-primary pl-4">
              <p className="text-sm font-semibold text-white">Need help?</p>
              <p className="text-primary text-sm font-bold mt-1">support@kicks.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} KICKS Store. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
