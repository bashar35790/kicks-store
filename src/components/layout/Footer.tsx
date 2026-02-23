import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <>
      {/* BLUE NEWSLETTER SECTION */}
      <section className=" text-white px-6 ">

        <div className="bg-gradient-to-r from-[#4F6DFF] to-[#5C7CFA] p-16  max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 rounded-t-[40px]">

          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              JOIN OUR KICKSPLUS <br /> CLUB & GET 15% OFF
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Sign up for free! Join the community.
            </p>

            {/* Input */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="px-5 py-3 rounded-lg bg-transparent border border-white/50 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto"
              />
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
                SUBMIT
              </button>
            </div>
          </div>

          {/* Right Big Text */}
          <div className="flex items-center gap-4 relative">
            <div className="text-[12vw] font-extrabold text-white/90 tracking-tight hidden lg:block">
              KICKS
            </div>
            <div className="w-7 h-7 absolute top-10 right-0 -translate-x-1/2 -translate-y-1/2 bg-amber-600 text-center rounded-full">
              +
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="relative -top-20  text-gray-300 pt-20 pb-12 overflow-hidden rounded-t-[40px] -mt-10">


        <div className="bg-[#1a1a1a] p-16 rounded-t-[40px] max-w-7xl mx-auto px-6 relative z-10 pb-50 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

            {/* About Us */}
            <div>
              <h3 className="text-orange-400 text-2xl font-bold mb-6">
                About us
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                We are the biggest hyperstore in the universe.
                We got you all cover with our exclusive
                collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-orange-400 text-2xl font-bold mb-6">
                Categories
              </h3>
              <ul className="space-y-3 text-base">
                <li><Link href="#">Runners</Link></li>
                <li><Link href="#">Sneakers</Link></li>
                <li><Link href="#">Basketball</Link></li>
                <li><Link href="#">Outdoor</Link></li>
                <li><Link href="#">Golf</Link></li>
                <li><Link href="#">Hiking</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-orange-400 text-2xl font-bold mb-6">
                Company
              </h3>
              <ul className="space-y-3 text-base">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">Blogs</Link></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-orange-400 text-2xl font-bold mb-6">
                Follow us
              </h3>

              <div className="flex gap-4">
                <a href="#" className="hover:text-orange-400 transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-orange-400 transition">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-orange-400 transition">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-orange-400 transition">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Huge Background Text */}
          <div className="absolute top-80%  z-100 left-2.5 opacity-100">
            <img src="/footerlogo.png" alt="footerlogo" className="cover" />
          </div>

        </div>
      </footer>
    </>
  );
};
