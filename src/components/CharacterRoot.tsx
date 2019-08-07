import React from "react";
import { characterList } from "effector/screen/store";
import { useStore } from "effector-react";
import { CharacterView } from "./CharacterView";
import { Container } from "@inlet/react-pixi";

export const CharacterRoot = () => {
  const list = useStore(characterList);

  return (
    <Container>
      {list.map(({ id, config, usedImage }, index) => (
        <CharacterView
          key={id}
          x={800 / (index + 2)}
          y={0}
          image={config.images[usedImage]}
        />
      ))}
    </Container>
  );
};
