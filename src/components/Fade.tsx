import React, { useState, useRef, ReactNode } from "react";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import { useTick, Container } from "@inlet/react-pixi";
import { Ticker } from "pixi.js";

const { FPS } = new Ticker();

export const Fade = ({ duration, children }: Props) => {
  const [transition, setTransition] = useState<TransitionStatus>();
  const [alpha, setAlpha] = useState(0);
  const endTransition = useRef(() => {});

  useTick((delta = 0) => {
    const passed = 1000 / (FPS * delta);

    switch (transition) {
      case "entering": {
        let next = alpha + passed / duration;
        next = next < 1 ? next : 1;
        setAlpha(next);

        if (next === 1) {
          endTransition.current();
        }

        return;
      }
      case "exiting": {
        let next = alpha - passed / duration;
        next = next > 0 ? next : 0;
        setAlpha(next);

        if (next === 0) {
          endTransition.current();
        }

        return;
      }
    }
  });

  return (
    <Transition
      in
      appear
      timeout={{}}
      addEndListener={(_, done) => {
        endTransition.current = done;
      }}
    >
      {state => {
        if (state !== transition) {
          setTransition(state);
        }

        return <Container alpha={alpha} children={children} />;
      }}
    </Transition>
  );
};

interface Props {
  duration: number;
  children: ReactNode;
}
