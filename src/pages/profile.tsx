import { useRouter } from "next/router";
import styles from '../styles/Profile.module.scss';
import { useSession, getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";


function Profile() {
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
  // Accessing .env files:
  // .env files are only Server-Side, but if you want to use them in the Client-Side then you have to use "NEXT_PUBLIC_" - prefix;
  const user = process.env.NEXT_PUBLIC_DB_USER
  const password = process.env.NEXT_PUBLIC_DB_PASSWORD

  // We can also replace the path/porter name;
  const goToAboutPage = () => {
    router.replace("/about");
  }

  // User Authentication Session: 
  // const { data, status } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkTheSession = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else if (session) {
        setLoading(false);
      }
    }

    checkTheSession();
  }, [])

  if (loading) {
    return <h1 style={{textAlign: "center", color: "red"}}>Loading the page...</h1>
  }

  return (
    <>
      <h1 className={styles.highlightscss}>Developer: {user}  <br /> Password: {password}</h1>
      <button onClick={goToAboutPage} style={style}>Go to About page</button>
    </>
  );
}

export default Profile;
