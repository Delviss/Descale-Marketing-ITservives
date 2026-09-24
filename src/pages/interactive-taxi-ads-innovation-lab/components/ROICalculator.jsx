import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { trackEvent } from '../../../utils/analytics';
import { calculateCampaignROI, formatCurrency, formatNumber, safeNumber } from '../roiMath';

const ROICalculator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    budget: 50000,
    duration: 30,
    targetAudience: '',
    businessType: '',
    currentCAC: 150,
    averageOrderValue: 500,
    conversionRate: 2.5
  });

  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const audienceOptions = [
    { value: 'business_professionals', label: 'Business Professionals', multiplier: 1.2 },
    { value: 'retail_shoppers', label: 'Retail Shoppers', multiplier: 1.0 },
    { value: 'students', label: 'Students & Young Adults', multiplier: 0.8 },
    { value: 'families', label: 'Families', multiplier: 1.1 },
    { value: 'tech_workers', label: 'Tech Workers', multiplier: 1.3 }
  ];

  const businessTypeOptions = [
    { value: 'saas', label: 'SaaS/Technology', multiplier: 1.4 },
    { value: 'ecommerce', label: 'E-commerce', multiplier: 1.1 },
    { value: 'restaurant', label: 'Restaurant/Food', multiplier: 0.9 },
    { value: 'fitness', label: 'Fitness/Wellness', multiplier: 1.0 },
    { value: 'professional_services', label: 'Professional Services', multiplier: 1.2 },
    { value: 'retail', label: 'Retail', multiplier: 1.0 }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    setIsCalculating(true);

    setTimeout(() => {
      const audienceMultiplier = audienceOptions?.find(opt => opt?.value === formData?.targetAudience)?.multiplier || 1;
      const businessMultiplier = businessTypeOptions?.find(opt => opt?.value === formData?.businessType)?.multiplier || 1;

      const computed = calculateCampaignROI({
        budget: formData?.budget,
        duration: formData?.duration,
        audienceMultiplier,
        businessMultiplier,
        averageOrderValue: formData?.averageOrderValue,
        conversionRate: formData?.conversionRate,
        currentCAC: formData?.currentCAC,
      });
      setResults(computed);
      trackEvent('roi_calculated', {
        page_path: window.location.pathname,
        calculator: 'taxi_ads_roi',
        budget: safeNumber(formData?.budget),
        roi: computed.roi,
      });

      setIsCalculating(false);
    }, 1500);
  };

  const handleBookCall = () => {
    const params = new URLSearchParams({
      source: 'taxi-ads-roi-calculator',
      budget: String(safeNumber(formData?.budget)),
      roi: String(results?.roi ?? ''),
      revenue: String(results?.revenue ?? ''),
    });
    navigate(`/get-started?${params.toString()}`);
  };

  const isFormValid = formData?.targetAudience && formData?.businessType && safeNumber(formData?.budget) > 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">ROI Calculator</h3>
          <p className="text-gray-600 text-sm mt-1">Estimate your campaign performance and returns</p>
        </div>
        <div className="p-3 bg-accent/10 rounded-lg">
          <Icon name="Calculator" size={24} className="text-accent" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 mb-4">Campaign Parameters</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Campaign Budget ($)"
              type="number"
              inputMode="decimal"
              min="0"
              step="100"
              value={formData?.budget}
              onChange={(e) => handleInputChange('budget', Math.max(0, parseInt(e?.target?.value, 10) || 0))}
              placeholder="50000"
              description="Total campaign investment"
            />

            <Input
              label="Duration (Days)"
              type="number"
              inputMode="numeric"
              value={formData?.duration}
              onChange={(e) => handleInputChange('duration', Math.max(1, Math.min(365, parseInt(e?.target?.value, 10) || 1)))}
              placeholder="30"
              min="1"
              max="365"
            />
          </div>

          <Select
            label="Target Audience"
            options={audienceOptions}
            value={formData?.targetAudience}
            onChange={(value) => handleInputChange('targetAudience', value)}
            placeholder="Select your primary audience..."
          />

          <Select
            label="Business Type"
            options={businessTypeOptions}
            value={formData?.businessType}
            onChange={(value) => handleInputChange('businessType', value)}
            placeholder="Select your business category..."
          />

          <h4 className="font-semibold text-gray-900 mb-4 mt-6">Business Metrics</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Current CAC ($)"
              type="number"
              inputMode="decimal"
              min="0"
              step="10"
              value={formData?.currentCAC}
              onChange={(e) => handleInputChange('currentCAC', Math.max(0, parseInt(e?.target?.value, 10) || 0))}
              placeholder="150"
              description="Customer Acquisition Cost"
            />

            <Input
              label="Average Order Value ($)"
              type="number"
              inputMode="decimal"
              min="0"
              step="10"
              value={formData?.averageOrderValue}
              onChange={(e) => handleInputChange('averageOrderValue', Math.max(0, parseInt(e?.target?.value, 10) || 0))}
              placeholder="500"
            />
          </div>

          <Input
            label="Conversion Rate (%)"
            type="number"
            inputMode="decimal"
            min="0"
            max="100"
            value={formData?.conversionRate}
            onChange={(e) => handleInputChange('conversionRate', Math.max(0, Math.min(100, parseFloat(e?.target?.value) || 0)))}
            placeholder="2.5"
            step="0.1"
            description="Current website conversion rate"
          />

          <Button
            variant="default"
            onClick={calculateROI}
            disabled={!isFormValid || isCalculating}
            loading={isCalculating}
            iconName="Calculator"
            iconPosition="left"
            className="w-full mt-6"
          >
            Calculate ROI
          </Button>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 mb-4">Projected Results</h4>
          
          {!results && !isCalculating && (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <Icon name="BarChart3" size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Fill in the form to see your projected ROI</p>
            </div>
          )}

          {isCalculating && (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="animate-spin mb-4">
                <Icon name="RefreshCw" size={32} className="text-primary mx-auto" />
              </div>
              <p className="text-gray-600">Calculating your campaign projections...</p>
            </div>
          )}

          {results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{results?.roi}%</div>
                  <div className="text-sm text-gray-600">ROI</div>
                </div>
                <div className="bg-success/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-success">{formatCurrency(results?.revenue)}</div>
                  <div className="text-sm text-gray-600">Revenue</div>
                </div>
              </div>

              {/* Detailed Metrics */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Estimated Impressions</span>
                  <span className="font-semibold">{formatNumber(results?.impressions)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Unique Reach</span>
                  <span className="font-semibold">{formatNumber(results?.reach)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Estimated Clicks</span>
                  <span className="font-semibold">{formatNumber(results?.clicks)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Conversions</span>
                  <span className="font-semibold">{formatNumber(results?.conversions)}</span>
                </div>
              </div>

              {/* Performance Improvements */}
              <div className="bg-gradient-to-r from-success/5 to-primary/5 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-3">Performance Improvements</h5>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">New CAC</span>
                    <span className="font-semibold text-success">{formatCurrency(results?.newCAC)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">CAC Improvement</span>
                    <span className="font-semibold text-success">{results?.cacImprovement}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Payback Period</span>
                    <span className="font-semibold">{results?.paybackPeriod > 0 ? `${results.paybackPeriod} days` : 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button
                  variant="default"
                  iconName="Calendar"
                  iconPosition="left"
                  className="flex-1"
                  onClick={handleBookCall}
                >
                  Book a call to discuss these numbers
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;