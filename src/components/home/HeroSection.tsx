import { theme } from "@/styles/theme";

/**
 * @file HeroSection.tsx
 * @description 메인 페이지의 히어로 섹션 컴포넌트입니다.
 * 앱의 주요 타이틀과 설명을 표시합니다.
 *
 * @component
 * @example
 * <HeroSection />
 *
 * @styling
 * - text-center: 텍스트 중앙 정렬
 * - theme.spacing.section: 섹션 여백
 * - theme.typography: 타이포그래피 스타일
 */
export default function HeroSection() {
  return (
    <div className={`text-center ${theme.spacing.section}`}>
      <h1 className={`${theme.typography.h1} ${theme.spacing.margin.sm}`}>
        일상이 아름다운 작품이 되는 곳
      </h1>
      <p className={`${theme.typography.subtitle} ${theme.spacing.margin.xl}`}>
        당신의 소중한 하루를 감성과 창작물로 빛내보는건 어떨까요?
      </p>
    </div>
  );
}
