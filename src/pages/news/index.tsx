import Link from "next/link";

const News = ({ news }: any) => {
  const style = { marginTop: "20px" }

  return (
    <>
      <h1 style={style}>News Page</h1>
      <Link href={"news/sports"}>
      <p style={style}>Sport Category</p>
      </Link>
      <Link href={"news/nature"}>
      <p style={style}>Nature Category</p>
      </Link>
      <Link href={"news/politics"}>
      <p style={style}>Politics Category</p>
      </Link>
      {news.map((n: any) => {
        return (
          <div key={n.id} style={style}>
            <h2>{n.id} {n.title} | {n.category}</h2>
          </div>
        )
      })}
    </>
  )
}

export default News;

// This getServerSideProps is only for Server-Side and won't make it to the Client-Side;
// Since it doesn't run on Clien-Side we can make API calls and querying of Database;
// It doesn't run outside of this page and doesn't run at build-time either but instead runs only at request/runtime time;
// As soos as it accepts a request at run-time, it generates HTML and sends it to the Client-Side. However, it doesn's save HTML files in the server as it does with static-side-generation using getStaticProps();
// With getServerSideProps() you have access to incoming request, which is unlike getStaticProps();
export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();

  console.log(`Pre-rendering the News Page`);

  return {
    props: {
      news: data,
    }
  }
}