import { Influencer } from '@/types/influencer.type';
import { Post } from '@/types/post.type';
import { Link } from "react-router-dom";
import VideoThumbnail from "@/components/common/Thumbnail/VideoThumbnail";
import styled from 'styled-components'

export default function PostList({ influencer, posts }: { influencer: Influencer, posts: Post[] }) {
  return (
    <>
      { posts.map((post) => {
        const url = `/${influencer.influencerId}/${post.postId}`;
        
        return (
            <VideoThumbnail key={post.postId} src={post.thumbnailImg} title={post.title} to={url}></VideoThumbnail>
        );
      })}
    </>
  )
}