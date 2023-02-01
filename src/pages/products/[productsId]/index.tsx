import { useRouter } from "next/router";

function ProductsDetail () {

  const router = useRouter().query.productsId;
  console.log(router);

  return (
    <h1>Details about {router} Product</h1>
  )
} 

export default ProductsDetail;