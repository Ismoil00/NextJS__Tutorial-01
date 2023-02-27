import "src/styles/globals.css";
import Footer from "components/footer";
import Header from "components/header";
import "../styles/layout.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps }: AppProps) {
  // This way we can omit the Global Layouts that should exist on every _app.js pages:
  /* if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  } */

  // This pageProps.session is the session return from getServerSideProps();
  return (
    <SessionProvider session={pageProps.session}>
      {/* This is the HTML head tag, where we define meta tags */}
      <Head>
        <title>Ismoil Next.js Tutorial</title>
        <meta
          name="description"
          content="I am learning Next.js, since I need at my work place!"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default App;
