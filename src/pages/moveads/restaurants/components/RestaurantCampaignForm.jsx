import React, { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import Select from '../../../../components/ui/Select';
import { Checkbox } from '../../../../components/ui/Checkbox';
import Icon from '../../../../components/AppIcon';
import { submitMoveAdsForm } from '../../../../utils/formspree';

const goalOptions = [
  { value: 'new-opening', label: 'New opening' },
  { value: 'more-orders', label: 'More orders' },
  { value: 'direct-orders', label: 'Direct orders' },
  { value: 'footfall', label: 'Footfall' },
  { value: 'event-promotion', label: 'Event promotion' },
  { value: 'student-audience', label: 'Student audience' },
  { value: 'other', label: 'Other' },
];

const durationOptions = [
  { value: '1-week', label: '1 week' },
  { value: '2-weeks', label: '2 weeks' },
  { value: '1-month', label: '1 month' },
  { value: 'not-sure', label: 'Not sure' },
];

const budgetOptions = [
  { value: 'under-2500', label: 'Under 2,500 PLN' },
  { value: '2500-5000', label: '2,500–5,000 PLN' },
  { value: '5000-10000', label: '5,000–10,000 PLN' },
  { value: '10000-plus', label: '10,000 PLN+' },
  { value: 'discuss', label: "Let's discuss" },
];

const MAX_FILE_MB = 10;

const initialState = {
  businessName: '',
  contactName: '',
  email: '',
  phone: '',
  city: '',
  location: '',
  link: '',
  goal: '',
  targetArea: '',
  duration: '',
  budget: '',
  offer: '',
  startDate: '',
  privacyConsent: false,
  marketingConsent: false,
};

const RestaurantCampaignForm = forwardRef((_props, ref) => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  const set = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const isValid =
    form.businessName.trim() &&
    form.contactName.trim() &&
    /.+@.+\..+/.test(form.email) &&
    form.phone.trim() &&
    form.city.trim() &&
    form.goal &&
    form.privacyConsent;

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0] || null;
    setFileError('');
    if (selected && selected.size > MAX_FILE_MB * 1024 * 1024) {
      setFileError(`File is too large. Please keep it under ${MAX_FILE_MB}MB.`);
      setFile(null);
      e.target.value = '';
      return;
    }
    setFile(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid || status === 'submitting') return;
    setStatus('submitting');
    setError('');

    try {
      await submitMoveAdsForm({
        form: 'restaurant',
        data: {
          businessName: form.businessName,
          contactName: form.contactName,
          email: form.email,
          phone: form.phone,
          city: form.city,
          location: form.location,
          link: form.link,
          goal: goalOptions.find((o) => o.value === form.goal)?.label,
          targetArea: form.targetArea,
          duration: durationOptions.find((o) => o.value === form.duration)?.label,
          budget: budgetOptions.find((o) => o.value === form.budget)?.label,
          offer: form.offer,
          startDate: form.startDate,
          privacyAcknowledged: form.privacyConsent,
          futureMarketingConsent: form.marketingConsent,
        },
        files: file ? { assets: file } : undefined,
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err?.message || 'Something went wrong. Please try again — your entries are still here.');
    }
  };

  return (
    <section id="request-proposal" ref={ref} className="relative py-24 lg:py-32 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            Campaign request
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
            Request your{' '}
            <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              pilot proposal.
            </span>
          </h2>
          <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
            Tell us about your restaurant and goals. We&rsquo;ll come back with a recommended pilot format.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-white p-8 lg:p-10 shadow-brand"
        >
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                <Icon name="Check" size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">Thank you — your campaign request is in.</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Our team will review your city, target area, and offer, then contact you with a recommended
                pilot format.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Restaurant / business name" value={form.businessName} onChange={(e) => set('businessName', e.target.value)} placeholder="e.g. Bar Mleczny" required />
                <Input label="Contact name" value={form.contactName} onChange={(e) => set('contactName', e.target.value)} placeholder="Your name" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Business email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="you@restaurant.com" required />
                <Input label="Phone number" type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+48 500 000 000" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="City" value={form.city} onChange={(e) => set('city', e.target.value)} placeholder="Kraków" required />
                <Input label="Restaurant location / neighbourhood" value={form.location} onChange={(e) => set('location', e.target.value)} placeholder="Kazimierz" />
              </div>

              <Input
                label="Website / Instagram / ordering link"
                value={form.link}
                onChange={(e) => set('link', e.target.value)}
                placeholder="https://…"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select label="Campaign goal" options={goalOptions} value={form.goal} onChange={(v) => set('goal', v)} placeholder="Select a goal" required />
                <Input label="Target area" value={form.targetArea} onChange={(e) => set('targetArea', e.target.value)} placeholder="Zone or radius" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select label="Preferred campaign duration" options={durationOptions} value={form.duration} onChange={(v) => set('duration', v)} placeholder="Select a duration" />
                <Select label="Approximate budget" options={budgetOptions} value={form.budget} onChange={(v) => set('budget', v)} placeholder="Select a range" />
              </div>

              <div className="space-y-2">
                <label htmlFor="restaurant-offer" className="text-sm font-medium leading-none text-gray-900">
                  Proposed offer or freebie
                </label>
                <textarea
                  id="restaurant-offer"
                  value={form.offer}
                  onChange={(e) => set('offer', e.target.value)}
                  rows={3}
                  placeholder="e.g. 15% off first order, free drink with a meal…"
                  className="flex w-full rounded-md border border-input bg-white text-gray-900 px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>

              <Input
                label="Expected start date"
                type="date"
                value={form.startDate}
                onChange={(e) => set('startDate', e.target.value)}
              />

              <div className="space-y-2">
                <label htmlFor="restaurant-assets" className="text-sm font-medium leading-none text-gray-900">
                  Logo and campaign assets (optional)
                </label>
                <input
                  id="restaurant-assets"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="flex w-full rounded-md border border-input bg-white text-gray-900 text-sm file:mr-3 file:h-full file:border-0 file:bg-muted file:px-3 file:py-2 file:text-sm file:font-medium file:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                {file && <p className="text-xs text-gray-500">{file.name}</p>}
                {fileError && <p className="text-sm text-destructive">{fileError}</p>}
              </div>

              <div className="space-y-4 pt-2">
                <Checkbox
                  checked={form.privacyConsent}
                  onChange={(e) => set('privacyConsent', e.target.checked)}
                  required
                  label="I have read and acknowledge the Privacy Notice."
                />
                <Checkbox
                  checked={form.marketingConsent}
                  onChange={(e) => set('marketingConsent', e.target.checked)}
                  label="I agree to receive future marketing communications about Descale MoveAds. (optional)"
                />
              </div>

              {status === 'error' && <p className="text-sm text-destructive">{error}</p>}

              <Button
                type="submit"
                variant="default"
                fullWidth
                disabled={!isValid || status === 'submitting'}
                loading={status === 'submitting'}
                iconName="ArrowUpRight"
                iconPosition="right"
              >
                {status === 'submitting' ? 'Sending…' : 'Request my pilot proposal'}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
});

RestaurantCampaignForm.displayName = 'RestaurantCampaignForm';

export default RestaurantCampaignForm;
