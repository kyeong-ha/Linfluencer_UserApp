import React from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";
import { withGesture } from "react-with-gesture";
import { useScroll } from "react-use-gesture";
import { useNavigate, useLocation, Link } from 'react-router-dom'

const SlideContainer = styled.div`
  position: absolute;
  height: auto;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  width: 100vw;
  border-radius: 8px;
`;

const SlideCard = styled.div`
  position: relative;
  max-width: 100%;
  min-width: 80%;
  width: 100vw;
  height: 100%;
  background: white;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
`;

function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up
}) {
  
  const navigate = useNavigate()
  const location = useLocation()

  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius));

  
  const offsetCardClick = i => {
    console.log(i);
  };

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }
  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${translateY === -50 ? `100%` : `80%`})`,
        top: `${
          (offsetFromMiddle === 1 || offsetFromMiddle === -1) ? 50 + (offsetFromMiddle * 20) / 0.85 : 50 + (offsetFromMiddle * 20) / 0.95
        }%`,
        opacity: distanceFactor * distanceFactor,
        left:`${offsetFromMiddle === 0 ? '0%' : '5%'}`
      }}
      config={animationConfig}
    >
      {style => (
        <SlideContainer
          onClick={() => moveSlide(offsetFromMiddle)}
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
          }}
        >
          <SlideCard onClick={() => {
            console.log(content)
            moveSlide(offsetFromMiddle); 
            offsetFromMiddle === 0 ? navigate(`${location.pathname}/${content.key}`) : null;
          }}>
            {content.content}
          </SlideCard>
        </SlideContainer>
      )}
    </Spring>
  );
}

export default withGesture()(Slide);
