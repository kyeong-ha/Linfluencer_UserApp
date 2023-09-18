import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import { config } from "react-spring";

let slides = [
  {
    key: 1,
    content: 
    <div>
      <p style={ { fontSize: '1.5rem' }} >Title</p>
      <img src='https://i.ytimg.com/vi/EmioAiCisvM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMcEEvtTchDtdSl307ew-E1ngIQA' style={{ width: '100vw'}}/>
    </div>
  },
  {
    key: 2,
    content: <div>
    <p style={ { fontSize: '1.5rem' }} >Title</p>
    <img src='https://i.ytimg.com/vi/EmioAiCisvM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMcEEvtTchDtdSl307ew-E1ngIQA' style={{ width: '100vw'}}/>
  </div>
  },
  {
    key: 3,
    content: <div>
    <p style={ { fontSize: '1.5rem' }} >Title</p>
    <img src='https://i.ytimg.com/vi/EmioAiCisvM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMcEEvtTchDtdSl307ew-E1ngIQA' style={{ width: '100vw'}}/>
  </div>
  },
  {
    key: 4,
    content: <div>
    <p style={ { fontSize: '1.5rem' }} >Title</p>
    <img src='https://i.ytimg.com/vi/EmioAiCisvM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMcEEvtTchDtdSl307ew-E1ngIQA' style={{ width: '100vw'}}/>
  </div>
  },
  
];

export default class ShowroomContainer extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: slides.length,
    showNavigation: true,
    config: config.gentle
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          margin: "0 auto",
        }}
      >
        <VerticalCarousel
          slides={slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
