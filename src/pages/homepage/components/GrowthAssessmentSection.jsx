import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { sendInquiryEmail } from '../../../utils/emailService';

const GrowthAssessmentSection = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    industry: '',
    revenue: '',
    growthGoal: '',
    timeline: '',
    email: ''
  });

  const industryOptions = [
    { value: 'saas', label: 'SaaS & Technology' },
    { value: 'ecommerce', label: 'E-commerce & Retail' },
    { value: 'fintech', label: 'FinTech & Financial Services' },
    { value: 'healthtech', label: 'HealthTech & Medical' },
    { value: 'edtech', label: 'EdTech & Education' },
    { value: 'other', label: 'Other Industry' }
  ];

  const revenueOptions = [
    { value: 'under-1m', label: 'Under $1M' },
    { value: '1m-5m', label: '$1M - $5M' },
    { value: '5m-10m', label: '$5M - $10M' },
    { value: '10m-50m', label: '$10M - $50M' },
    { value: 'over-50m', label: 'Over $50M' }
  ];

  const goalOptions = [
    { value: '2x', label: '2x Growth' },
    { value: '3x', label: '3x Growth' },
    { value: '5x', label: '5x Growth' },
    { value: '10x', label: '10x Growth' }
  ];

  const timelineOptions = [
    { value: '6months', label: '6 Months' },
    { value: '12months', label: '12 Months' },
    { value: '18months', label: '18 Months' },
    { value: '24months', label: '24 Months' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      await sendInquiryEmail({
        formType: 'homepage-growth-assessment',
        subject: `Growth Assessment: ${formData?.company || 'New inquiry'}`,
        data: {
          company: formData?.company,
          industry:
            industryOptions?.find((o) => o?.value === formData?.industry)?.label ||
            formData?.industry,
          revenue:
            revenueOptions?.find((o) => o?.value === formData?.revenue)?.label ||
            formData?.revenue,
          growthGoal:
            goalOptions?.find((o) => o?.value === formData?.growthGoal)?.label ||
            formData?.growthGoal,
          timeline:
            timelineOptions?.find((o) => o?.value === formData?.timeline)?.label ||
            formData?.timeline,
          email: formData?.email,
        },
      });
    } finally {
      setIsSubmitting(false);
      navigate('/get-started');
    }
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <Input
              label="Company Name"
              type="text"
              placeholder="Enter your company name"
              value={formData?.company}
              onChange={(e) => handleInputChange('company', e?.target?.value)}
              required
            />
            <Select
              label="Industry"
              options={industryOptions}
              value={formData?.industry}
              onChange={(value) => handleInputChange('industry', value)}
              placeholder="Select your industry"
              required
            />
            <Select
              label="Current Annual Revenue"
              options={revenueOptions}
              value={formData?.revenue}
              onChange={(value) => handleInputChange('revenue', value)}
              placeholder="Select revenue range"
              required
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <Select
              label="Growth Goal"
              description="What growth multiple are you targeting?"
              options={goalOptions}
              value={formData?.growthGoal}
              onChange={(value) => handleInputChange('growthGoal', value)}
              placeholder="Select growth target"
              required
            />
            <Select
              label="Timeline"
              description="When do you want to achieve this growth?"
              options={timelineOptions}
              value={formData?.timeline}
              onChange={(value) => handleInputChange('timeline', value)}
              placeholder="Select timeline"
              required
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email for results"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              description="We'll send your personalized growth assessment report"
              required
            />
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Your Growth Assessment Preview:</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Company:</span>
                  <span className="font-medium text-gray-900">{formData?.company || 'Not specified'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Industry:</span>
                  <span className="font-medium text-gray-900">
                    {industryOptions?.find(opt => opt?.value === formData?.industry)?.label || 'Not specified'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Growth Target:</span>
                  <span className="font-medium text-primary">{formData?.growthGoal || 'Not specified'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Timeline:</span>
                  <span className="font-medium text-accent">
                    {timelineOptions?.find(opt => opt?.value === formData?.timeline)?.label || 'Not specified'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Free Growth
            <span className="block text-accent">
              Assessment
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Get a personalized scaling strategy in 3 minutes. Discover your growth potential and the exact steps to achieve exponential results.
          </p>
        </motion.div>

        {/* Assessment Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="bg-gray-100 px-8 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStep} of 3
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round((currentStep / 3) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                initial={{ width: '33%' }}
                animate={{ width: `${(currentStep / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {getStepContent()}
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Previous
              </Button>

              <div className="flex items-center space-x-2">
                {[1, 2, 3]?.map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      step === currentStep
                        ? 'bg-primary'
                        : step < currentStep
                        ? 'bg-accent' :'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {currentStep < 3 ? (
                <Button
                  variant="default"
                  onClick={handleNext}
                  iconName="ChevronRight"
                  iconPosition="right"
                  className="bg-primary hover:bg-primary/90"
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="default"
                  onClick={handleSubmit}
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="bg-accent hover:bg-accent/90"
                >
                  {isSubmitting ? 'Sending…' : 'Get My Assessment'}
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="text-center text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Target" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Personalized Strategy</h3>
            <p className="text-white/80 text-sm">Custom growth roadmap based on your specific situation</p>
          </div>
          <div className="text-center text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Quick & Easy</h3>
            <p className="text-white/80 text-sm">Complete assessment in under 3 minutes</p>
          </div>
          <div className="text-center text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={24} />
            </div>
            <h3 className="font-semibold mb-2">No Commitment</h3>
            <p className="text-white/80 text-sm">Free insights with no strings attached</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthAssessmentSection;