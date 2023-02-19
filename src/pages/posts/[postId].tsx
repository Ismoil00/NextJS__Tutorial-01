import { useRouter } from "next/router";

function PostID({ post }: any) {
  const router = useRouter();
  const post_id = useRouter().query.postID;
  const style = { marginTop: "30px" };

  // Initial fallback version of 'at build time not generated pages' and it's must;
  // It runs untill the HTML and JSON files are generated and served;
/*   if (router.isFallback) {
    return <h1>Loading...</h1>
  } */

  return (
    <>
    <h1>Page number {post_id}</h1>
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
// *** When fallback is set to FALSE => 1) the getStaticProps() generates HTML of paths returned by getStaticPaths(); 2) and those paths not returned from getStaticPaths() will result in 404 since they are not generated at build time and won't be at any client side requests;
// *** When fallback is set to TRUE => 1) the getStaticProps() generates HTML of paths returned by getStaticPaths(); 2) but for those pages not generated at build time, they won't result in 404 page - instead next.js provides a "fallback version" of such page on the first request and then generates it; 3) So, as soon as the request is made by the Browser side, HTML and JSON files are generated for the requested page at runtime and then delevered to the Browser right away; 4) as soon as the HTML and JSON files are generated, the fallback version for the page is neglected and the generated files are served;
// *** When fallback is set to 'blocking' => this one is the same as set to 'true', however the only difference is that there is not any initial fallback version in this case; 
export async function getStaticPaths() {
/*const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
   const paths = data.map((post: any) => {
    return {
      params: { postID: `${post.id}` },
    }
  }) */
  return {
    // paths: paths,
    paths: [
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
    ],
    fallback: false,
    // fallback: true,
    // fallback: 'blocking',
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
  const data = await response.json();

  // this code returns custom 404 page and without it the page runs, not recieving anythng from getStaticProps() though;
  if (!data.id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: data,
    },
  };
}


