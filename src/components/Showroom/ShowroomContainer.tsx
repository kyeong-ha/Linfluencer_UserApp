import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import { config } from "react-spring";

let slides = [
  {
    key: 1,
    content: <img src='https://i.ytimg.com/vi/EmioAiCisvM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMcEEvtTchDtdSl307ew-E1ngIQA' style={{ width: '100vw'}}/>
  },
  {
    key: 2,
    content: <img src='https://i.ytimg.com/vi/EmioAiCisvM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMcEEvtTchDtdSl307ew-E1ngIQA' style={{ width: '100vw'}}/>
  },
  {
    key: 3,
    content: <img src='https://i.ytimg.com/vi/EmioAiCisvM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMcEEvtTchDtdSl307ew-E1ngIQA' style={{ width: '100vw'}}/>
  },
  {
    key: 4,
    content: <img src='https://i.ytimg.com/vi/EmioAiCisvM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMcEEvtTchDtdSl307ew-E1ngIQA' style={{ width: '100vw'}}/>
  },
  {
    key: 5,
    content: <img src='https://i.ytimg.com/vi/EmioAiCisvM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMcEEvtTchDtdSl307ew-E1ngIQA' style={{ width: '100vw'}}/>
  },
  {
    key: 6,
    content: <img src='https://i.ytimg.com/vi/EmioAiCisvM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMcEEvtTchDtdSl307ew-E1ngIQA' style={{ width: '100vw'}}/>
  },
  {
    key: 7,
    content: <img src='https://i.ytimg.com/vi/EmioAiCisvM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMcEEvtTchDtdSl307ew-E1ngIQA' style={{ width: '100vw'}}/>
  },
  {
    key: 8,
    content: <img src='https://i.ytimg.com/vi/EmioAiCisvM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMcEEvtTchDtdSl307ew-E1ngIQA' style={{ width: '100vw'}}/>
  }
];

export default class ShowroomContainer extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 4,
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
          background: "#7FfFbF"
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
