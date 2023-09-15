import { useNavigate } from 'react-router-dom';
import ArrowButton from './ArrowButton';

export default function BackButton() {
  const navigate = useNavigate();

  return (
      <ArrowButton $left $onClick={() => { navigate(-1); }}>&#60;</ArrowButton>
  )
}