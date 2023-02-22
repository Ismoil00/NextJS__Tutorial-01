export default function EachComment({ comment }: any) {
  const style = { margin: "20px" }
  return (
    <div style={style}>
      {comment.id}: {comment.text}
    </div>
  );
}

// We should not call our own API Route for delay:
export async function getServerSideProps(context: any) {
  const { params } = context;
  const { commentID } = params;
  const res = await fetch(`http://localhost:3000/api/comments/${commentID}`);
  const data = await res.json();

  return {
    props: {
      comment: data,
    },
  };
}
