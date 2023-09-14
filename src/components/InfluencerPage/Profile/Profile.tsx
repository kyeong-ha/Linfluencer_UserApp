import { useState } from 'react';
import { ProfileContainer } from '@/styles/ProfileStyle';
import { Influencer } from '@/types/influencer.type';

import BackButton from '@/components/common/Button/BackButton';
import ProfileBanner from './ProfileBanner';
import ProfileImg from '../../CircleImageFrame';
import ProfileNav from './ProfileNav';
import ArrowButton from '@/components/common/Button/ArrowButton';

export default function Profile({ influencer }: { influencer: Influencer }) {
  const [readMore, setReadMore] = useState<boolean>(false);

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