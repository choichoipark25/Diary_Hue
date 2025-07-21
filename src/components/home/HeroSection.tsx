/**
 * @file HeroSection.tsx
 * @description 메인 페이지의 히어로 섹션 컴포넌트입니다.
 */

export default function HeroSection() {
  return (
    <div className="flex flex-col text-center py-12 bg-soft-sky-blue mb-10">
      <h1 className="text-hero text-deep-navy font-korean mb-2">
        일상이 아름다운 작품이 되는 곳
      </h1>
      <p className="text-body text-soft-gray font-korean">
        당신의 소중한 하루를 감성과 창작물로 빛내보는건 어떨까요?
      </p>
    </div>
  );
}
