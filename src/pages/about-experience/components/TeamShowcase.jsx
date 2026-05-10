import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const teamMembers = [
  {
    id: 'elvis',
    name: 'Elvis Dushimimana',
    role: 'Founder & CEO',
    initials: 'ED',
    accent: 'from-primary via-accent to-secondary',
    expertise: 'Growth Strategy & Venture Building',
    tags: ['Growth Strategy', 'Venture Building', 'Brand'],
    philosophy:
      'Scaling what truly matters means saying no to noise. Every decision must compound — in revenue, in trust, in clarity.',
    bio:
      "Elvis is the visionary leader behind DESCALE, driving the company's mission to scale what matters through innovative marketing and strategic partnerships worldwide.",
    favoriteTactic: 'Compound Growth Loops',
    achievements: [
      'Founded and scaled DESCALE Agency to a multi-market brand',
      'Architected growth systems for ambitious B2B and consumer brands',
      'Speaker on growth, strategy, and creative leadership',
    ],
    linkedinUrl: 'https://www.linkedin.com/in/elvis-dushimimana',
  },
  {
    id: 'divin',
    name: 'Divin Izere',
    role: 'COO',
    initials: 'DI',
    accent: 'from-secondary via-primary to-accent',
    expertise: 'Operations, Marketing & Engineering',
    tags: ['Operations', 'Marketing', 'Engineering'],
    philosophy:
      'Operations is where strategy meets reality. We turn ambition into repeatable systems that ship and scale.',
    bio:
      'Divin leads operations across DESCALE — orchestrating marketing, engineering, and delivery into one disciplined growth engine for every client we serve.',
    favoriteTactic: 'Systemized Execution Playbooks',
    achievements: [
      'Leads cross-functional operations across marketing and engineering',
      'Builds delivery systems that compound team velocity',
      'Hands-on technologist and digital strategist',
    ],
    linkedinUrl: 'https://www.linkedin.com/in/divin-izere',
  },
];

const TeamShowcase = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-muted/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-5">
            <Icon name="Star" size={16} />
            <span>Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Meet the founders behind
            <span className="block text-secondary">exponential results</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
            A focused leadership team — strategic precision meets operational discipline — united by one mission:
            scaling what truly matters for ambitious brands.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.button
              type="button"
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedMember(member)}
              className="group text-left bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-brand transition-all duration-300 hover:-translate-y-1 border border-border/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl bg-gradient-to-br ${member.accent} shadow-brand flex-shrink-0`}
                  aria-hidden
                >
                  {member.initials}
                  <span className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center shadow">
                    <Icon name="Plus" size={14} className="text-primary" />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary leading-tight">{member.name}</h3>
                  <p className="text-secondary font-semibold mt-0.5">{member.role}</p>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">{member.expertise}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 mt-5 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
                    Read profile
                    <Icon name="ArrowRight" size={14} />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Member Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-modal flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-5 sm:p-8">
                  <div className="flex justify-between items-start gap-3 mb-6">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl bg-gradient-to-br ${selectedMember.accent} flex-shrink-0`}
                        aria-hidden
                      >
                        {selectedMember.initials}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-primary truncate">{selectedMember.name}</h3>
                        <p className="text-secondary font-medium">{selectedMember.role}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setSelectedMember(null)} aria-label="Close">
                      <Icon name="X" size={20} />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-primary mb-2">About</h4>
                      <p className="text-text-secondary leading-relaxed">{selectedMember.bio}</p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-primary mb-2">Scaling Philosophy</h4>
                      <p className="text-text-secondary italic leading-relaxed">"{selectedMember.philosophy}"</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <h4 className="text-base font-semibold text-primary mb-1">Favorite Tactic</h4>
                        <p className="text-accent font-medium">{selectedMember.favoriteTactic}</p>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-primary mb-1">Expertise</h4>
                        <p className="text-text-secondary">{selectedMember.expertise}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-primary mb-3">Highlights</h4>
                      <ul className="space-y-2">
                        {selectedMember.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                            <span className="text-text-secondary">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-border">
                      <Button
                        variant="outline"
                        iconName="Linkedin"
                        iconPosition="left"
                        onClick={() => window.open(selectedMember.linkedinUrl, '_blank', 'noopener,noreferrer')}
                        className="w-full"
                      >
                        Connect on LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TeamShowcase;
