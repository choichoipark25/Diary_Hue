import React from "react";

/**
 * @file Label.tsx
 * @description 프로젝트 전반에서 사용되는 공통 라벨 컴포넌트입니다.
 */

export type LabelVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "neutral";
export type LabelSize = "small" | "medium" | "large";

interface LabelProps {
  variant?: LabelVariant;
  size?: LabelSize;
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  primary: "bg-soft-sky-blue text-white",
  secondary: "bg-cozy-pink text-white",
  accent: "bg-cool-lavender text-deep-navy",
  success: "bg-green-100 text-green-800 border border-green-200",
  warning: "bg-orange-100 text-orange-800 border border-orange-200",
  error: "bg-red-100 text-red-800 border border-red-200",
  neutral: "bg-gray-100 text-soft-gray border border-gray-200",
};

const sizeStyles = {
  small: "px-2 py-1 text-caption",
  medium: "px-3 py-1.5 text-body-small",
  large: "px-4 py-2 text-body-small",
};

export default function Label({
  variant = "neutral",
  size = "medium",
  children,
  className = "",
}: LabelProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-korean font-medium whitespace-nowrap";

  const classes = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return <span className={classes}>{children}</span>;
}
