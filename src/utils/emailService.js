// Lightweight email submission helper for the marketing site.
//
// Strategy:
//  1. If VITE_WEB3FORMS_KEY is set, POST the inquiry to Web3Forms, a free,
//     account-based relay that forwards submissions to info@travomate.com.pl.
//     Register the destination address at https://web3forms.com to obtain a
//     key, then drop it in `.env.local` as VITE_WEB3FORMS_KEY=...
//  2. If a custom backend is preferred, set VITE_CONTACT_FORM_ENDPOINT to a
//     URL that accepts JSON `{ subject, formType, summary, data }`.
//  3. Fall back to a `mailto:` link so the visitor's email client opens
//     pre-filled, guaranteeing the inquiry can still reach the inbox even
//     when no relay is configured.

const RECIPIENT = 'info@travomate.com.pl';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const HUMAN_LABELS = {
  name: 'Full Name',
  email: 'Email',
  phone: 'Phone',
  company: 'Company',
  companyStage: 'Company Stage',
  companySize: 'Company Size',
  industry: 'Industry',
  currentRevenue: 'Current Annual Revenue',
  revenue: 'Annual Revenue',
  budget: 'Monthly Budget',
  budgetRange: 'Marketing Investment Range',
  marketingBudget: 'Monthly Marketing Budget',
  timeline: 'Timeline',
  timeframe: 'Timeframe',
  decisionMaker: 'Decision Process',
  primaryChallenge: 'Primary Challenge',
  previousExperience: 'Previous Agency Experience',
  priorityLevel: 'Priority Level',
  growthTarget: 'Growth Target',
  growthGoal: 'Growth Goal',
  biggestPainPoint: 'Biggest Pain Point',
  successMetric: 'Success Metric',
  teamSize: 'Team Size',
  currentChannels: 'Current Channels',
  service: 'Service of Interest',
  message: 'Message',
  preferredTime: 'Preferred Time',
  urgency: 'Urgency',
  newsletter: 'Newsletter Opt-In',
  terms: 'Accepted Terms',
};

function humanize(key) {
  return (
    HUMAN_LABELS[key] ||
    key
      .replace(/[_-]+/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

function formatValue(value) {
  if (value === null || value === undefined || value === '') return '-';
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (Array.isArray(value)) return value.length ? value.join(', ') : '-';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

export function buildSummary(data = {}) {
  return Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => `${humanize(k)}: ${formatValue(v)}`)
    .join('\n');
}

function buildMailtoUrl({ subject, body }) {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${RECIPIENT}?${params.toString().replace(/\+/g, '%20')}`;
}

async function postToWeb3Forms({ accessKey, subject, summary, data, replyTo }) {
  const payload = {
    access_key: accessKey,
    subject,
    from_name: 'Descale Website Inquiry',
    to: RECIPIENT,
    message: summary,
    ...data,
  };
  if (replyTo) payload.replyto = replyTo;

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.success === false) {
    throw new Error(json.message || `Web3Forms request failed (${res.status})`);
  }
  return json;
}

async function postToCustomEndpoint({ endpoint, subject, formType, summary, data }) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ subject, formType, summary, data, to: RECIPIENT }),
  });
  if (!res.ok) {
    throw new Error(`Contact endpoint failed (${res.status})`);
  }
  return res.json().catch(() => ({}));
}

export async function sendInquiryEmail({ formType, subject, data = {} }) {
  const summary = buildSummary(data);
  const fullSubject = subject || `New ${formType || 'website'} inquiry`;
  const body = `${summary}\n\n- Sent from descale.agency`;
  const replyTo = typeof data.email === 'string' ? data.email : undefined;

  const web3Key = import.meta.env.VITE_WEB3FORMS_KEY;
  const customEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

  try {
    if (web3Key) {
      await postToWeb3Forms({
        accessKey: web3Key,
        subject: fullSubject,
        summary: body,
        data: { ...data, form_type: formType },
        replyTo,
      });
      return { delivered: true, transport: 'web3forms' };
    }

    if (customEndpoint) {
      await postToCustomEndpoint({
        endpoint: customEndpoint,
        subject: fullSubject,
        formType,
        summary: body,
        data,
      });
      return { delivered: true, transport: 'custom' };
    }
  } catch (err) {
    // Network/relay failed, fall back to mailto so the inquiry isn't lost.
    if (typeof window !== 'undefined') {
      window.location.href = buildMailtoUrl({ subject: fullSubject, body });
    }
    return { delivered: false, transport: 'mailto-fallback', error: err.message };
  }

  // No relay configured, open the visitor's mail client with the summary
  // pre-filled so they can send it in one click.
  if (typeof window !== 'undefined') {
    window.location.href = buildMailtoUrl({ subject: fullSubject, body });
  }
  return { delivered: false, transport: 'mailto' };
}

export const INQUIRY_RECIPIENT = RECIPIENT;
