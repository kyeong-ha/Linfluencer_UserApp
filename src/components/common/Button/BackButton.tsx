import { useNavigate } from 'react-router-dom';
import ArrowButton from './ArrowButton';

export default function BackButton() {
  const navigate = useNavigate();

  return (
      <ArrowButton $left $onClick={() => { navigate(-1); }}
      style={{margin: '4% 4.5%'}}>&#60;</ArrowButton>
  )
}