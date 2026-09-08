import PageBanner from '@/components/shared/PageBanner';
import CourseOverview from '@/components/programs/superkids/CourseOverview';
import LearningOutcomes from '@/components/programs/superkids/LearningOutcomes';
import TeachingMethod from '@/components/programs/superkids/TeachingMethod';
import LearningRoadmap from '@/components/programs/superkids/LearningRoadmap';
import MidPageCTA from '@/components/programs/superkids/MidPageCTA';

export default function SuperkidsProgramPage() {
  return (
    <>
      <PageBanner
        badge="6-10 tuổi"
        title="Tiếng Anh Thiếu nhi"
        subtitle="Xây nền tảng giao tiếp - Nghe, nói, đọc, viết vững chắc mỗi ngày."
        // TODO: replace with real superkids banner photo
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788167402/kindy_letieucat.webp"
        imageAlt="Học sinh 6-10 tuổi học tiếng Anh tại ILE"
        fullBleed={true}
      />
      <CourseOverview />
      <LearningOutcomes />
      <TeachingMethod />
      <LearningRoadmap />
      <MidPageCTA />
    </>
  );
}