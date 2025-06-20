import { NextResponse } from "next/server"
import { getProductById, deleteProduct } from "../../../../lib/products" // update if needed

interface Params {
  id: string
}

export async function GET(
  request: Request,
  { params }: { params: Params }
) {
  try {
    const id = parseInt(params.id)
    const product = await getProductById(id) // Make sure it's async

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
  request: Request,
  { params }: { params: Params }
) {
  try {
    const id = parseInt(params.id)
    const success = await deleteProduct(id) // Make sure it's async

    if (!success) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Product deleted successfully" })
  } catch (err) {
    console.error("DELETE Error:", err)
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
