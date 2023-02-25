import { useState } from "react";


export default function States() {
  const [state, setState] = useState<any>("");
  console.log(state);
  return {state, setState};
}