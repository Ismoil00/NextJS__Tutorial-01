import { useRouter } from "next/router";

function Houses() {
  const pathes = useRouter().query;
  const urls = pathes.app;

  if (Array.isArray(urls)) {
    if (urls[0] === "10") {
      return <h1>House for {urls[0]} thousand</h1>;
    } else if (urls[0] === "100") {
      return <h1>House for {urls[0]} thousand</h1>;
    }
  }

  return (
    <>
      <h1>House for 10 thousand</h1>
      <h1>House for 100 thousand</h1>
    </>
  );
}

export default Houses;
