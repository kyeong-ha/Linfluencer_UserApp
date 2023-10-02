// 프로필 이미지 반응형으로 수정할 것

import { useState } from 'react';
import { ProfileContainer } from '@/styles/ProfileStyle';
import { Influencer } from '@/types/influencer.type';

import ProfileTop from './ProfileTop';
import BackButton from '@/components/common/Button/BackButton';
import ProfileImg from './ProfileImg';
import ProfileBanner from './ProfileBanner';
import ProfileNav from './ProfileNav';
import ArrowButton from '@/components/common/Button/ArrowButton';

import styled from 'styled-components'

export default function Profile({ influencer }: { influencer: Influencer }) {
  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <>
      <ProfileContainer>
      <BackButton/>

        <ProfileBanner src={influencer.bannerImg}/>
        <ProfileImg src={influencer.profileImg} width='70px'></ProfileImg> 
        <img src=''/>
        <channel-name>{influencer.name}</channel-name>

        <channel-bio>
          { readMore ? 
          influencer.description : 
          `${influencer.description.substring(0, influencer.description.indexOf('\n'))}`}
        </channel-bio>

        <see-more-btn onClick={() => setReadMore(!readMore)}>
          { readMore ?
          <ArrowButton $top/> :
          <ArrowButton $bottom/> }
        </see-more-btn>
          
        
        <ProfileNav/> 
        
      </ProfileContainer>
    </>
  )
}