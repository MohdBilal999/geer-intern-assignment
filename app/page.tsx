import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Truck, RotateCcw, Heart } from "lucide-react";

const categories = [
 {
    name: "Jewelry",
    description: "Timeless pieces crafted with precision and elegance.",
    image: "/hero-jwellery.jpg",
    href: "/jeweller?category=jewelry",
  },
  {
    name: "Watches",
    description: "Explore luxury watches from top brands.",
    image: "/watch.avif",
    href: "/products?category=watches",
  },
  {
    name: "Fashion",
    description: "Stylish and trendy outfits for all seasons.",
    image: "/fashion.webp",
    href: "/products?category=fashion",
  },
];

const shapes = [
  { name: "Round", icon: "⭕" },
  { name: "Princess", icon: "💠" },
  { name: "Emerald", icon: "🔶" },
  { name: "Oval", icon: "⚪" },
  { name: "Pear", icon: "💧" },
  { name: "Heart", icon: "💖" },
  { name: "Marquise", icon: "🔸" },
  { name: "Cushion", icon: "◆" },
];

const features = [
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Free Shipping",
    description: "On orders over $500",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Lifetime Warranty",
    description: "On all jewelry pieces",
  },
  {
    icon: <RotateCcw className="h-6 w-6" />,
    title: "30-Day Returns",
    description: "Hassle-free returns",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Certified Quality",
    description: "Authentic & certified",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-opacity-20 bg-black" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover bg-black  opacity-60"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Timeless
              <span className="block">Elegance</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Discover our curated collection of luxury jewelry and premium
              products
            </p>
            <Link
              href="/products"
              className="inline-flex items-center bg-white text-black px-8 py-4 font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Shop By Category */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Shop By Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections designed for every occasion and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
                <div className="relative w-full h-56">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm p-2 rounded-full hover:bg-white">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-2 group-hover:text-black transition-colors duration-200">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-200">
                    {category.description}
                  </p>
                  <div className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-black">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

      {/* Shop By Shape */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Shop By Shape
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect diamond shape that speaks to your unique style
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {shapes.map((shape) => (
              <Link
                key={shape.name}
                href={`/products?shape=${shape.name.toLowerCase()}`}
                className="group text-center"
              >
                <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-3xl border-2 border-gray-100 group-hover:border-gray-300 group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  {shape.icon}
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-black transition-colors duration-200 text-sm">
                  {shape.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-700 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Stay in Touch
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Be the first to know about new collections and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border-2 border-white text-gray-200"
            />
            <button className="bg-white text-black px-8 py-3 font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
