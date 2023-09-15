import axios from "axios";
import  { useState, useEffect } from 'react';
import { Post } from '../types/post.type';

/** Post 테이블에서 ( postId == ${ postId } && influencerId == ${ influencerId } ) 을 만족하는 하나의 Post 객체를 가져온다. */
export default function usePost(influencerId: string, postId: string): Post{
  const [post, setPost] = useState<Post>(new Post());

  useEffect(() => {
    (async () => {
      await axios.get( `/api/post/${postId}`, { params: { influencerId: influencerId } })
      .then((res) => setPost(() => {
        return { ...res.data } 
      }));
    })();
  }, [ influencerId, postId ]);

  return post;
}
