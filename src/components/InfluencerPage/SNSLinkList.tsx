import styled from 'styled-components'
import SNSLink_onClick from '../../assets/SNSLink_onClick2.svg';
import SNSLink1 from '../../assets/SNSLink_1.svg';
import SNSLink2 from '../../assets/SNSLink_2.svg';
import SNSLink3 from '../../assets/SNSLink_3.svg';
import SNSLink4 from '../../assets/SNSLink_4.svg';
import SNSLink5 from '../../assets/SNSLink_5.svg';
import SNSLink6 from '../../assets/SNSLink_6.svg';

const SnsLinkList = styled.ul`
  width: min-content;
  height: auto;
  
  .sns-link-wrap {
    width: inherit;
    margin: 0 auto;

    > div { 
      display: flex;
      justify-content: center;

      position: absolute;
      top: 2px;
      transform: translateX(-50%);
    }

  }

  .sns-link-flex-middle {
    top: 12%!important;
    gap: 73%;
  }

  .sns-link-flex-bottom {
    top: 36%!important;
    gap: 161%;
  }

  .sns-link-flex-under {
    left: -2px;
    top: 67%!important;
    transform: translateX(4px)!important;
  }

`;

export default function SNSLinkList() {
  return (
    <>
      <SnsLinkList>
        <img id="ellipse-background" src={SNSLink_onClick}/>
        <div className="sns-link-wrap">
          
          <div className="sns-link-flex-top">
            <img className="sns-link-elements" src={SNSLink3}/>
          </div>

          <div className="sns-link-flex-middle">
            <img className="sns-link-elements" src={SNSLink2}/>
            <img className="sns-link-elements" src={SNSLink4}/>
          </div>

          <div className="sns-link-flex-bottom">
            <img className="sns-link-elements" src={SNSLink1}/>
            <img className="sns-link-elements" src={SNSLink5}/>
          </div>

          <div className="sns-link-flex-under">
            <img className="sns-link-elements" src={SNSLink6}/>
          </div>
        </div>
      </SnsLinkList>
    </>
  )
}