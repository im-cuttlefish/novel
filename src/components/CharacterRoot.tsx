import React from "react";
import { characterList } from "effector/screen/store";
import { useStore } from "effector-react";
import { CharacterView } from "./CharacterView";
import { scenario as scenarioStore } from "effector/loader/store";
import { update } from "effector/engine/events";

export const CharacterRoot = () => {
  const scenario = useStore(scenarioStore);
  const list = useStore(characterList);

  if (scenario === null) {
    return <></>;
  }

  const { width, height } = scenario;

  return (
    <>
      {list.map(({ id, config, usedImage }, index) => {
        const cWidth = config.width;
        const cHeight = config.height;

        return (
          <CharacterView
            key={id}
            x={width / (index + 2) - cWidth / 2}
            y={height - cHeight}
            image={config.images[usedImage]}
            done={() => update()}
          />
        );
      })}
    </>
  );
};
