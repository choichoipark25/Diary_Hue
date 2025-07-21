"use client";

import Link from "next/link";
import { ContentCard } from "@/components/common/ContentCard";

/**
 * @file page.tsx
 * @description 콘텐츠 카드 가이드 페이지 컴포넌트입니다.
 */

export default function ContentCardPage() {
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
            콘텐츠 카드
          </h1>
          <p className="text-body text-soft-gray font-korean">
            메인 페이지에서 사용되는 콘텐츠 카드 컴포넌트에 대한
            가이드라인입니다.
          </p>
        </div>

        {/* Content Card States */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-section-title text-deep-navy font-korean mb-6">
              카드 상태 (States)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Available State */}
              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  Available (사용 가능)
                </h3>
                <div className="space-y-4">
                  <ContentCard
                    title="오일시"
                    description="당신의 일기를 감성적인 시로 변환합니다\n오늘 하루를 당신만의 시선으로 재해석해보세요"
                    labels={["새로생", "자유시", "산문시", "하이쿠", "찬미시"]}
                    status="available"
                    onClick={() => alert("오일시 클릭됨!")}
                  />
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-caption text-soft-gray font-mono">
                      {`<ContentCard status="available" onClick={handleClick} />`}
                    </code>
                  </div>
                  <p className="text-body-small text-soft-gray font-korean">
                    클릭 가능한 일반 상태입니다. Hover 시 테두리 색상이
                    변경됩니다.
                  </p>
                </div>
              </div>

              {/* Coming Soon State */}
              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-4">
                  Coming Soon (준비중)
                </h3>
                <div className="space-y-4">
                  <ContentCard
                    title="AI 감정 분석"
                    description="일기 속 감정을 분석하여\n당신의 마음 상태를 시각화해드립니다"
                    labels={["AI", "감정", "분석", "차트", "통계"]}
                    status="coming-soon"
                  />
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-caption text-soft-gray font-mono">
                      {`<ContentCard status="coming-soon" />`}
                    </code>
                  </div>
                  <p className="text-body-small text-soft-gray font-korean">
                    준비중 상태입니다. 우측 상단에 &quot;컨텐츠 준비중&quot;
                    라벨이 표시되고 비활성화됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Examples */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-section-title text-deep-navy font-korean mb-6">
              콘텐츠 예시 (Content Examples)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContentCard
                title="오늘의 컬러"
                description="나의 하루를 색으로 표현해보세요\n감정과 경험을 아름다운 컬러로 기록합니다"
                labels={["감정", "색상", "팔레트", "무드", "기록"]}
                status="available"
                onClick={() => alert("오늘의 컬러 클릭됨!")}
              />

              <ContentCard
                title="음성 일기"
                description="말로 일기를 작성하고\n자동으로 텍스트로 변환됩니다"
                labels={["음성", "변환", "편리", "AI", "기록"]}
                status="coming-soon"
              />

              <ContentCard
                title="사진 일기"
                description="사진과 함께 하루를 기록하고\n추억을 더욱 생생하게 남겨보세요"
                labels={["사진", "추억", "기록", "갤러리"]}
                status="available"
                onClick={() => alert("사진 일기 클릭됨!")}
              />

              <ContentCard
                title="일기 통계"
                description="작성한 일기들을 분석하여\n나만의 글쓰기 패턴을 확인해보세요"
                labels={["통계", "분석", "패턴", "데이터", "차트"]}
                status="coming-soon"
              />
            </div>
          </div>

          {/* Label Variations */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-section-title text-deep-navy font-korean mb-6">
              라벨 변형 (Label Variations)
            </h2>

            <div className="space-y-6">
              <div>
                <h4 className="text-card-title text-deep-navy font-korean mb-3">
                  라벨 개수별 예시
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ContentCard
                    title="1개 라벨"
                    description="라벨이 하나만 있는 경우의 예시입니다"
                    labels={["단일"]}
                    status="available"
                  />

                  <ContentCard
                    title="3개 라벨"
                    description="라벨이 3개 있는 일반적인 경우입니다"
                    labels={["첫번째", "두번째", "세번째"]}
                    status="available"
                  />

                  <ContentCard
                    title="5개 라벨 (최대)"
                    description="최대 5개까지 라벨이 표시됩니다"
                    labels={["하나", "둘", "셋", "넷", "다섯"]}
                    status="available"
                  />

                  <ContentCard
                    title="라벨 없음"
                    description="라벨이 없는 경우의 예시입니다"
                    labels={[]}
                    status="available"
                  />
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
                아래 카드들을 클릭해서 호버 효과와 클릭 이벤트를 확인해보세요.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ContentCard
                  title="감정 일기"
                  description="오늘의 기분을 색과 글로\n표현해보세요"
                  labels={["감정", "기분", "색깔"]}
                  status="available"
                  onClick={() => alert("감정 일기 시작!")}
                />

                <ContentCard
                  title="여행 일기"
                  description="특별한 여행의 순간을\n기록해보세요"
                  labels={["여행", "추억", "사진"]}
                  status="available"
                  onClick={() => alert("여행 일기 시작!")}
                />

                <ContentCard
                  title="미래 기능"
                  description="곧 출시될 새로운 기능입니다\n조금만 기다려주세요"
                  labels={["신기능", "베타", "출시예정"]}
                  status="coming-soon"
                />
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
                  콘텐츠 작성 가이드
                </h3>
                <ul className="space-y-2 text-body-small text-soft-gray font-korean">
                  <li>
                    • <strong>제목:</strong> 명확하고 간결하게 (10자 이내 권장)
                  </li>
                  <li>
                    • <strong>설명:</strong> 2-3줄로 핵심 기능 설명
                  </li>
                  <li>
                    • <strong>라벨:</strong> 최대 5개, 핵심 키워드 위주
                  </li>
                  <li>
                    • <strong>상태:</strong> 사용 가능 여부에 따라 적절히 설정
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-card-title text-deep-navy font-korean mb-3">
                  레이아웃 가이드
                </h3>
                <ul className="space-y-2 text-body-small text-soft-gray font-korean">
                  <li>
                    • <strong>그리드:</strong> 2열 또는 3열 배치 권장
                  </li>
                  <li>
                    • <strong>간격:</strong> 카드 간 충분한 여백 유지
                  </li>
                  <li>
                    • <strong>정렬:</strong> 중앙 정렬로 시각적 균형
                  </li>
                  <li>
                    • <strong>호버:</strong> 명확한 피드백 제공
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
                  <div className="text-caption text-green-700 font-korean space-y-1">
                    <p>• 명확한 제목과 설명</p>
                    <p>• 관련성 높은 라벨 사용</p>
                    <p>• 적절한 상태 설정</p>
                    <p>• 일관된 콘텐츠 길이</p>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="text-card-title text-red-800 font-korean mb-2">
                    ❌ 피해야 할 예
                  </h4>
                  <div className="text-caption text-red-700 font-korean space-y-1">
                    <p>• 너무 긴 제목이나 설명</p>
                    <p>• 관련 없는 라벨 나열</p>
                    <p>• 부정확한 상태 설정</p>
                    <p>• 일관성 없는 콘텐츠 구성</p>
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
