import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider, { SliderProps } from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';
import ArrowButton from './common/Button/ArrowButton';
import styledComponents from 'styled-components';

const StyledWrap = styledComponents.div`
  width: 100%;
  height: 72px;
  background-color: #fff;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0px 0px 7px #0000001e;
`;
const Slide = styledComponents.div`
  width: 90%;
  height: max-content;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  
`;

const CustomSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  width: '75%',
  '.MuiSlider-mark': {
    // Before marking
    width: '13px',
    height: '13px',

    backgroundColor: '#fff',
    borderRadius: '50%',
    border: '3px solid',
    borderColor: '#b8b8b8',
    boxShadow: '0px 0.8px 1.8px #00000099',
    opacity: 1,

    webkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },

  '.MuiSlider-markActive': {
    // After marking
    width: '10px',
    height: '10px',
    backgroundColor: '#ff0001',
    border: '0',
  },

  '& .MuiSlider-thumb': {
    // Currently selected thumb
    width: '16px',
    height: '16px',

    color: '#ff0001',

    '&, &:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 6px #ff636333`,
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 0px 10px #ff636333`,
    },
  },

  '.MuiSlider-rail': {
    color: '#c5c5c5',
  },

  '.MuiSlider-track': {
    color: '#ff0001'
  }
}));


export default function SliderBar({moveSlide, marks}: {moveSlide: (direction: number) => void, marks: object[]}) {
  const maxValue = marks[marks.length-1].value;
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number' && newValue !== value) {
      moveSlide(getIndex(newValue)-getIndex(value));
      setValue(newValue);
    }
  };

  function getLabel(value: number, index: number) {
    return `${value}`;
  }

  function getIndex(value: number): number {
    for (let i = 0; i < marks.length; i++) {
      if(marks[i].value == value) return i;
    }
  }
  const prev = () => {
    const newIndex = getIndex(value)
    if(newIndex > 0) {
      setValue(marks[newIndex-1].value);
      moveSlide(-1);
    }
  };

  const next = () => {
    const newIndex = getIndex(value)
    if(newIndex < marks.length-1) {
      setValue(marks[newIndex+1].value);
      moveSlide(1);
    }
  };
  return (
    <StyledWrap>
      <Slide>
          <ArrowButton $left $onClick={prev}/>
          <CustomSlider
            defaultValue={0}
            value={value}
            onChange={handleChange}
            valueLabelFormat={getLabel}
            valueLabelDisplay={value != 0 && value != maxValue ? "auto" : "off"}
            step={null}
            marks={marks}
            max={maxValue} />
        <ArrowButton $right $onClick={next} />
      </Slide>
    </StyledWrap>
  );
}
