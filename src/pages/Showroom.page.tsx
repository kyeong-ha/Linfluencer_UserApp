import ShowroomThumbnailButton from '@/components/common/Thumbnail/ShowroomThumbnail';
import useClips from '@/hooks/useClips';
import { Link, useParams } from 'react-router-dom';

export default function ShowroomPage(){
  let { influencerId, showroomId } = useParams() as { influencerId: string, showroomId: string };
  const clips = useClips(influencerId, showroomId);
  return (
    <>
      <div className='header'></div>

      { clips.map((clip) => {
        const url = `/${influencerId}/${showroomId}/${clip.clipId}`;
        
        return (
            <ShowroomThumbnailButton key={clip.clipId} src={clip.clipUrl} to={url}></ShowroomThumbnailButton>
        );
      })}

      <div className='slide-bar'></div>
    </>
  );
}