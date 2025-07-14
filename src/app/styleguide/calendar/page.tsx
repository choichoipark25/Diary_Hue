import Link from "next/link";

/**
 * @file page.tsx
 * @description 달력 가이드 페이지 컴포넌트입니다.
 */

export default function CalendarPage() {
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
          <h1 className="text-3xl font-bold text-deep-navy mb-4">달력</h1>
          <p className="text-lg text-soft-gray">
            날짜 선택을 위한 달력 컴포넌트 가이드라인입니다.
          </p>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="text-center py-16">
            <div className="grid grid-cols-3 gap-1 w-12 mx-auto mb-4 opacity-50">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-soft-sky-blue rounded-sm"
                ></div>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-deep-navy mb-2">
              달력 콘텐츠
            </h3>
            <p className="text-soft-gray">
              여기에 달력 컴포넌트 콘텐츠가 추가될 예정입니다.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
