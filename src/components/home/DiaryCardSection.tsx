import DiaryCard from "./DiaryCard";
import { theme } from "@/styles/theme";

/**
 * @file DiaryCardSection.tsx
 * @description 다이어리 카드들을 그리드 형태로 표시하는 섹션 컴포넌트입니다.
 *
 * @component
 * @example
 * <DiaryCardSection />
 *
 * @structure
 * - 섹션 제목
 * - 설명 텍스트
 * - DiaryCard 그리드 (2x2)
 *
 * @styling
 * - max-w-[860px]: 최대 너비 제한
 * - grid grid-cols-2: 2열 그리드 레이아웃
 * - theme.spacing: 여백 및 간격
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
    <div className={`${theme.layout.section} max-w-[860px]`}>
      <h2 className={`${theme.typography.h2} ${theme.spacing.margin.md}`}>
        어떤 작품을 만들어볼까요?
      </h2>
      <p className={`${theme.typography.subtitle} ${theme.spacing.margin.lg}`}>
        일기가 작품이 되어가는 여행을 시작해 보세요
      </p>

      <div className={`grid grid-cols-2 ${theme.spacing.gap.lg}`}>
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
