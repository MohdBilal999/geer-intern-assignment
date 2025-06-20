"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Trash2 } from "lucide-react"
import type { Product } from "../../../types/products"

interface ProductDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const initializeAndFetch = async () => {
      try {
        // Await params to get the id
        const resolvedParams = await params
        const id = resolvedParams.id

        // Fetch the product
        const response = await fetch(`/api/products/${id}`)
        if (response.ok) {
          const data = await response.json()
          setProduct(data)
        } else {
          setProduct(null)
        }
      } catch (error) {
        console.error("Error fetching product:", error)
        setProduct(null)
      } finally {
        setLoading(false)
      }
    }

    initializeAndFetch()
  }, [params])

  const handleDelete = async () => {
    if (!product || !confirm("Are you sure you want to delete this product?")) {
      return
    }

    setDeleting(true)
    try {
      const response = await fetch(`/api/products/${product.id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        router.push("/products")
      }
    } catch (error) {
      console.error("Error deleting product:", error)
    } finally {
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you&quot;re looking for doesn&quot;t exist.</p>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link href="/products" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square relative">
            <Image src={product.imageUrl || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>

          {/* Product Details */}
          <div className="p-8">
            <div className="mb-6">
              {product.category && (
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3 capitalize">
                  {product.category}
                </span>
              )}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-4xl font-bold text-blue-600 mb-6">${product.price.toLocaleString()}</p>
            </div>

            {product.description && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex-1">Add to Cart</button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="btn-danger flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Trash2 className="h-4 w-4" />
                <span>{deleting ? "Deleting..." : "Delete"}</span>
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Product ID:</span>
                  <span className="text-gray-600 ml-2">#{product.id}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Category:</span>
                  <span className="text-gray-600 ml-2 capitalize">{product.category || "Uncategorized"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}