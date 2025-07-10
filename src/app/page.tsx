import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import DiaryCardSection from "@/components/home/DiaryCardSection";
import FooterNotice from "@/components/home/FooterNotice";
import { theme } from "@/styles/theme";

/**
 * @file page.tsx
 * @description 다이어리 앱의 메인 페이지 컴포넌트입니다.
 *
 * @component
 * @example
 * // app/page.tsx는 Next.js의 파일 시스템 기반 라우팅에 의해 자동으로 '/' 경로의 페이지가 됩니다
 * // 별도의 import 없이 사용됩니다
 *
 * @structure
 * - Header: 상단 네비게이션 바
 * - HeroSection: 메인 타이틀과 설명
 * - DiaryCardSection: 다이어리 카드 그리드
 * - FooterNotice: 하단 알림
 */
export default function Home() {
  return (
    <main className={`${theme.layout.container} ${theme.layout.flexColumn}`}>
      <Header />
      <section className={`flex-1 ${theme.layout.section}`}>
        <HeroSection />
        <DiaryCardSection />
      </section>
      <FooterNotice />
    </main>
  );
}
