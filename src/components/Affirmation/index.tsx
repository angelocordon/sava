import AFFIRMATION from "./data";
import { useState } from "react";

export default function Affirmation() {
  const [msg, setMsg] = useState<string>(
    AFFIRMATION[Math.floor(Math.random() * AFFIRMATION.length)]
  );

  const loadMsg = () => {
    const msg = AFFIRMATION[Math.floor(Math.random() * AFFIRMATION.length)];
    setMsg(msg);
  };

  return (
    <>
      <h1 className="text-3xl font-bold">{msg}</h1>
      <button className="mt-4" onClick={loadMsg}>
        Read another →
      </button>
    </>
  );
}
