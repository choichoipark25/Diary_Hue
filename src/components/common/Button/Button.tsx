import React from "react";

/**
 * @file Button.tsx
 * @description 프로젝트 전반에서 사용되는 공통 버튼 컴포넌트입니다.
 */

export type ButtonVariant = "primary" | "secondary" | "accent" | "outline";
export type ButtonSize = "small" | "medium" | "larger";
export type ButtonRadius = "rounded" | "pill";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  primary: "bg-soft-sky-blue hover:bg-soft-sky-blue/80 text-white",
  secondary: "bg-cozy-pink hover:bg-cozy-pink/80 text-white",
  accent: "bg-cool-lavender hover:bg-cool-lavender/80 text-deep-navy",
  outline:
    "border-2 border-soft-sky-blue text-soft-sky-blue hover:bg-soft-sky-blue hover:text-white",
};

const sizeStyles = {
  small: "w-[100px] h-[20px] text-caption",
  medium: "w-[150px] h-[30px] text-body-small",
  larger: "w-[200px] h-[40px] text-body",
};

const radiusStyles = {
  rounded: "rounded-[4px]",
  pill: "rounded-[100px]",
};

export default function Button({
  variant = "primary",
  size = "medium",
  radius = "rounded",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-soft-sky-blue/20 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${radiusStyles[radius]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
