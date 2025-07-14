import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import DiaryCardSection from "@/components/home/DiaryCardSection";
import FooterNotice from "@/components/home/FooterNotice";
import Link from "next/link";

/**
 * @file page.tsx
 * @description 다이어리 앱의 메인 페이지 컴포넌트입니다.
 */

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-layout mx-auto px-4 flex flex-col">
      <Header />
      <section className="flex-1 w-full mx-auto">
        <HeroSection />
        <DiaryCardSection />
      </section>

      {/* 임시 개발용 스타일 가이드 버튼 */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href="/styleguide"
          className="px-2 py-1 text-xs bg-[#a8d8ea] text-deep-navy rounded-md hover:bg-[#a8d8ea]/80 transition-colors font-semibold shadow"
        >
          📚 스타일 가이드
        </Link>
      </div>

      <FooterNotice />
    </main>
  );
}
