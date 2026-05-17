import type { ProfileStat, Education } from '../types';

export const profileStats: ProfileStat[] = [
  {
    value: '16+',
    label: 'Years Experience',
    sublabel: 'Across 5 continents',
    icon: 'Briefcase',
  },
  {
    value: 'MBA',
    label: 'UCT GSB + ESADE',
    sublabel: "Africa's #1 business school",
    icon: 'GraduationCap',
  },
  {
    value: 'R100M+',
    label: 'FDI Raised',
    sublabel: 'Foreign Direct Investment',
    icon: 'TrendingUp',
  },
  {
    value: '100+',
    label: 'Facilities Built',
    sublabel: 'Padel courts delivered',
    icon: 'Building2',
  },
  {
    value: '10+',
    label: 'Global Sites',
    sublabel: 'Active development pipeline',
    icon: 'Globe',
  },
  {
    value: '4',
    label: 'Active Ventures',
    sublabel: 'Current portfolio',
    icon: 'Rocket',
  },
];

export const education: Education[] = [
  {
    institution: 'ESADE Business & Law School',
    degree: 'International Exchange MBA',
    year: '2018',
    detail: 'E-commerce, Brand Strategy, Leadership, Design Thinking',
  },
  {
    institution: 'UCT Graduate School of Business',
    degree: 'Master of Business Administration',
    year: '2017',
    detail: "Africa's top-ranked business school",
  },
  {
    institution: 'University of Cape Town',
    degree: 'PGDip Enterprise Management & Entrepreneurship',
    year: '2010',
    detail: '',
  },
  {
    institution: 'University of Cape Town',
    degree: 'BCom Finance & Economics',
    year: '2005-2009',
    detail: '',
  },
];
