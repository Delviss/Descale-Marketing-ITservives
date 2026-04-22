import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import GrowthAssessmentTool from './components/GrowthAssessmentTool';
import ContactOptions from './components/ContactOptions';
import TrustElements from './components/TrustElements';
import InteractiveCalculators from './components/InteractiveCalculators';
import QualificationForm from './components/QualificationForm';

import Button from '../../components/ui/Button';

const GrowthAssessmentContact = () => {
  const [currentStep, setCurrentStep] = useState('assessment');
  const [assessmentData, setAssessmentData] = useState(null);
  const [leadScore, setLeadScore] = useState(0);
  const [showQualification, setShowQualification] = useState(false);
  const [qualificationData, setQualificationData] = useState(null);

  const handleAssessmentComplete = (data, score) => {
    setAssessmentData(data);
    setLeadScore(score);
    setCurrentStep('results');
  };

  const handleGetPersonalizedPlan = () => {
    setShowQualification(true);
  };

  const handleQualificationComplete = (data) => {
    setQualificationData(data);
    setCurrentStep('contact');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in">
              Unlock Your
              <span className="block text-accent">Growth Potential</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up">
              Discover your growth opportunities through our interactive assessment. 
              Get personalized insights, strategic recommendations, and connect with our experts to accelerate your scaling journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById('assessment-tool')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover-brand"
                iconName="TrendingUp"
                iconPosition="left"
              >
                Start Growth Assessment
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('calculators')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="Calculator"
                iconPosition="right"
              >
                Explore Calculators
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements Section */}
      <TrustElements />

      {/* Growth Assessment Tool */}
      <section id="assessment-tool" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GrowthAssessmentTool 
            onComplete={handleAssessmentComplete}
            currentStep={currentStep}
            assessmentData={assessmentData}
            onGetPersonalizedPlan={handleGetPersonalizedPlan}
          />
        </div>
      </section>

      {/* Interactive Calculators */}
      <section id="calculators" className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Growth Intelligence Tools
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Use our interactive calculators to quantify your opportunities and understand the potential impact of optimizing your growth systems.
            </p>
          </div>
          <InteractiveCalculators />
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactOptions 
            assessmentData={assessmentData}
            qualificationData={qualificationData}
            leadScore={leadScore}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-brand text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Scale What Matters Most?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Your growth assessment results show real opportunities. Let's discuss how to implement the strategies that will drive your next growth phase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setShowQualification(true)}
              className="hover-brand"
              iconName="Calendar"
              iconPosition="left"
            >
              Book Strategy Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/services-hub'}
              className="border-white text-white hover:bg-white hover:text-primary"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Qualification Modal */}
      {showQualification && (
        <QualificationForm
          onComplete={handleQualificationComplete}
          onClose={() => setShowQualification(false)}
          assessmentData={assessmentData}
        />
      )}
      <Footer />
    </div>
  );
};

export default GrowthAssessmentContact;