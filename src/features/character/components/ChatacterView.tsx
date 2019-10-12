import React, { useState } from "react";
import { Sprite, useTick } from "@inlet/react-pixi";

interface Props {
  x: number;
  y: number;
  alpha: number;
  image: string;
}

export const CharacterView = ({ x, y, alpha, image }: Props) => {
  const [currentX, setCurrentX] = useState(x);

  useTick(() => {
    if (currentX !== x) {
      const direction = Math.sign(x - currentX);
      setCurrentX(direction + currentX);
    }
  });

  return <Sprite x={currentX} y={y} alpha={alpha} image={image} />;
};
