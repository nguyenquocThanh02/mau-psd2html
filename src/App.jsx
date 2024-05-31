import "./App.css";
import "./index.css";
import "./assets/react.svg";
import "./assets/The_Playground";
import image from "./assets/The_Playground.png";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState(false);

  const a = [
    {
      x: "a",
      y: "b",
    },
  ];

  if (a === b) {
    console.log("ạdjdf");
  }

  for (x = 1; x <= 2; x++) {
    let m = 1;
    console.log(m);
  }

  console.log(m);

  const h = [a, c, b];

  return (
    <>
      <img
        src={image}
        alt=""
        style={{ width: "100%" }}
        onClick={setState(!state)}
      />
      {state}
    </>
  );
};

export default App;
