import Link from "next/link";

/**
 * @file page.tsx
 * @description 컬러 팔레트 가이드 페이지 컴포넌트입니다.
 */

export default function ColorPalettePage() {
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
          <h1 className="text-3xl font-bold text-deep-navy mb-4">
            컬러 팔레트
          </h1>
          <p className="text-lg text-soft-gray">
            프로젝트에서 사용되는 색상 시스템과 컬러 가이드라인입니다.
          </p>
        </div>

        {/* Color Palette */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-deep-navy mb-6">
            Primary Colors
          </h2>

          {/* Color Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {/* Main Color */}
            <div className="text-center">
              <div className="w-full h-24 bg-soft-sky-blue rounded-lg mb-3 border-2 border-blue-200"></div>
              <h3 className="font-semibold text-deep-navy mb-1">Main</h3>
              <p className="text-sm text-soft-gray font-mono">#a8d8ea</p>
              <p className="text-xs text-soft-gray mt-1">Soft Sky Blue</p>
            </div>

            {/* Sub Color */}
            <div className="text-center">
              <div className="w-full h-24 bg-cozy-pink rounded-lg mb-3 border-2 border-pink-200"></div>
              <h3 className="font-semibold text-deep-navy mb-1">Sub</h3>
              <p className="text-sm text-soft-gray font-mono">#ffb3ba</p>
              <p className="text-xs text-soft-gray mt-1">Cozy Pink</p>
            </div>

            {/* Accent Color */}
            <div className="text-center">
              <div className="w-full h-24 bg-cool-lavender rounded-lg mb-3 border-2 border-blue-100"></div>
              <h3 className="font-semibold text-deep-navy mb-1">Accent</h3>
              <p className="text-sm text-soft-gray font-mono">#bae1ff</p>
              <p className="text-xs text-soft-gray mt-1">Cool Lavender</p>
            </div>

            {/* Text Color */}
            <div className="text-center">
              <div className="w-full h-24 bg-deep-navy rounded-lg mb-3 border-2 border-gray-300"></div>
              <h3 className="font-semibold text-deep-navy mb-1">Text</h3>
              <p className="text-sm text-soft-gray font-mono">#2c3e50</p>
              <p className="text-xs text-soft-gray mt-1">Deep Navy</p>
            </div>

            {/* Sub Text Color */}
            <div className="text-center">
              <div className="w-full h-24 bg-soft-gray rounded-lg mb-3 border-2 border-gray-200"></div>
              <h3 className="font-semibold text-deep-navy mb-1">Sub Text</h3>
              <p className="text-sm text-soft-gray font-mono">#5d6d7e</p>
              <p className="text-xs text-soft-gray mt-1">Soft Gray</p>
            </div>
          </div>

          {/* Usage Examples */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-deep-navy mb-6">
              Usage Examples
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tailwind CSS Classes */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-deep-navy mb-4">
                  Tailwind CSS Classes
                </h3>
                <div className="space-y-3 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-soft-gray">text-soft-sky-blue</span>
                    <span className="text-soft-sky-blue">#a8d8ea</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-soft-gray">text-cozy-pink</span>
                    <span className="text-cozy-pink">#ffb3ba</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-soft-gray">text-cool-lavender</span>
                    <span className="text-cool-lavender">#bae1ff</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-soft-gray">text-deep-navy</span>
                    <span className="text-deep-navy">#2c3e50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-soft-gray">text-soft-gray</span>
                    <span className="text-soft-gray">#5d6d7e</span>
                  </div>
                </div>
              </div>

              {/* Color Combinations */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-deep-navy mb-4">
                  Recommended Combinations
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-soft-sky-blue rounded"></div>
                    <span className="text-soft-gray text-sm">
                      Main + Deep Navy (Headers)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-cozy-pink rounded"></div>
                    <span className="text-soft-gray text-sm">
                      Sub + Deep Navy (Highlights)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-cool-lavender rounded"></div>
                    <span className="text-soft-gray text-sm">
                      Accent + Deep Navy (Actions)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-deep-navy rounded"></div>
                    <span className="text-soft-gray text-sm">
                      Text + White (Body Text)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
