import useInfluencer from '@/hooks/useInfluencer';
import usePosts from '@/hooks/usePosts';
import Profile from '@/components/InfluencerPage/Profile/Profile';
import NotFoundErrorPage from '@/pages/Error/NotFoundError';
import PostList from "@/components/InfluencerPage/PostList";

export default function InfluencerPage(){
  const influencer = useInfluencer();
  const posts = usePosts(influencer.influencerId);

  /* 인플루언서 ID가 있는 경우 */
  if (influencer.influencerId !== undefined) {
    return (
      <>
        <Profile influencer={influencer}></Profile>
        <PostList influencer={influencer} posts={posts}></PostList>
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