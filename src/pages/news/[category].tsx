const NewsByCategory = ({ articles, category }: any) => {
  const style = { marginTop: "20px", marginLeft: "10px" }

  return (
    <>
      <h1 style={style}>
        Showing News for category <i>{category}</i>
      </h1>
      {articles.map((article: any) => {
        return (
          <div key={article.id}>
            <h2 style={style}>
              {article.id} {article.title}
            </h2>
            <p style={style}>{article.description}</p>
            <hr style={style}/>
          </div>
        )
      })}
    </>
  );
};

export default NewsByCategory;

export async function getServerSideProps(ctx: any) {
  const { params, req, res, query } = ctx;
  const { category } = params;
  const response = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await response.json();

  // We are consoling request cookies and sending new cookie in the response:
  // console.log(req.headers.cookie);
  // res.setHeader("Set-Cookie", ["name=Ismoil"]);

  console.log(`Pre-rendering the News Category for ${category}`)

  return {
    props: {
      articles: data,
      category,
    },
  };
}
