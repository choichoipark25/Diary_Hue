/**
 * @file DiaryCard.tsx
 * @description 개별 다이어리 카드를 표시하는 컴포넌트입니다.
 */

interface DiaryCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export default function DiaryCard({
  title,
  description,
  onClick,
}: DiaryCardProps) {
  return (
    <div
      className="bg-background-primary rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-sm text-text-sub">{description}</p>
    </div>
  );
}
