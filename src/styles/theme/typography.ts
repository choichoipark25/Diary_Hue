/**
 * @file theme/typography.ts
 * @description 타이포그래피 관련 Tailwind CSS 클래스를 정의합니다.
 *
 * @property {string} h1 - 대제목 스타일
 * @property {string} h2 - 중제목 스타일
 * @property {string} h3 - 소제목 스타일
 * @property {string} body - 본문 텍스트 스타일
 * @property {string} small - 작은 텍스트 스타일
 * @property {string} subtitle - 부제목/보조 텍스트 스타일
 */
export const typography = {
  h1: "text-3xl font-bold",
  h2: "text-xl font-medium",
  h3: "text-lg font-medium",
  body: "text-base",
  small: "text-sm",
  subtitle: "text-text-sub",
} as const;
