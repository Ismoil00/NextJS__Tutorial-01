import "@/styles/globals.css";
import type { AppProps } from "next/app";


function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <h1 className="appH1">This is from App page</h1>
      <Component {...pageProps} />
    </>
  );
}

export default App;
