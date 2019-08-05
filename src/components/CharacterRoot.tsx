import React from "react";
import { CharacterView } from "./CharacterView";
import { Character } from "effector/screen/types";

export const CharacterRoot = ({ state }: Props) => (
  <>
    {state.map(({ config, usedImage }, index) => {
      return (
        <CharacterView x={800 / index} y={0} image={config.images[usedImage]} />
      );
    })}
    }
  </>
);

interface Props {
  state: Character[];
}
