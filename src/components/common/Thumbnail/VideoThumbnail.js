import styled from 'styled-components'
import { Thumb, Details } from '@/styles/VideoThumbnailStyle'
export default function VideoThumbnail(props) {
  return (
    <Thumb id="video-thumb">
      
      <Details>
        <thumb-title>{props.title}</thumb-title>
        <video-attr id='meta-data'>
          <video-tag>태그</video-tag>
          <video-icon>아이콘</video-icon>
        </video-attr>
      </Details>

      <img src={props.src ? props.src : ''}/>
    </Thumb>
  )
}