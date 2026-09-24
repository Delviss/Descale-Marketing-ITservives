import React from 'react';
import LegalLayout from '../../legal/_LegalLayout';
import Icon from '../../../components/AppIcon';

// Shared wrapper for MoveAds-specific legal pages. These are draft terms
// structured per the product brief, not text vetted by a lawyer — every
// page carries the same disclaimer so it can't be missed or dropped.
const MoveAdsLegalLayout = ({ title, description, lastUpdated, jsonLd, children }) => {
  return (
    <LegalLayout title={title} description={description} lastUpdated={lastUpdated} jsonLd={jsonLd}>
      <div className="flex items-start gap-3 rounded-2xl border border-warning/30 bg-warning/10 p-5 not-prose">
        <Icon name="AlertTriangle" size={18} className="text-warning shrink-0 mt-0.5" />
        <p className="text-sm text-foreground/80 leading-relaxed">
          <strong>Draft terms.</strong> This page is structured to reflect the Descale MoveAds pilot as
          currently planned. It has not yet been reviewed or signed off by a lawyer and must not be treated as
          final legal text before real campaigns run.
        </p>
      </div>
      {children}
    </LegalLayout>
  );
};

export default MoveAdsLegalLayout;
