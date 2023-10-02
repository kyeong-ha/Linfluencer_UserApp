import styled from 'styled-components'

const ProfileImage = styled.img`
  width: ${(width) => (width ? `${width}` : '100%')};;
  content: ${(src) => (src ? `url(${src})` : '')};
  border-radius: 50%;
`;

export default function CircleImageFrame({ src, width }: { src: string, width: string}) {
  return (
    <>
      <ProfileImage src={src} width={width}/>
    </>
  )
}