import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

import Icon from '../../../components/AppIcon';
import { sendInquiryEmail } from '../../../utils/emailService';

const GrowthAssessmentTool = ({ onComplete, currentStep, assessmentData, onGetPersonalizedPlan }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    currentRevenue: '',
    growthTarget: '',
    timeframe: '',
    primaryChallenge: '',
    marketingBudget: '',
    teamSize: '',
    currentChannels: [],
    biggestPainPoint: '',
    successMetric: ''
  });
  const [results, setResults] = useState(null);

  const assessmentQuestions = [
    {
      id: 'currentRevenue',
      title: 'Current Annual Revenue',
      type: 'select',
      options: [
        { value: 'under-1m', label: 'Under $1M' },
        { value: '1-5m', label: '$1M - $5M' },
        { value: '5-10m', label: '$5M - $10M' },
        { value: '10-50m', label: '$10M - $50M' },
        { value: 'over-50m', label: 'Over $50M' }
      ]
    },
    {
      id: 'growthTarget',
      title: 'Growth Target (Next 12 Months)',
      type: 'select',
      options: [
        { value: '25-50', label: '25-50% Growth' },
        { value: '50-100', label: '50-100% Growth' },
        { value: '100-200', label: '100-200% Growth' },
        { value: 'over-200', label: 'Over 200% Growth' }
      ]
    },
    {
      id: 'primaryChallenge',
      title: 'Primary Growth Challenge',
      type: 'select',
      options: [
        { value: 'lead-gen', label: 'Lead Generation' },
        { value: 'conversion', label: 'Conversion Optimization' },
        { value: 'retention', label: 'Customer Retention' },
        { value: 'scaling', label: 'Scaling Operations' },
        { value: 'brand-awareness', label: 'Brand Awareness' }
      ]
    },
    {
      id: 'marketingBudget',
      title: 'Monthly Marketing Budget',
      type: 'select',
      options: [
        { value: 'under-10k', label: 'Under $10K' },
        { value: '10-25k', label: '$10K - $25K' },
        { value: '25-50k', label: '$25K - $50K' },
        { value: '50-100k', label: '$50K - $100K' },
        { value: 'over-100k', label: 'Over $100K' }
      ]
    },
    {
      id: 'biggestPainPoint',
      title: 'Biggest Current Pain Point',
      type: 'textarea',
      placeholder: 'Describe your most pressing growth challenge...'
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < assessmentQuestions?.length) {
      setStep(step + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const calculateResults = () => {
    let score = 0;
    const insights = [];
    const recommendations = [];

    // Calculate lead score based on responses
    if (formData?.currentRevenue === 'over-50m') score += 30;
    else if (formData?.currentRevenue === '10-50m') score += 25;
    else if (formData?.currentRevenue === '5-10m') score += 20;
    else if (formData?.currentRevenue === '1-5m') score += 15;

    if (formData?.marketingBudget === 'over-100k') score += 25;
    else if (formData?.marketingBudget === '50-100k') score += 20;
    else if (formData?.marketingBudget === '25-50k') score += 15;
    else if (formData?.marketingBudget === '10-25k') score += 10;

    if (formData?.growthTarget === 'over-200') score += 20;
    else if (formData?.growthTarget === '100-200') score += 15;
    else if (formData?.growthTarget === '50-100') score += 10;

    // Generate insights
    if (score >= 60) {
      insights?.push('High growth potential with strong foundation');
      insights?.push('Ready for advanced scaling strategies');
      recommendations?.push('Integrated growth system implementation');
      recommendations?.push('Advanced analytics and attribution setup');
    } else if (score >= 40) {
      insights?.push('Solid growth foundation with optimization opportunities');
      insights?.push('Multiple areas for performance improvement');
      recommendations?.push('Performance marketing optimization');
      recommendations?.push('Conversion funnel enhancement');
    } else {
      insights?.push('Early-stage growth with foundational needs');
      insights?.push('Focus on core growth infrastructure');
      recommendations?.push('Brand positioning and messaging strategy');
      recommendations?.push('Lead generation system setup');
    }

    const calculatedResults = {
      score,
      insights,
      recommendations,
      estimatedROI: score >= 60 ? '300-500%' : score >= 40 ? '200-350%' : '150-250%',
      timeToValue: score >= 60 ? '4-8 weeks' : score >= 40 ? '6-10 weeks' : '8-12 weeks'
    };

    const labelFor = (fieldId, value) =>
      assessmentQuestions
        ?.find((q) => q?.id === fieldId)
        ?.options?.find((o) => o?.value === value)?.label || value;

    sendInquiryEmail({
      formType: 'growth-assessment',
      subject: `Growth Assessment: score ${score}/100`,
      data: {
        currentRevenue: labelFor('currentRevenue', formData?.currentRevenue),
        growthTarget: labelFor('growthTarget', formData?.growthTarget),
        primaryChallenge: labelFor('primaryChallenge', formData?.primaryChallenge),
        marketingBudget: labelFor('marketingBudget', formData?.marketingBudget),
        biggestPainPoint: formData?.biggestPainPoint,
        score,
        estimatedROI: calculatedResults.estimatedROI,
        timeToValue: calculatedResults.timeToValue,
      },
    });

    setResults(calculatedResults);
    onComplete(formData, score);
  };

  const progress = (step / assessmentQuestions?.length) * 100;

  if (currentStep === 'results' && assessmentData) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Your Growth Assessment Results
          </h2>
          <div className="inline-flex items-center px-6 py-3 bg-success/10 text-success rounded-lg">
            <Icon name="TrendingUp" size={24} className="mr-2" />
            <span className="text-lg font-semibold">Growth Score: {results?.score || 0}/100</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Key Insights */}
          <div className="bg-card p-6 rounded-xl shadow-brand border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Icon name="Lightbulb" size={20} className="mr-2 text-accent" />
              Key Insights
            </h3>
            <ul className="space-y-2">
              {results?.insights?.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <Icon name="Check" size={16} className="mr-2 mt-1 text-success flex-shrink-0" />
                  <span className="text-text-secondary">{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommendations */}
          <div className="bg-card p-6 rounded-xl shadow-brand border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Icon name="Target" size={20} className="mr-2 text-primary" />
              Strategic Recommendations
            </h3>
            <ul className="space-y-2">
              {results?.recommendations?.map((rec, index) => (
                <li key={index} className="flex items-start">
                  <Icon name="ArrowRight" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                  <span className="text-text-secondary">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Opportunity Metrics */}
        <div className="bg-gradient-accent p-8 rounded-xl text-white mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Opportunity Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{results?.estimatedROI}</div>
              <div className="text-white/80">Estimated ROI Potential</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{results?.timeToValue}</div>
              <div className="text-white/80">Time to First Results</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            onClick={onGetPersonalizedPlan}
            className="hover-brand mb-4"
            iconName="Calendar"
            iconPosition="left"
          >
            Get Personalized Growth Plan
          </Button>
          <p className="text-text-secondary text-sm">
            Book a strategy call to discuss your specific opportunities
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Growth Potential Assessment
        </h2>
        <p className="text-lg text-text-secondary mb-6">
          Answer a few strategic questions to uncover your growth opportunities
        </p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-sm text-text-secondary">
          Question {step} of {assessmentQuestions?.length}
        </div>
      </div>
      {/* Current Question */}
      <div className="bg-card p-8 rounded-xl shadow-brand border border-border mb-6">
        <h3 className="text-xl font-semibold mb-6">
          {assessmentQuestions?.[step - 1]?.title}
        </h3>
        
        {assessmentQuestions?.[step - 1]?.type === 'select' ? (
          <Select
            options={assessmentQuestions?.[step - 1]?.options}
            value={formData?.[assessmentQuestions?.[step - 1]?.id]}
            onChange={(value) => handleInputChange(assessmentQuestions?.[step - 1]?.id, value)}
            placeholder="Select an option"
            className="mb-6"
          />
        ) : (
          <div className="mb-6">
            <textarea
              value={formData?.[assessmentQuestions?.[step - 1]?.id]}
              onChange={(e) => handleInputChange(assessmentQuestions?.[step - 1]?.id, e?.target?.value)}
              placeholder={assessmentQuestions?.[step - 1]?.placeholder}
              rows="4"
              className="w-full p-3 border border-border rounded-lg bg-white text-gray-900 placeholder:text-gray-400 resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={step === 1}
            iconName="ArrowLeft"
            iconPosition="left"
          >
            Previous
          </Button>
          <Button
            variant="default"
            onClick={handleNext}
            disabled={!formData?.[assessmentQuestions?.[step - 1]?.id]}
            iconName={step === assessmentQuestions?.length ? "Check" : "ArrowRight"}
            iconPosition="right"
          >
            {step === assessmentQuestions?.length ? 'Get Results' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GrowthAssessmentTool;