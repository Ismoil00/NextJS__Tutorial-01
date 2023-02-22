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
