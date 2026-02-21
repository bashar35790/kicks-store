import { Star } from "lucide-react";

export const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Goodman JW",
      rating: 5,
      text: "Highly recommended. The cushioning on the Air Max is unparalleled. Best purchase this year!",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150",
      shoeImage: "https://images.unsplash.com/photo-1552346154-21d32810baa3?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      name: "Alexia S.",
      rating: 5,
      text: "Love the sleek design and how lightweight they are. Perfect for my daily runs and casual outings.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      shoeImage: "https://images.unsplash.com/photo-1600185365483-26d7a4ccf515?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      name: "Mark T.",
      rating: 4,
      text: "Great quality materials. They look even better in person. Had to size up half a size though.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      shoeImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900">
            Reviews
          </h2>
          <button className="hidden md:block text-gray-600 hover:text-primary font-bold transition-colors uppercase tracking-wider text-sm">
            See All Reviews
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover mb-4 ring-4 ring-gray-50"
              />
              <h3 className="font-bold text-gray-900 text-lg mb-1">{review.name}</h3>

              <div className="flex gap-1 mb-4 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>

              <p className="text-gray-600 text-sm mb-8 flex-grow">"{review.text}"</p>

              <div className="w-full h-40 bg-gray-50 rounded-2xl overflow-hidden mt-auto">
                <img
                  src={review.shoeImage}
                  alt="Reviewed Shoe"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
