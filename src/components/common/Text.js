import React from "react";
import styled from "styled-components";

const Txt = styled.p`
  font-size: ${(props) => (props.$size ? `${props.$size}` : '1rem')};
  font-weight: ${(props) => (props.$weight ? `${props.$weight}` : 'normal')};
  white-space: pre-line;

`;

export default function Text({ children }, props) {
  return (
    <>
      <Txt size={props.$size} weight={props.$weight} id={props.$id || ''}>
        { children }
      </Txt>;
    </>
  )
};
