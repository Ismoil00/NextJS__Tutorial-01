import Link from "next/link";
import { useRouter } from "next/router";
// import States from "components/test";
import States from "@/components/test";

function Blog() {
  const router = useRouter().asPath;
  // console.log(router)

  const {state, setState} = States();

  return (
    <>
      <Link href={`${router}/first`}>
        <h1>First Blog</h1>
      </Link>
      <Link href={`${router}/second`}>
        <h1>Second Blog</h1>
      </Link>
      <input type="text" value={state} onChange={(e) => setState(e.target.value)}/>
    </>
  );
}

export default Blog;
