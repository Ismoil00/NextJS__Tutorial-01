import { getSession } from "next-auth/react";

export default async function handler(req: any, res: any) {
  const session = await getSession({ req });
  console.log(req);

  if (!session) {
    res.status(401).json({ error: "Unauthenticated User!" });
  } else {
    res.status(200).json({ message: "Success", session });
  }
}
