import React, { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import Select from '../../../../components/ui/Select';
import { Checkbox } from '../../../../components/ui/Checkbox';
import Icon from '../../../../components/AppIcon';
import { submitMoveAdsForm } from '../../../../utils/formspree';

const bagOwnershipOptions = [
  { value: 'yes', label: 'Yes, it’s mine' },
  { value: 'no', label: 'No' },
  { value: 'fleet', label: 'Belongs to my fleet / platform' },
];

const bagTypeOptions = [
  { value: 'backpack', label: 'Backpack' },
  { value: 'box', label: 'Box' },
  { value: 'other', label: 'Other' },
];

const shiftOptions = [
  { value: 'lunch', label: 'Lunch' },
  { value: 'evening', label: 'Evening' },
  { value: 'weekends', label: 'Weekends' },
  { value: 'flexible', label: 'Flexible' },
];

const initialState = {
  name: '',
  email: '',
  phone: '',
  city: '',
  zones: '',
  platforms: '',
  bagOwnership: '',
  bagType: '',
  hoursPerWeek: '',
  preferredShift: '',
  social: '',
  referralSource: '',
  policyConsent: false,
  privacyConsent: false,
  marketingConsent: false,
};

const CourierApplicationForm = forwardRef((_props, ref) => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  const set = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const isValid =
    form.name.trim() &&
    /.+@.+\..+/.test(form.email) &&
    form.phone.trim() &&
    form.city.trim() &&
    form.bagOwnership &&
    form.bagType &&
    form.policyConsent &&
    form.privacyConsent;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid || status === 'submitting') return;
    setStatus('submitting');
    setError('');

    try {
      await submitMoveAdsForm({
        form: 'courier',
        data: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          city: form.city,
          zones: form.zones,
          platforms: form.platforms,
          bagOwnership: bagOwnershipOptions.find((o) => o.value === form.bagOwnership)?.label,
          bagType: bagTypeOptions.find((o) => o.value === form.bagType)?.label,
          hoursPerWeek: form.hoursPerWeek,
          preferredShift: shiftOptions.find((o) => o.value === form.preferredShift)?.label,
          social: form.social,
          referralSource: form.referralSource,
          platformPolicyConsent: form.policyConsent,
          privacyNoticeRead: form.privacyConsent,
          futureCampaignMarketingConsent: form.marketingConsent,
        },
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err?.message || 'Something went wrong. Please try again — your entries are still here.');
    }
  };

  return (
    <section id="apply" ref={ref} className="relative py-24 lg:py-32 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            Courier application
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
            Apply as a{' '}
            <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              MoveAds courier.
            </span>
          </h2>
          <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
            A short form, no documents required on the first screen.
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
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">Application received.</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Thanks, {form.name.split(' ')[0] || 'there'}. We review applications based on city,
                availability, equipment compatibility, campaign demand, and verification, and will reach out
                if there&rsquo;s a fit for the Kraków pilot.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Full name" value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Jan Kowalski" required />
                <Input label="Email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="you@email.com" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Phone / WhatsApp" type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+48 500 000 000" required />
                <Input label="City" value={form.city} onChange={(e) => set('city', e.target.value)} placeholder="Kraków" required />
              </div>

              <Input
                label="Preferred working zones"
                value={form.zones}
                onChange={(e) => set('zones', e.target.value)}
                placeholder="Kazimierz, Zabłocie, Grzegórzki…"
              />

              <Input
                label="Delivery platforms / fleets you currently work with"
                value={form.platforms}
                onChange={(e) => set('platforms', e.target.value)}
                placeholder="e.g. Wolt, Glovo, independent fleet"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Do you own your delivery bag?"
                  options={bagOwnershipOptions}
                  value={form.bagOwnership}
                  onChange={(v) => set('bagOwnership', v)}
                  placeholder="Select an option"
                  required
                />
                <Select
                  label="Bag type"
                  options={bagTypeOptions}
                  value={form.bagType}
                  onChange={(v) => set('bagType', v)}
                  placeholder="Select a type"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Approx. delivery hours / week"
                  type="number"
                  min="0"
                  value={form.hoursPerWeek}
                  onChange={(e) => set('hoursPerWeek', e.target.value)}
                  placeholder="20"
                />
                <Select
                  label="Preferred shifts"
                  options={shiftOptions}
                  value={form.preferredShift}
                  onChange={(v) => set('preferredShift', v)}
                  placeholder="Select shifts"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Instagram / TikTok link (optional)"
                  value={form.social}
                  onChange={(e) => set('social', e.target.value)}
                  placeholder="https://instagram.com/you"
                />
                <Input
                  label="How did you hear about us?"
                  value={form.referralSource}
                  onChange={(e) => set('referralSource', e.target.value)}
                  placeholder="Friend, social media, a courier group…"
                />
              </div>

              <div className="space-y-4 pt-2">
                <Checkbox
                  checked={form.policyConsent}
                  onChange={(e) => set('policyConsent', e.target.checked)}
                  required
                  label="I confirm that I will follow my delivery platform's, fleet operator's, and employer's applicable policies."
                />
                <Checkbox
                  checked={form.privacyConsent}
                  onChange={(e) => set('privacyConsent', e.target.checked)}
                  required
                  label="I have read the Privacy Notice."
                />
                <Checkbox
                  checked={form.marketingConsent}
                  onChange={(e) => set('marketingConsent', e.target.checked)}
                  label="I agree to receive future campaign opportunities by email / WhatsApp. (optional)"
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
                {status === 'submitting' ? 'Sending…' : 'Apply as a courier'}
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Applying does not guarantee acceptance. We review based on city, availability, equipment, and demand.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
});

CourierApplicationForm.displayName = 'CourierApplicationForm';

export default CourierApplicationForm;
