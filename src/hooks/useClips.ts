import axios from "axios";
import  { useState, useEffect } from 'react';
import { Clip } from '../types/clip.type';

/** Influencer 테이블에서 ( influencerId 레코드 == ${ id } ) 을 만족하는 인플루언서의 하위 모든 Post 객체를 가져온다. */
export default function useClips(influencerId: string, postId: string): Clip[]{
  const [clips, setClips] = useState<Clip[]>([]);

  async function getClips(influencerId: string, postId: string) {
    const res = await axios.get(
      `/api/clip`, { params: { influencerId: influencerId, postId: postId } }
    )
    const data = res.data.map((clip: Clip) => (
      { ...clip }
    ));
    setClips(data);
}

  useEffect(() => {
    if(influencerId !== '' && postId !== '') {
      getClips(influencerId, postId);
    }
  }, [ influencerId, postId ]);

  return clips;
}
