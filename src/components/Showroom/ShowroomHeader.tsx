import styled from 'styled-components'
import BackButton from '../common/Button/BackButton';
import Header, { Head } from '../common/Header/Header';

const StyledHeader = styled.div`
    width: 100%;
    height: 46px;
    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    box-shadow: 0px 0px 10px #0000001e;

    > p {
      width: 70%;
      margin: 0 auto;
      font-size: 1.2em;
      font-weight: bold;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
`;

export default function ShowroomHeader({ children }: { children: ReactNode[] }) {
  return (
    <>
      <StyledHeader>
        <BackButton />
        <p>{ children }</p>
      </StyledHeader>
    </>
  )
}