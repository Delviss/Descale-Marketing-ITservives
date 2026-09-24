import React from 'react';
import Icon from '../../../../components/AppIcon';

// pt-16 md:pt-20 matches the fixed Header's own height (h-16 md:h-20) so this
// solid-colour strip starts right at the header's bottom edge instead of
// being hidden underneath it.
const SampleDataBanner = () => (
  <div className="relative bg-warning pt-16 md:pt-20">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-start gap-3">
      <Icon name="AlertTriangle" size={18} className="text-warning-foreground mt-0.5 shrink-0" />
      <p className="text-sm text-warning-foreground leading-relaxed">
        <span className="font-semibold">Placeholder data.</span>{' '}
        The pilot hasn&rsquo;t run yet — every number, quote, and case study on this page is an
        illustrative sample sized to the planned pilot, shown here for design review only. It will
        be replaced with verified results once the Kraków pilot concludes.
      </p>
    </div>
  </div>
);

export default SampleDataBanner;
