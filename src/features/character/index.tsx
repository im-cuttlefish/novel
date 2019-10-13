import React from "react";
import { useStore } from "effector-react";
import { useTransition, animated } from "react-spring";
import { scenario as scenarioStore } from "features/global/store";
import { characterList } from "./store";
import { CharacterView } from "./components/ChatacterView";

export const CharacterRoot = () => {
  const scenario = useStore(scenarioStore);
  const list = useStore(characterList);

  const transitions = useTransition(list, item => item.id, {
    initial: { position: "absolute" },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  if (scenario === null) {
    return <></>;
  }

  const { width, height } = scenario.environment;

  console.log(list);

  return (
    <div style={{ position: "relative" }}>
      {transitions.map(({ item, key, props }, index, { length }) => {
        const { config, usedImage } = item;
        const cWidth = config.width;
        const cHeight = config.height;

        return (
          <animated.div key={key} style={props}>
            <CharacterView
              x={(width * (index + 1)) / (length + 1) - cWidth / 2}
              y={height - cHeight}
              image={config.images[usedImage]}
            />
          </animated.div>
        );
      })}
    </div>
  );
};
