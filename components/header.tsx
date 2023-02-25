import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session, status } = useSession();
  // console.log(session, status);

  return (
    <h1 className="headerSec">
      {!session && (
        <Link href={"/api/auth/signin"}>
          <span
            style={{ marginLeft: "50px", cursor: "pointer", color: "orange" }}
            onClick={(e) => {
              e.preventDefault();
              // providing github name - we do need to go to api page to sign in by sign-in providers;
              signIn("github");
            }}
          >
            Sign in
          </span>
        </Link>
      )}
      {session && (
        <Link href={"/api/auth/signout"}>
          <span
            style={{ marginLeft: "50px", cursor: "pointer", color: "orange" }}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </span>
        </Link>
      )}
    </h1>
  );
}
