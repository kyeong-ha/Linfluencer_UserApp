import styled from 'styled-components'
import Text from '../Text';
import { ThumbBtn } from './ThumbnailButton';

interface ThumbnailBtnProps{
  readonly title?: string;
  readonly src?: string;
  readonly to?: string;
}

const ShowroomThumb = styled(ThumbBtn)`
  
`;

export default function ShowroomThumbnailButton({ title, src, to }: ThumbnailProps) {
  return (
    <ShowroomThumb href={to}>
      <Text>Title</Text>
      <img src={src ? src : ''}/>
    </ShowroomThumb>
  )
}