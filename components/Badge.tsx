'use client';
interface Props {
  classification: string;
}
const colorMap: Record<string, string> = {
  'GROUP 1': 'bg-group1',
  'GROUP 2': 'bg-group2',
  'GROUP 3': 'bg-group3',
  'GROUP 4': 'bg-group4',
  'GROUP 5': 'bg-group5',
  'GROUP 6': 'bg-group6'
};
export default function Badge({ classification }: Props) {
  const bg = colorMap[classification] || 'bg-gray-400';
  return (
    <span className={`${bg} text-white px-3 py-1 rounded-full text-sm font-medium`}>
      {classification}
    </span>
  );
}