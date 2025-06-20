import type { Product } from "../types/products"

// In-memory storage for products
const products: Product[] = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: 2499,
    imageUrl: "/diamond-solitier-ring.webp?height=400&width=400",
    category: "jewelry",
    description: "Exquisite 1-carat diamond solitaire ring in 18k white gold setting.",
  },
  {
    id: 2,
    name: "Pearl Drop Earrings",
    price: 899,
    imageUrl: "/pearl-earing.jpeg?height=400&width=400",
    category: "jewelry",
    description: "Elegant freshwater pearl drop earrings with gold accents.",
  },
  {
    id: 3,
    name: "Luxury Swiss Watch",
    price: 3299,
    imageUrl: "/swiss-watch.jpeg?height=400&width=400",
    category: "watches",
    description: "Premium Swiss-made automatic watch with leather strap.",
  },
  {
    id: 4,
    name: "Designer Silk Scarf",
    price: 299,
    imageUrl: "/silk-scarf.avif?height=400&width=400",
    category: "fashion",
    description: "Luxurious silk scarf with hand-printed artistic design.",
  },
  {
    id: 5,
    name: "Gold Tennis Bracelet",
    price: 1899,
    imageUrl: "/gold-brecelet.webp?height=400&width=400",
    category: "jewelry",
    description: "Classic tennis bracelet featuring brilliant-cut diamonds in 14k gold.",
  },
  {
    id: 6,
    name: "Vintage Emerald Necklace",
    price: 4299,
    imageUrl: "/necklace-emerald.jpg?height=400&width=400",
    category: "jewelry",
    description: "Stunning vintage-inspired emerald necklace with intricate gold work.",
  },
  {
    id: 7,
    name: "Premium Leather Handbag",
    price: 799,
    imageUrl: "/handbag.avif?height=400&width=400",
    category: "fashion",
    description: "Handcrafted Italian leather handbag with gold hardware.",
  },
]

let nextId = 9

export function getAllProducts(): Product[] {
  return products
}

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function addProduct(productData: Omit<Product, "id">): Product {
  const newProduct: Product = {
    id: nextId++,
    ...productData,
  }
  products.push(newProduct)
  return newProduct
}

export function deleteProduct(id: number): boolean {
  const index = products.findIndex((product) => product.id === id)
  if (index !== -1) {
    products.splice(index, 1)
    return true
  }
  return false
}
