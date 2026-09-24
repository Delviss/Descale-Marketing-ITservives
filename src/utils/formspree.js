// Formspree submission helper for the Descale MoveAds forms (courier
// application + restaurant campaign request). This is a static Vite SPA
// with no backend, so Formspree is the system of record for these leads.
//
// Each form gets its own Formspree endpoint ID, set via env vars:
//   VITE_FORMSPREE_COURIER_ID=xxxxxxxx
//   VITE_FORMSPREE_RESTAURANT_ID=xxxxxxxx
// Create both at https://formspree.io and drop the IDs in `.env.local`.
//
// Until an ID is configured, submissions fall back to the site-wide inquiry
// relay (see emailService.js) so leads still reach someone instead of
// silently failing while Formspree is being set up.

const FORM_IDS = {
  courier: import.meta.env.VITE_FORMSPREE_COURIER_ID,
  restaurant: import.meta.env.VITE_FORMSPREE_RESTAURANT_ID,
};

export const FORMSPREE_CONFIGURED = {
  courier: Boolean(FORM_IDS.courier),
  restaurant: Boolean(FORM_IDS.restaurant),
};

async function postToFormspree({ formId, data, files }) {
  const body = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return;
    body.append(key, Array.isArray(value) ? value.join(', ') : String(value));
  });
  Object.entries(files || {}).forEach(([field, file]) => {
    if (file) body.append(field, file);
  });

  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body,
  });

  if (!res.ok) {
    const payload = await res.json().catch(() => ({}));
    const message =
      payload?.errors?.map((e) => e.message).filter(Boolean).join(', ') ||
      `Submission failed (${res.status}). Your entries are still here — please try again.`;
    throw new Error(message);
  }

  return { delivered: true, transport: 'formspree' };
}

/**
 * Submit a MoveAds form (`form`: 'courier' | 'restaurant').
 * `files` is an optional map of `{ fieldName: File }` for file uploads
 * (Formspree's free tier accepts attachments up to 10MB per submission).
 */
export async function submitMoveAdsForm({ form, data, files }) {
  const formId = FORM_IDS[form];

  if (!formId) {
    const { sendInquiryEmail } = await import('./emailService');
    return sendInquiryEmail({
      formType: `moveads-${form}`,
      subject: `Descale MoveAds — new ${form} submission`,
      data,
    });
  }

  return postToFormspree({ formId, data, files });
}
