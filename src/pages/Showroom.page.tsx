import Slider from '@/components/common/Slider';
import ShowroomThumbnailButton from '@/components/common/Thumbnail/ShowroomThumbnail';
import ShowroomHeader from '@/components/Showroom/ShowroomHeader';
import useClips from '@/hooks/useClips';
import usePost from '@/hooks/usePost';
import { Link, useParams } from 'react-router-dom';
import DiscreteSliderValues from '@/components/SliderBar';

export default function ShowroomPage(){
  let { influencerId, showroomId } = useParams() as { influencerId: string, showroomId: string };
  const clips = useClips(influencerId, showroomId);
  const showroom = usePost(influencerId, showroomId);

  return (
    <>
      <ShowroomHeader>{showroom.title}</ShowroomHeader>
        
      <div id='container'>
      { clips.map((clip) => {
        const url = `/${influencerId}/${showroomId}/${clip.clipId}`;
        
        return (
            <ShowroomThumbnailButton key={clip.clipId} src={clip.clipUrl} to={url}></ShowroomThumbnailButton>
        );
      })}
      </div>

        <DiscreteSliderValues>
        </DiscreteSliderValues>
    </>
  );
}