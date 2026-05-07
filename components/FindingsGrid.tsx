'use client';
import type { Findings } from '@/lib/types';
import Card from './Card';

const items: (keyof Findings)[] = [
  'scratch',
  'dent',
  'color',
  'stain',
  'rust',
  'crack',
  'accessories',
  'functionality'
];

export default function FindingsGrid({ findings }: { findings: Findings }) {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((key) => {
        const value = findings[key];
        if (!value) return null;
        return (
          <Card title={key.charAt(0).toUpperCase() + key.slice(1)} key={key}>
            {value}
          </Card>
        );
      })}
    </div>
  );
}