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
  }
  const navStyle = {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
    padding: "20px 0",
  }

  const router = useRouter();

  // We can push pathes/port-names to URLs;
  const makeOrder = () => {
    router.push("/products");
  }

  return (
    <nav style={navStyle}>
      <Link href="/about">
        <h1>About page</h1>
      </Link>
      <Link href="/profile">
        <h1>Clien-Side Page Securing</h1>
      </Link>
      <Link href="/blog">
        <h1>Blog page</h1>
      </Link>
      <Link href="/posts">
        <h1>Posts page</h1>
      </Link>
      <Link href="/docs">
        <h1>Documents page</h1>
      </Link>
      <Link href="/products">
        <h1>Products page</h1>
      </Link>
      <Link href="/users">
        <h1>Users List Page</h1>
      </Link>
      <Link href="/cars">
        <h1>Cars Page</h1>
      </Link>
      <Link href="/news">
        <h1>News Page</h1>
      </Link>
      <Link href="/horses">
        <h1>Next.js Image Component</h1>
      </Link>
      <Link href="/dashboard">
        <h1>Client-Side Data Fetching Page (json-server)</h1>
      </Link>
      <Link href="/products">
        <button style={style}>Place Order</button>
      </Link>
      <button style={style} onClick={makeOrder}>Make Order</button>
    </nav>
  )
}

export default Home;