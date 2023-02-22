import { comments } from "data/comments";

export default function handler(req:any, res:any) {
  const { commentID } = req.query;

  if (req.method === "GET"){
    const comment = comments.find((com: any) => com.id === parseInt(commentID));
    console.log(comment);
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    // API DELETE Request Handler:
    const comment = comments.find((com:any) => com.id === parseInt(commentID));

    const index = comments.findIndex((com:any) => com.id === parseInt(commentID));
    comments.splice(index, 1);

    res.status(200).json(comment);
  }
} 