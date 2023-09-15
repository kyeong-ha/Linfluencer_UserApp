import { ReactNode } from 'react';
import styled from 'styled-components'
// 페이지 최상단 + child 요소들이 flex + absolete 속성

export const Head = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
`;

export default function Header({ children } : { children: ReactNode[] }) {
    return (
        <>
        <Head id="header">
            { children }
        </Head>
        </>
    )
}