import styled from 'styled-components'

const ProfileImage = styled.img`
  width: ${(width) => (width ? `${width}` : '100%')};;
  content: ${(src) => (src ? `url(${src})` : '')};
  border-radius: 50%;
  position: sticky;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

export default function ProfileImg({ src, width }: { src: string, width: string}) {
  return (
    <>
      <ProfileImage src={src} width={width}/>
    </>
  )
}