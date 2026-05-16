import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';
import { sendInquiryEmail } from '../../../utils/emailService';

const ContactOptions = ({ assessmentData, qualificationData, leadScore }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    preferredTime: '',
    urgency: ''
  });

  const contactOptions = [
    {
      id: 'strategy-call',
      title: 'Strategy Call Booking',
      icon: 'Calendar',
      description: 'Book a 45-minute strategy session to discuss your growth opportunities and create a custom plan.',
      features: [
        'Growth opportunity analysis',
        'Strategic roadmap creation',
        'ROI projections and timeline',
        'Next steps planning'
      ],
      timeline: 'Available within 48 hours',
      cta: 'Book Strategy Call',
      recommended: leadScore >= 50
    },
    {
      id: 'detailed-proposal',
      title: 'Detailed Proposal Request',
      icon: 'FileText',
      description: 'Get a comprehensive proposal with project scope, timeline, investment, and expected outcomes.',
      features: [
        'Custom project scope definition',
        'Detailed implementation timeline',
        'Investment breakdown',
        'Success metrics and KPIs'
      ],
      timeline: 'Delivered within 24 hours',
      cta: 'Request Proposal',
      recommended: leadScore >= 40
    },
    {
      id: 'quick-question',
      title: 'Quick Question',
      icon: 'MessageSquare',
      description: 'Have a specific question about your growth strategy? Get expert insights without commitment.',
      features: [
        'Expert strategic insights',
        'Immediate response',
        'No commitment required',
        'Actionable recommendations'
      ],
      timeline: 'Response within 2 hours',
      cta: 'Ask Question',
      recommended: true
    }
  ];

  const timeSlots = [
    { value: 'morning', label: 'Morning (9AM - 12PM EST)' },
    { value: 'afternoon', label: 'Afternoon (12PM - 5PM EST)' },
    { value: 'evening', label: 'Evening (5PM - 7PM EST)' }
  ];

  const urgencyOptions = [
    { value: 'asap', label: 'ASAP - Need to move fast' },
    { value: 'this-month', label: 'Within this month' },
    { value: 'next-quarter', label: 'Next quarter' },
    { value: 'planning', label: 'Just planning ahead' }
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    setFormType(optionId);
    setShowForm(true);
  };

  const formTypeLabels = {
    'strategy-call': 'Strategy Call Booking',
    'detailed-proposal': 'Detailed Proposal Request',
    'quick-question': 'Quick Question',
  };

  const handleFormSubmit = async (e) => {
    e?.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const preferredTimeLabel =
      timeSlots?.find((o) => o?.value === formData?.preferredTime)?.label ||
      formData?.preferredTime;
    const urgencyLabel =
      urgencyOptions?.find((o) => o?.value === formData?.urgency)?.label || formData?.urgency;

    const result = await sendInquiryEmail({
      formType: `contact-${formType}`,
      subject: `${formTypeLabels[formType] || 'Contact'}: ${formData?.company || formData?.name}`,
      data: {
        requestType: formTypeLabels[formType] || formType,
        name: formData?.name,
        email: formData?.email,
        phone: formData?.phone,
        company: formData?.company,
        preferredTime: formType === 'strategy-call' ? preferredTimeLabel : undefined,
        urgency: formType === 'strategy-call' ? urgencyLabel : undefined,
        message: formData?.message,
        leadScore,
        assessmentSummary: assessmentData ? JSON.stringify(assessmentData) : undefined,
        qualificationSummary: qualificationData
          ? JSON.stringify(qualificationData)
          : undefined,
      },
    });

    setIsSubmitting(false);

    if (result?.delivered) {
      alert("Thank you! We'll be in touch soon.");
    } else {
      alert("Your email client has opened with the request, hit send and we'll be in touch soon.");
    }
    setShowForm(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Choose Your Next Step
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Based on your assessment results, here are the best ways to connect with our growth experts and accelerate your trajectory.
        </p>
      </div>
      {/* Contact Options Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {contactOptions?.map((option) => (
          <div
            key={option?.id}
            className={`relative bg-card p-6 rounded-xl shadow-brand border hover-lift transition-all duration-300 ${
              option?.recommended ? 'border-primary ring-2 ring-primary/20' : 'border-border'
            }`}
          >
            {option?.recommended && (
              <div className="absolute -top-3 left-6 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                Recommended
              </div>
            )}
            
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                option?.recommended ? 'bg-primary text-white' : 'bg-surface text-primary'
              }`}>
                <Icon name={option?.icon} size={24} />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">{option?.title}</h3>
            </div>

            <p className="text-text-secondary mb-4">{option?.description}</p>

            <ul className="space-y-2 mb-6">
              {option?.features?.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <Icon name="Check" size={16} className="mr-2 mt-0.5 text-success flex-shrink-0" />
                  <span className="text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-text-secondary">
                <Icon name="Clock" size={16} className="inline mr-1" />
                {option?.timeline}
              </span>
            </div>

            <Button
              variant={option?.recommended ? "default" : "outline"}
              fullWidth
              onClick={() => handleOptionSelect(option?.id)}
              iconName="ArrowRight"
              iconPosition="right"
            >
              {option?.cta}
            </Button>
          </div>
        ))}
      </div>
      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                {contactOptions?.find(opt => opt?.id === formType)?.title}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowForm(false)}
                iconName="X"
              />
            </div>
            
            <div className="p-6">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    required
                    value={formData?.name}
                    onChange={(e) => handleInputChange('name', e?.target?.value)}
                    placeholder="Your full name"
                  />
                  <Input
                    label="Email"
                    type="email"
                    required
                    value={formData?.email}
                    onChange={(e) => handleInputChange('email', e?.target?.value)}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Phone"
                    type="tel"
                    value={formData?.phone}
                    onChange={(e) => handleInputChange('phone', e?.target?.value)}
                    placeholder="(555) 123-4567"
                  />
                  <Input
                    label="Company"
                    required
                    value={formData?.company}
                    onChange={(e) => handleInputChange('company', e?.target?.value)}
                    placeholder="Company name"
                  />
                </div>

                {formType === 'strategy-call' && (
                  <>
                    <Select
                      label="Preferred Time"
                      options={timeSlots}
                      value={formData?.preferredTime}
                      onChange={(value) => handleInputChange('preferredTime', value)}
                      placeholder="Select preferred time"
                    />
                    <Select
                      label="Urgency Level"
                      options={urgencyOptions}
                      value={formData?.urgency}
                      onChange={(value) => handleInputChange('urgency', value)}
                      placeholder="How urgent is this?"
                    />
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    {formType === 'quick-question' ? 'Your Question' : 'Additional Details'}
                    {formType === 'quick-question' && <span className="text-destructive ml-1">*</span>}
                  </label>
                  <textarea
                    required={formType === 'quick-question'}
                    value={formData?.message}
                    onChange={(e) => handleInputChange('message', e?.target?.value)}
                    rows="4"
                    className="w-full p-3 border border-border rounded-lg bg-white text-gray-900 placeholder:text-gray-400 resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder={
                      formType === 'quick-question'
                        ? "What specific growth challenge can we help you with?"
                        : "Any additional context about your goals, challenges, or specific areas of interest..."
                    }
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="default"
                    className="flex-1"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    iconName="Send"
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Sending…' : 'Send Request'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactOptions;