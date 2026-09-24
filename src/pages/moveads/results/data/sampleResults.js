// ⚠️ PLACEHOLDER DATA — DO NOT TREAT AS REAL PILOT RESULTS.
//
// Issue #45 blocks this page's real content on completion of the phase-2
// Kraków pilot (10–15 couriers, 3 restaurant advertisers, one zone, 30 days).
// That pilot hasn't run yet, so every number below is an illustrative
// placeholder sized to match the pilot's planned scale — it exists only so
// the page's layout can be designed and reviewed now.
//
// Before this page ever goes live to real visitors:
//   1. Replace every field below with verified numbers from the actual pilot.
//   2. Replace the case study and testimonials with real, consented quotes
//      and outcomes (see the "no real restaurant without consent" rule used
//      elsewhere in MoveAds copy — it applies here too).
//   3. Remove the `noindex` robots directive in `../index.jsx` once the data
//      is real, so the page can be indexed.
//   4. Per the original issue's hard rule: never invent reach/impressions
//      figures. If impressions are ever estimated, the methodology must be
//      explained alongside the number — don't just add a bigger stat here.

export const isSampleData = true;

export const pilotMeta = {
  zoneName: 'Kazimierz, Kraków',
  windowLabel: '30-day phase-2 pilot',
};

export const stats = [
  {
    icon: 'Clock',
    value: '1,240',
    unit: 'hrs',
    label: 'Active campaign hours',
    detail: 'Verified courier hours carrying an approved campaign cover.',
  },
  {
    icon: 'Bike',
    value: '13',
    label: 'Participating couriers',
    detail: 'Opted in and completed at least one verified shift.',
  },
  {
    icon: 'MapPin',
    value: '1',
    label: 'Campaign zone',
    detail: 'Kazimierz, Kraków.',
  },
  {
    icon: 'QrCode',
    value: '2,180',
    label: 'Total QR scans',
    detail: 'Unique scans of campaign QR codes across all covers.',
  },
  {
    icon: 'Tag',
    value: '640',
    label: 'Voucher claims',
    detail: 'Scans that completed a voucher claim.',
  },
  {
    icon: 'BadgeCheck',
    value: '412',
    label: 'Verified redemptions',
    detail: 'Claims redeemed in-store and confirmed by the restaurant.',
  },
  {
    icon: 'Wallet',
    value: '18',
    unit: 'PLN',
    label: 'Average cost per redemption',
    detail: 'Total campaign spend divided by verified redemptions.',
  },
];

export const caseStudy = {
  restaurantLabel: 'Founding restaurant partner · Kazimierz',
  note: 'Composite / illustrative figures — not a real restaurant. Replace with a consented case study once the pilot concludes.',
  before: {
    label: 'Before the pilot',
    items: [
      { metric: 'Weekly walk-in orders', value: '~90' },
      { metric: 'New-customer share', value: '~15%' },
      { metric: 'Trackable ad spend', value: 'None' },
    ],
  },
  after: {
    label: 'During the pilot (30 days)',
    items: [
      { metric: 'Weekly walk-in orders', value: '~140' },
      { metric: 'New-customer share', value: '~34%' },
      { metric: 'Trackable ad spend', value: '18 PLN / redemption' },
    ],
  },
};

export const testimonials = [
  {
    quote:
      'We knew exactly how many people saw the QR code turn into an order, not a guess at impressions. That was the whole point for us.',
    role: 'Restaurant owner',
    context: 'Founding restaurant partner, Kraków pilot',
  },
  {
    quote:
      'It didn’t change how I deliver. I just carried the cover on shifts I already had, and got paid on top for the ones that were verified.',
    role: 'Delivery courier',
    context: 'Participating courier, Kraków pilot',
  },
];
