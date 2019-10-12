import React, { useEffect, useRef } from "react";
import { createEvent, forward } from "effector";
import { loadScenario } from "features/global/events";
import { CharacterRoot } from "features/character";
import { useStore } from "effector-react";
import { scenario as scenarioStore } from "features/global/store";

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
    const { width, height } = scenario.environment;
    rect.current = [width, height];
  }

  const [width, height] = rect.current;

  return (
    <div style={{ backgroundColor: "gray", width, height }}>
      <CharacterRoot />
    </div>
  );
};
