import Link from "next/link";
import { useRouter } from "next/router";

function Blog() {
  const router = useRouter().asPath;
  console.log(router)

  return (
    <>
      <Link href={`${router}/first`}>
        <h1>First Blog</h1>
      </Link>
      <Link href={`${router}/second`}>
        <h1>Second Blog</h1>
      </Link>
    </>
  );
}

export default Blog;
