import React, { useState } from "react";
import { Sprite, useTick } from "@inlet/react-pixi";
import { Fade } from "./Fade";

export const Character = ({ x, y, image }: Props) => {
  const [currentX, setCurrentX] = useState(x);

  useTick(() => {
    if (currentX !== x) {
      const direction = Math.sign(x - currentX);
      setCurrentX(direction + currentX);
    }
  });

  return (
    <Fade duration={1000}>
      <Sprite x={currentX} y={y} image={image} />
    </Fade>
  );
};

interface Props {
  x: number;
  y: number;
  image: string;
}
