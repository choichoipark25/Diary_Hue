/**
 * @file Header.tsx
 * @description 모든 페이지에서 사용되는 상단 헤더 컴포넌트입니다.
 */

interface HeaderProps {
  username?: string;
}

export default function Header({ username = "하하하" }: HeaderProps) {
  return (
    <header className="py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-card-title text-deep-navy font-korean">
          오늘의 일기
        </span>
      </div>
      <div className="text-caption text-soft-gray font-korean">
        #오늘 / {username}님
      </div>
    </header>
  );
}
