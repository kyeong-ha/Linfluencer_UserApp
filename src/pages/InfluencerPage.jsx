import { useParams, Link } from "react-router-dom";
import useInfluencer from '@/hooks/useInfluencer';
import usePosts from '@/hooks/usePosts';
import Profile from '@/components/Profile/Profile';
import NotFoundErrorPage from '@/pages/Error/NotFoundError';

export default function InfluencerPage(){
  const influencer = useInfluencer();
  const posts = usePosts(influencer.influencerId);

  /* 인플루언서 ID가 있는 경우 */
  if (influencer.influencerId !== undefined) {
    return (
        <>
          <Profile influencer={influencer}></Profile>

            <div id='container'>
                <div id='post-list'>
                  { posts.map(post => (
                    <a key={post.postId} id='post'>
                      <VideoThumbnail src={post.thumbnailImg} title={post.title}></VideoThumbnail>
                    </a>
                  )) }
                </div>
            </div>
        </>
    )
  }
  /* 인플루언서 ID가 없는 경우 */
  else {
    return (
      <NotFoundErrorPage />
    );
  }
}