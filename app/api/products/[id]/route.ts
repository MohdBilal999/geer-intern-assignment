import { NextRequest, NextResponse } from "next/server"
import { getProductById, deleteProduct } from "../../../../lib/products" // adjust path as needed

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const productId = parseInt(id)
    const product = await getProductById(productId)
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }
    return NextResponse.json(product)
  } catch (err) {
    console.error("GET Error:", err)
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const productId = parseInt(id)
    const success = await deleteProduct(productId)
    if (!success) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }
    return NextResponse.json({ message: "Product deleted successfully" })
  } catch (err) {
    console.error("DELETE Error:", err)
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}