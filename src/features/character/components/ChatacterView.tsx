import React from "react";
import { useTransition, animated, useSpring } from "react-spring";

interface Props {
  x: number;
  y: number;
  image: string;
}

export const CharacterView = ({ x, y, image }: Props) => {
  const transition = useTransition(image, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const point = useSpring({ left: x, top: y });

  return (
    <>
      {transition.map(({ item, props, key }) => (
        <animated.img key={key} src={item} style={{ ...props, ...point }} />
      ))}
    </>
  );
};
