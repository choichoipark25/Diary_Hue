import DiaryCard from "./DiaryCard";

/**
 * @file DiaryCardSection.tsx
 * @description 다이어리 카드들을 그리드 형태로 표시하는 섹션 컴포넌트입니다.
 */

const diaryCards = [
  {
    title: "오늘의 일기",
    description: "나의 하루를 기록해요",
  },
  {
    title: "오늘의 컬러",
    description: "나의 하루를 색으로",
  },
  {
    title: "컬러로 일기쓰기",
    description: "나의 감정을 색으로",
  },
  {
    title: "컬러로 일기쓰기",
    description: "나의 감정을 색으로",
  },
];

export default function DiaryCardSection() {
  return (
    <div className="max-w-content mx-auto">
      <h2 className="text-2xl font-semibold mb-4">어떤 작품을 만들어볼까요?</h2>
      <p className="text-text-sub mb-8">
        일기가 작품이 되어가는 여행을 시작해 보세요
      </p>

      <div className="grid grid-cols-2 gap-6">
        {diaryCards.map((card, index) => (
          <DiaryCard
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
