import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const style = {
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "1rem",
    backgroundColor: "transparent",
    color: "darkblue",
    border: "1px solid darkblue",
    outline: "none",
    margin: "20px"
  }

  const router = useRouter();

  // We can push pathes/port-names to URLs;
  const makeOrder = () => {
    router.push("/products");
  }

  return (
    <nav>
      <Link href="/about">
        <h1>About page</h1>
      </Link>
      <Link href="/profile">
        <h1>Profile page</h1>
      </Link>
      <Link href="/blog">
        <h1>Blog page</h1>
      </Link>
      <Link href="/docs">
        <h1>Documents page</h1>
      </Link>
      <Link href="/houses">
        <h1>Houses page</h1>
      </Link>
      <Link href="/products">
        <h1>Products page</h1>
      </Link>
      <Link href="/products">
        <button style={style}>Place Order</button>
      </Link>
        <button style={style} onClick={makeOrder}>Place Order</button>
    </nav>
  )
}

export default Home;