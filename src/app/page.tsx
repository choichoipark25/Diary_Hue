import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import DiaryCardSection from "@/components/home/DiaryCardSection";
import FooterNotice from "@/components/home/FooterNotice";
import { Button } from "@/components/common/Button";
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
        <Link href="/styleguide">
          <Button variant="accent" size="medium" className="shadow-lg">
            📚 스타일 가이드
          </Button>
        </Link>
      </div>

      <FooterNotice />
    </main>
  );
}
