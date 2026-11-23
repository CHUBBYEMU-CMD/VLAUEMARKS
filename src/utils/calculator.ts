import { Project, ProjectCategory, ProjectStage, QuoteCalculationInput, QuoteCalculationResult, QuoteFormData } from '../types';

/**
 * Format currency in Nigerian Naira with readable shorthand or full comma notation
 */
export function formatNaira(amount: number, shorthand = true): string {
  if (isNaN(amount) || amount === 0) return '₦0';
  
  if (shorthand) {
    if (amount >= 1_000_000_000) {
      const billions = (amount / 1_000_000_000).toFixed(amount % 1_000_000_000 === 0 ? 0 : 1);
      return `₦${billions} Billion`;
    }
    if (amount >= 1_000_000) {
      const millions = (amount / 1_000_000).toFixed(amount % 1_000_000 === 0 ? 0 : 1);
      return `₦${millions} Million`;
    }
    if (amount >= 1_000) {
      return `₦${(amount / 1_000).toFixed(0)}k`;
    }
  }

  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount).replace('NGN', '₦');
}

/**
 * Pure calculation engine for Quantity Surveying and Project Management professional fees
 * Based on standardized professional fee scales adjusted for Nigerian construction sector norms.
 */
export function calculateEstimatedFees(input: QuoteCalculationInput): QuoteCalculationResult {
  const budget = Math.max(0, input.estimatedBudgetNaira);
  
  // Base QS percentage sliding scale according to budget brackets
  let baseRateMin = 0.015;
  let baseRateMax = 0.025;

  if (budget < 100_000_000) {
    // Under ₦100m
    baseRateMin = 0.025;
    baseRateMax = 0.038;
  } else if (budget < 500_000_000) {
    // ₦100m - ₦500m
    baseRateMin = 0.020;
    baseRateMax = 0.030;
  } else if (budget < 2_000_000_000) {
    // ₦500m - ₦2b
    baseRateMin = 0.015;
    baseRateMax = 0.022;
  } else if (budget < 10_000_000_000) {
    // ₦2b - ₦10b
    baseRateMin = 0.011;
    baseRateMax = 0.018;
  } else {
    // ₦10b+ (Mega infrastructure / High-rise developments)
    baseRateMin = 0.008;
    baseRateMax = 0.014;
  }

  // Typology complexity multiplier
  let complexityMultiplier = 1.0;
  const pType = input.projectType.toLowerCase();
  if (pType.includes('health') || pType.includes('hospital')) {
    complexityMultiplier = 1.12;
  } else if (pType.includes('commercial') || pType.includes('office') || pType.includes('tower')) {
    complexityMultiplier = 1.05;
  } else if (pType.includes('industrial') || pType.includes('warehouse')) {
    complexityMultiplier = 0.92;
  } else if (pType.includes('residential')) {
    complexityMultiplier = 0.95;
  }

  // Service scope calculation
  const services = input.servicesNeeded.length > 0 ? input.servicesNeeded : ['pre-contract', 'post-contract'];
  const hasPreContract = services.some(s => s.toLowerCase().includes('pre'));
  const hasPostContract = services.some(s => s.toLowerCase().includes('post'));
  const hasProjectManagement = services.some(s => s.toLowerCase().includes('management'));
  const hasValueEngineering = services.some(s => s.toLowerCase().includes('value'));

  let scopeFactor = 0;
  if (hasPreContract && hasPostContract) {
    scopeFactor += 1.0; // Complete full lifecycle Quantity Surveying
  } else if (hasPreContract) {
    scopeFactor += 0.45; // Feasibility, Bill of Quantities, Tender procurement
  } else if (hasPostContract) {
    scopeFactor += 0.65; // Interim valuations, site audits, claims, final account
  } else {
    scopeFactor += 0.50;
  }

  if (hasProjectManagement) {
    // Project management fee component (typically 1.2% - 1.8% of construction spend)
    scopeFactor += 0.60;
  }

  if (hasValueEngineering) {
    scopeFactor += 0.15;
  }

  const effectiveMinRate = baseRateMin * complexityMultiplier * (scopeFactor > 0 ? scopeFactor : 1.0);
  const effectiveMaxRate = baseRateMax * complexityMultiplier * (scopeFactor > 0 ? scopeFactor : 1.0);

  const estimatedFeeMin = Math.round(budget * effectiveMinRate);
  const estimatedFeeMax = Math.round(budget * effectiveMaxRate);

  // Projected cost savings delivered by Quantity Surveying & strict procurement control
  // Benchmark shows 7% - 14% waste & overpricing prevented through professional QS audit
  const projectedSavingsRateMin = 0.07;
  const projectedSavingsRateMax = 0.14;
  const projectedCostSavingsMin = Math.round(budget * projectedSavingsRateMin);
  const projectedCostSavingsMax = Math.round(budget * projectedSavingsRateMax);

  const deliverables: string[] = [];
  if (hasPreContract) {
    deliverables.push('Detailed Bills of Quantities (BOQ)', 'Tender Documentation & Competitive Contractor Bidding', 'Initial Approximate Estimates & Budget Allocation');
  }
  if (hasPostContract) {
    deliverables.push('Monthly Work-in-Progress Interim Valuations', 'Contractor Claims Evaluation & Financial Audit', 'Comprehensive Final Account Reconciliation');
  }
  if (hasProjectManagement) {
    deliverables.push('Multi-Disciplinary Site Coordination', 'Lender & Stakeholder Monthly Financial Protection Reports', 'Master Project Schedule & Cashflow Milestone Governance');
  }
  if (hasValueEngineering) {
    deliverables.push('Alternative Material & Lifecycle Cost Appraisals', 'Design Optimization Without Quality Compromise');
  }

  return {
    estimatedBudgetFormatted: formatNaira(budget),
    estimatedFeeMin,
    estimatedFeeMax,
    estimatedFeeMinFormatted: formatNaira(estimatedFeeMin),
    estimatedFeeMaxFormatted: formatNaira(estimatedFeeMax),
    feePercentageRange: `${(effectiveMinRate * 100).toFixed(2)}% – ${(effectiveMaxRate * 100).toFixed(2)}%`,
    projectedCostSavingsMin,
    projectedCostSavingsMax,
    projectedCostSavingsFormatted: `${formatNaira(projectedCostSavingsMin)} – ${formatNaira(projectedCostSavingsMax)}`,
    recommendedServiceScope: services,
    deliverables: deliverables.length > 0 ? deliverables : ['Comprehensive QS & Cost Engineering Pack'],
  };
}

