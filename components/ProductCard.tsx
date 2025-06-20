import Link from "next/link"
import Image from "next/image"
import { Heart, Eye } from "lucide-react"
import type { Product } from "../types/products"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <Link href={`/products/${product.id}`}>
        <div className="luxury-card overflow-hidden">
          {/* Product Image */}
          <div className="aspect-square relative overflow-hidden bg-gray-50">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay Actions */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex space-x-3">
                <button className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors duration-200">
                  <Eye className="h-5 w-5 text-gray-700" />
                </button>
                <button className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors duration-200">
                  <Heart className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6">
            {product.category && (
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">{product.category}</p>
            )}
            <h3 className="text-lg font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-black transition-colors duration-200">
              {product.name}
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold text-gray-900">${product.price.toLocaleString()}</p>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white px-4 py-2 text-sm uppercase tracking-wider hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
