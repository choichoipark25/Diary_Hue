import { theme } from "@/styles/theme";

/**
 * @file DiaryCard.tsx
 * @description 개별 다이어리 카드를 표시하는 컴포넌트입니다.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title - 카드의 제목
 * @param {string} props.description - 카드의 설명 텍스트
 *
 * @example
 * <DiaryCard
 *   title="오늘의 일기"
 *   description="나의 하루를 기록해요"
 * />
 *
 * @styling
 * - bg-white: 흰색 배경
 * - rounded-lg: 둥근 모서리
 * - shadow-md: 그림자 효과
 * - hover:shadow-lg: 호버 시 그림자 강화
 * - transition-shadow: 부드러운 그림자 전환
 */

interface DiaryCardProps {
  title: string;
  description: string;
}

export default function DiaryCard({ title, description }: DiaryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className={theme.spacing.container}>
        <h3 className={`${theme.typography.h3} ${theme.spacing.margin.sm}`}>
          {title}
        </h3>
        <p className={theme.typography.subtitle}>{description}</p>
      </div>
    </div>
  );
}
