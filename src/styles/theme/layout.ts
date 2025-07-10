/**
 * @file theme/layout.ts
 * @description 레이아웃 관련 Tailwind CSS 클래스를 정의합니다.
 *
 * @property {string} container - 페이지 컨테이너 스타일
 * @property {string} section - 섹션 컨테이너 스타일
 * @property {string} flexColumn - 세로 방향 Flex 레이아웃
 * @property {string} flexCenter - 가운데 정렬 Flex 레이아웃
 * @property {string} flexBetween - 양쪽 정렬 Flex 레이아웃
 */
export const layout = {
  container: "min-h-screen w-full max-w-[1440px] mx-auto px-4",
  section: "max-w-[1920px] mx-auto w-full",
  flexColumn: "flex flex-col",
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
} as const;
