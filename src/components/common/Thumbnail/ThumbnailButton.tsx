import styled from 'styled-components'

interface ThumbnailBtnProps{
  readonly title?: string;
  readonly src?: string;
  readonly to?: string;
}

export const ThumbBtn = styled.button`
  width: 100%;
  cursor: pointer;

  margin: 1em 0;
`;


export default function ThumbnailButton({ title, src, to }: ThumbnailProps) {
  return (
    <ThumbBtn href={to}>
      <img src={src ? src : ''}/>
    </ThumbBtn>
  )
}