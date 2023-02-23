import "@/styles/globals.css";
import Footer from "components/footer";
import Header from "components/header";
import '../styles/layout.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {

  // This way we can omit the Global Layouts that should exist on every _app.js pages:
  /* if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  } */

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
