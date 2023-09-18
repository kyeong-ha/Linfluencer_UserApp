import styled from 'styled-components'
import BackButton from '../common/Button/BackButton';
import Header, { Head } from '../common/Header/Header';

const StyledHeader = styled.div`
    width: 100%;
    height: 46px;
    background-color: #fff;
    
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    align-items: center;
    justify-items: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    box-shadow: 0px 0px 10px #0000001e;
`;

export default function ShowroomHeader({ children }: { children: ReactNode[] }) {
  return (
    <>
      <StyledHeader>
        <BackButton />
        { children }
      </StyledHeader>
    </>
  )
}