/**
 * Filter and search notable company projects
 */
export function filterProjects(
  projects: Project[],
  query: string,
  category: ProjectCategory,
  stage: ProjectStage
): Project[] {
  const cleanQuery = query.trim().toLowerCase();

  return projects.filter(project => {
    // Stage match
    if (stage !== 'All' && project.stage !== stage) {
      return false;
    }

    // Category match
    if (category !== 'All' && project.category !== category) {
      return false;
    }

    // Text search query
    if (cleanQuery) {
      const matchName = project.name.toLowerCase().includes(cleanQuery);
      const matchClient = project.client.toLowerCase().includes(cleanQuery);
      const matchLocation = project.location.toLowerCase().includes(cleanQuery);
      const matchDesc = project.description.toLowerCase().includes(cleanQuery);
      const matchValue = project.approxValue.toLowerCase().includes(cleanQuery);
      if (!matchName && !matchClient && !matchLocation && !matchDesc && !matchValue) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Validate quote lead submission form
 */
export function validateQuoteForm(data: Partial<QuoteFormData>): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address';
  }

  if (!data.phone || data.phone.trim().length < 7) {
    errors.phone = 'Please provide a valid phone number';
  }

  if (!data.projectTitle || data.projectTitle.trim().length < 3) {
    errors.projectTitle = 'Please specify the project title or description';
  }

  if (!data.projectType || data.projectType.trim() === '') {
    errors.projectType = 'Please select a project typology';
  }

  if (!data.servicesNeeded || data.servicesNeeded.length === 0) {
    errors.servicesNeeded = 'Please select at least one required service';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
