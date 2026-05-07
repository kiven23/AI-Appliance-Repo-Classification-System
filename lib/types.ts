export interface Findings {
  scratch?: string;
  dent?: string;
  color?: string;
  stain?: string;
  rust?: string;
  crack?: string;
  accessories?: string;
  functionality?: string;
}

export interface AnalysisResult {
  id?: string;
  imageUrl: string;
  device_type: string;
  classification: string;
  confidence: number;
  summary: string;
  findings: Findings;
}