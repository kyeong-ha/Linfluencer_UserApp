import {ReactNode, useRef, useState} from "react";
import Link from "react-router-dom";
import classNames from "classNames";
import useDetectClose from "../../hooks/useDetectClose";
import styled, {css} from 'styled-components'

// $changeImg => dropdown 버튼 클릭시 바뀌는 이미지

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 25%;
  left: calc(50% + 2em + (75px/2)) !important;
  transform: translate(-50%, -25%);

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $isDropped, $changeImg }) =>
  $isDropped &&
  css`
    > :first-child { content: url(${$changeImg}); }
    ${Menu} {
      opacity: 1;
      visibility: visible;
    }
  `};
  z-index: 2;
`;

const Menu = styled.div`
  position: absolute;
  top: -55%;
  left: -146%;

  text-align: center;
  
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 2;
`;

const DropDown = ({ children, $changeImg } : { children: ReactNode[], $changeImg: string }) => {
  const [dropDownIsOpen, dropDownRef, dropDownHandler] = useDetectClose(false);

  return (
    <Wrapper onClick={dropDownHandler} ref={dropDownRef} $isDropped={dropDownIsOpen} $changeImg={$changeImg}>
        {children[0]}
      <Menu $isDropped={dropDownIsOpen}>
        {children[1]}
      </Menu>
    </Wrapper>
  );
};

export default DropDown;