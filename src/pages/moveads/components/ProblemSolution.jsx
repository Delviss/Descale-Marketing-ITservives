import React from 'react';
import FeatureGrid from '../../it/_shared/FeatureGrid';

const cards = [
  {
    icon: 'Store',
    title: 'For restaurants',
    description: 'Local businesses need attention nearby customers already have. A courier-bag campaign puts your name in front of people minutes from your door, every shift.',
  },
  {
    icon: 'Bike',
    title: 'For couriers',
    description: 'You already move through the city all day. MoveAds turns that time into extra income — opt in, carry an approved campaign, get paid.',
  },
  {
    icon: 'QrCode',
    title: 'For customers',
    description: 'A QR code on a bag you already notice, unlocking a real offer at a restaurant nearby. Simple, local, and worth scanning.',
  },
];

const ProblemSolution = () => {
  return (
    <FeatureGrid
      eyebrow="Why MoveAds"
      title="Local businesses need attention."
      italicWord="Couriers already have it."
      intro="We turn active delivery couriers into a measurable local advertising network — helping restaurants reach nearby customers while couriers earn more."
      features={cards}
    />
  );
};

export default ProblemSolution;
