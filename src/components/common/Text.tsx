import { ReactNode } from 'react';
import styled from "styled-components";

const Txt = styled.p`
  white-space: pre-line;
`;

export default function Text({ children } : { children: ReactNode[] }) {
  return (
    <>
      <Txt>
        { children }
      </Txt>;
    </>
  )
};
