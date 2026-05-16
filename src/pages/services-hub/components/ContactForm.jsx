import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import { sendInquiryEmail } from '../../../utils/emailService';

const ContactForm = ({ selectedService, isOpen = true, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: selectedService?.title || '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false,
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetOptions = [
    { value: '10k-25k', label: '$10k - $25k per month' },
    { value: '25k-50k', label: '$25k - $50k per month' },
    { value: '50k-100k', label: '$50k - $100k per month' },
    { value: '100k+', label: '$100k+ per month' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: 'Within 1 month' },
    { value: '2-3-months', label: '2-3 months' },
    { value: '6-months', label: '6+ months' },
    { value: 'planning', label: 'Just planning' }
  ];

  const serviceOptions = [
    { value: 'Brand Strategy & Positioning', label: 'Brand Strategy & Positioning' },
    { value: 'Performance Marketing', label: 'Performance Marketing' },
    { value: 'Creative Content & Storytelling', label: 'Creative Content & Storytelling' },
    { value: 'Social Media Marketing', label: 'Social Media Marketing' },
    { value: 'Analytics & Growth Engineering', label: 'Analytics & Growth Engineering' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Email is invalid';
    if (!formData?.company?.trim()) newErrors.company = 'Company is required';
    if (!formData?.service) newErrors.service = 'Please select a service';
    if (!formData?.budget) newErrors.budget = 'Please select a budget range';
    if (!formData?.timeline) newErrors.timeline = 'Please select a timeline';
    if (!formData?.terms) newErrors.terms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const budgetLabel =
      budgetOptions?.find((o) => o?.value === formData?.budget)?.label || formData?.budget;
    const timelineLabel =
      timelineOptions?.find((o) => o?.value === formData?.timeline)?.label ||
      formData?.timeline;

    const result = await sendInquiryEmail({
      formType: 'services-hub-contact',
      subject: `Services Inquiry: ${formData?.company || formData?.name}`,
      data: {
        name: formData?.name,
        email: formData?.email,
        company: formData?.company,
        phone: formData?.phone,
        service: formData?.service,
        budget: budgetLabel,
        timeline: timelineLabel,
        message: formData?.message,
        newsletter: formData?.newsletter,
      },
    });

    setIsSubmitting(false);

    if (result?.delivered) {
      alert("Thank you for your interest! We'll be in touch within 24 hours to schedule your strategy call.");
    } else {
      alert("Your email client has opened with your inquiry, just hit send and we'll get back to you within 24 hours.");
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[92vh] overflow-y-auto my-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Get Started Today</h2>
            <p className="text-text-secondary">Tell us about your growth goals</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover-brand"
          >
            <Icon name="X" size={24} />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData?.name}
              onChange={handleInputChange}
              error={errors?.name}
              required
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData?.email}
              onChange={handleInputChange}
              error={errors?.email}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Company Name"
              name="company"
              type="text"
              placeholder="Your Company"
              value={formData?.company}
              onChange={handleInputChange}
              error={errors?.company}
              required
            />
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData?.phone}
              onChange={handleInputChange}
            />
          </div>

          {/* Service Selection */}
          <Select
            label="Service Interest"
            options={serviceOptions}
            value={formData?.service}
            onChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
            error={errors?.service}
            required
            placeholder="Select a service"
          />

          {/* Budget & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Monthly Budget Range"
              options={budgetOptions}
              value={formData?.budget}
              onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
              error={errors?.budget}
              required
              placeholder="Select budget range"
            />
            <Select
              label="Project Timeline"
              options={timelineOptions}
              value={formData?.timeline}
              onChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
              error={errors?.timeline}
              required
              placeholder="Select timeline"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Tell us about your goals
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Describe your current challenges and what you'd like to achieve..."
              value={formData?.message}
              onChange={handleInputChange}
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <Checkbox
              label="Subscribe to our growth insights newsletter"
              checked={formData?.newsletter}
              onChange={(e) => setFormData(prev => ({ ...prev, newsletter: e?.target?.checked }))}
            />
            <Checkbox
              label="I agree to the Terms of Service and Privacy Policy"
              checked={formData?.terms}
              onChange={(e) => setFormData(prev => ({ ...prev, terms: e?.target?.checked }))}
              error={errors?.terms}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              loading={isSubmitting}
              className="flex-1 hover-brand"
              iconName="Send"
              iconPosition="right"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>

        {/* Footer Note */}
        <div className="px-6 pb-6">
          <div className="bg-surface rounded-lg p-4 text-center">
            <Icon name="Shield" size={20} className="text-success mx-auto mb-2" />
            <p className="text-sm text-text-secondary">
              Your information is secure and will only be used to contact you about your inquiry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;