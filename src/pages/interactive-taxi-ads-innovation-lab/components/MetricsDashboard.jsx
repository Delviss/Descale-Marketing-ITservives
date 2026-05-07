import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';

const MetricsDashboard = ({ metrics, isLive = false }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [liveData, setLiveData] = useState([]);

  const performanceData = [
    { name: 'Week 1', impressions: 45000, clicks: 1200, conversions: 89 },
    { name: 'Week 2', impressions: 52000, clicks: 1450, conversions: 112 },
    { name: 'Week 3', impressions: 48000, clicks: 1380, conversions: 98 },
    { name: 'Week 4', impressions: 61000, clicks: 1720, conversions: 145 }
  ];

  const audienceBreakdown = [
    { name: 'Business Professionals', value: 35, color: '#A8431C' },
    { name: 'Retail Shoppers', value: 28, color: '#2563EB' },
    { name: 'Students', value: 20, color: '#C65A2E' },
    { name: 'Families', value: 17, color: '#10B981' }
  ];

  const geographicData = [
    { area: 'Financial District', reach: 12500, engagement: 8.2 },
    { area: 'Shopping Center', reach: 15200, engagement: 9.1 },
    { area: 'University Area', reach: 9800, engagement: 12.5 },
    { area: 'Tech Hub', reach: 11400, engagement: 7.8 }
  ];

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        const newDataPoint = {
          time: new Date()?.toLocaleTimeString(),
          impressions: Math.floor(Math.random() * 1000) + 500,
          engagement: Math.random() * 5 + 3
        };
        setLiveData(prev => [...prev?.slice(-9), newDataPoint]);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isLive]);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'performance', label: 'Performance', icon: 'TrendingUp' },
    { id: 'audience', label: 'Audience', icon: 'Users' },
    { id: 'geographic', label: 'Geographic', icon: 'MapPin' }
  ];

  const MetricCard = ({ title, value, change, icon, color = 'primary' }) => (
    <motion.div
      className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
      whileHover={{ y: -2, shadow: '0 8px 25px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 flex items-center ${
              change > 0 ? 'text-success' : 'text-error'
            }`}>
              <Icon name={change > 0 ? 'TrendingUp' : 'TrendingDown'} size={14} className="mr-1" />
              {Math.abs(change)}% vs last period
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg bg-${color}/10`}>
          <Icon name={icon} size={24} className={`text-${color}`} />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Campaign Analytics</h3>
        {isLive && (
          <div className="flex items-center space-x-2 text-sm text-success">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Live Data</span>
          </div>
        )}
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === tab?.id
                ? 'bg-primary text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              title="Total Reach"
              value={metrics?.estimatedReach?.toLocaleString() || '125,400'}
              change={12.5}
              icon="Eye"
              color="primary"
            />
            <MetricCard
              title="Active Routes"
              value={metrics?.activeRoutes || '24'}
              change={8.3}
              icon="Route"
              color="secondary"
            />
            <MetricCard
              title="Engagement Rate"
              value="8.7%"
              change={-2.1}
              icon="MousePointer"
              color="accent"
            />
            <MetricCard
              title="Cost per Impression"
              value="$0.12"
              change={-5.4}
              icon="DollarSign"
              color="success"
            />
          </div>

          {isLive && liveData?.length > 0 && (
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Real-time Performance</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={liveData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="impressions" stroke="#A8431C" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      )}
      {/* Performance Tab */}
      {activeTab === 'performance' && (
        <div className="bg-white rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Weekly Performance Trends</h4>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="impressions" fill="#A8431C" />
                <Bar dataKey="clicks" fill="#2563EB" />
                <Bar dataKey="conversions" fill="#C65A2E" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
      {/* Audience Tab */}
      {activeTab === 'audience' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Audience Breakdown</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={audienceBreakdown}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {audienceBreakdown?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry?.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Demographic Insights</h4>
            <div className="space-y-4">
              {audienceBreakdown?.map((segment) => (
                <div key={segment?.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: segment?.color }}
                    ></div>
                    <span className="text-sm font-medium">{segment?.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">{segment?.value}%</div>
                    <div className="text-xs text-gray-500">
                      {Math.floor(segment?.value * 1250)} people
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Geographic Tab */}
      {activeTab === 'geographic' && (
        <div className="bg-white rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Geographic Performance</h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Area</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Reach</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Engagement Rate</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Performance</th>
                </tr>
              </thead>
              <tbody>
                {geographicData?.map((area, index) => (
                  <tr key={area?.area} className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="MapPin" size={16} className="text-gray-400" />
                        <span className="font-medium">{area?.area}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-medium">
                      {area?.reach?.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <span className={`font-medium ${
                        area?.engagement > 8 ? 'text-success' : 'text-gray-600'
                      }`}>
                        {area?.engagement}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${(area?.engagement / 15) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetricsDashboard;