import { theme } from "@/styles/theme";

/**
 * @file FooterNotice.tsx
 * @description 페이지 하단의 알림 메시지를 표시하는 푸터 컴포넌트입니다.
 *
 * @component
 * @example
 * <FooterNotice />
 *
 * @styling
 * - w-full: 전체 너비
 * - py-8: 상하 패딩
 * - mt-auto: 상단 여백 자동 (하단 고정)
 * - border-t: 상단 테두리
 * - text-center: 텍스트 중앙 정렬
 */
export default function FooterNotice() {
  return (
    <footer className="w-full py-8 mt-auto border-t">
      <p
        className={`${theme.typography.small} ${theme.typography.subtitle} text-center`}
      >
        개발 주우우우우웅
        <br />
        재밌다아아아아아 :)
      </p>
    </footer>
  );
}
