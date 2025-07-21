import React from "react";

/**
 * @file Input.tsx
 * @description 프로젝트 전반에서 사용되는 공통 인풋 컴포넌트입니다.
 */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  const inputClasses = `
    w-full px-4 py-3 
    text-body text-deep-navy font-korean
    bg-white
    border-2 rounded-lg
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-soft-sky-blue/20
    disabled:opacity-50 disabled:cursor-not-allowed
    ${
      error
        ? "border-red-300 focus:border-red-400"
        : "border-gray-200 focus:border-soft-sky-blue"
    }
    ${className}
  `;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-body-small font-medium text-deep-navy mb-2 font-korean">
          {label}
        </label>
      )}
      <input className={inputClasses} {...props} />
      {error && (
        <p className="mt-1 text-caption text-red-500 font-korean">{error}</p>
      )}
    </div>
  );
}
