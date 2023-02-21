import { useState } from "react";
import { useRouter } from "next/router";

export default function Events({ eventsList }: any) {
  const style = { marginTop: "30px" };
  const style2 = { marginTop: "5px" };
  const [events, setEvents] = useState<any>(eventsList);
  const router = useRouter();

  const fetchData = async (category: string) => {
    const response = await fetch(
      `http://localhost:4000/events?category=${category}`
    );
    const data = await response.json();
    setEvents(data);
    router.push(`/events?category=${category}`)
  };

  const displayAll = () => {
    router.push("/events")
    setEvents(eventsList)
    console.log("it is entering")
  }

  return (
    <>
      <button onClick={displayAll}>Show All</button>
      <button onClick={() => fetchData("sports")}>Sports Category</button>
      <button onClick={() => fetchData("nature")}>Nature Category</button>
      <button onClick={() => fetchData("technology")}>Technology Category</button>
      <button onClick={() => fetchData("food")}>Food Category</button>
      <h1 style={style}>Events List:</h1>
      {events.map((event: any) => {
        return (
          <div key={event.id} style={style}>
            <h2 style={style2}>
              {event.id}. {event.title} <u>{event.date}</u>
            </h2>
            <h2 style={style2}>{event.category}</h2>
            <p style={style2}>{event.description}</p>
            <hr style={style2} />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const { query } = ctx;
  const { category } = query;
  const response = await fetch(`http://localhost:4000/events`);
  const data = await response.json();

  return {
    props: {
      eventsList: data,
    },
  };
}
