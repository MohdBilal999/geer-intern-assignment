import { NextResponse } from "next/server"
import { getProductById, deleteProduct } from "../../../../lib/products" // adjust path as needed

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const id = parseInt(context.params.id)
    const product = await getProductById(id)

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
  context: { params: { id: string } }
) {
  try {
    const id = parseInt(context.params.id)
    const success = await deleteProduct(id)

    if (!success) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Product deleted successfully" })
  } catch (err) {
    console.error("DELETE Error:", err)
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
