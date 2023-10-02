import styled from 'styled-components'
import ellipse from '../../assets/ellipse.svg';
import ellipseBackground from '../../assets/ellipse-background.svg';
import DropDown from '../common/DropDown';
import SNSLinks from './SNSLinks';


const SnsLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  -webkit-filter: drop-shadow(1.31685px 1.31685px 2.6337px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(1.31685px 1.31685px 2.6337px rgba(0, 0, 0, 0.1));

  > #ellipse-background {
    width: 28px;
    height: 28px;
    
    -webkit-filter: drop-shadow(-1.31685px -1.31685px 2.6337px rgba(255, 255, 255, 0.25));
    filter: drop-shadow(-1.31685px -1.31685px 2.6337px rgba(255, 255, 255, 0.25));

  }
  > #ellipse {
    width: 15px;
    height: 4px;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  z-index: 3;
`;

export default function SNSLink() {
  return (
    <DropDown>
      <SnsLink>
        <img id="ellipse-background" src={ellipseBackground}/>
        <img id="ellipse" src={ellipse} />
      </SnsLink>
      <SNSLinks/>
    </DropDown>
  )
}