// This is called catching all Routes by '...' dots and two square brackets [[]];

import { useRouter } from "next/router";
import { type } from "os";

function Docs() {
  const pathes = useRouter().query;
  const urls = pathes.main;

  if (Array.isArray(urls)){
    if (urls.length === 2){
      return <h1>Viewing feature {urls[0]} and concept {urls[1]}</h1>
    } else if (urls.length === 1){
      return <h1>Viewing feature {urls[0]}</h1>
    }
  } 
  return (
    <h1>Features Page</h1>
  )
}

export default Docs;