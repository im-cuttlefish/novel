import React from "react";
import { CharacterConfig } from "types";
import { Character } from "./Character";

export const CharacterRoot = ({ state }: Props) => (
  <>
    {state.map(({ config, usedImage }, index) => {
      return (
        <Character x={800 / index} y={0} image={config.assets[usedImage]} />
      );
    })}
    }
  </>
);

interface Props {
  state: CharacterState[];
}

interface CharacterState {
  config: CharacterConfig;
  usedImage: string;
}
