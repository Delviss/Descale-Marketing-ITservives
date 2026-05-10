import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const CampaignControls = ({ onAudienceChange, onParamsChange, onSimulate }) => {
  const [selectedAudience, setSelectedAudience] = useState('');
  const [budget, setBudget] = useState(50000);
  const [duration, setDuration] = useState(30);
  const [targetRadius, setTargetRadius] = useState(5);
  const [timeSlots, setTimeSlots] = useState(['peak_hours']);

  const audienceOptions = [
    { value: 'business_professionals', label: 'Business Professionals', description: 'Ages 25-45, High Income' },
    { value: 'retail_shoppers', label: 'Retail Shoppers', description: 'Ages 18-55, Shopping Intent' },
    { value: 'students', label: 'Students & Young Adults', description: 'Ages 18-30, Tech Savvy' },
    { value: 'families', label: 'Families', description: 'Ages 30-50, Household Decision Makers' },
    { value: 'nightlife', label: 'Nightlife & Dining', description: 'Ages 21-40, Entertainment Focused' },
    { value: 'tech_workers', label: 'Tech Workers', description: 'Ages 25-40, High Tech Adoption' },
    { value: 'all_demographics', label: 'All Demographics', description: 'Broad Reach Campaign' }
  ];

  const timeSlotOptions = [
    { value: 'morning_rush', label: 'Morning Rush (7-9 AM)' },
    { value: 'business_hours', label: 'Business Hours (9 AM-5 PM)' },
    { value: 'evening_rush', label: 'Evening Rush (5-7 PM)' },
    { value: 'peak_hours', label: 'Peak Hours (7-9 AM, 5-7 PM)' },
    { value: 'weekend', label: 'Weekends' },
    { value: 'all_day', label: 'All Day' }
  ];

  const handleAudienceChange = (value) => {
    setSelectedAudience(value);
    const audience = audienceOptions?.find(opt => opt?.value === value);
    onAudienceChange(audience?.label || '');
  };

  const handleParamsUpdate = () => {
    const params = {
      budget: parseInt(budget),
      duration: parseInt(duration),
      targetRadius: parseInt(targetRadius),
      timeSlots
    };
    onParamsChange(params);
  };

  React.useEffect(() => {
    handleParamsUpdate();
  }, [budget, duration, targetRadius, timeSlots]);

  const calculateEstimatedReach = () => {
    const baseReach = budget / 10;
    const durationMultiplier = Math.sqrt(duration / 30);
    const radiusMultiplier = targetRadius / 5;
    return Math.floor(baseReach * durationMultiplier * radiusMultiplier);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">Campaign Configuration</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Icon name="Settings" size={16} />
          <span>Real-time Simulation</span>
        </div>
      </div>
      {/* Audience Selection */}
      <div className="space-y-4">
        <Select
          label="Target Audience"
          description="Select your primary demographic target"
          options={audienceOptions}
          value={selectedAudience}
          onChange={handleAudienceChange}
          searchable
          placeholder="Choose target audience..."
        />
      </div>
      {/* Campaign Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Campaign Budget"
          type="number"
          value={budget}
          onChange={(e) => setBudget(e?.target?.value)}
          placeholder="50000"
          description={`$${parseInt(budget)?.toLocaleString()}`}
        />

        <Input
          label="Campaign Duration (Days)"
          type="number"
          value={duration}
          onChange={(e) => setDuration(e?.target?.value)}
          placeholder="30"
          min="1"
          max="365"
        />

        <Input
          label="Target Radius (Miles)"
          type="number"
          value={targetRadius}
          onChange={(e) => setTargetRadius(e?.target?.value)}
          placeholder="5"
          min="1"
          max="50"
        />

        <Select
          label="Time Slots"
          options={timeSlotOptions}
          value={timeSlots}
          onChange={setTimeSlots}
          multiple
          placeholder="Select time slots..."
        />
      </div>
      {/* Estimated Metrics */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Estimated Campaign Metrics</h4>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="text-center min-w-0 px-1">
            <div className="text-xl sm:text-2xl font-bold text-primary truncate">{calculateEstimatedReach()?.toLocaleString()}</div>
            <div className="text-xs sm:text-sm text-gray-600">Est. Reach</div>
          </div>
          <div className="text-center min-w-0 px-1">
            <div className="text-xl sm:text-2xl font-bold text-secondary truncate">{Math.floor(budget / 1000)}K</div>
            <div className="text-xs sm:text-sm text-gray-600">Impressions</div>
          </div>
          <div className="text-center min-w-0 px-1">
            <div className="text-xl sm:text-2xl font-bold text-accent truncate">{Math.floor(calculateEstimatedReach() * 0.15)?.toLocaleString()}</div>
            <div className="text-xs sm:text-sm text-gray-600">Engagements</div>
          </div>
          <div className="text-center min-w-0 px-1">
            <div className="text-xl sm:text-2xl font-bold text-success truncate">
              ${calculateEstimatedReach() > 0 ? ((budget / calculateEstimatedReach()) * 1000).toFixed(2) : '0.00'}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">CPM</div>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="default"
          onClick={onSimulate}
          iconName="Play"
          iconPosition="left"
          className="flex-1"
          disabled={!selectedAudience}
        >
          Run Simulation
        </Button>
        <Button
          variant="outline"
          iconName="Download"
          iconPosition="left"
          className="flex-1"
        >
          Export Report
        </Button>
      </div>
      {/* Advanced Options Toggle */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        className="border-t pt-4"
      >
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Advanced targeting options available</span>
          <Button variant="ghost" size="sm" iconName="ChevronRight">
            Configure
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default CampaignControls;