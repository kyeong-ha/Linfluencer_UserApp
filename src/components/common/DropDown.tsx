import {ReactNode, useRef, useState} from "react";
import Link from "react-router-dom";
import classNames from "classNames";
import useDetectClose from "../../hooks/useDetectClose";
import styled, {css} from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 25%;
  left: calc(50% + 2em + (75px/2))!important;
  transform: translate(-50%, -25%);

  display: flex;
  align-items: center;
  justify-content: center;

  ${(left) => left};
  z-index: 2;
`;

const Menu = styled.div`
  position: absolute;
  top: -50%;
  left: -150%;
  text-align: center;
  
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 2;

  ${({ $isDropped }) =>
  $isDropped &&
  css`
    opacity: 1;
    visibility: visible;
  `};
`;

const DropDown = ({ children, left } : { children: ReactNode[], left: string }) => {
  const [dropDownIsOpen, dropDownRef, dropDownHandler] = useDetectClose(false);

  return (
    <Wrapper left={left} onClick={dropDownHandler} ref={dropDownRef}>
        {children[0]}
      <Menu $isDropped={dropDownIsOpen}>
          {children[1]}
      </Menu>
    </Wrapper>
  );
};

export default DropDown;