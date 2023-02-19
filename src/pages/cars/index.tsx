import Link from "next/link";

export default function Cars({ cars }: any) {
  const style = {
    marginTop: "20px",
  };

  return (
    <>
      {cars.map((car: any) => {
        <Link href={`/cars/${car.id}`}>
          <div key={car.id} style={style}>
            <h1>{car.name}</h1>
            <h2>{car.price}</h2>
            <p>{car.description}</p>
          </div>
        </Link>;
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/cars");
  const data = await response.json();

  return {
    props: {
      cars: data,
    },
  };
}
