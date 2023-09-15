import styled from 'styled-components'
import ArrowButton from './common/Button/ArrowButton';
import SliderBar from './SliderBar';

export default function Slider() {
  return (
    <ArrowButton $left />
    <SliderBar></SliderBar>
    <ArrowButton $right />
  )
}