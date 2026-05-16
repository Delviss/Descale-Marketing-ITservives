import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { sendInquiryEmail } from '../../../utils/emailService';


const QualificationForm = ({ onComplete, onClose, assessmentData }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Information
    companyStage: '',
    companySize: '',
    industry: '',
    currentRevenue: '',
    
    // Budget & Timeline
    budgetRange: '',
    timeline: '',
    decisionMaker: '',
    
    // Growth Challenges
    primaryChallenge: '',
    previousExperience: '',
    priorityLevel: '',
    
    // Contact Preferences
    preferredContact: '',
    contactTime: '',
    specificGoals: ''
  });

  const qualificationSteps = [
    {
      title: 'Company Profile',
      fields: ['companyStage', 'companySize', 'industry', 'currentRevenue']
    },
    {
      title: 'Investment & Timeline',
      fields: ['budgetRange', 'timeline', 'decisionMaker']
    },
    {
      title: 'Growth Priorities',
      fields: ['primaryChallenge', 'previousExperience', 'priorityLevel']
    }
  ];

  const fieldConfigs = {
    companyStage: {
      label: 'Company Stage',
      type: 'select',
      options: [
        { value: 'startup', label: 'Startup (Pre-Series A)' },
        { value: 'series-a', label: 'Series A' },
        { value: 'series-b', label: 'Series B' },
        { value: 'series-c', label: 'Series C+' },
        { value: 'established', label: 'Established (Profitable)' },
        { value: 'enterprise', label: 'Enterprise' }
      ]
    },
    companySize: {
      label: 'Company Size',
      type: 'select',
      options: [
        { value: '1-10', label: '1-10 employees' },
        { value: '11-50', label: '11-50 employees' },
        { value: '51-200', label: '51-200 employees' },
        { value: '201-500', label: '201-500 employees' },
        { value: '500+', label: '500+ employees' }
      ]
    },
    industry: {
      label: 'Industry',
      type: 'select',
      options: [
        { value: 'saas', label: 'SaaS/Technology' },
        { value: 'ecommerce', label: 'E-commerce' },
        { value: 'fintech', label: 'Fintech' },
        { value: 'healthcare', label: 'Healthcare' },
        { value: 'education', label: 'Education' },
        { value: 'retail', label: 'Retail' },
        { value: 'manufacturing', label: 'Manufacturing' },
        { value: 'professional-services', label: 'Professional Services' },
        { value: 'other', label: 'Other' }
      ]
    },
    currentRevenue: {
      label: 'Current Annual Revenue',
      type: 'select',
      options: [
        { value: 'under-1m', label: 'Under $1M' },
        { value: '1-5m', label: '$1M - $5M' },
        { value: '5-10m', label: '$5M - $10M' },
        { value: '10-50m', label: '$10M - $50M' },
        { value: 'over-50m', label: 'Over $50M' }
      ]
    },
    budgetRange: {
      label: 'Marketing Investment Range',
      type: 'select',
      options: [
        { value: 'under-50k', label: 'Under $50K' },
        { value: '50-100k', label: '$50K - $100K' },
        { value: '100-250k', label: '$100K - $250K' },
        { value: '250-500k', label: '$250K - $500K' },
        { value: 'over-500k', label: 'Over $500K' }
      ]
    },
    timeline: {
      label: 'Implementation Timeline',
      type: 'select',
      options: [
        { value: 'immediate', label: 'Immediate (This month)' },
        { value: 'next-quarter', label: 'Next Quarter' },
        { value: '3-6-months', label: '3-6 Months' },
        { value: 'planning', label: 'Planning Stage' }
      ]
    },
    decisionMaker: {
      label: 'Decision Making Process',
      type: 'select',
      options: [
        { value: 'sole-decision', label: 'I make the decision' },
        { value: 'influence-decision', label: 'I influence the decision' },
        { value: 'team-decision', label: 'Team decision' },
        { value: 'need-approval', label: 'Need approval from others' }
      ]
    },
    primaryChallenge: {
      label: 'Primary Growth Challenge',
      type: 'select',
      options: [
        { value: 'lead-generation', label: 'Lead Generation' },
        { value: 'conversion-optimization', label: 'Conversion Optimization' },
        { value: 'customer-retention', label: 'Customer Retention' },
        { value: 'brand-positioning', label: 'Brand Positioning' },
        { value: 'performance-marketing', label: 'Performance Marketing' },
        { value: 'analytics-tracking', label: 'Analytics & Tracking' },
        { value: 'creative-content', label: 'Creative & Content' },
        { value: 'scaling-operations', label: 'Scaling Operations' }
      ]
    },
    previousExperience: {
      label: 'Previous Experience with Growth Agencies',
      type: 'select',
      options: [
        { value: 'first-time', label: 'First time working with an agency' },
        { value: 'some-experience', label: 'Some experience, mixed results' },
        { value: 'good-experience', label: 'Good previous experiences' },
        { value: 'bad-experience', label: 'Poor previous experiences' },
        { value: 'in-house-only', label: 'Only worked with in-house teams' }
      ]
    },
    priorityLevel: {
      label: 'Priority Level',
      type: 'select',
      options: [
        { value: 'critical', label: 'Critical - Business depends on it' },
        { value: 'high', label: 'High - Important for growth goals' },
        { value: 'medium', label: 'Medium - Good to have' },
        { value: 'exploratory', label: 'Exploratory - Just looking' }
      ]
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < qualificationSteps?.length) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const labelFor = (fieldName, value) =>
    fieldConfigs?.[fieldName]?.options?.find((o) => o?.value === value)?.label || value;

  const handleComplete = () => {
    // Calculate lead score based on qualification
    let qualificationScore = 0;
    
    // Company stage scoring
    const stageScores = {
      'enterprise': 30,
      'established': 25,
      'series-c': 20,
      'series-b': 15,
      'series-a': 10,
      'startup': 5
    };
    qualificationScore += stageScores?.[formData?.companyStage] || 0;

    // Budget scoring
    const budgetScores = {
      'over-500k': 25,
      '250-500k': 20,
      '100-250k': 15,
      '50-100k': 10,
      'under-50k': 5
    };
    qualificationScore += budgetScores?.[formData?.budgetRange] || 0;

    // Timeline scoring
    const timelineScores = {
      'immediate': 20,
      'next-quarter': 15,
      '3-6-months': 10,
      'planning': 5
    };
    qualificationScore += timelineScores?.[formData?.timeline] || 0;

    // Priority scoring
    const priorityScores = {
      'critical': 15,
      'high': 12,
      'medium': 8,
      'exploratory': 3
    };
    qualificationScore += priorityScores?.[formData?.priorityLevel] || 0;

    const qualificationData = {
      ...formData,
      qualificationScore,
      segment: qualificationScore >= 70 ? 'high-value' : qualificationScore >= 50 ? 'qualified' : 'nurture',
      completedAt: new Date()?.toISOString()
    };

    sendInquiryEmail({
      formType: 'qualification',
      subject: `Qualification: ${qualificationData.segment} (score ${qualificationScore})`,
      data: {
        companyStage: labelFor('companyStage', formData?.companyStage),
        companySize: labelFor('companySize', formData?.companySize),
        industry: labelFor('industry', formData?.industry),
        currentRevenue: labelFor('currentRevenue', formData?.currentRevenue),
        budgetRange: labelFor('budgetRange', formData?.budgetRange),
        timeline: labelFor('timeline', formData?.timeline),
        decisionMaker: labelFor('decisionMaker', formData?.decisionMaker),
        primaryChallenge: labelFor('primaryChallenge', formData?.primaryChallenge),
        previousExperience: labelFor('previousExperience', formData?.previousExperience),
        priorityLevel: labelFor('priorityLevel', formData?.priorityLevel),
        qualificationScore,
        segment: qualificationData.segment,
        assessmentSummary: assessmentData ? JSON.stringify(assessmentData) : undefined,
      },
    });

    onComplete(qualificationData);
  };

  const isStepComplete = () => {
    const currentStepFields = qualificationSteps?.[step - 1]?.fields;
    return currentStepFields?.every(field => formData?.[field]);
  };

  const progress = (step / qualificationSteps?.length) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Growth Strategy Qualification</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              iconName="X"
            />
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-sm text-text-secondary">
            Step {step} of {qualificationSteps?.length}: {qualificationSteps?.[step - 1]?.title}
          </div>
        </div>

        <div className="p-6">
          {/* Current Step Fields */}
          <div className="space-y-6 mb-8">
            {qualificationSteps?.[step - 1]?.fields?.map((fieldName) => {
              const config = fieldConfigs?.[fieldName];
              return (
                <div key={fieldName}>
                  {config?.type === 'select' ? (
                    <Select
                      label={config?.label}
                      options={config?.options}
                      value={formData?.[fieldName]}
                      onChange={(value) => handleInputChange(fieldName, value)}
                      placeholder="Select an option"
                      required
                    />
                  ) : (
                    <Input
                      label={config?.label}
                      type={config?.type || 'text'}
                      value={formData?.[fieldName]}
                      onChange={(e) => handleInputChange(fieldName, e?.target?.value)}
                      placeholder={config?.placeholder}
                      required
                    />
                  )}
                </div>
              );
            })}
          </div>

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
              disabled={!isStepComplete()}
              iconName={step === qualificationSteps?.length ? "Check" : "ArrowRight"}
              iconPosition="right"
            >
              {step === qualificationSteps?.length ? 'Complete Assessment' : 'Next Step'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationForm;