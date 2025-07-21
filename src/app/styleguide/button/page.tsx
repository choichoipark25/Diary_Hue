"use client";

import Link from "next/link";
import { Button } from "@/components/common/Button";

/**
 * @file page.tsx
 * @description 버튼 가이드 페이지 컴포넌트입니다.
 */

export default function ButtonPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/styleguide"
            className="inline-flex items-center mb-6 text-caption text-deep-navy hover:text-soft-sky-blue transition-colors font-korean"
          >
            ← 스타일 가이드로 돌아가기
          </Link>
          <h1 className="text-page-title text-deep-navy font-korean mb-4">
            버튼
          </h1>
          <p className="text-body text-soft-gray font-korean">
            다양한 버튼 스타일과 상태에 대한 가이드라인입니다.
          </p>
        </div>

        {/* Button Variants */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-section-title text-deep-navy font-korean mb-6">
              버튼 변형 (Variants)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Primary Button */}
              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  Primary
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <Button variant="primary" size="medium">
                      일기 저장하기
                    </Button>
                    <Button variant="primary" size="larger">
                      새 일기 작성
                    </Button>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-caption text-soft-gray font-mono">
                      {`<Button variant="primary">일기 저장하기</Button>`}
                    </code>
                  </div>
                  <p className="text-body-small text-soft-gray font-korean">
                    메인 액션에 사용되는 기본 버튼입니다. 저장, 생성 등 중요한
                    작업에 사용하세요.
                  </p>
                </div>
              </div>

              {/* Secondary Button */}
              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  Secondary
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <Button variant="secondary" size="medium">
                      편집하기
                    </Button>
                    <Button variant="secondary" size="medium">
                      복사하기
                    </Button>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-caption text-soft-gray font-mono">
                      {`<Button variant="secondary">편집하기</Button>`}
                    </code>
                  </div>
                  <p className="text-body-small text-soft-gray font-korean">
                    보조 액션에 사용되는 버튼입니다. 편집, 복사 등에 활용하세요.
                  </p>
                </div>
              </div>

              {/* Accent Button */}
              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  Accent
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <Button variant="accent" size="medium">
                      공유하기
                    </Button>
                    <Button variant="accent" size="small" radius="pill">
                      💖 좋아요
                    </Button>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-caption text-soft-gray font-mono">
                      {`<Button variant="accent">공유하기</Button>`}
                    </code>
                  </div>
                  <p className="text-body-small text-soft-gray font-korean">
                    강조가 필요한 특별한 액션에 사용됩니다. 공유, 즐겨찾기 등에
                    활용하세요.
                  </p>
                </div>
              </div>

              {/* Outline Button */}
              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  Outline
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="medium">
                      취소
                    </Button>
                    <Button variant="outline" size="small">
                      미리보기
                    </Button>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-caption text-soft-gray font-mono">
                      {`<Button variant="outline">취소</Button>`}
                    </code>
                  </div>
                  <p className="text-body-small text-soft-gray font-korean">
                    가벼운 액션이나 취소 버튼에 사용됩니다. 닫기, 미리보기 등에
                    활용하세요.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Button Sizes */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-section-title text-deep-navy font-korean mb-6">
              버튼 크기 (Sizes)
            </h2>

            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-card-title text-deep-navy font-korean mb-2">
                    Small (100×20px)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Button size="small" variant="primary">
                      저장
                    </Button>
                    <Button size="small" variant="secondary">
                      편집
                    </Button>
                    <Button size="small" variant="accent">
                      ♡
                    </Button>
                    <Button size="small" variant="outline">
                      더보기
                    </Button>
                  </div>
                  <p className="text-caption text-soft-gray font-korean mt-2">
                    인라인 버튼, 아이콘 버튼, 보조 액션에 적합
                  </p>
                </div>

                <div>
                  <h4 className="text-card-title text-deep-navy font-korean mb-2">
                    Medium (150×30px)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Button size="medium" variant="primary">
                      일기 저장하기
                    </Button>
                    <Button size="medium" variant="secondary">
                      임시저장
                    </Button>
                    <Button size="medium" variant="accent">
                      공유하기
                    </Button>
                    <Button size="medium" variant="outline">
                      취소
                    </Button>
                  </div>
                  <p className="text-caption text-soft-gray font-korean mt-2">
                    가장 일반적인 크기, 대부분의 액션 버튼에 사용
                  </p>
                </div>

                <div>
                  <h4 className="text-card-title text-deep-navy font-korean mb-2">
                    Larger (200×40px)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Button size="larger" variant="primary">
                      새 일기 작성하기
                    </Button>
                    <Button size="larger" variant="secondary">
                      일기 불러오기
                    </Button>
                    <Button size="larger" variant="accent">
                      프리미엄 가입
                    </Button>
                  </div>
                  <p className="text-caption text-soft-gray font-korean mt-2">
                    주요 CTA, 랜딩 페이지, 중요한 액션에 사용
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Button Radius */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-section-title text-deep-navy font-korean mb-6">
              버튼 모서리 (Border Radius)
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-card-title text-deep-navy font-korean mb-3">
                    Rounded (4px)
                  </h4>
                  <div className="space-y-2">
                    <Button variant="primary" radius="rounded">
                      일기 저장
                    </Button>
                    <Button variant="secondary" radius="rounded">
                      편집하기
                    </Button>
                    <Button variant="accent" radius="rounded">
                      공유
                    </Button>
                    <Button variant="outline" radius="rounded">
                      취소
                    </Button>
                  </div>
                  <p className="text-caption text-soft-gray font-korean mt-2">
                    일반적인 UI 버튼, 폼 요소에 적합한 스타일
                  </p>
                </div>

                <div>
                  <h4 className="text-card-title text-deep-navy font-korean mb-3">
                    Pill (100px)
                  </h4>
                  <div className="space-y-2">
                    <Button variant="primary" radius="pill">
                      📝 일기쓰기
                    </Button>
                    <Button variant="secondary" radius="pill">
                      🎨 테마
                    </Button>
                    <Button variant="accent" radius="pill">
                      ⭐ 즐겨찾기
                    </Button>
                    <Button variant="outline" radius="pill">
                      #태그
                    </Button>
                  </div>
                  <p className="text-caption text-soft-gray font-korean mt-2">
                    태그, 필터, 특별한 액션 버튼에 적합
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real-world Examples */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-section-title text-deep-navy font-korean mb-6">
              실제 사용 예시 (Real-world Examples)
            </h2>

            <div className="space-y-8">
              {/* Login Form Example */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  로그인 폼
                </h3>
                <div className="space-y-3 max-w-sm">
                  <div className="h-10 bg-gray-200 rounded border"></div>
                  <div className="h-10 bg-gray-200 rounded border"></div>
                  <Button variant="primary" size="larger" className="w-full">
                    로그인
                  </Button>
                  <Button variant="outline" size="medium" className="w-full">
                    회원가입
                  </Button>
                </div>
              </div>

              {/* Diary Actions Example */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  일기 액션 바
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary" size="medium">
                    저장
                  </Button>
                  <Button variant="secondary" size="medium">
                    임시저장
                  </Button>
                  <Button variant="accent" size="small" radius="pill">
                    🎨 테마
                  </Button>
                  <Button variant="accent" size="small" radius="pill">
                    📷 사진
                  </Button>
                  <Button variant="outline" size="small">
                    미리보기
                  </Button>
                  <Button variant="outline" size="small">
                    취소
                  </Button>
                </div>
              </div>

              {/* Tag Filter Example */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  태그 필터
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="accent" size="small" radius="pill">
                    #일상
                  </Button>
                  <Button variant="outline" size="small" radius="pill">
                    #여행
                  </Button>
                  <Button variant="outline" size="small" radius="pill">
                    #음식
                  </Button>
                  <Button variant="outline" size="small" radius="pill">
                    #독서
                  </Button>
                  <Button variant="outline" size="small" radius="pill">
                    #운동
                  </Button>
                  <Button variant="secondary" size="small" radius="pill">
                    + 추가
                  </Button>
                </div>
              </div>

              {/* Dialog Actions Example */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  삭제 확인 다이얼로그
                </h3>
                <div className="bg-white p-4 rounded border max-w-sm">
                  <p className="text-body-small text-deep-navy font-korean mb-4">
                    정말로 이 일기를 삭제하시겠습니까?
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button variant="outline" size="medium">
                      취소
                    </Button>
                    <Button variant="secondary" size="medium">
                      삭제
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button States */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-section-title text-deep-navy font-korean mb-6">
              버튼 상태 (States)
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-card-title text-deep-navy font-korean mb-3">
                    Normal State
                  </h4>
                  <div className="space-y-2">
                    <Button variant="primary">클릭 가능</Button>
                    <Button variant="secondary">편집하기</Button>
                    <Button variant="accent">공유하기</Button>
                    <Button variant="outline">취소</Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-card-title text-deep-navy font-korean mb-3">
                    Disabled State
                  </h4>
                  <div className="space-y-2">
                    <Button variant="primary" disabled>
                      저장 중...
                    </Button>
                    <Button variant="secondary" disabled>
                      편집 불가
                    </Button>
                    <Button variant="accent" disabled>
                      공유 불가
                    </Button>
                    <Button variant="outline" disabled>
                      취소 불가
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2 text-caption text-soft-gray font-mono">
                  <div>{`<Button variant="primary">클릭 가능</Button>`}</div>
                  <div>{`<Button variant="primary" disabled>저장 중...</Button>`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-section-title text-deep-navy font-korean mb-6">
              인터랙티브 데모
            </h2>

            <div className="space-y-4">
              <p className="text-body-small text-soft-gray font-korean">
                아래 버튼들을 클릭해서 호버 효과와 전환 애니메이션을
                확인해보세요.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => alert("Primary 버튼 클릭!")}
                >
                  Primary
                </Button>
                <Button
                  variant="secondary"
                  size="medium"
                  onClick={() => alert("Secondary 버튼 클릭!")}
                >
                  Secondary
                </Button>
                <Button
                  variant="accent"
                  size="medium"
                  onClick={() => alert("Accent 버튼 클릭!")}
                >
                  Accent
                </Button>
                <Button
                  variant="outline"
                  size="medium"
                  onClick={() => alert("Outline 버튼 클릭!")}
                >
                  Outline
                </Button>
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-section-title text-deep-navy font-korean mb-6">
              사용 가이드라인
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-3">
                  크기 선택 가이드
                </h3>
                <ul className="space-y-2 text-body-small text-soft-gray font-korean">
                  <li>
                    • <strong>Small (100×20px):</strong> 보조 액션, 인라인 버튼,
                    아이콘 버튼
                  </li>
                  <li>
                    • <strong>Medium (150×30px):</strong> 일반적인 액션 버튼, 폼
                    버튼
                  </li>
                  <li>
                    • <strong>Larger (200×40px):</strong> 주요 CTA, 랜딩 페이지,
                    중요한 액션
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-3">
                  스타일 선택 가이드
                </h3>
                <ul className="space-y-2 text-body-small text-soft-gray font-korean">
                  <li>
                    • <strong>Rounded (4px):</strong> 일반적인 UI 버튼, 폼 요소
                  </li>
                  <li>
                    • <strong>Pill (100px):</strong> 태그, 필터, 특별한 액션
                    버튼
                  </li>
                  <li>
                    • <strong>Primary:</strong> 페이지당 하나만 사용 권장
                  </li>
                  <li>
                    • <strong>Disabled:</strong> 로딩 중이거나 조건 미충족 시
                    사용
                  </li>
                </ul>
              </div>
            </div>

            {/* Best Practices */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-card-title text-deep-navy font-korean mb-3">
                모범 사례
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="text-card-title text-green-800 font-korean mb-2">
                    ✅ 좋은 예
                  </h4>
                  <div className="space-y-2">
                    <Button variant="primary" size="medium">
                      저장하기
                    </Button>
                    <Button variant="outline" size="medium">
                      취소
                    </Button>
                  </div>
                  <p className="text-caption text-green-700 font-korean mt-2">
                    명확한 액션명, 적절한 크기, 계층 구조 명확
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="text-card-title text-red-800 font-korean mb-2">
                    ❌ 피해야 할 예
                  </h4>
                  <div className="space-y-2">
                    <Button variant="primary" size="small">
                      Click
                    </Button>
                    <Button variant="primary" size="larger">
                      OK
                    </Button>
                  </div>
                  <p className="text-caption text-red-700 font-korean mt-2">
                    불명확한 텍스트, Primary 중복 사용, 크기 부적절
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
