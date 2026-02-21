import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const CategoriesSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Lifestyle Card */}
          <Link href="/category/lifestyle" className="group relative h-[400px] md:h-[500px] rounded-[32px] overflow-hidden block">
            <div className="absolute inset-0 bg-gray-600">
              <img
                src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=1000"
                alt="Lifestyle Shoes"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-primary/80 transition-colors duration-500"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex justify-between items-end">
              <div>
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-2">Lifestyle<br />Shoes</h3>
                <p className="text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 relative">
                  Everyday comfort and style
                </p>
              </div>
              <div className="bg-white text-black p-4 rounded-full transform group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </Link>

          {/* Basketball Card */}
          <Link href="/category/basketball" className="group relative h-[400px] md:h-[500px] border border-white/10 rounded-[32px] overflow-hidden block">
            <div className="absolute inset-0 bg-gray-600">
              <img
                src="https://images.unsplash.com/photo-1546944357-19e99605ebed?auto=format&fit=crop&q=80&w=1000"
                alt="Basketball Shoes"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-primary/80 transition-colors duration-500"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex justify-between items-end">
              <div>
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-2">Basketball<br />Shoes</h3>
                <p className="text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 relative">
                  Performance on the court
                </p>
              </div>
              <div className="bg-white text-black p-4 rounded-full transform group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
