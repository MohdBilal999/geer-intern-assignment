"use client"

import { Search } from "lucide-react"

interface SearchBoxProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  placeholder?: string
}

export default function SearchBox({ searchTerm, onSearchChange, placeholder = "Search products..." }: SearchBoxProps) {
  return (
    <div className="relative max-w-md w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="luxury-input pl-12 pr-4 py-3 text-sm placeholder-gray-400"
        placeholder={placeholder}
      />
    </div>
  )
}
