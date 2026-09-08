import PageBanner from '@/components/shared/PageBanner';
import CourseOverview from '@/components/programs/kindy/CourseOverview';
import LearningOutcomes from '@/components/programs/kindy/LearningOutcomes';
import TeachingMethod from '@/components/programs/kindy/TeachingMethod';
import LearningRoadmap from '@/components/programs/kindy/LearningRoadmap';
import MidPageCTA from '@/components/programs/kindy/MidPageCTA';
import KindyTestimonials from '@/components/programs/kindy/KindyTestimonials';
import TeacherPreview from '@/components/programs/kindy/TeacherPreview';
import LearningSpace from '@/components/programs/kindy/LearningSpace';
import FinalCTA from '@/components/home/FinalCTA';

export default function KindyProgramPage() {
  return (
    <>
      <PageBanner
        badge="3-5 tuổi"
        title="Tiếng Anh Mầm non"
        subtitle="Học qua vui chơi - Khơi dậy niềm yêu thích tiếng Anh từ sớm."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788167395/kindy_slide1.webp"
        imageAlt="Bé học tiếng Anh Mầm non tại ILE"
        fullBleed={true}
      />
      <CourseOverview />
      <LearningOutcomes />
      <TeachingMethod />
      <LearningRoadmap />
      <MidPageCTA />
      <KindyTestimonials />
      <TeacherPreview />
      <LearningSpace />
      <FinalCTA />
    </>
  );
}
