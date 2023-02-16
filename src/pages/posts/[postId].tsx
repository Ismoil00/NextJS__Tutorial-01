import { useRouter } from "next/router";

function PostID({ post }: any) {
  const router = useRouter().query.postID;
  const style = { marginTop: "30px" };

  return (
    <>
    <h1>Page number {router}</h1>
      <h2 style={style}>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export default PostID;

// This function returns an object containing two parameters: paths and fallback!!!
// Using what the values of 'getStaticPaths() paths array' the other function 'getStaticProps()' fetches data by making different an API calls at build time;
// So, We can use those fetched datas at build time for dynamic routing calling each on a page;
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post: any) => {
    return {
      params: { postID: `${post.id}` },
    }
  })
  return {
    /* paths: [
      {
        // the name of this params's key should the same as the dynamic routing component;
        params: { postID: "1" },
      },
      {
        params: { postID: "2" },
      },
      {
        params: { postID: "3" },
      },
      {
        params: { postID: "4" },
      },
      {
        params: { postID: "5" },
      },
    ], */
    paths: paths,
    fallback: false,
  };
}

// getStaticProps() function has a default prop, which is an object containing the followings:
// {
//   params: { postId: '7' },
//   locales: undefined,
//   locale: undefined,
//   defaultLocale: undefined
// }
export async function getStaticProps(context: any) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  );
  const onePost = await response.json();

  return {
    props: {
      post: onePost,
    },
  };
}


