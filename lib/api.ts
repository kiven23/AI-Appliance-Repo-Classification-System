import axios from 'axios';
import type { AnalysisResult } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function analyzeImage(
  file: File
): Promise<Omit<AnalysisResult, 'id' | 'imageUrl'>> {
  const form = new FormData();
  form.append('file', file);
  const { data } = await axios.post(`${API_URL}/analyze`, form, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return {
    device_type: data.device_type,
    classification: data.classification,
    confidence: data.confidence,
    summary: data.summary,
    findings: data.findings,
    imageUrl: '' // will be set by caller
  };
}