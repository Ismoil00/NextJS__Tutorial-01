import { useState } from "react";
import { getSession, signIn } from "next-auth/react";

export function States() {
  const [state, setState] = useState<any>("");
  console.log(state);
  return { state, setState };
}

export default function Blog({msg, session}:any) {
  const { state, setState } = States();
  console.log(msg);
  console.log("PAGE");
  console.log(msg);

  // with this method the page runs first for less than a second and then the rediraction happens!
  /* if (!session) {
    signIn();
  } */

  return (
    <>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </>
  );
}

// While calling getSession() Server-side, we have to pass as an argument the request message - in order to define the identity of the user!
export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);
  console.log(ctx);

  // This is Server-side Page Securing:
  // it solves the problem of "page reload for less than a second";
  if (!session) {
    return {
      redirect: {
        destination: "api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      }
    }
  }

  const msg = "getServerSideProps()";

  return {
    props: {
      session,
      msg,
    }
  }
}
