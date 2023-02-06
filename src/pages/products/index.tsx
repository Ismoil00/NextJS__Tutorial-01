//This is called Nested Reouting;
import Link from "next/link";

function Products ({ productsId = 4 }) {
  return (
    <>
    <Link href="products/1">
      <h1 className="products">Product 1</h1>
    </Link>
    <Link href="products/2">
      <h1 className="products">Product 2</h1>
    </Link>
    <Link href="products/3">
      <h1 className="products">Product 3</h1>
    </Link>
    <Link href={`products/${productsId}`} replace /* This property takes us to the home page */ >
      <h1 className="products">Product 4</h1>
    </Link>
    </>
  )
}

export default Products;