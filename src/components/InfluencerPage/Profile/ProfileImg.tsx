import styled from 'styled-components'
import CircleImageFrame from '@/components/CircleImageFrame';
import SNSLinks from '../SNSLinkList';
import SNSLink from '../SNSLinkButton';

const ProfileImage = styled.div`
  width: auto;
  height: auto;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
`;

export default function ProfileImg({ src, width }: { src: string, width: string}) {
  return (
    <>
      <ProfileImage>
          <CircleImageFrame src={src} width={width}/>
          <SNSLink/>
      </ProfileImage>
    </>
  )
}