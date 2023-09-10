import { Route, Routes } from 'react-router-dom';
import Main from '@/pages/Main'
import InfluencerPage from '@/pages/InfluencerPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:id" element={<InfluencerPage />} />
    </Routes>
  );
}