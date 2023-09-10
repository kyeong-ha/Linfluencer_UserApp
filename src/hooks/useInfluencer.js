import  { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";

/** DB 서버의 Influencer 테이블에서 ( influencerId 레코드 == ${ id } ) 을 만족하는 인플루언서 Object을 가져온다  */
export default function useInfluencer(){
  const {id} = useParams();
  const [influencer, setInfluencer] = useState({});

  useEffect(() => {
    (async () => {
      await axios.get(`/api/influencer/${id}`)
      
      .then((res) => setInfluencer(() => {
        return { ...res.data } 
      }));
    })();
  }, []);

  return influencer;
}