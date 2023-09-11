import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  width: 100%;
  height: fit-content;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #fff;
  white-space: pre-line;

  > channel-name {
    font-size: 1.5em;
    font-weight: 600;
    margin-top: 0.8em;
    margin-bottom: 0.2em;
  }

  > button { margin: 3%; margin-bottom: 0; }

  > see-more-btn {
    align-self: center;
    background-color: transparent;
  }
`;

export const SeeMoreButton = styled.button`
  
`;