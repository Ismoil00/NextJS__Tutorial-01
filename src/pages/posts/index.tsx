import Link from "next/link";

export default function Posts({ posts }: any) {
  const style = { marginTop: "30px" };

  return (
    <>
      <h1>Post Page: </h1>
      {posts.map((post: any) => {
        return (
          <div key={post.id} style={style}>
            <Link href={`posts/${post.id}`}>
              <h3>
                {post.id}. {post.title}
              </h3>
              <p>{post.body}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
}

// || Dynamic Routing with SSG: ******************************************
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}