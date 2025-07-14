import Link from "next/link";

/**
 * @file page.tsx
 * @description 스타일 가이드 메인 페이지 컴포넌트입니다.
 */

const guideItems = [
  {
    title: "컬러 팔레트",
    path: "/styleguide/color-palette",
    description: "프로젝트에서 사용되는 색상 시스템",
  },
  {
    title: "타이포그래피",
    path: "/styleguide/typography",
    description: "폰트 스타일과 텍스트 계층 구조",
  },
  {
    title: "버튼",
    path: "/styleguide/button",
    description: "다양한 버튼 스타일과 상태",
  },
  {
    title: "툴팁",
    path: "/styleguide/tooltip",
    description: "정보 제공을 위한 툴팁 컴포넌트",
  },
  {
    title: "라벨",
    path: "/styleguide/label",
    description: "폼 요소와 정보 라벨",
  },
  {
    title: "체크박스",
    path: "/styleguide/checkbox",
    description: "선택 입력을 위한 체크박스",
  },
  {
    title: "달력",
    path: "/styleguide/calendar",
    description: "날짜 선택을 위한 달력 컴포넌트",
  },
];

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-deep-navy mb-4">
            Diary Hue Style Guide
          </h1>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            프로젝트에서 사용되는 디자인 시스템과 컴포넌트들을 확인할 수 있는
            가이드입니다.
          </p>
          <Link
            href="/"
            className="inline-flex items-center mt-6 px-4 py-2 text-sm text-deep-navy hover:text-soft-sky-blue transition-colors"
          >
            ← 메인 페이지로 돌아가기
          </Link>
        </div>

        {/* Guide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="group block p-6 bg-white rounded-lg border border-gray-200 hover:border-soft-sky-blue hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-deep-navy mb-2 group-hover:text-soft-sky-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-soft-gray text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 text-sm text-soft-sky-blue font-medium">
                자세히 보기 →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
