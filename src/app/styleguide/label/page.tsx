"use client";

import Link from "next/link";
import { Label } from "@/components/common/Label";

/**
 * @file page.tsx
 * @description 라벨 가이드 페이지 컴포넌트입니다.
 */

export default function LabelPage() {
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
            라벨
          </h1>
          <p className="text-body text-soft-gray font-korean">
            폼 요소와 정보 라벨에 대한 가이드라인입니다.
          </p>
        </div>

        {/* Label Variants */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-section-title text-deep-navy font-korean mb-6">
              라벨 변형 (Variants)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Primary Label */}
              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  Primary
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Label variant="primary" size="small">
                      New
                    </Label>
                    <Label variant="primary" size="medium">
                      중요
                    </Label>
                    <Label variant="primary" size="large">
                      추천 일기
                    </Label>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-caption text-soft-gray font-mono">
                      {`<Label variant="primary">중요</Label>`}
                    </code>
                  </div>
                  <p className="text-body-small text-soft-gray font-korean">
                    가장 중요한 정보나 상태를 나타낼 때 사용합니다.
                  </p>
                </div>
              </div>

              {/* Secondary Label */}
              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  Secondary
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Label variant="secondary" size="small">
                      Hot
                    </Label>
                    <Label variant="secondary" size="medium">
                      인기
                    </Label>
                    <Label variant="secondary" size="large">
                      특별 이벤트
                    </Label>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-caption text-soft-gray font-mono">
                      {`<Label variant="secondary">인기</Label>`}
                    </code>
                  </div>
                  <p className="text-body-small text-soft-gray font-korean">
                    보조적인 중요 정보나 특별한 상태를 표시합니다.
                  </p>
                </div>
              </div>

              {/* Accent Label */}
              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  Accent
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Label variant="accent" size="small">
                      Beta
                    </Label>
                    <Label variant="accent" size="medium">
                      프리미엄
                    </Label>
                    <Label variant="accent" size="large">
                      무제한 이용
                    </Label>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-caption text-soft-gray font-mono">
                      {`<Label variant="accent">프리미엄</Label>`}
                    </code>
                  </div>
                  <p className="text-body-small text-soft-gray font-korean">
                    특별한 기능이나 프리미엄 콘텐츠를 강조합니다.
                  </p>
                </div>
              </div>

              {/* Success Label */}
              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  Success
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Label variant="success" size="small">
                      완료
                    </Label>
                    <Label variant="success" size="medium">
                      저장됨
                    </Label>
                    <Label variant="success" size="large">
                      업로드 성공
                    </Label>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-caption text-soft-gray font-mono">
                      {`<Label variant="success">저장됨</Label>`}
                    </code>
                  </div>
                  <p className="text-body-small text-soft-gray font-korean">
                    성공, 완료, 정상 상태를 나타낼 때 사용합니다.
                  </p>
                </div>
              </div>

              {/* Warning Label */}
              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  Warning
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Label variant="warning" size="small">
                      주의
                    </Label>
                    <Label variant="warning" size="medium">
                      임시저장
                    </Label>
                    <Label variant="warning" size="large">
                      컨텐츠 준비중
                    </Label>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-caption text-soft-gray font-mono">
                      {`<Label variant="warning">임시저장</Label>`}
                    </code>
                  </div>
                  <p className="text-body-small text-soft-gray font-korean">
                    주의가 필요하거나 임시 상태를 표시합니다.
                  </p>
                </div>
              </div>

              {/* Error Label */}
              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  Error
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Label variant="error" size="small">
                      오류
                    </Label>
                    <Label variant="error" size="medium">
                      실패
                    </Label>
                    <Label variant="error" size="large">
                      업로드 실패
                    </Label>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-caption text-soft-gray font-mono">
                      {`<Label variant="error">실패</Label>`}
                    </code>
                  </div>
                  <p className="text-body-small text-soft-gray font-korean">
                    에러, 실패, 문제 상황을 나타낼 때 사용합니다.
                  </p>
                </div>
              </div>

              {/* Neutral Label */}
              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  Neutral
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Label variant="neutral" size="small">
                      태그
                    </Label>
                    <Label variant="neutral" size="medium">
                      일반
                    </Label>
                    <Label variant="neutral" size="large">
                      사용횟수 5/5
                    </Label>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-caption text-soft-gray font-mono">
                      {`<Label variant="neutral">태그</Label>`}
                    </code>
                  </div>
                  <p className="text-body-small text-soft-gray font-korean">
                    일반적인 정보나 중성적인 상태를 표시합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Label Sizes */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-section-title text-deep-navy font-korean mb-6">
              라벨 크기 (Sizes)
            </h2>

            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-card-title text-deep-navy font-korean mb-2">
                    Small
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Label size="small" variant="primary">
                      New
                    </Label>
                    <Label size="small" variant="secondary">
                      Hot
                    </Label>
                    <Label size="small" variant="accent">
                      Beta
                    </Label>
                    <Label size="small" variant="success">
                      완료
                    </Label>
                    <Label size="small" variant="warning">
                      주의
                    </Label>
                    <Label size="small" variant="error">
                      오류
                    </Label>
                    <Label size="small" variant="neutral">
                      태그
                    </Label>
                  </div>
                  <p className="text-caption text-soft-gray font-korean mt-2">
                    아이콘 옆, 인라인 텍스트, 작은 상태 표시에 적합
                  </p>
                </div>

                <div>
                  <h4 className="text-card-title text-deep-navy font-korean mb-2">
                    Medium
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Label size="medium" variant="primary">
                      중요
                    </Label>
                    <Label size="medium" variant="secondary">
                      인기
                    </Label>
                    <Label size="medium" variant="accent">
                      프리미엄
                    </Label>
                    <Label size="medium" variant="success">
                      저장됨
                    </Label>
                    <Label size="medium" variant="warning">
                      임시저장
                    </Label>
                    <Label size="medium" variant="error">
                      실패
                    </Label>
                    <Label size="medium" variant="neutral">
                      일반
                    </Label>
                  </div>
                  <p className="text-caption text-soft-gray font-korean mt-2">
                    가장 일반적인 크기, 대부분의 라벨에 사용
                  </p>
                </div>

                <div>
                  <h4 className="text-card-title text-deep-navy font-korean mb-2">
                    Large
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Label size="large" variant="primary">
                      추천 일기
                    </Label>
                    <Label size="large" variant="secondary">
                      특별 이벤트
                    </Label>
                    <Label size="large" variant="accent">
                      무제한 이용
                    </Label>
                    <Label size="large" variant="success">
                      업로드 성공
                    </Label>
                    <Label size="large" variant="warning">
                      컨텐츠 준비중
                    </Label>
                    <Label size="large" variant="error">
                      업로드 실패
                    </Label>
                    <Label size="large" variant="neutral">
                      사용횟수 5/5
                    </Label>
                  </div>
                  <p className="text-caption text-soft-gray font-korean mt-2">
                    강조가 필요한 중요한 정보, 큰 상태 표시에 사용
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
              {/* Diary Status Example */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  일기 상태 표시
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-body-small text-deep-navy font-korean">
                      나의 여행 일기
                    </span>
                    <Label variant="success" size="small">
                      공개
                    </Label>
                    <Label variant="primary" size="small">
                      인기
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-body-small text-deep-navy font-korean">
                      오늘의 감정
                    </span>
                    <Label variant="warning" size="small">
                      임시저장
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-body-small text-deep-navy font-korean">
                      추억의 사진첩
                    </span>
                    <Label variant="neutral" size="small">
                      비공개
                    </Label>
                    <Label variant="secondary" size="small">
                      즐겨찾기
                    </Label>
                  </div>
                </div>
              </div>

              {/* Feature Labels Example */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  기능 라벨
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-card-title text-deep-navy font-korean">
                        기본 플랜
                      </h4>
                      <Label variant="neutral" size="small">
                        무료
                      </Label>
                    </div>
                    <p className="text-body-small text-soft-gray font-korean">
                      일기 작성 기본 기능
                    </p>
                    <div className="mt-2">
                      <Label variant="neutral" size="small">
                        사용횟수 5/5
                      </Label>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-card-title text-deep-navy font-korean">
                        프리미엄 플랜
                      </h4>
                      <Label variant="accent" size="small">
                        추천
                      </Label>
                    </div>
                    <p className="text-body-small text-soft-gray font-korean">
                      모든 기능 이용 가능
                    </p>
                    <div className="mt-2">
                      <Label variant="accent" size="medium">
                        무제한 이용
                      </Label>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-card-title text-deep-navy font-korean">
                        새 기능
                      </h4>
                      <Label variant="primary" size="small">
                        New
                      </Label>
                    </div>
                    <p className="text-body-small text-soft-gray font-korean">
                      AI 감정 분석 기능
                    </p>
                    <div className="mt-2">
                      <Label variant="warning" size="medium">
                        컨텐츠 준비중
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag System Example */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  태그 시스템
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-body-small text-deep-navy font-korean mb-2">
                      감정 태그
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Label variant="secondary" size="small">
                        기쁨
                      </Label>
                      <Label variant="accent" size="small">
                        평온
                      </Label>
                      <Label variant="neutral" size="small">
                        그리움
                      </Label>
                      <Label variant="warning" size="small">
                        고민
                      </Label>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-body-small text-deep-navy font-korean mb-2">
                      카테고리 태그
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Label variant="primary" size="medium">
                        여행
                      </Label>
                      <Label variant="secondary" size="medium">
                        음식
                      </Label>
                      <Label variant="accent" size="medium">
                        독서
                      </Label>
                      <Label variant="success" size="medium">
                        운동
                      </Label>
                      <Label variant="neutral" size="medium">
                        일상
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upload Status Example */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  업로드 상태
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded border">
                    <span className="text-body-small text-deep-navy font-korean">
                      photo1.jpg
                    </span>
                    <Label variant="success" size="small">
                      업로드 완료
                    </Label>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded border">
                    <span className="text-body-small text-deep-navy font-korean">
                      photo2.jpg
                    </span>
                    <Label variant="warning" size="small">
                      업로드 중...
                    </Label>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded border">
                    <span className="text-body-small text-deep-navy font-korean">
                      photo3.jpg
                    </span>
                    <Label variant="error" size="small">
                      업로드 실패
                    </Label>
                  </div>
                </div>
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
                    • <strong>Small:</strong> 아이콘 옆, 인라인 텍스트, 작은
                    상태 표시
                  </li>
                  <li>
                    • <strong>Medium:</strong> 일반적인 라벨, 태그, 상태 표시
                  </li>
                  <li>
                    • <strong>Large:</strong> 강조가 필요한 중요 정보, 큰 상태
                    표시
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-3">
                  색상 선택 가이드
                </h3>
                <ul className="space-y-2 text-body-small text-soft-gray font-korean">
                  <li>
                    • <strong>Primary:</strong> 가장 중요한 정보 (신규, 추천)
                  </li>
                  <li>
                    • <strong>Secondary:</strong> 특별한 상태 (인기, 이벤트)
                  </li>
                  <li>
                    • <strong>Accent:</strong> 프리미엄 기능, 특별한 혜택
                  </li>
                  <li>
                    • <strong>Success:</strong> 성공, 완료 상태
                  </li>
                  <li>
                    • <strong>Warning:</strong> 주의, 임시 상태
                  </li>
                  <li>
                    • <strong>Error:</strong> 오류, 실패 상태
                  </li>
                  <li>
                    • <strong>Neutral:</strong> 일반적인 정보, 태그
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
                    <div className="flex items-center gap-2">
                      <span className="text-body-small text-green-700 font-korean">
                        나의 일기
                      </span>
                      <Label variant="success" size="small">
                        공개
                      </Label>
                    </div>
                    <div className="flex gap-1">
                      <Label variant="neutral" size="small">
                        여행
                      </Label>
                      <Label variant="neutral" size="small">
                        음식
                      </Label>
                    </div>
                  </div>
                  <p className="text-caption text-green-700 font-korean mt-2">
                    적절한 색상과 크기, 간결한 텍스트 사용
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="text-card-title text-red-800 font-korean mb-2">
                    ❌ 피해야 할 예
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-body-small text-red-700 font-korean">
                        일기
                      </span>
                      <Label variant="error" size="large">
                        매우 긴 라벨 텍스트입니다
                      </Label>
                    </div>
                    <div className="flex gap-1">
                      <Label variant="primary" size="large">
                        여행
                      </Label>
                      <Label variant="secondary" size="large">
                        음식
                      </Label>
                    </div>
                  </div>
                  <p className="text-caption text-red-700 font-korean mt-2">
                    과도한 강조, 긴 텍스트, 부적절한 크기 사용
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
