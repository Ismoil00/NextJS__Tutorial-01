import Link from "next/link";
import styles from '../styles/About.module.css';

function About () {
  return (
    <>
    <h1 className={styles.highlight}>This is About Page</h1>
    <Link href="/">
    <button className="btn btn-primary">Home Page</button>
    </Link>
    </>
  )
}

export default About;