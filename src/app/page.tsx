import Image from "next/image";
import DiaryCard from "@/components/home/DiaryCard";

const diaryCards = [
  {
    title: "오늘의 일기",
    description: "나의 하루를 기록해요",
    icon: "/icons/diary.svg",
  },
  {
    title: "오늘의 컬러",
    description: "나의 하루를 색으로",
    icon: "/icons/color.svg",
  },
  {
    title: "컬러로 일기쓰기",
    description: "나의 감정을 색으로",
    icon: "/icons/palette.svg",
  },
  {
    title: "컬러로 일기쓰기",
    description: "나의 감정을 색으로",
    icon: "/icons/palette.svg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-[1440px] mx-auto px-4">
      {/* Header */}
      <header className="py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/icons/star.svg" alt="Star icon" width={24} height={24} />
          <span className="text-lg font-medium">오늘의 일기</span>
        </div>
        <div className="text-sm text-text-sub">#오늘 / 하하하님</div>
      </header>

      {/* Main Content */}
      <section className="max-w-[1920px] mx-auto text-center py-12">
        <h1 className="text-3xl font-bold mb-2">
          일상이 아름다운 작품이 되는 곳
        </h1>
        <p className="text-text-sub mb-12">
          당신의 소중한 하루를 감성과 창작물로 빛내보는건 어떨까요?
        </p>

        {/* Card Grid */}
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-xl font-medium mb-6">
            어떤 작품을 만들어볼까요?
          </h2>
          <p className="text-text-sub mb-8">
            일기가 작품이 되어가는 여행을 시작해 보세요
          </p>

          <div className="grid grid-cols-2 gap-6">
            {diaryCards.map((card, index) => (
              <DiaryCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>

        {/* Footer Notice */}
        <p className="text-text-sub text-sm mt-8">
          현재 웹사이트 보안과 관리 정상화의 이슈가 있습니다.
          <br />
          오늘도 소중한 하루를 사용해 주셔서 매우 감사합니다.
        </p>
      </section>
    </main>
  );
}
