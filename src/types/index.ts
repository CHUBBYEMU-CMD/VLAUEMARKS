export type ProjectCategory = 
  | 'All' 
  | 'Commercial & Office' 
  | 'Residential' 
  | 'Industrial & Logistics' 
  | 'Healthcare & Institutional' 
  | 'Banking & Corporate';

export type ProjectStage = 'All' | 'Completed' | 'Pre-Contract' | 'Post-Contract' | 'In Progress';

export interface Project {
  sn: number;
  name: string;
  client: string;
  approxValue: string;
  approxValueNum: number; // in millions of Naira
  stage: 'Completed' | 'Pre-Contract' | 'Post-Contract' | 'In Progress';
  category: 'Commercial & Office' | 'Residential' | 'Industrial & Logistics' | 'Healthcare & Institutional' | 'Banking & Corporate';
  location: string;
  isMarquee?: boolean;
  image?: string;
  description: string;
  keyDeliverables: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  sections: {
    heading: string;
    items: string[];
  }[];
  metricsSummary: string;
}

export interface TeamMember {
  name: string;
  title: string;
  role: string;
  credentials: string;
  bio: string[];
  memberships: string[];
  experience: {
    years: string;
    organisation: string;
    role: string;
  }[];
  selectedWorks: string[];
  photo?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  organisation: string;
  project: string;
  quote: string;
  metric: string;
  year: string;
}

export interface Certification {
  id: string;
  title: string;
  authority: string;
  regNumber: string;
  year: string;
  details: string;
  scanReference: string;
}

export interface QuoteCalculationInput {
  projectType: string;
  estimatedBudgetNaira: number; // in Naira
  servicesNeeded: string[]; // e.g., 'pre-contract', 'post-contract', 'project-management', 'value-engineering'
  projectDurationMonths: number;
}

export interface QuoteCalculationResult {
  estimatedBudgetFormatted: string;
  estimatedFeeMin: number;
  estimatedFeeMax: number;
  estimatedFeeMinFormatted: string;
  estimatedFeeMaxFormatted: string;
  feePercentageRange: string;
  projectedCostSavingsMin: number;
  projectedCostSavingsMax: number;
  projectedCostSavingsFormatted: string;
  recommendedServiceScope: string[];
  deliverables: string[];
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  projectTitle: string;
  projectType: string;
  projectLocation: string;
  estimatedBudgetRange: string;
  servicesNeeded: string[];
  projectStage: string;
  targetStartDate: string;
  projectDetails: string;
}
