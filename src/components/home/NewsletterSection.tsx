"use client";

import { Button } from "@/components/ui/Button";

export const NewsletterSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-20">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
        {/* Background typographic decoration */}
        <div className="absolute -right-20 -bottom-20 text-[15rem] leading-none font-black text-white/10 select-none pointer-events-none tracking-tighter hidden lg:block">
          KICKS
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-4">
              Join Our KicksPlus Club & Get 15% Off
            </h2>
            <p className="text-blue-100 text-lg font-medium mb-8">
              Sign up for free to receive early access to new drops, exclusive collections, and personalized offers.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 w-full" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all"
                required
              />
              <Button type="submit" variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-xl sm:px-10">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
