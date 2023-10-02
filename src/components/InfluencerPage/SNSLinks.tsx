import styled from 'styled-components'
import SNSLink from './SNSLink';
import linkListBackground from '../../assets/linkList.svg';

const SnsLinks = styled.ul`
  width: 100;
  height: auto;
`;

export default function SNSLinks() {
  return (
    <>
      <SnsLinks>
        <img id="ellipse-background" src={linkListBackground}/>
      </SnsLinks>
    </>
  )
}