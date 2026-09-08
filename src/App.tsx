import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProgramsPage from '@/pages/ProgramsPage';
import ProgramDetailPage from '@/pages/ProgramDetailPage';
import KindyProgramPage from '@/pages/KindyProgramPage';
import SuperkidsProgramPage from '@/pages/SuperkidsProgramPage';
import TeachersPage from '@/pages/TeachersPage';
import ResultsPage from '@/pages/ResultsPage';
import ActivitiesPage from '@/pages/ActivitiesPage';
import ContactPage from '@/pages/ContactPage';
import TrialPage from '@/pages/TrialPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="/chuong-trinh-hoc" element={<ProgramsPage />} />
        <Route
          path="/chuong-trinh-hoc/tieng-anh-mam-non-3-5-tuoi"
          element={<KindyProgramPage />}
        />
        <Route
          path="/chuong-trinh-hoc/tieng-anh-tieu-hoc-6-10-tuoi"
          element={<SuperkidsProgramPage />}
        />
        <Route
          path="/chuong-trinh-hoc/tieng-anh-thieu-nien-11-15-tuoi"
          element={<ProgramDetailPage programKey="thieu-nien" />}
        />
        <Route path="/doi-ngu" element={<TeachersPage />} />
        <Route path="/ket-qua" element={<ResultsPage />} />
        <Route path="/hoat-dong" element={<ActivitiesPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
        <Route path="/dang-ky-hoc-thu" element={<TrialPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
