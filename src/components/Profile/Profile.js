import { useState } from 'react';
import { ProfileContainer } from '@/styles/ProfileStyle';
import BackButton from '../Button/BackButton';
import ProfileBanner from '../Profile/ProfileBanner';
import ProfileImg from '../CircleImageFrame';
import ProfileNav from '../Profile/ProfileNav';
import ArrowButton from '../Button/ArrowButton';

export default function Profile({ influencer }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <ProfileContainer>

        <BackButton/>
        <ProfileImg src={influencer.profileImg} width='70px'></ProfileImg>

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
          
        <ProfileBanner src={influencer.bannerImg}/>
        <ProfileNav/> 
        
      </ProfileContainer>
    </>
  )
}