import type { Product } from "../types/products"

// Define a type for product input (without id)
type ProductInput = Omit<Product, "id">

// Validate product image URL format
const isValidImageUrl = (url: string): boolean => {
  return url.startsWith('/') && (url.endsWith('.webp') || url.endsWith('.jpeg') || 
         url.endsWith('.jpg') || url.endsWith('.avif'))
}

// Immutable initial products data
const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: 2499,
    imageUrl: "/diamond-solitier-ring.webp",
    category: "jewelry",
    description: "Exquisite 1-carat diamond solitaire ring in 18k white gold setting.",
  },
  // ... other products (remove query parameters from image URLs)
] as const

// Create a copy of initial products that we can modify
let products: Product[] = [...INITIAL_PRODUCTS]
let nextId = products.length > 0 
  ? Math.max(...products.map(p => p.id)) + 1 
  : 1

export function getAllProducts(): Product[] {
  return [...products] // Return a copy to prevent mutation
}

export function getProductById(id: number): Product | undefined {
  if (typeof id !== 'number' || id <= 0) {
    throw new Error('Invalid product ID')
  }
  return products.find((product) => product.id === id)
}

export function addProduct(productData: ProductInput): Product {
  // Validate input
  if (!productData.name || productData.name.trim().length === 0) {
    throw new Error('Product name is required')
  }
  
  if (typeof productData.price !== 'number' || productData.price <= 0) {
    throw new Error('Valid price is required')
  }
  
  if (!isValidImageUrl(productData.imageUrl)) {
    throw new Error('Valid image URL is required')
  }
  
  if (!productData.category) {
    throw new Error('Category is required')
  }

  const newProduct: Product = {
    id: nextId++,
    ...productData,
    name: productData.name.trim(),
  }
  
  products.push(newProduct)
  return { ...newProduct } // Return a copy
}

export function deleteProduct(id: number): boolean {
  if (typeof id !== 'number' || id <= 0) {
    return false 
  }

  const index = products.findIndex((product) => product.id === id)
  if (index === -1) return false
  
  products = products.filter(product => product.id !== id)
  return true
}

// Utility function for testing/reset
export function _resetProducts() {
  products = [...INITIAL_PRODUCTS]
  nextId = products.length > 0 
    ? Math.max(...products.map(p => p.id)) + 1 
    : 1
}