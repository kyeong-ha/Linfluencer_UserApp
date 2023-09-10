import axios from "axios";
import  { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

/** Influencer 테이블에서 ( influencerId 레코드 == ${ id } ) 을 만족하는 인플루언서의 하위 모든 Post 객체를 가져온다. */
export default function usePosts(id){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if(id !== '') {
      (async () => {
        await axios.get(
          `/api/post`, 
          { params: { influencerId: id } })

        .then((res) =>{
          const data = res.data.map((post) => ({
            ...post,
          }));
          setPosts(data); });
      });
    }
  }, [ id ]);

  return posts;
}
