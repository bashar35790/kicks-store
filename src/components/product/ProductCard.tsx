import Link from "next/link";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category?: { id: number; name: string; image: string };
    images?: string[];
}

interface ProductCardProps {
    product: Product;
    index?: number;
}

const fallbackImages = [
    "/product1.jpg",
    "/product2.jpg",
    "/product3.jpg",
    "/product4.jpg",
];

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const cleanedImage = product.images?.[0]?.replace(/[\[\]"]/g, "");

    const imageUrl =
        cleanedImage && cleanedImage.length > 0
            ? cleanedImage
            : fallbackImages[index % fallbackImages.length];

    return (
        <div className="w-full max-w-[320px] h-[486px]">

            {/* Image Card */}
            <div className="relative h-fit bg-[#f3f3f3] rounded-[28px] overflow-hidden group border-8 border-[#FAFAFA]">

                {/* Curved Badge */}
                <div className="absolute top-0 left-0">
                    <div className="bg-indigo-600 text-white text-xs font-bold px-5 py-2 rounded-br-[30px] rounded-tl-[28px]">
                        New
                    </div>
                </div>

                {/* Product Image */}
                <div className="flex items-center justify-center h-fit">
                    <img
                        src={imageUrl}
                        alt={product.title}
                        className="object-cover w-[302px] h-[334px] transition-transform duration-500 group-hover:scale-110 rounded-[24px]"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="mt-5">
                <h3 className="font-semibold text-black text-lg leading-snug uppercase">
                    {product.title}
                </h3>
            </div>

            {/* Button */}
            <Link href={`/products/${product.id}`}>
                <div className="mt-4 bg-[#232321] text-white rounded-xl px-5 py-3 flex items-center justify-between hover:opacity-90 transition">
                    <span className="text-sm font-semibold tracking-wide">
                        VIEW PRODUCT
                    </span>
                    <span className="text-[#FF8D28] font-bold">
                        ${product.price}
                    </span>
                </div>
            </Link>
        </div>
    );
}
