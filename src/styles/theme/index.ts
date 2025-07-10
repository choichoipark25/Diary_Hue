import { layout } from "./layout";
import { typography } from "./typography";
import { spacing } from "./spacing";

/**
 * @file theme/index.ts
 * @description 프로젝트의 전역 테마 설정을 관리하는 파일입니다.
 * Tailwind CSS 클래스를 재사용 가능한 객체로 구조화합니다.
 *
 * @exports theme - 전역 테마 설정 객체
 * @exports Theme - 테마 타입 정의
 *
 * @structure
 * - layout: 레이아웃 관련 스타일 (컨테이너, 섹션, Flex 등)
 * - typography: 타이포그래피 관련 스타일 (제목, 본문 등)
 * - spacing: 여백 관련 스타일 (마진, 패딩, 갭 등)
 */

export const theme = {
  layout,
  typography,
  spacing,
} as const;

export type Theme = typeof theme;
