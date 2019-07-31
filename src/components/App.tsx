import React, { useState, useEffect } from "react";
import { Stage } from "@inlet/react-pixi";
import { Character } from "./Character";
import body from "../assets/taro/body.png";

export const App = () => {
  const [x, setX] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setX(100);
    }, 3000);
  }, []);

  return (
    <Stage width={800} height={700} options={{ backgroundColor: 0x777777 }}>
      <Character x={x} y={0} image={body} />
    </Stage>
  );
};
