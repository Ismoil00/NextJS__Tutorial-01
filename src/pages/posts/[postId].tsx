

export default function PostID({ post }: any) {
  return (
    <>
      <div key={post.id} style={{ marginTop: "30px" }}>
        <h3>
          {post.id}. {post.title}
        </h3>
        <p>{post.body}</p>
      </div>
    </>
  );
}

export async function getStaticProps(context: any) {
  const { params } = context;
  // console.log(params);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    params: {
      post: data,
    },
  };
}
