import React, { Component } from "react";
import styled from "styled-components";
import Slide from "./Slide";
import PropTypes from "prop-types";
import SliderBar from "../SliderBar";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const NavigationButtons = styled.div`
  position: relative;
  display: flex;

  height: 60px;
  margin: 0 auto;
  width: 20%;
  margin-top: 1rem;
  justify-content: space-between;
  z-index: 10;
`;

const NavBtn = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
`;


function mod(a, b) {
  return ((a % b) + b) % b;
}

class VerticalCarousel extends React.Component {
  state = {
    index: 0,
    goToSlide: null,
    prevPropsGoToSlide: 0,
    newSlide: false
  };

  componentDidMount = () => {
    document.addEventListener("keydown", event => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      if (event.keyCode === 38) {
        this.moveSlide(-1);
      }
      if (event.keyCode === 40) {
        this.moveSlide(1);
      }
    });
  };

  static propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.any,
        content: PropTypes.object
      })
    ).isRequired,
    goToSlide: PropTypes.number,
    showNavigation: PropTypes.bool,
    offsetRadius: PropTypes.number,
    animationConfig: PropTypes.object
  };

  static defaultProps = {
    offsetRadius: 2,
    animationConfig: { tension: 120, friction: 14 }
  };

  modBySlidesLength = index => {
    return mod(index, this.props.slides.length);
  };

  moveSlide = direction => {
    var target = this.state.index + direction;

    if (target >= 0 && target < this.props.slides.length) {
      this.setState({
        index: this.modBySlidesLength(target),
        goToSlide: null
      });
    }
  };

  clampOffsetRadius(offsetRadius) {
    const { slides } = this.props;
    const upperBound = slides.length-1

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  }

  getPresentableSlides() {
    const { slides } = this.props;
    const { index } = this.state;
    let { offsetRadius } = this.props;
    offsetRadius = this.clampOffsetRadius(offsetRadius);
    const presentableSlides = new Array();

   
    let startIndex = 0;

    if (index < offsetRadius) {
      startIndex = offsetRadius - index;
    }

    for (
      let i = Math.max(index - offsetRadius, 0);
      i < Math.min(index + offsetRadius, slides.length);
      i++
    ) {
      presentableSlides.push({
        ...slides[this.modBySlidesLength(i)],
        presentableIndex: startIndex++
      });
    }
    return presentableSlides;
  }

  render() {
    const { animationConfig, offsetRadius, showNavigation } = this.props;

    let navigationButtons = null;
    if (showNavigation) {
      navigationButtons = (
        <SliderBar moveSlide={this.moveSlide}/>
        // <NavigationButtons>
        //   <NavBtn onClick={() => this.moveSlide(-1)}>&#8593;</NavBtn>
        //   <NavBtn onClick={() => this.moveSlide(1)}>&#8595;</NavBtn>
        // </NavigationButtons>
      );
    }
    return (
      <React.Fragment>
        <Wrapper>
          {this.getPresentableSlides().map((slide) => (
            <Slide
              key={slide.key}
              content={slide.content}
              moveSlide={this.moveSlide}
              offsetRadius={this.clampOffsetRadius(offsetRadius)}
              index={slide.presentableIndex}
            />
          ))}
        </Wrapper>
        {navigationButtons}
      </React.Fragment>
    );
  }
}

export default VerticalCarousel;