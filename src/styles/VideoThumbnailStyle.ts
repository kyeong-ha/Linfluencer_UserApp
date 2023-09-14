import styled from 'styled-components'

export const Thumb = styled.div`
    position: relative;
    width: auto;
    height: min-content;
    margin: 1em 5% 1em 5%;
    border-radius: 0px 0px 10px 10px;
    border-radius: 1.1em;
    overflow: hidden;
    box-shadow: 0px 0px 3px #0000004e;
    
    > img { width: 100%; object-fit: cover; }

`;

export const Details = styled.div`
  width: 100%;
  height: 33%;
  background-color: #ffffffe3;
  backdrop-filter: blur(5px);
  box-shadow: 0px 0px 3px #0000006e;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8rem 1rem;

  > thumb-title { 
    font-size: 1.2em;
    font-weight: bold;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  > video-attr {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

`;