"use client"

import { useState, useEffect } from "react"
import type { Product } from "../../types/products"
import ProductList from "../../components/ProductList"
import SearchBox from "../../components/SearchBox"
import AddProductForm from "../../components/AddProductForm"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const categories = ["all", "electronics", "jewelry", "fashion", "watches"]

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api")
      const data = await response.json()
      setProducts(data)
      setFilteredProducts(data)
    } catch (error) {
      console.error("Error fetching products:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.category && product.category.toLowerCase().includes(searchTerm.toLowerCase())),
    )

    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category?.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredProducts(filtered)
  }, [products, searchTerm, selectedCategory, sortBy])

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Our Collection</h1>
          <p className="text-lg text-gray-600">Discover our carefully curated selection of premium products</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} placeholder="Search products..." />

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="luxury-input min-w-[150px]"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="luxury-input min-w-[150px]">
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <AddProductForm onProductAdded={fetchProducts} />
          </div>

          <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
              {searchTerm && (
                <span className="ml-2">
                  for &quot;<span className="font-medium">{searchTerm}</span>&quot;
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <ProductList products={filteredProducts} />
      </div>
    </div>
  )
}
