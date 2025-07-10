/**
 * @file Header.tsx
 * @description 모든 페이지에서 사용되는 상단 헤더 컴포넌트입니다.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.username="하하하"] - 현재 로그인한 사용자의 이름
 *
 * @example
 * // 기본 사용
 * <Header />
 *
 * // 사용자 이름 지정
 * <Header username="김철수" />
 */

interface HeaderProps {
  username?: string;
}

export default function Header({ username = "테스트이름" }: HeaderProps) {
  return (
    <header className="py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium">오늘의 일기</span>
      </div>
      <div className="text-sm text-text-sub">#오늘 / {username}님</div>
    </header>
  );
}
