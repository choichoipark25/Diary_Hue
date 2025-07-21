import React from "react";
import { Label } from "../Label";
import Image from "next/image";

/**
 * @file ContentCard.tsx
 * @description 메인 페이지에서 사용되는 콘텐츠 카드 컴포넌트입니다.
 */

export type ContentCardStatus = "available" | "coming-soon";

interface ContentCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  labels?: string[];
  status?: ContentCardStatus;
  onClick?: () => void;
  className?: string;
}

export default function ContentCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  labels = [],
  status = "available",
  onClick,
  className = "",
}: ContentCardProps) {
  const isComingSoon = status === "coming-soon";
  const displayLabels = labels.slice(0, 5); // 최대 5개만 표시

  return (
    <div
      className={`
        relative bg-white rounded-lg border-2 p-6 transition-all duration-200 cursor-pointer
        ${
          isComingSoon
            ? "border-gray-200 opacity-75"
            : "border-gray-200 hover:border-soft-sky-blue hover:shadow-lg"
        }
        ${className}
      `}
      onClick={!isComingSoon ? onClick : undefined}
    >
      {/* 준비중 라벨 (우측 상단) */}
      {isComingSoon && (
        <div className="absolute top-3 right-3">
          <Label variant="warning" size="small">
            컨텐츠 준비중
          </Label>
        </div>
      )}

      {/* 이미지 영역 */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 flex items-center justify-center">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={64}
              height={64}
              className="object-contain"
            />
          ) : (
            // 기본 아이콘 (연필과 종이)
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-soft-gray"
              >
                <path
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* 연필 */}
                <path
                  d="M20 8l-2-2-1.5 1.5L18 9l2-1z"
                  fill="currentColor"
                  className="text-orange-400"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* 타이틀 */}
      <h3 className="text-card-title text-deep-navy font-korean text-center mb-3">
        {title}
      </h3>

      {/* 본문 설명 */}
      <p className="text-body-small text-soft-gray font-korean text-center mb-4 leading-relaxed whitespace-pre-line">
        {description}
      </p>

      {/* 라벨들 */}
      {displayLabels.length > 0 && (
        <div className="flex flex-wrap justify-center gap-1">
          {displayLabels.map((label, index) => (
            <Label
              key={index}
              variant="accent"
              size="small"
              className={isComingSoon ? "opacity-60" : ""}
            >
              {label}
            </Label>
          ))}
        </div>
      )}

      {/* 비활성화 오버레이 */}
      {isComingSoon && (
        <div className="absolute inset-0 bg-gray-50 bg-opacity-50 rounded-lg pointer-events-none" />
      )}
    </div>
  );
}
