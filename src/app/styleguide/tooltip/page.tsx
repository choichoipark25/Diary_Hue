import Link from "next/link";

/**
 * @file page.tsx
 * @description 툴팁 가이드 페이지 컴포넌트입니다.
 */

export default function TooltipPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/styleguide"
            className="inline-flex items-center mb-6 text-sm text-deep-navy hover:text-soft-sky-blue transition-colors"
          >
            ← 스타일 가이드로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold text-deep-navy mb-4">툴팁</h1>
          <p className="text-lg text-soft-gray">
            정보 제공을 위한 툴팁 컴포넌트 가이드라인입니다.
          </p>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="text-center py-16">
            <div className="w-12 h-12 bg-soft-sky-blue rounded-sm mx-auto mb-4 opacity-50 flex items-center justify-center">
              <span className="text-white text-sm">?</span>
            </div>
            <h3 className="text-xl font-semibold text-deep-navy mb-2">
              툴팁 콘텐츠
            </h3>
            <p className="text-soft-gray">
              여기에 툴팁 컴포넌트 콘텐츠가 추가될 예정입니다.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
