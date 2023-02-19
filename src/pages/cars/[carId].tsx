import { useRouter } from "next/router";

export default async function EachCar({ car }: any) {
  const router = useRouter();
  const style = { marginTop: "10px" };
  console.log(car);

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

export async function getStaticProps(context: any) {
  const { params } = context;
  const response = await fetch(`http://localhost:3001/cars/${params.carId}`);
  const data = await response.json();

  return {
    props: {
      car: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { carId: '1' } }],
    fallback: true,
  };
}
