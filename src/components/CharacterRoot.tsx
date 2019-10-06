import React from "react";
import { characterList } from "effector/screen/store";
import { useStore } from "effector-react";
import { CharacterView } from "./CharacterView";
import { scenario as scenarioStore } from "effector/loader/store";
import { update } from "effector/engine/events";
import { Leaper, LeaperContainer, cubic } from "react-leaper";

const addMotion = cubic(1000, { alpha: [0, 1] });
const removeMotion = cubic(1000, { alpha: [1, 0] });

export const CharacterRoot = () => {
  const scenario = useStore(scenarioStore);
  const list = useStore(characterList);

  if (scenario === null) {
    return <></>;
  }

  const { width, height } = scenario;

  return (
    <LeaperContainer>
      {list.map(({ id, config, usedImage }, index) => {
        const cWidth = config.width;
        const cHeight = config.height;

        return (
          <Leaper
            key={id}
            add={addMotion}
            remove={removeMotion}
            onAdded={() => update()}
          >
            {style => (
              <CharacterView
                x={width / (index + 2) - cWidth / 2}
                y={height - cHeight}
                alpha={+style.alpha}
                image={config.images[usedImage]}
              />
            )}
          </Leaper>
        );
      })}
    </LeaperContainer>
  );
};
