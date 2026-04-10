export interface ProfileStat {
  value: string;
  label: string;
  sublabel?: string;
  icon: string;
}

export interface CareerEntry {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  startYear: number;
  endYear: number;
  location: string;
  highlights: string[];
  category: 'entrepreneurship' | 'consulting' | 'investment' | 'operations' | 'other';
}

export interface IndustryGrowthPoint {
  year: number;
  sportsLeisure: number;
  hospitality: number;
  realEstate: number;
}

export interface HiringDemandEntry {
  role: string;
  southAfrica: number;
  eastAfrica: number;
  europe: number;
  australasia: number;
}

export interface GeographicMarket {
  region: string;
  opportunity: number;
  executiveDemand: number;
  costEfficiency: number;
  qualityOfLife: number;
}

export interface SalaryBenchmark {
  role: string;
  region: string;
  min: number;
  median: number;
  max: number;
}

export interface RoleCategory {
  title: string;
  description: string;
  fitScore: number;
  exampleCompanies: string[];
  keyRequirements: string[];
}

export interface SkillMatch {
  skill: string;
  candidateScore: number;
  roleRequirement: number;
}

export interface CompetencyAxis {
  axis: string;
  shortLabel: string;
  candidateScore: number;
  benchmarkScore: number;
}

export interface IndustryFit {
  industry: string;
  score: number;
  reasoning: string;
}

export interface CompanyType {
  name: string;
  description: string;
}
