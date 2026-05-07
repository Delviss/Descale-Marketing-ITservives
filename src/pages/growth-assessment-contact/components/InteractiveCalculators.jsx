import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

import Icon from '../../../components/AppIcon';

const InteractiveCalculators = () => {
  const [activeCalculator, setActiveCalculator] = useState('market-opportunity');
  const [calculatorData, setCalculatorData] = useState({
    // Market Opportunity Sizer
    marketSize: '',
    marketShare: '',
    avgOrderValue: '',
    conversionRate: '',
    
    // CAC Optimizer
    currentCAC: '',
    monthlyLeads: '',
    conversionRateOpt: '',
    targetCAC: '',
    
    // LTV Enhancement
    currentLTV: '',
    churnRate: '',
    avgRevenue: '',
    retentionGoal: ''
  });
  const [results, setResults] = useState(null);

  const calculators = [
    {
      id: 'market-opportunity',
      title: 'Market Opportunity Sizer',
      icon: 'TrendingUp',
      description: 'Calculate your total addressable market opportunity and revenue potential.'
    },
    {
      id: 'cac-optimizer',
      title: 'Customer Acquisition Cost Optimizer',
      icon: 'Target',
      description: 'Optimize your customer acquisition costs and improve marketing ROI.'
    },
    {
      id: 'ltv-enhancement',
      title: 'Lifetime Value Enhancement Tool',
      icon: 'Repeat',
      description: 'Maximize customer lifetime value through retention and upselling strategies.'
    }
  ];

  const handleInputChange = (field, value) => {
    setCalculatorData(prev => ({ ...prev, [field]: value }));
  };

  const calculateMarketOpportunity = () => {
    const marketSize = parseFloat(calculatorData?.marketSize) || 0;
    const marketShare = parseFloat(calculatorData?.marketShare) || 0;
    const avgOrderValue = parseFloat(calculatorData?.avgOrderValue) || 0;
    const conversionRate = parseFloat(calculatorData?.conversionRate) || 0;

    const totalOpportunity = marketSize * (marketShare / 100);
    const monthlyRevenuePotential = (totalOpportunity * avgOrderValue * (conversionRate / 100)) / 12;
    const annualRevenuePotential = monthlyRevenuePotential * 12;

    return {
      type: 'Market Opportunity',
      totalOpportunity: totalOpportunity?.toLocaleString(),
      monthlyPotential: monthlyRevenuePotential?.toLocaleString(),
      annualPotential: annualRevenuePotential?.toLocaleString(),
      insights: [
        `Total addressable market: $${totalOpportunity?.toLocaleString()}`,
        `Monthly revenue potential: $${monthlyRevenuePotential?.toLocaleString()}`,
        `Annual opportunity: $${annualRevenuePotential?.toLocaleString()}`
      ]
    };
  };

  const calculateCACOptimization = () => {
    const currentCAC = parseFloat(calculatorData?.currentCAC) || 0;
    const monthlyLeads = parseFloat(calculatorData?.monthlyLeads) || 0;
    const conversionRate = parseFloat(calculatorData?.conversionRateOpt) || 0;
    const targetCAC = parseFloat(calculatorData?.targetCAC) || 0;

    const currentAcquisitions = monthlyLeads * (conversionRate / 100);
    const currentMonthlyCost = currentCAC * currentAcquisitions;
    const optimizedMonthlyCost = targetCAC * currentAcquisitions;
    const monthlySavings = currentMonthlyCost - optimizedMonthlyCost;
    const annualSavings = monthlySavings * 12;

    return {
      type: 'CAC Optimization',
      currentCost: currentMonthlyCost?.toLocaleString(),
      optimizedCost: optimizedMonthlyCost?.toLocaleString(),
      monthlySavings: monthlySavings?.toLocaleString(),
      annualSavings: annualSavings?.toLocaleString(),
      insights: [
        `Current monthly acquisition cost: $${currentMonthlyCost?.toLocaleString()}`,
        `Optimized monthly savings: $${monthlySavings?.toLocaleString()}`,
        `Annual cost reduction: $${annualSavings?.toLocaleString()}`
      ]
    };
  };

  const calculateLTVEnhancement = () => {
    const currentLTV = parseFloat(calculatorData?.currentLTV) || 0;
    const churnRate = parseFloat(calculatorData?.churnRate) || 0;
    const avgRevenue = parseFloat(calculatorData?.avgRevenue) || 0;
    const retentionGoal = parseFloat(calculatorData?.retentionGoal) || 0;

    const currentRetention = 100 - churnRate;
    const improvementFactor = retentionGoal / currentRetention;
    const enhancedLTV = currentLTV * improvementFactor;
    const ltvIncrease = enhancedLTV - currentLTV;
    const revenueImpact = ltvIncrease;

    return {
      type: 'LTV Enhancement',
      currentLTV: currentLTV?.toLocaleString(),
      enhancedLTV: enhancedLTV?.toLocaleString(),
      ltvIncrease: ltvIncrease?.toLocaleString(),
      revenueImpact: revenueImpact?.toLocaleString(),
      insights: [
        `Current LTV: $${currentLTV?.toLocaleString()}`,
        `Enhanced LTV: $${enhancedLTV?.toLocaleString()}`,
        `LTV improvement: $${ltvIncrease?.toLocaleString()}`
      ]
    };
  };

  const handleCalculate = () => {
    let result;
    
    switch (activeCalculator) {
      case 'market-opportunity':
        result = calculateMarketOpportunity();
        break;
      case 'cac-optimizer':
        result = calculateCACOptimization();
        break;
      case 'ltv-enhancement':
        result = calculateLTVEnhancement();
        break;
      default:
        return;
    }
    
    setResults(result);
  };

  const renderCalculatorForm = () => {
    switch (activeCalculator) {
      case 'market-opportunity':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Total Market Size ($)"
                type="number"
                value={calculatorData?.marketSize}
                onChange={(e) => handleInputChange('marketSize', e?.target?.value)}
                placeholder="e.g., 10000000"
              />
              <Input
                label="Target Market Share (%)"
                type="number"
                value={calculatorData?.marketShare}
                onChange={(e) => handleInputChange('marketShare', e?.target?.value)}
                placeholder="e.g., 5"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Average Order Value ($)"
                type="number"
                value={calculatorData?.avgOrderValue}
                onChange={(e) => handleInputChange('avgOrderValue', e?.target?.value)}
                placeholder="e.g., 150"
              />
              <Input
                label="Conversion Rate (%)"
                type="number"
                value={calculatorData?.conversionRate}
                onChange={(e) => handleInputChange('conversionRate', e?.target?.value)}
                placeholder="e.g., 3"
              />
            </div>
          </div>
        );
      
      case 'cac-optimizer':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Current CAC ($)"
                type="number"
                value={calculatorData?.currentCAC}
                onChange={(e) => handleInputChange('currentCAC', e?.target?.value)}
                placeholder="e.g., 200"
              />
              <Input
                label="Monthly Leads"
                type="number"
                value={calculatorData?.monthlyLeads}
                onChange={(e) => handleInputChange('monthlyLeads', e?.target?.value)}
                placeholder="e.g., 500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Lead Conversion Rate (%)"
                type="number"
                value={calculatorData?.conversionRateOpt}
                onChange={(e) => handleInputChange('conversionRateOpt', e?.target?.value)}
                placeholder="e.g., 15"
              />
              <Input
                label="Target CAC ($)"
                type="number"
                value={calculatorData?.targetCAC}
                onChange={(e) => handleInputChange('targetCAC', e?.target?.value)}
                placeholder="e.g., 120"
              />
            </div>
          </div>
        );
      
      case 'ltv-enhancement':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Current LTV ($)"
                type="number"
                value={calculatorData?.currentLTV}
                onChange={(e) => handleInputChange('currentLTV', e?.target?.value)}
                placeholder="e.g., 800"
              />
              <Input
                label="Current Churn Rate (%)"
                type="number"
                value={calculatorData?.churnRate}
                onChange={(e) => handleInputChange('churnRate', e?.target?.value)}
                placeholder="e.g., 20"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Avg Monthly Revenue per Customer ($)"
                type="number"
                value={calculatorData?.avgRevenue}
                onChange={(e) => handleInputChange('avgRevenue', e?.target?.value)}
                placeholder="e.g., 100"
              />
              <Input
                label="Target Retention Rate (%)"
                type="number"
                value={calculatorData?.retentionGoal}
                onChange={(e) => handleInputChange('retentionGoal', e?.target?.value)}
                placeholder="e.g., 90"
              />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Calculator Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        {calculators?.map((calc) => (
          <button
            key={calc?.id}
            onClick={() => {
              setActiveCalculator(calc?.id);
              setResults(null);
            }}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeCalculator === calc?.id
                ? 'bg-primary text-white shadow-brand'
                : 'bg-card text-text-secondary hover:bg-primary/10 hover:text-primary border border-border'
            }`}
          >
            <Icon name={calc?.icon} size={20} />
            <span>{calc?.title}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div className="bg-card p-6 rounded-xl shadow-brand border border-border">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              {calculators?.find(c => c?.id === activeCalculator)?.title}
            </h3>
            <p className="text-text-secondary">
              {calculators?.find(c => c?.id === activeCalculator)?.description}
            </p>
          </div>

          {renderCalculatorForm()}

          <div className="mt-6">
            <Button
              variant="default"
              onClick={handleCalculate}
              iconName="Calculator"
              iconPosition="left"
              fullWidth
            >
              Calculate Opportunity
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="bg-card p-6 rounded-xl shadow-brand border border-border">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Icon name="BarChart3" size={20} className="mr-2 text-accent" />
            Results & Insights
          </h3>

          {results ? (
            <div className="space-y-4">
              <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                <h4 className="font-semibold text-success mb-2">{results?.type} Analysis</h4>
                <ul className="space-y-2">
                  {results?.insights?.map((insight, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <Icon name="Check" size={16} className="mr-2 mt-0.5 text-success flex-shrink-0" />
                      <span className="text-text-secondary">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <h5 className="font-medium mb-3">Next Steps:</h5>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p>• Schedule a strategy call to discuss implementation</p>
                  <p>• Receive a custom optimization roadmap</p>
                  <p>• Get specific tactics to achieve these results</p>
                </div>
              </div>

              <Button
                variant="outline"
                fullWidth
                onClick={() => document.getElementById('contact-options')?.scrollIntoView({ behavior: 'smooth' })}
                iconName="ArrowDown"
                iconPosition="right"
              >
                Discuss Implementation
              </Button>
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon name="Calculator" size={48} className="text-text-secondary mx-auto mb-4" />
              <p className="text-text-secondary">
                Fill in the form and click "Calculate Opportunity" to see your personalized results.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveCalculators;