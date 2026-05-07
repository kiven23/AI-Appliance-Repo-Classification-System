'use client';
import { useRef } from 'react';
import Image from 'next/image';
import placeholder from '@/public/placeholder.png';

interface Props {
  onFileSelect: (file: File) => void;
  preview: string | null;
}

export default function UploadZone({ onFileSelect, preview }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) onFileSelect(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) onFileSelect(file);
  };

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-blue-400 transition"
      onClick={() => inputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleChange}
      />
      {preview ? (
        <Image src={preview} alt="preview" width={300} height={200} className="rounded-lg" />
      ) : (
        <>
          <Image src={placeholder} alt="placeholder" width={120} height={120} />
          <p className="text-gray-600">Drag & drop or click to upload</p>
        </>
      )}
    </div>
  );
}