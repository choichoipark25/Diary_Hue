"use client";

import { ContentCard } from "@/components/common/ContentCard";

/**
 * @file DiaryCardSection.tsx
 * @description 다이어리 카드들을 그리드 형태로 표시하는 섹션 컴포넌트입니다.
 */

const contentCards = [
  {
    title: "오일시",
    description:
      "당신의 일기를 감성적인 시로 변환합니다.\n오늘의 하루를 아름답게 표현해보세요.",
    labels: ["새로생", "자유시", "산문시", "하이쿠", "찬미시"],
    status: "available" as const,
  },
  {
    title: "오일소",
    description:
      "당신의 일기를 짧은 소설로 만들어 줍니다.\n오늘의 하루를 이야기로 남겨보세요.",
    labels: ["감정", "색상", "팔레트", "무드", "기록"],
    status: "available" as const,
  },
  {
    title: "컨텐츠 준비중입니다",
    description: "컨텐츠 준비중입니다 ",
    labels: ["준비"],
    status: "coming-soon" as const,
  },
  {
    title: "컨텐츠 준비중입니다",
    description: "컨텐츠 준비중입니다",
    labels: [],
    status: "coming-soon" as const,
  },
];

export default function DiaryCardSection() {
  return (
    <div className="max-w-content mx-auto mb-16 mt-16">
      <div className="text-center">
        <h2 className="text-page-title text-deep-navy font-korean mb-4">
          어떤 작품을 만들어볼까요?
        </h2>
        <p className="text-body text-soft-gray font-korean mb-8">
          일기가 작품이 되어가는 여행을 시작해 보세요
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {contentCards.map((card, index) => (
          <ContentCard
            key={index}
            title={card.title}
            description={card.description}
            labels={card.labels}
            status={card.status}
            onClick={() => {
              if (card.status === "available") {
                console.log(`${card.title} 클릭됨`);
                // 실제 라우팅 로직 추가
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
