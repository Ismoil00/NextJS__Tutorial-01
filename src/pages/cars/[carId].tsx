import { useRouter } from "next/router";

export default function EachCar({ car }: any) {
  const router = useRouter();
  const style = { marginTop: "10px" };

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1 style={style}>{car.name}</h1>
      <h2 style={style}>{car.price}</h2>
      <h2 style={style}>{car.description}</h2>
    </>
  );
}

// By using "revalidate time" we trigger Incremental Static Regeneration:
// By setting "revalidate time" to 10sec it does not mean that the page re-generates after each 10 seconds => regeneration initiates after the request is done by client-side;
// Regeneration can fail and for such cases the previous cashded HTML+JSON files are served till the subsequent successful regeneration;
export async function getStaticProps(context: any) {
  const { params } = context;
  const response = await fetch(`http://localhost:4000/cars/${params.carID}`);
  const data = await response.json();

  console.log(`Regenerating for ${params.carID}`)

  return {
    props: {
      car: data,
    },
    // This way we trigger Regeneration;
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { carID: '1' } }],
    fallback: true,
  };
}
