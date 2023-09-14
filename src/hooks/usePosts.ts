import axios from "axios";
import  { useState, useEffect } from 'react';
import { Post } from '../types/post.type';

/** Influencer 테이블에서 ( influencerId 레코드 == ${ id } ) 을 만족하는 인플루언서의 하위 모든 Post 객체를 가져온다. */
export default function usePosts(id: string): Post[]{
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts(id: string) {
    const res = await axios.get(
      `/api/post`, { params: { influencerId: id } }
    )
    const data = res.data.map((post: Post) => (
      { ...post }
    ));
    setPosts(data);
}

  useEffect(() => {
    if(id !== '') {
      getPosts(id);
    }
  }, [ id ]);

  return posts;
}
