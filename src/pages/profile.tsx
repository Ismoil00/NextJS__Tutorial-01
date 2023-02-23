import { useRouter } from "next/router";
import styles from '../styles/Profile.module.scss';


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

  // Here the browser does not accept .env varibales:
  console.log(`The user is ${user} and his/her password is ${password}`);

  // We can also replace the path/porter name;
  const goToAboutPage = () => {
    router.replace("/about");
  }

  return (
    <>
      <h1 className={styles.highlightscss}>This is Profile Page</h1>
      <button onClick={goToAboutPage} style={style}>Go to About page</button>
    </>
  );
}

export default Profile;
