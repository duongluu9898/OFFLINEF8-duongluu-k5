import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function Content() {
  const { setMsg } = useContext(AppContext);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam odio
        enim fuga qui facere earum natus nostrum itaque illo officiis.
      </p>
      <button onClick={() => setMsg("This is update")}>Click me</button>
    </div>
  );
}
