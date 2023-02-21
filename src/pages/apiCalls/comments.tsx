import { useState } from "react";

export default function RenderComments() {
  const style = { marginTop: "10px", marginLeft: "15px" };
  const [commments, setComments] = useState<any[]>([]);
  const [comment, setComment] = useState<string>("");

  // API GET Request:
  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  const clearComents = () => {
    setComments([]);
  };

  // API POST Request:
  const submitComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setComment("");
    fetchComments();
  };

  // API DELETE Request:
  const deleteComment = async (id: any) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    fetchComments();
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={style}
      />
      <button onClick={submitComment} style={style}>
        Submit Comment
      </button>
      <br />
      <button onClick={fetchComments} style={style}>
        Load Comments
      </button>
      <button onClick={clearComents} style={style}>
        Clear Comments
      </button>
      {commments.map((com: any) => {
        return (
          <div key={com.id}>
            <div>
              {com.id}: {com.text}
              <button onClick={() => deleteComment(com.id)} style={style}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
