interface DiaryCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function DiaryCard({
  title,
  description,
  icon,
}: DiaryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="mb-4">
        <img src={icon} alt={title} className="w-12 h-12 mx-auto" />
      </div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-text-sub text-sm">{description}</p>
    </div>
  );
}
