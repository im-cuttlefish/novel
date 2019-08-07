import React, { useEffect } from "react";
import { Stage } from "@inlet/react-pixi";
import { createEvent, forward } from "effector";
import { loadScenario } from "effector/loader/events";
import { CharacterRoot } from "./CharacterRoot";

const mounted = createEvent();

forward({
  from: mounted.map(() => ""),
  to: loadScenario
});

export const App = () => {
  useEffect(() => mounted(), []);

  return (
    <Stage width={800} height={700} options={{ backgroundColor: 0x777777 }}>
      <CharacterRoot />
    </Stage>
  );
};
