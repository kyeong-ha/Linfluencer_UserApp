import styled from 'styled-components'
import Header from '../common/Header/Header';

const BannerImg = styled.img`
    width: 150%;
    content: ${(props) => (props.src ? `url(${props.src})` : '')};
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index:1;

    mask-image: linear-gradient(
        to bottom, #000 0%, transparent 80%, transparent 100%
    );
    -webkit-mask-image: linear-gradient(
        to bottom, #000 0%, #000 40%, transparent 80%, transparent 100%
    );
`;

export default function MainHeader(props) {
  return (
    <>
      <Header>
        <span>로고</span>
        <span className='search-bar'>검색바</span>
        <span className='buttons-wrap'>
            <div>검색</div>
            <div>+</div>
        </span>
      </Header>
    </>
  )
}