import Link from "next/link";

export default function Cars({ cars }: any) {
  const style = {
    marginTop: "50px",
  };
  const topMargin = {
    marginTop: "5px",
  };

  return (
    <>
      <h1>Cars:</h1>
      {cars.map((car: any) => {
        return (
          <div key={car.id} style={style}>
            <Link href={`/cars/${car.id}`}>
              <h1 style={topMargin}>{car.name}</h1>
              <h2 style={topMargin}>{car.price}</h2>
              <h2 style={topMargin}>{car.description}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3001/cars");
  const data = await response.json();

  return {
    props: {
      cars: data,
    },
  };
}
