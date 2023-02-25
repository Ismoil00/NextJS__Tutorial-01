import { useState } from "react";
import { getSession, signIn } from "next-auth/react";

export function States() {
  const [state, setState] = useState<any>("");
  console.log(state);
  return { state, setState };
}

export default function Blog({session}:any) {
  const { state, setState } = States();
  console.log(session);

  if (!session) {
    return signIn();
  }

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
  console.log(session);

  return {
    props: {
      session,
    }
  }
}
