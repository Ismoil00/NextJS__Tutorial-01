// This is called catching all Routes by '...' dots and two square brackets [[]];
import { useRouter } from "next/router";
import { type } from "os";

function Docs() {
  const pathes = useRouter();
  const Query = useRouter().query;
  const urls = Query.main;

  const goToDocs = () => {
    pathes.push("/docs");
  };

  console.log(pathes);

  if (Array.isArray(urls)) {
    if (urls.length === 2) {
      return (
        <>
          <h1>
            Viewing feature {urls[0]} and concept {urls[1]}
          </h1>
          <button onClick={goToDocs}>Documents</button>
        </>
      );
    } else if (urls.length === 1 || urls.length > 2) {
      return (
        <>
          <h1>Viewing feature {urls[0]}</h1>
          <button onClick={goToDocs}>Documents</button>
        </>
      );
    }
  }
  return <h1>Features Page</h1>;
}

export default Docs;
