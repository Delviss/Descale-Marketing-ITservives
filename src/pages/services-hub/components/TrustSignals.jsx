import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const partnerships = [
    { name: "Google Partner", icon: "Chrome", color: "text-secondary" },
    { name: "Meta Business", icon: "Facebook", color: "text-secondary" },
    { name: "LinkedIn Partner", icon: "Linkedin", color: "text-secondary" },
    { name: "HubSpot Certified", icon: "Settings", color: "text-primary" },
  ];

  const certifications = [
    "Google Ads Certified",
    "Facebook Blueprint Certified",
    "Google Analytics Certified",
    "LinkedIn Marketing Certified",
    "HubSpot Inbound Certified",
    "Shopify Partner Certified"
  ];

  const testimonials = [
    {
      quote: "DESCALE transformed our growth trajectory. We went from $2M to $10M ARR in 18 months.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      rating: 5
    },
    {
      quote: "Their data-driven approach and creative execution delivered results beyond our expectations.",
      author: "Marcus Rodriguez",
      role: "CMO, ScaleUp Inc",
      rating: 5
    },
    {
      quote: "The ROI on our marketing spend increased by 340% within the first quarter.",
      author: "Emily Watson",
      role: "Founder, GrowthCo",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our certifications, partnerships, and client success stories speak to our commitment to excellence
          </p>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-text-primary text-center mb-8">
            Official Partners & Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerships?.map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Icon name={partner?.icon} size={32} className={`${partner?.color} mb-3`} />
                <span className="text-sm font-medium text-text-primary text-center">{partner?.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-text-primary text-center mb-8">
            Team Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certifications?.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={16} className="text-success" />
                </div>
                <span className="text-sm font-medium text-text-primary">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div>
          <h3 className="text-xl font-semibold text-text-primary text-center mb-8">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-text-secondary mb-4 italic">
                  "{testimonial?.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-text-primary">{testimonial?.author}</div>
                  <div className="text-sm text-text-secondary">{testimonial?.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-brand rounded-xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-white/90 text-sm">Successful Campaigns</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$50M+</div>
              <div className="text-white/90 text-sm">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">340%</div>
              <div className="text-white/90 text-sm">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/90 text-sm">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;