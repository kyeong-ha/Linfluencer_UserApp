import { Route, Routes } from 'react-router-dom';
import Main from '@/pages/Main.page'
import InfluencerPage from '@/pages/Influencer.page';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:id" element={<InfluencerPage />} />
      <Route path="/:id/:showroomId" element={<InfluencerPage />} />
    </Routes>
  );
}