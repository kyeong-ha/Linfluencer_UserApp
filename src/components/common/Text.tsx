import { ReactNode } from 'react';
import styled from "styled-components";

const Txt = styled.p`
  font-size: ${(size) => (size ? `${size}` : '1rem')};
  font-weight: ${(weight) => (weight ? `${weight}` : 'normal')};
  white-space: pre-line;
`;


interface TextProps extends HTMLLabelElement{
  readonly id?: string;
  readonly size?: string;
  readonly weight?: string;
}

export default function Text({ children } : { children: ReactNode[] }, { id, size, weight }: TextProps) {
  return (
    <>
      <Txt size={size} weight={weight} id={id || ''}>
        { children }
      </Txt>;
    </>
  )
};
