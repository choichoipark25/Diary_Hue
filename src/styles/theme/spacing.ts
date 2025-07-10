/**
 * @file theme/spacing.ts
 * @description 여백 관련 Tailwind CSS 클래스를 정의합니다.
 *
 * @property {string} section - 섹션 여백
 * @property {string} container - 컨테이너 여백
 * @property {Object} gap - 요소 간 간격
 * @property {string} gap.sm - 작은 간격
 * @property {string} gap.md - 중간 간격
 * @property {string} gap.lg - 큰 간격
 * @property {Object} margin - 마진 여백
 * @property {string} margin.sm - 작은 마진
 * @property {string} margin.md - 중간 마진
 * @property {string} margin.lg - 큰 마진
 * @property {string} margin.xl - 매우 큰 마진
 */
export const spacing = {
  section: "py-12",
  container: "p-6",
  gap: {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  },
  margin: {
    sm: "mb-2",
    md: "mb-4",
    lg: "mb-8",
    xl: "mb-12",
  },
} as const;
