import { describe, it, expect } from 'vitest';
import { calculateCampaignROI, formatCurrency, formatNumber, safeNumber } from './roiMath';

describe('safeNumber', () => {
  it('passes through finite numbers', () => {
    expect(safeNumber(42)).toBe(42);
  });

  it('parses numeric strings', () => {
    expect(safeNumber('42')).toBe(42);
  });

  it('falls back to 0 for NaN input', () => {
    expect(safeNumber('not a number')).toBe(0);
    expect(safeNumber(undefined)).toBe(0);
    expect(safeNumber(null)).toBe(0);
  });

  it('falls back to a custom default', () => {
    expect(safeNumber('not a number', 7)).toBe(7);
  });
});

describe('calculateCampaignROI', () => {
  const validInput = {
    budget: 50000,
    duration: 30,
    audienceMultiplier: 1.2,
    businessMultiplier: 1.1,
    averageOrderValue: 500,
    conversionRate: 2.5,
    currentCAC: 150,
  };

  it('produces finite, non-negative results for typical input', () => {
    const result = calculateCampaignROI(validInput);
    for (const value of Object.values(result)) {
      expect(Number.isFinite(value)).toBe(true);
    }
    expect(result.impressions).toBeGreaterThan(0);
    expect(result.revenue).toBeGreaterThan(0);
  });

  it('never returns NaN or Infinity when budget is zero', () => {
    const result = calculateCampaignROI({ ...validInput, budget: 0 });
    for (const value of Object.values(result)) {
      expect(Number.isFinite(value)).toBe(true);
    }
    expect(result.roi).toBe(0);
    expect(result.newCAC).toBe(0);
  });

  it('never returns NaN or Infinity when every input is empty/undefined', () => {
    const result = calculateCampaignROI({});
    for (const value of Object.values(result)) {
      expect(Number.isFinite(value)).toBe(true);
      expect(value).toBe(0);
    }
  });

  it('clamps negative inputs instead of producing negative impressions/revenue', () => {
    const result = calculateCampaignROI({
      ...validInput,
      budget: -50000,
      averageOrderValue: -500,
    });
    expect(result.impressions).toBe(0);
    expect(result.revenue).toBe(0);
    expect(Number.isFinite(result.roi)).toBe(true);
  });

  it('never divides by zero for newCAC/cacImprovement/paybackPeriod when conversions are zero', () => {
    const result = calculateCampaignROI({ ...validInput, conversionRate: 0 });
    expect(result.conversions).toBe(0);
    expect(result.newCAC).toBe(0);
    expect(result.cacImprovement).toBe(0);
    expect(Number.isFinite(result.paybackPeriod)).toBe(true);
  });
});

describe('formatCurrency', () => {
  it('formats a positive number as USD with no decimals', () => {
    expect(formatCurrency(125000)).toBe('$125,000');
  });

  it('formats zero and non-finite input as $0', () => {
    expect(formatCurrency(0)).toBe('$0');
    expect(formatCurrency(NaN)).toBe('$0');
    expect(formatCurrency(undefined)).toBe('$0');
  });
});

describe('formatNumber', () => {
  it('formats large numbers with thousands separators', () => {
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('formats non-finite input as 0', () => {
    expect(formatNumber(NaN)).toBe('0');
  });
});
