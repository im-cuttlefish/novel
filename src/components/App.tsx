import React, { useEffect, useRef } from "react";
import { createEvent, forward } from "effector";
import { loadScenario } from "features/global/events";
import { CharacterRoot } from "features/character";
import { BackgroundRoot } from "features/background";
import { useStore } from "effector-react";
import { scenario as scenarioStore } from "features/global/store";
import styled from "styled-components";

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
    <Root width={width} height={height}>
      <Layer index={1}>
        <CharacterRoot />
      </Layer>
      <Layer index={0}>
        <BackgroundRoot />
      </Layer>
    </Root>
  );
};

const Root = styled.div<{ width: number; height: number }>`
  position: relative;
  background: gray;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const Layer = styled.div<{ index: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ index }) => index};
`;
