import React, { useState } from "react";
import { Sprite, useTick } from "@inlet/react-pixi";
import { Fade } from "./Fade";

interface Props {
  x: number;
  y: number;
  image: string;
  done?: () => void;
}

export const CharacterView = ({ x, y, image, done }: Props) => {
  const [currentX, setCurrentX] = useState(x);

  useTick(() => {
    if (currentX !== x) {
      const direction = Math.sign(x - currentX);
      setCurrentX(direction + currentX);
    }
  });

  return (
    <Fade duration={1000} done={done}>
      <Sprite x={currentX} y={y} image={image} />
    </Fade>
  );
};
