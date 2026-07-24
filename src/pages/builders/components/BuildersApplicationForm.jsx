import React, { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';
import { sendInquiryEmail } from '../../../utils/emailService';

const roleOptions = [
  { value: 'developer', label: 'Developer' },
  { value: 'designer', label: 'UI / Product Designer' },
  { value: 'ai-engineer', label: 'AI Engineer' },
  { value: 'no-code', label: 'No-Code Builder' },
  { value: 'flutter', label: 'Flutter / Mobile' },
  { value: 'backend', label: 'Backend' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'automation', label: 'Automation' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'seo', label: 'SEO' },
  { value: 'product-manager', label: 'Product Manager' },
  { value: 'other', label: 'Other' },
];

const BuildersApplicationForm = forwardRef((_props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    portfolio: '',
    buildGoal: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isValid =
    formData.name.trim() &&
    /.+@.+\..+/.test(formData.email) &&
    formData.role &&
    formData.portfolio.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid || status === 'submitting') return;
    setStatus('submitting');
    setError('');

    const roleLabel = roleOptions.find((o) => o.value === formData.role)?.label || formData.role;

    try {
      const result = await sendInquiryEmail({
        formType: 'builder-application',
        subject: `Builder application: ${formData.name} (${roleLabel})`,
        data: {
          name: formData.name,
          email: formData.email,
          role: roleLabel,
          portfolio: formData.portfolio,
          buildGoal: formData.buildGoal,
        },
      });
      // sendInquiryEmail resolves for relay success and mailto fallback alike.
      setStatus('success');
      void result;
    } catch (err) {
      setStatus('error');
      setError(err?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="join" ref={ref} className="relative py-24 lg:py-32 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            Join the Builder Network
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Apply to{' '}
            <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              Descale Builders.
            </span>
          </h2>
          <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
            Tell us what you build. We'll be in touch about projects that fit your skills.
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
                Thanks, {formData.name.split(' ')[0] || 'builder'}. We'll review your profile and reach out
                about projects that match what you want to build.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Jane Builder"
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="you@email.com"
                  required
                />
              </div>

              <Select
                label="Primary skill / role"
                options={roleOptions}
                value={formData.role}
                onChange={(value) => handleChange('role', value)}
                placeholder="Select your main craft"
                required
              />

              <Input
                label="Portfolio, GitHub or LinkedIn URL"
                type="url"
                value={formData.portfolio}
                onChange={(e) => handleChange('portfolio', e.target.value)}
                placeholder="https://github.com/you"
                required
              />

              <div className="space-y-2">
                <label htmlFor="builders-build-goal" className="text-sm font-medium leading-none text-gray-900">
                  What do you want to build?
                </label>
                <textarea
                  id="builders-build-goal"
                  value={formData.buildGoal}
                  onChange={(e) => handleChange('buildGoal', e.target.value)}
                  rows={4}
                  placeholder="A short note on the kind of products you want to work on."
                  className="flex w-full rounded-md border border-input bg-white text-gray-900 px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <Button
                type="submit"
                variant="default"
                fullWidth
                disabled={!isValid || status === 'submitting'}
                loading={status === 'submitting'}
                iconName="ArrowUpRight"
                iconPosition="right"
              >
                {status === 'submitting' ? 'Sending…' : 'Join Builders'}
              </Button>
              <p className="text-xs text-gray-500 text-center">
                No commitment. We only reach out when there's a project that fits.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
});

BuildersApplicationForm.displayName = 'BuildersApplicationForm';

export default BuildersApplicationForm;
