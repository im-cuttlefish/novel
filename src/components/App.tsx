import React, { useEffect, useRef } from "react";
import { Stage } from "@inlet/react-pixi";
import { createEvent, forward } from "effector";
import { loadScenario } from "effector/loader/events";
import { CharacterRoot } from "./CharacterRoot";
import { useStore } from "effector-react";
import { scenario as scenarioStore } from "effector/loader/store";

const mounted = createEvent();

forward({
  from: mounted.map(() => ""),
  to: loadScenario
});

export const App = () => {
  const rect = useRef([0, 0]);
  const scenario = useStore(scenarioStore);

  useEffect(() => mounted(), []);

  if (scenario !== null) {
    const { width, height } = scenario;
    rect.current = [width, height];
  }

  const [width, height] = rect.current;

  return (
    <Stage
      width={width}
      height={height}
      options={{ backgroundColor: 0x777777 }}
    >
      <CharacterRoot />
    </Stage>
  );
};
