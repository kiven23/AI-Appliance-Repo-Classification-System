'use client';
export default function Card({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}