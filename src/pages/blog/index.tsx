import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export function States() {
  const [state, setState] = useState<any>("");
  console.log(state);
  return {state, setState};
}

function Blog() {
  const router = useRouter().asPath;
  const {state, setState} = States();
  console.log(state)

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
