import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IoIosArrowBack } from "react-icons/io";

export const CategoriesSection = () => {
  return (
    <section className=" bg-[#232321] pt-24 pl-24 text-white">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-7xl md:text-5xl font-semibold uppercase tracking-tight">
          Categories
        </h2>
        <div className="flex items-center gap-4 text-gray-400 cursor-pointer mr-5">
          <div className="bg-[#E7E7E3] p-2.5 rounded-sm">
          <IoIosArrowBack className="text-3xl" />
          </div>
          <div className="bg-[#E7E7E3] p-2.5 rounded-sm">
          <IoIosArrowBack className="text-3xl rotate-180" />
          </div>
        </div>
      </div>
      <div className=" bg-[#E7E7E3] rounded-tl-2xl max-w-7xl mx-auto rounded-tl-2xl">


        <div className="grid grid-cols-1 md:grid-cols-2 rounded-tl-2xl overflow-hidden">
          {/* Lifestyle Card */}
          <Link href="/category/lifestyle" className="group relative h-[400px] md:h-[500px] overflow-hidden block">
            <div className="absolute inset-0 bg-gray-600">
              <img
                src="/catagory.jpg"
                alt="Lifestyle Shoes"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-primary/80 transition-colors duration-500"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex justify-between items-end">
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold uppercase mb-2">Lifestyle<br />Shoes</h3>
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
          <Link href="/category/basketball" className="group relative h-[400px] md:h-[500px] border border-white/10  overflow-hidden block">
            <div className="absolute inset-0 bg-gray-600">
              <img
                src="/catagory2.png"
                alt="Basketball Shoes"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-primary/80 transition-colors duration-500"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex justify-between items-end">
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold uppercase mb-2">Basketball<br />Shoes</h3>
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
