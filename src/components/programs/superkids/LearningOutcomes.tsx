import { Sparkles, MessageCircle, BookOpen, Rocket } from 'lucide-react';

// TODO: replace with real photo
const ANIMAL =
  'https://res.cloudinary.com/wsaz946u/image/upload/v1788166532/listen-1.svg';

interface Outcome {
  icon: typeof MessageCircle;
  title: string;
  description: string;
  badgeClass: string;
  tilt: string;
}

const outcomes: Outcome[] = [
  {
    icon: MessageCircle,
    title: 'Giao tiếp tự tin',
    description:
      'Con mạnh dạn giao tiếp bằng tiếng Anh trong các tình huống thực tế ở lớp và ngoài đời.',
    badgeClass: 'bg-sky-200/70 text-sky-700',
    tilt: 'rotate-[-2deg]',
  },
  {
    icon: BookOpen,
    title: 'Đọc - viết đúng ngữ pháp',
    description:
      'Con nắm vững ngữ pháp cơ bản, đọc hiểu và viết đúng câu đơn giản theo độ tuổi.',
    badgeClass: 'bg-blush-300/70 text-blush-600',
    tilt: 'rotate-[1.5deg]',
  },
  {
    icon: Rocket,
    title: 'Hứng thú bền vững',
    description:
      'Con chủ động luyện tập ở nhà và giữ niềm yêu thích tiếng Anh lâu dài, không còn e ngại.',
    badgeClass: 'bg-ink-900/10 text-ink-900',
    tilt: 'rotate-[-1deg]',
  },
];

const blobShapes: string[] = [
  '58% 42% 48% 52% / 52% 58% 42% 48%',
  '42% 58% 52% 48% / 48% 42% 58% 52%',
  '52% 48% 44% 56% / 56% 44% 56% 44%',
];

export default function LearningOutcomes() {
  return (
    <section className="relative overflow-hidden bg-sky-200 py-20 lg:py-28">
      {/* Soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-16 h-[300px] w-[300px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-cream-100/30 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-20 h-[280px] w-[280px] rounded-[46%_54%_58%_42%_/_54%_46%_54%_46%] bg-blush-200/25 blur-2xl"
      />

      {/* Animal accent */}
      <img
        src={ANIMAL}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-6 top-10 hidden h-16 w-16 rotate-[12deg] drop-shadow-[0_6px_12px_rgba(31,42,55,0.12)] lg:block"
      />

      <div className="container-page relative">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-4 py-1.5 font-body text-sm font-semibold text-ink-900">
            <Sparkles className="h-4 w-4" strokeWidth={2.25} />
            SAU VÀI THÁNG HỌC
          </span>
          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl">
            Con sẽ tiến bộ như thế nào?
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {outcomes.map((outcome, i) => {
            const Icon = outcome.icon;
            return (
              <div
                key={outcome.title}
                className={[
                  'group flex flex-col bg-cream-50 p-7 shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card',
                  outcome.tilt,
                ].join(' ')}
                style={{ borderRadius: blobShapes[i] }}
              >
                <span
                  className={[
                    'inline-flex h-12 w-12 items-center justify-center rounded-[14px] transition-transform duration-300 ease-smooth group-hover:scale-105',
                    outcome.badgeClass,
                  ].join(' ')}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.25} />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-ink-900">
                  {outcome.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-600">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wave divider */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block h-12 w-full text-cream-100 sm:h-16"
      >
        <path
          d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 45 L 1440 80 L 0 80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
