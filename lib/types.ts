export interface Feature {
  id: string;
  label: string;
  icon: string;
  desc: string;
  tip: string;
  category: "head" | "body";
  criteria: string;
}

export interface FeaturePhotos {
  [featureId: string]: {
    a: string | null;
    b: string | null;
  };
}

export interface FeatureResult {
  score: number | null;
  note: string;
  subDetail?: string;
}

export interface AnalysisResults {
  overall_score: number;
  verdict: string;
  features: { [featureId: string]: FeatureResult };
  errors: string[] | null;
  analyzed_count: number;
}

export interface AnalyzeRequest {
  featureId: string;
  featureLabel: string;
  featureDesc: string;
  featureCriteria: string;
  imageA: string; // base64 without prefix
  imageB: string; // base64 without prefix
  relationship: string;
}

export interface AnalyzeResponse {
  success: boolean;
  score?: number;
  note?: string;
  subDetail?: string;
  error?: string;
}
