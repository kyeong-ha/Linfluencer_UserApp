import styled from 'styled-components'

export const SVG = styled.div<ArrowSVGProps>`
cursor: pointer;
width: fit-content;
background-color: transparent;
z-index: 100;
transform: 
  ${ $props => {
    if($props.$left) { return 'rotate(90deg);'}
    else if($props.$right) { return 'rotate(-90deg);'}
    else if($props.$top) { return 'rotate(180deg);'}
    else { return 'rotate(0deg);'}
  }}  
* { 
    vertical-align: middle;
  }
`;

interface ArrowSVGProps{
  readonly $left?: boolean
  readonly $top?: boolean;
  readonly $right?: boolean;
  readonly $bottom?: boolean;
  readonly $onClick?: () => void;
  readonly style?: string;
}

export default function ArrowButton($props: ArrowSVGProps) {
  return (
    <SVG {...$props} onClick={$props.$onClick} style={$props.style}>
      <svg id="arrow-button" width="1.2rem" height="1.2rem" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M2 2.00008L7.5 7.40991L13 2.00008" stroke="#858585" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    </SVG>

  )
}