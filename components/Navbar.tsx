"use client"
import Link from "next/link"
import { Search, User, ShoppingBag, Heart, ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        <p>✨ FREE SHIPPING ON ORDERS OVER $500 + 30% OFF SELECTED ITEMS</p>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-display font-bold text-black">Naksh</span>
              <span className="text-2xl font-display font-light text-gray-600">Jewels</span>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/products"
                className="text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors duration-200"
              >
                New Arrivals
              </Link>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors duration-200">
                  Collections
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href="/products?category=jewelry"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Jewelry
                  </Link>
                  <Link
                    href="/products?category=watches"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Watches
                  </Link>
                  <Link
                    href="/products?category=electronics"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Electronics
                  </Link>
                  <Link
                    href="/products?category=fashion"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Fashion
                  </Link>
                </div>
              </div>

              <Link
                href="/products?category=jewelry"
                className="text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors duration-200"
              >
                Jewelry
              </Link>
              <Link
                href="/products?category=watches"
                className="text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors duration-200"
              >
                Watches
              </Link>
              <Link
                href="/products?sale=true"
                className="text-red-600 hover:text-red-700 font-medium text-sm uppercase tracking-wider transition-colors duration-200"
              >
                Sale
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors duration-200"
              >
                Contact
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-700 hover:text-black transition-colors duration-200">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-black transition-colors duration-200">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-black transition-colors duration-200">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-black transition-colors duration-200 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 text-gray-700 hover:text-black transition-colors duration-200"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-3 space-y-4">
              <Link
                href="/products"
                className="block text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors duration-200"
                onClick={toggleMenu}
              >
                New Arrivals
              </Link>

              <div className="space-y-2">
                <div className="flex items-center text-gray-700 font-medium text-sm uppercase tracking-wider">
                  Collections
                </div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/products?category=jewelry"
                    className="block text-gray-700 hover:text-black text-sm transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Jewelry
                  </Link>
                  <Link
                    href="/products?category=watches"
                    className="block text-gray-700 hover:text-black text-sm transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Watches
                  </Link>
                  <Link
                    href="/products?category=electronics"
                    className="block text-gray-700 hover:text-black text-sm transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Electronics
                  </Link>
                  <Link
                    href="/products?category=fashion"
                    className="block text-gray-700 hover:text-black text-sm transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Fashion
                  </Link>
                </div>
              </div>

              <Link
                href="/products?category=jewelry"
                className="block text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors duration-200"
                onClick={toggleMenu}
              >
                Jewelry
              </Link>
              <Link
                href="/products?category=watches"
                className="block text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors duration-200"
                onClick={toggleMenu}
              >
                Watches
              </Link>
              <Link
                href="/products?sale=true"
                className="block text-red-600 hover:text-red-700 font-medium text-sm uppercase tracking-wider transition-colors duration-200"
                onClick={toggleMenu}
              >
                Sale
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors duration-200"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}