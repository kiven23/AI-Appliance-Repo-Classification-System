'use client';
import { useState, useCallback } from 'react';
import UploadZone from '@/components/UploadZone';
import ResultCard from '@/components/ResultCard';
import FindingsGrid from '@/components/FindingsGrid';
import HistoryPanel from '@/components/HistoryPanel';
import LoadingSpinner from '@/components/LoadingSpinner';
import { analyzeImage, AnalysisResult } from '@/lib/api';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<AnalysisResult[]>([]);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }, []);

  const handleAnalyze = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const res = await analyzeImage(file);
      const entry = { ...res, id: uuidv4(), imageUrl: preview! };
      setResult(entry);
      setHistory((prev) => [entry, ...prev]);
    } catch {
      alert('Analysis failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleHistorySelect = (item: AnalysisResult) => {
    setResult(item);
    setPreview(item.imageUrl);
    setFile(null);
  };

  return (
    <main className="flex flex-col md:flex-row flex-1 p-6 gap-6">
      <section className="flex-1 flex flex-col gap-4">
        <UploadZone onFileSelect={handleFile} preview={preview} />
        <button
          onClick={handleAnalyze}
          disabled={!file || loading}
          className="mt-2 bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50 flex items-center justify-center"
        >
          {loading ? (
            <>
              <LoadingSpinner size={20} className="mr-2" />
              Analyzing...
            </>
          ) : (
            'Analyze'
          )}
        </button>

        {result && (
          <div className="mt-6">
            <ResultCard result={result} />
            <FindingsGrid findings={result.findings} />
          </div>
        )}
      </section>

      <aside className="w-full md:w-64">
        <HistoryPanel items={history} onSelect={handleHistorySelect} />
      </aside>
    </main>
  );
}