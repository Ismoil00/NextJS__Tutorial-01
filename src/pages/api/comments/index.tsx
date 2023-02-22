import { comments } from "data/comments";

export default function handler (req: any, res: any) {
  if (req.method === "GET") {
    //GET Request Handling:
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    // POST Request Handling:
    const comment = req.body.comment;
    const newComment = {
      id: comments.length ? comments[comments.length - 1].id + 1 : 1,
      text: comment,
    }
    comments.push(newComment);
    //After handling POST Request we send 201 HTTP Protocole;
    res.status(201).json(newComment);
  } else if (req.method === "PATCH") {
    //PATCH Request Handling:
    const id = req.body.id;
    const text = req.body.text;
    const newComment = {
      id: id,
      text: text,
    }
    const i = comments.findIndex((com:any) => com.id === parseInt(id))
    comments.splice(i, 1, newComment);
    res.status(200).json(newComment)
  }
}