import type { IndustryGrowthPoint, HiringDemandEntry, SalaryBenchmark } from '../types';

export const industryGrowthData: IndustryGrowthPoint[] = [
  { year: 2020, sportsLeisure: 2.1, hospitality: -8.5, realEstate: 1.8 },
  { year: 2021, sportsLeisure: 5.4, hospitality: 3.2, realEstate: 4.1 },
  { year: 2022, sportsLeisure: 7.8, hospitality: 12.6, realEstate: 5.9 },
  { year: 2023, sportsLeisure: 9.2, hospitality: 14.1, realEstate: 6.3 },
  { year: 2024, sportsLeisure: 10.5, hospitality: 11.8, realEstate: 7.1 },
  { year: 2025, sportsLeisure: 11.8, hospitality: 10.2, realEstate: 8.4 },
  { year: 2026, sportsLeisure: 13.2, hospitality: 9.6, realEstate: 9.2 },
  { year: 2027, sportsLeisure: 14.5, hospitality: 10.8, realEstate: 10.1 },
  { year: 2028, sportsLeisure: 15.8, hospitality: 11.4, realEstate: 11.5 },
];

export const hiringDemandData: HiringDemandEntry[] = [
  { role: 'CEO / MD', southAfrica: 72, eastAfrica: 65, europe: 58, australasia: 62 },
  { role: 'COO', southAfrica: 68, eastAfrica: 58, europe: 55, australasia: 60 },
  { role: 'Head of Dev', southAfrica: 78, eastAfrica: 82, europe: 48, australasia: 55 },
  { role: 'Country Mgr', southAfrica: 55, eastAfrica: 88, europe: 42, australasia: 50 },
  { role: 'Board / NED', southAfrica: 62, eastAfrica: 45, europe: 70, australasia: 65 },
];

export const salaryBenchmarks: SalaryBenchmark[] = [
  { role: 'CEO / MD', region: 'South Africa', min: 120, median: 180, max: 320 },
  { role: 'CEO / MD', region: 'East Africa', min: 100, median: 150, max: 280 },
  { role: 'CEO / MD', region: 'Europe', min: 180, median: 280, max: 500 },
  { role: 'CEO / MD', region: 'Australasia', min: 200, median: 300, max: 480 },
  { role: 'COO', region: 'South Africa', min: 100, median: 150, max: 260 },
  { role: 'COO', region: 'East Africa', min: 80, median: 120, max: 220 },
  { role: 'COO', region: 'Europe', min: 150, median: 230, max: 400 },
  { role: 'COO', region: 'Australasia', min: 160, median: 250, max: 420 },
  { role: 'Head of Dev', region: 'South Africa', min: 90, median: 130, max: 200 },
  { role: 'Head of Dev', region: 'East Africa', min: 70, median: 110, max: 180 },
  { role: 'Head of Dev', region: 'Europe', min: 120, median: 190, max: 320 },
  { role: 'Head of Dev', region: 'Australasia', min: 130, median: 200, max: 340 },
  { role: 'Country Mgr', region: 'South Africa', min: 80, median: 120, max: 180 },
  { role: 'Country Mgr', region: 'East Africa', min: 70, median: 100, max: 160 },
  { role: 'Country Mgr', region: 'Europe', min: 110, median: 170, max: 280 },
  { role: 'Country Mgr', region: 'Australasia', min: 120, median: 180, max: 300 },
];
