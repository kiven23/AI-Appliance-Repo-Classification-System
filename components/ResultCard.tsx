'use client';
import { AnalysisResult } from '@/lib/types';
import Badge from '@/components/Badge';

export default function ResultCard({ result }: { result: AnalysisResult }) {
  const confidencePct = Math.round(result.confidence * 100);
  const confidenceLevel =
    result.confidence > 0.9 ? 'High' : result.confidence > 0.7 ? 'Medium' : 'Low';
  const levelColor =
    confidenceLevel === 'High'
      ? 'green-500'
      : confidenceLevel === 'Medium'
      ? 'yellow-500'
      : 'red-500';

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{result.device_type}</h2>
        <Badge classification={result.classification} />
      </div>

      <div className="flex items-center gap-2">
        <span className="font-medium">Confidence:</span>
        <div className="flex-1 bg-gray-200 rounded-full h-4">
          <div
            className={`h-4 rounded-full bg-${levelColor}`}
            style={{ width: `${confidencePct}%` }}
          />
        </div>
        <span className="text-sm font-medium">{confidencePct}%</span>
        <span className={`text-${levelColor} font-medium`}>{confidenceLevel}</span>
      </div>

      <p className="text-gray-700">{result.summary}</p>
    </div>
  );
}