import type { RoleCategory, SkillMatch, IndustryFit, CompanyType } from '../types';

export const roleCategories: RoleCategory[] = [
  {
    title: 'CEO / Managing Director',
    description: 'Lead an organisation end-to-end with P&L responsibility, strategic vision, and investor relations. Your multi-venture founding experience, capital raising track record, and operational breadth make you a natural fit.',
    fitScore: 92,
    exampleCompanies: [
      'Sports franchise operators',
      'Hospitality management groups',
      'Emerging-market leisure developers',
    ],
    keyRequirements: [
      'P&L ownership',
      'Capital raising',
      'Strategic vision',
      'Board management',
      'Multi-stakeholder leadership',
    ],
  },
  {
    title: 'COO / Chief Operating Officer',
    description: 'Drive operational excellence across complex, multi-site businesses. Your experience scaling Padel Build to 100+ installations and managing construction supply chains demonstrates strong operational capability.',
    fitScore: 88,
    exampleCompanies: [
      'Resort and hotel groups',
      'Multi-site sports facilities',
      'Construction and property developers',
    ],
    keyRequirements: [
      'Operational scaling',
      'Supply chain management',
      'Process optimisation',
      'Team leadership',
      'Multi-site coordination',
    ],
  },
  {
    title: 'Head of Development',
    description: 'Lead real estate, venue, and facility development pipelines from site acquisition through delivery. Your track record of managing 10+ international development sites and securing land, planning, and capital is directly applicable.',
    fitScore: 95,
    exampleCompanies: [
      'Resort-integrated developers',
      'Sports facility investors',
      'Hospitality REITs',
    ],
    keyRequirements: [
      'Site acquisition',
      'Development pipeline management',
      'Capital structuring',
      'Planning approvals',
      'JV structuring',
    ],
  },
  {
    title: 'Country / Regional Manager',
    description: 'Establish and grow operations in African and emerging markets. Your experience as Country Director in South Sudan and expanding across 14+ countries positions you uniquely for frontier market leadership.',
    fitScore: 90,
    exampleCompanies: [
      'Pan-African conglomerates',
      'International hospitality chains',
      'Development finance institutions',
    ],
    keyRequirements: [
      'Market entry strategy',
      'Stakeholder management',
      'Government relations',
      'P&L ownership',
      'Cross-cultural leadership',
    ],
  },
];

export const skillMatches: SkillMatch[] = [
  { skill: 'Business Development', candidateScore: 95, roleRequirement: 88 },
  { skill: 'Capital Raising & FDI', candidateScore: 92, roleRequirement: 82 },
  { skill: 'Strategic Partnerships', candidateScore: 94, roleRequirement: 85 },
  { skill: 'Multi-Site Operations', candidateScore: 85, roleRequirement: 90 },
  { skill: 'Team Leadership', candidateScore: 90, roleRequirement: 92 },
  { skill: 'International Expansion', candidateScore: 93, roleRequirement: 78 },
  { skill: 'Financial Analysis', candidateScore: 80, roleRequirement: 82 },
  { skill: 'Stakeholder Management', candidateScore: 92, roleRequirement: 88 },
];

export const industryFits: IndustryFit[] = [
  {
    industry: 'Sports & Leisure',
    score: 95,
    reasoning: 'Deep domain expertise from founding and scaling multiple padel ventures across 4 continents',
  },
  {
    industry: 'Hospitality',
    score: 88,
    reasoning: 'Resort-integrated venue development, corporate wellness, and lifestyle brand experience',
  },
  {
    industry: 'Real Estate Development',
    score: 82,
    reasoning: '10+ site development pipeline, land sourcing, planning approvals, and construction management',
  },
  {
    industry: 'Impact & Development',
    score: 78,
    reasoning: '12+ years leading NGO, experience in conflict and emerging markets, development finance exposure',
  },
];

export const companyTypes: CompanyType[] = [
  { name: 'PE-Backed Hospitality Groups', description: 'Portfolio companies requiring operational leadership and growth execution' },
  { name: 'Sports Franchise Operators', description: 'Multi-site sports & entertainment businesses expanding in emerging markets' },
  { name: 'Pan-African Conglomerates', description: 'Diversified groups seeking leaders for leisure/hospitality divisions' },
  { name: 'Resort & Lifestyle Developers', description: 'Companies building destination venues, integrated resorts, and mixed-use developments' },
  { name: 'Sports-Tech Scale-Ups', description: 'Technology companies in the sports/wellness space seeking commercial leadership' },
  { name: 'Development Finance Institutions', description: 'Impact-focused organisations investing in African infrastructure and hospitality' },
  { name: 'International Hotel Chains', description: 'Global brands expanding into Africa and emerging markets' },
  { name: 'Real Estate Investment Trusts', description: 'REITs focused on leisure, hospitality, and mixed-use assets' },
];
