import styled from 'styled-components'

const ProfileImage = styled.img`
  width: ${(props) => (props.$width ? `${props.$width}` : '100%')};;
  content: ${(props) => (props.$src ? `url(${props.$src})` : '')};
  border-radius: 50%;
  position: sticky;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

export default function ProfileImg(props) {
  return (
    <>
      <ProfileImage src={props.$src} width={props.$width}/>
    </>
  )
}