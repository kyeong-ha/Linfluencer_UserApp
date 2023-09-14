import styled from 'styled-components'
import { Thumb, Details } from '@/styles/VideoThumbnailStyle'

interface VideoThumbnailProps{
  readonly title?: string;
  readonly src?: string;
  readonly to?: string;
}

export default function VideoThumbnail({ title, src, to }: VideoThumbnailProps) {
  return (
    <Thumb id="video-thumb" href={to}>
      
      <Details>
        <thumb-title>{title}</thumb-title>
        <video-attr id='meta-data'>
          <video-tag>태그</video-tag>
          <video-icon>아이콘</video-icon>
        </video-attr>
      </Details>

      <img src={src ? src : ''}/>
    </Thumb>
  )
}