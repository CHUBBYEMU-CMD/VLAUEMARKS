import test from 'node:test';
import assert from 'node:assert/strict';
import { formatNaira, calculateEstimatedFees, filterProjects, validateQuoteForm } from './calculator';
import { Project } from '../types';

test('formatNaira formats billions, millions, and standard values properly', () => {
  assert.equal(formatNaira(32_000_000_000), '₦32 Billion');
  assert.equal(formatNaira(1_300_000_000), '₦1.3 Billion');
  assert.equal(formatNaira(507_000_000), '₦507 Million');
  assert.equal(formatNaira(80_000_000), '₦80 Million');
  assert.equal(formatNaira(0), '₦0');
});

test('calculateEstimatedFees computes professional fee range and projected savings', () => {
  const result = calculateEstimatedFees({
    projectType: 'Commercial & Office',
    estimatedBudgetNaira: 1_000_000_000, // ₦1 Billion
    servicesNeeded: ['pre-contract', 'post-contract'],
    projectDurationMonths: 18,
  });

  assert.ok(result.estimatedFeeMin > 0);
  assert.ok(result.estimatedFeeMax > result.estimatedFeeMin);
  assert.ok(result.projectedCostSavingsMin >= 70_000_000); // at least 7% savings
  assert.ok(result.deliverables.length >= 2);
  assert.equal(typeof result.feePercentageRange, 'string');
});

test('calculateEstimatedFees factors in project management scope', () => {
  const baseResult = calculateEstimatedFees({
    projectType: 'Commercial & Office',
    estimatedBudgetNaira: 500_000_000,
    servicesNeeded: ['pre-contract'],
    projectDurationMonths: 12,
  });

  const combinedResult = calculateEstimatedFees({
    projectType: 'Commercial & Office',
    estimatedBudgetNaira: 500_000_000,
    servicesNeeded: ['pre-contract', 'project-management'],
    projectDurationMonths: 12,
  });

  assert.ok(combinedResult.estimatedFeeMax > baseResult.estimatedFeeMax);
});

test('filterProjects handles category, stage, and keyword matching', () => {
  const sampleProjects: Project[] = [
    {
      sn: 1,
      name: 'Heritage Place Grade A Office',
      client: 'First Concept & Properties Limited',
      approxValue: '₦19b',
      approxValueNum: 19000,
      stage: 'Completed',
      category: 'Commercial & Office',
      location: 'Lugard Road, Ikoyi, Lagos',
      description: 'Grade A office commercial development',
      keyDeliverables: ['Bill of quantities', 'Cost control'],
    },
    {
      sn: 2,
      name: 'Noor Residential Development',
      client: 'Tai Construction & Realtors Limited',
      approxValue: '₦18b',
      approxValueNum: 18000,
      stage: 'Pre-Contract',
      category: 'Residential',
      location: 'Oyinkan Abayomi Drive, Ikoyi',
      description: 'Ultra-luxury multi-storey residential complex',
      keyDeliverables: ['Feasibility estimation'],
    },
    {
      sn: 3,
      name: 'Punch Warehouse Phase 1',
      client: 'Punch Nigeria Limited',
      approxValue: '₦1.2b',
      approxValueNum: 1200,
      stage: 'Completed',
      category: 'Industrial & Logistics',
      location: 'Magboro, Ogun State',
      description: 'Industrial printing & warehouse facilities',
      keyDeliverables: ['Interim valuations'],
    },
  ];

  // Stage filter
  const completedOnly = filterProjects(sampleProjects, '', 'All', 'Completed');
  assert.equal(completedOnly.length, 2);

  // Category filter
  const residentialOnly = filterProjects(sampleProjects, '', 'Residential', 'All');
  assert.equal(residentialOnly.length, 1);
  assert.equal(residentialOnly[0].name, 'Noor Residential Development');

  // Query search
  const punchSearch = filterProjects(sampleProjects, 'punch', 'All', 'All');
  assert.equal(punchSearch.length, 1);
  assert.equal(punchSearch[0].client, 'Punch Nigeria Limited');

  // Location search
  const ikoyiSearch = filterProjects(sampleProjects, 'Ikoyi', 'All', 'All');
  assert.equal(ikoyiSearch.length, 2);
});

test('validateQuoteForm catches missing and invalid fields', () => {
  const emptyForm = validateQuoteForm({});
  assert.equal(emptyForm.isValid, false);
  assert.ok(emptyForm.errors.fullName);
  assert.ok(emptyForm.errors.email);

  const invalidEmailForm = validateQuoteForm({
    fullName: 'Olawale Agboola',
    email: 'not-an-email',
    phone: '08033351735',
    projectTitle: 'Heritage Tower Commercial',
    projectType: 'Commercial',
    servicesNeeded: ['pre-contract'],
  });
  assert.equal(invalidEmailForm.isValid, false);
  assert.ok(invalidEmailForm.errors.email);

  const validForm = validateQuoteForm({
    fullName: 'Chief Babatunde Adeleke',
    email: 'babatunde@example.com',
    phone: '+234 803 335 1735',
    projectTitle: 'Victoria Island Commercial Plaza',
    projectType: 'Commercial & Office',
    servicesNeeded: ['pre-contract', 'post-contract'],
  });
  assert.equal(validForm.isValid, true);
  assert.equal(Object.keys(validForm.errors).length, 0);
});
