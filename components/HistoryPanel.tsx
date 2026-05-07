'use client';
import type { AnalysisResult } from '@/lib/types';
import Image from 'next/image';

export default function HistoryPanel({
  items,
  onSelect,
}: {
  items: AnalysisResult[];
  onSelect: (item: AnalysisResult) => void;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4 h-full overflow-y-auto">
      <h3 className="font-semibold mb-3">History</h3>
      {items.length === 0 && <p className="text-gray-500">No previous analyses.</p>}
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
            onClick={() => onSelect(item)}
          >
            <Image src={item.imageUrl} alt="thumb" width={40} height={30} className="rounded" />
            <div className="flex flex-col">
              <span className="font-medium">{item.device_type}</span>
              <span className="text-sm text-gray-600">{item.classification}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}