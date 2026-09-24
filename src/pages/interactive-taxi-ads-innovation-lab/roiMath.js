// Pure calculation functions for the taxi-ads ROI calculator, extracted out
// of the component so they can be unit-tested and so the UI layer can't
// accidentally skip the NaN/negative/zero guards.

export function safeNumber(value, fallback = 0) {
  const n = typeof value === 'number' ? value : parseFloat(value);
  return Number.isFinite(n) ? n : fallback;
}

// Computes projected campaign performance from the calculator's inputs.
// Every division has a guarded denominator so a zero/empty budget, duration
// or revenue never produces NaN or Infinity on screen — it produces zeros
// instead, which read as "not enough input yet" rather than a broken UI.
export function calculateCampaignROI({
  budget,
  duration,
  audienceMultiplier = 1,
  businessMultiplier = 1,
  averageOrderValue,
  conversionRate,
  currentCAC,
}) {
  const safeBudget = Math.max(0, safeNumber(budget));
  const safeDuration = Math.max(0, safeNumber(duration));
  const safeAOV = Math.max(0, safeNumber(averageOrderValue));
  const safeConversionRate = Math.max(0, safeNumber(conversionRate));
  const safeCurrentCAC = Math.max(0, safeNumber(currentCAC));

  const baseImpressions = safeBudget > 0 ? (safeBudget / 0.12) * (safeDuration / 30) : 0;
  const adjustedImpressions = baseImpressions * audienceMultiplier * businessMultiplier;

  const estimatedReach = adjustedImpressions * 0.7;
  const estimatedClicks = estimatedReach * (safeConversionRate / 100);
  const estimatedConversions = estimatedClicks * 0.15;

  const revenue = estimatedConversions * safeAOV;
  const roi = safeBudget > 0 ? ((revenue - safeBudget) / safeBudget) * 100 : 0;
  const newCAC = estimatedConversions > 0 ? safeBudget / estimatedConversions : 0;
  const cacImprovement = safeCurrentCAC > 0 && newCAC > 0 ? ((safeCurrentCAC - newCAC) / safeCurrentCAC) * 100 : 0;
  const paybackPeriod = revenue > 0 && safeDuration > 0 ? Math.ceil(safeBudget / (revenue / safeDuration)) : 0;

  return {
    impressions: Math.floor(adjustedImpressions),
    reach: Math.floor(estimatedReach),
    clicks: Math.floor(estimatedClicks),
    conversions: Math.floor(estimatedConversions),
    revenue: Math.floor(revenue),
    roi: Math.floor(roi),
    newCAC: Math.floor(newCAC),
    cacImprovement: Math.floor(cacImprovement),
    paybackPeriod,
  };
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function formatCurrency(value) {
  return currencyFormatter.format(safeNumber(value));
}

const numberFormatter = new Intl.NumberFormat('en-US');

export function formatNumber(value) {
  return numberFormatter.format(safeNumber(value));
}
