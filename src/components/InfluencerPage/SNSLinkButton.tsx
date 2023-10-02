import styled from 'styled-components'
import DropDown from '../common/DropDown';
import SNSLinks from './SNSLinkList';
import SNSList_button from '../../assets/SNSList_button.svg';
import SNSList_button_onClick from '../../assets/SNSList_button_onClick.svg';

const SnsLinkButton = styled.div`
  width: min-content;
  height: min-content;

    -webkit-filter: drop-shadow(1.31685px 1.31685px 2.6337px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(1.31685px 1.31685px 2.6337px rgba(0, 0, 0, 0.1));

  > img {
    -webkit-filter: drop-shadow(-1.31685px -1.31685px 2.6337px rgba(255, 255, 255, 0.25));
    filter: drop-shadow(-1.31685px -1.31685px 2.6337px rgba(255, 255, 255, 0.25));
  }
  z-index: 3;
`;

export default function SNSLink() {
  return (
    <DropDown $changeImg={SNSList_button_onClick}>
      <SnsLinkButton>
        <img src={SNSList_button}/>
      </SnsLinkButton>
      <SNSLinks/>
    </DropDown>
  )
}