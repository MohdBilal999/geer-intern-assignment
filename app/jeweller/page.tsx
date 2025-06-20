import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";

const products = [
  {
    name: "Diamond Necklace",
    description: "A beautifully crafted necklace with brilliant-cut diamonds set in 18K white gold.",
    image: "/jewels/diamond-necklace.jpg",
    href: "/products/diamond-necklace",
  },
  {
    name: "Gold Bangle",
    description: "24K handcrafted gold bangle, perfect for traditional and modern outfits.",
    image: "/jewels/gold-bangle.jpg",
    href: "/products/gold-bangle",
  },
  {
    name: "Emerald Ring",
    description: "Elegant emerald centerpiece ring set in yellow gold with tiny diamond accents.",
    image: "/jewels/emerald-ring.jpg",
    href: "/products/emerald-ring",
  },
  {
    name: "Pearl Earrings",
    description: "Classic white pearl earrings with delicate gold detailing.",
    image: "/jewels/pearl-earrings.jpg",
    href: "/products/pearl-earrings",
  },
];

export default function JewelleryPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-4">
            Exquisite Jewelry Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover timeless pieces that blend tradition and modern elegance. Each piece is crafted with precision to elevate your style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 bg-white/70 p-2 rounded-full hover:bg-white">
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="inline-flex items-center px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  View Details <ShoppingBag className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
