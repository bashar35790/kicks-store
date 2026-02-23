import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    title: "Good Quality",
    rating: 5,
    text: "I highly recommend shopping from kicks",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150",
    shoeImage: "/review1.png",
  },
  {
    id: 2,
    title: "Good Quality",
    rating: 5,
    text: "I highly recommend shopping from kicks",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    shoeImage: "/review2.png",
  },
  {
    id: 3,
    title: "Good Quality",
    rating: 5,
    text: "I highly recommend shopping from kicks",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    shoeImage: "/review3.png",
  },
];

export const ReviewsSection = () => {
  return (
    <section className="bg-[#e8e6df] px-10 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-7xl font-semibold uppercase tracking-tight text-gray-900 leading-none">
          REVIEWS
        </h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-lg transition-colors duration-200 cursor-pointer">
          SEE ALL
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="h-96 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Top info row */}
            <div className="flex justify-between items-start p-8 pb-4">
              <div className="flex-1 pr-3">
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  {review.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2 leading-snug">
                  {review.text}
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < review.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm font-semibold text-gray-900 ml-1">
                    {review.rating}.0
                  </span>
                </div>
              </div>
              <img
                src={review.avatar}
                alt="Reviewer avatar"
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
            </div>

            {/* Shoe image */}
            <div className="w-full h-full overflow-hidden">
              <img
                src={review.shoeImage}
                alt="Reviewed shoe"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
