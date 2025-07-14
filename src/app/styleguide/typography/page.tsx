import Link from "next/link";

/**
 * @file page.tsx
 * @description 타이포그래피 가이드 페이지 컴포넌트입니다.
 */

export default function TypographyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/styleguide"
            className="inline-flex items-center mb-6 text-caption text-deep-navy hover:text-soft-sky-blue transition-colors"
          >
            ← 스타일 가이드로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold text-deep-navy mb-4">
            타이포그래피
          </h1>
          <p className="text-lg text-soft-gray">
            폰트 스타일과 텍스트 계층 구조 가이드라인입니다.
          </p>
        </div>

        {/* Typography Guide */}
        <div className="space-y-8">
          {/* Heading Styles */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-page-title text-deep-navy mb-6">헤딩 스타일</h2>

            <div className="space-y-6">
              {/* H1 */}
              <div className="border-b border-gray-100 pb-6">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-caption font-medium text-soft-gray">
                    H1 - HERO Title
                  </span>
                  <span className="text-caption text-soft-gray font-mono">
                    42pt Bold
                  </span>
                </div>
                <h1 className="text-hero text-deep-navy font-korean">
                  일상이 예술이 되는 곳
                </h1>
                <h1 className="text-hero text-deep-navy font-english mt-2">
                  Where Daily Life Becomes Art
                </h1>
              </div>

              {/* H2 */}
              <div className="border-b border-gray-100 pb-6">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-caption font-medium text-soft-gray">
                    H2 - Page Title
                  </span>
                  <span className="text-caption text-soft-gray font-mono">
                    32pt Bold
                  </span>
                </div>
                <h2 className="text-page-title text-deep-navy font-korean">
                  시 만들기
                </h2>
                <h2 className="text-page-title text-deep-navy font-english mt-2">
                  Create Poetry
                </h2>
              </div>

              {/* H3 */}
              <div className="border-b border-gray-100 pb-6">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-caption font-medium text-soft-gray">
                    H3 - Section Title
                  </span>
                  <span className="text-caption text-soft-gray font-mono">
                    22pt Bold
                  </span>
                </div>
                <h3 className="text-section-title text-deep-navy font-korean">
                  시 만들기
                </h3>
                <h3 className="text-section-title text-deep-navy font-english mt-2">
                  Section Title
                </h3>
              </div>

              {/* H4 */}
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-caption font-medium text-soft-gray">
                    H4 - Card Title
                  </span>
                  <span className="text-caption text-soft-gray font-mono">
                    18pt Bold
                  </span>
                </div>
                <h4 className="text-card-title text-deep-navy font-korean">
                  오늘서
                </h4>
                <h4 className="text-card-title text-deep-navy font-english mt-2">
                  Card Title
                </h4>
              </div>
            </div>
          </div>

          {/* Body Styles */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-page-title text-deep-navy mb-6">본문 스타일</h2>

            <div className="space-y-6">
              {/* Body */}
              <div className="border-b border-gray-100 pb-6">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-caption font-medium text-soft-gray">
                    Body - 기본 텍스트
                  </span>
                  <span className="text-caption text-soft-gray font-mono">
                    18pt Regular
                  </span>
                </div>
                <p className="text-body text-deep-navy font-korean">
                  오늘 있었던 일, 느낀 감정, 특별한 순간들을 18pt로 표현하는
                  기본 본문 텍스트입니다.
                </p>
                <p className="text-body text-deep-navy font-english mt-2">
                  This is the standard body text for expressing daily events,
                  emotions, and special moments in 18pt Regular.
                </p>
              </div>

              {/* Body Small */}
              <div className="border-b border-gray-100 pb-6">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-caption font-medium text-soft-gray">
                    Body small - 상세 텍스트
                  </span>
                  <span className="text-caption text-soft-gray font-mono">
                    16pt Regular
                  </span>
                </div>
                <p className="text-body-small text-deep-navy font-korean">
                  오늘 있었던 일, 느낀 감정, 특별한 순간들을 16pt로 표현하는
                  작은 본문 텍스트입니다.
                </p>
                <p className="text-body-small text-deep-navy font-english mt-2">
                  Smaller body text for detailed content and secondary
                  information in 16pt Regular.
                </p>
              </div>

              {/* Caption */}
              <div className="border-b border-gray-100 pb-6">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-caption font-medium text-soft-gray">
                    Caption - 라벨 텍스트
                  </span>
                  <span className="text-caption text-soft-gray font-mono">
                    14pt Regular
                  </span>
                </div>
                <p className="text-caption text-soft-gray font-korean">
                  작성일: 2025년 7월 10일
                </p>
                <p className="text-caption text-soft-gray font-english mt-1">
                  Created: July 10th, 2025
                </p>
              </div>

              {/* Poetry Body */}
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-caption font-medium text-soft-gray">
                    시 본문 - 마음 깊이 스며드는 순간이 오늘을 파랗게만 감싸인다
                  </span>
                  <span className="text-caption text-soft-gray font-mono">
                    16pt Regular
                  </span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-poetry text-deep-navy font-korean whitespace-pre-line">
                    {`마음 깊이 스며드는 순간이
오늘을 파랗게만 감싸인다

저 멀리 구름 사이로
새어 나오는 햇살처럼`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Font Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-page-title text-deep-navy mb-6">폰트 정보</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Korean Font */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-section-title text-deep-navy mb-4 font-korean">
                  한글 폰트
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-soft-gray">Font Family</span>
                    <span className="text-caption text-deep-navy font-mono">
                      &apos;Gowun Dodum&apos;
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-soft-gray">Fallback</span>
                    <span className="text-caption text-deep-navy font-mono">
                      sans-serif
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-soft-gray">Tailwind Class</span>
                    <span className="text-caption text-deep-navy font-mono">
                      font-korean
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-body-small text-deep-navy font-korean">
                    가나다라마바사아자차카타파하 고운돋움체로 표현되는 한글의
                    아름다움
                  </p>
                </div>
              </div>

              {/* English Font */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-section-title text-deep-navy mb-4 font-english">
                  English Font
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-soft-gray">Font Family</span>
                    <span className="text-caption text-deep-navy font-mono">
                      &apos;Lato&apos;
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-soft-gray">Fallback</span>
                    <span className="text-caption text-deep-navy font-mono">
                      sans-serif
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-soft-gray">Tailwind Class</span>
                    <span className="text-caption text-deep-navy font-mono">
                      font-english
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-body-small text-deep-navy font-english">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    <br />
                    abcdefghijklmnopqrstuvwxyz
                    <br />
                    Beautiful Lato typeface for English content
                  </p>
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-section-title text-deep-navy mb-4">
                사용 가이드라인
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-card-title text-deep-navy mb-2">
                    헤딩 (Headings)
                  </h4>
                  <ul className="space-y-1 text-caption text-soft-gray">
                    <li>• H1: 페이지의 메인 타이틀 (42px)</li>
                    <li>• H2: 섹션의 대제목 (32px)</li>
                    <li>• H3: 서브섹션 제목 (22px)</li>
                    <li>• H4: 카드나 컴포넌트 제목 (18px)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-card-title text-deep-navy mb-2">
                    본문 (Body Text)
                  </h4>
                  <ul className="space-y-1 text-caption text-soft-gray">
                    <li>• Body: 기본 본문 텍스트 (18px)</li>
                    <li>• Body Small: 부연 설명 (16px)</li>
                    <li>• Caption: 라벨, 날짜 등 (14px)</li>
                    <li>• 시 본문: 포엠 콘텐츠 (16px)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
