import Link from "next/link";
import styles from '../styles/About.module.css';
import Footer from "components/footer";

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

 // This way we can omit the Global Layouts that should exist on every _app.js pages:
About.getLayout = function PageLayout(page: any) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}