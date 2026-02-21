import ProductCard from "@/components/product/ProductCard";
import { Button } from "../ui/Button";

async function getNewDrops() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products/?offset=0&limit=4", {
      next: { revalidate: 3600 }
    });
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  } catch (error) {
    console.error("Error fetching new drops:", error);
    return [];
  }
}

export const NewDrops = async () => {
  const products = await getNewDrops();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold uppercase tracking-tight text-gray-900">
          Don't Miss Out<br />
          <span>New Drops</span>
        </h2>
        <Button size="lg" className="rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer">
          Shop New Drops
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button className="md:hidden mt-8 w-full border-2 border-gray-900 text-gray-900 py-4 font-bold rounded-2xl uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors">
        Shop All Drops
      </button>
    </section>
  );
}
