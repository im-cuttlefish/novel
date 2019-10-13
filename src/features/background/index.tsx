import React from "react";
import { useStore } from "effector-react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";
import { background } from "./store";

export const BackgroundRoot = () => {
  const image = useStore(background);
  const transitions = useTransition(image, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <Wrapper>
      {transitions.map(({ item, props, key }) => (
        <Image key={key} src={item} style={props} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = animated(styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`);
