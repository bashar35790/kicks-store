import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col text-center md:text-left mb-8">
        <h1 className=" text-[200px] font-bold text-center leading-tight text-gray-900 uppercase">
          Do it <span className="text-primary">Right</span>
        </h1>
      </div>

      <div className="relative w-full h-[500px] md:h-[700px] rounded-[30px] overflow-hidden group shadow-2xl">
        {/* Main Background Image */}

        <div className="absolute inset-0 bg-gray-200">
          <img
            src="/hero.png"
            alt="Nike Air Max"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between z-10">
          <div className="text-white max-w-lg mb-8 md:mb-0">
            <h2 className="text-7xl font-semibold md:text-6xl uppercase mb-4 leading-tight tracking-tight">
              Nike Air Max
            </h2>
            <p className=" text-[#E7E7E3] text-lg mb-8 font-medium">
              Nike introducing the new air max for <br /> everyone's comfort
            </p>
            <Button size="lg" className="rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer">
              Shop Now
            </Button>
          </div>

          {/* Small side thumbnails */}
          <div className="flex gap-4 md:flex-col md:self-end">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden cursor-pointer hover:border-white transition-colors">
              <img
                src="/hero-show-1.png"
                alt="Thumbnail 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-transparent cursor-pointer hover:border-white transition-colors">
              <img
                src="/hero-show-2.png"
                alt="Thumbnail 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>


        {/* tag */}
        <div className="absolute top-56 -left-22">
          <div className="bg-[#232321] rounded-b-lg px-4 py-2 shadow-lg -rotate-90">
            <span className="text-[#E7E7E3] text-[16px] font-medium">Nike product of the year </span>
          </div>
        </div>

      </div>
    </section>
  );
}