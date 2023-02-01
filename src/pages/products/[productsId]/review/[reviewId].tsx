// This is called Nested Dynamic Routes;
import { useRouter } from "next/router";

function ReviewDetails() {
  const { productsId, reviewId} = useRouter().query;
  return(
    <h1>Review {reviewId} for {productsId} </h1>
  )
}

export default ReviewDetails;