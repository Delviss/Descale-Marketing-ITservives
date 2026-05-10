import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const partnerships = [
    { name: "Google Partner", icon: "Chrome" },
    { name: "Meta Business", icon: "Facebook" },
    { name: "LinkedIn Partner", icon: "Linkedin" },
    { name: "HubSpot Certified", icon: "Settings" },
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
    <section className="relative py-20 overflow-hidden">
      <div aria-hidden className="absolute top-0 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[160px]" />
      <div aria-hidden className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm mb-6">
            <Icon name="ShieldCheck" size={14} className="text-accent" />
            <span className="text-xs font-medium tracking-[0.2em] text-white/80 uppercase">Trust</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-[-0.02em]">
            Trusted by <span className="font-serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">Industry Leaders</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Our certifications, partnerships, and client success stories speak to our commitment to excellence
          </p>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-white/90 text-center mb-8 tracking-wide">
            Official Partners & Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerships?.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center mb-3">
                  <Icon name={partner?.icon} size={22} className="text-accent" />
                </div>
                <span className="text-sm font-medium text-white text-center">{partner?.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-white/90 text-center mb-8 tracking-wide">
            Team Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications?.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
              >
                <div className="w-9 h-9 bg-success/15 border border-success/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={16} className="text-success" />
                </div>
                <span className="text-sm font-medium text-white/90">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div>
          <h3 className="text-lg font-semibold text-white/90 text-center mb-8 tracking-wide">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials?.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-brand"
              >
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white/85 mb-5 italic leading-relaxed">
                  "{testimonial?.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial?.author}</div>
                  <div className="text-sm text-accent">{testimonial?.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 relative bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-2xl p-8 text-center overflow-hidden shadow-brand-strong">
          <div aria-hidden className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-white/85 text-sm">Successful Campaigns</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-white mb-2">$50M+</div>
              <div className="text-white/85 text-sm">Revenue Generated</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-white mb-2">340%</div>
              <div className="text-white/85 text-sm">Average ROI Increase</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/85 text-sm">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
