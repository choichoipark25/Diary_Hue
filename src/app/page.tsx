import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import DiaryCardSection from "@/components/home/DiaryCardSection";
import FooterNotice from "@/components/home/FooterNotice";

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
      <FooterNotice />
    </main>
  );
}
