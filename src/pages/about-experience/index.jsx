import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import OriginStory from './components/OriginStory';
import TeamShowcase from './components/TeamShowcase';
import CultureShowcase from './components/CultureShowcase';
import CallToAction from './components/CallToAction';

const AboutExperience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About DESCALE - Growth Architects Behind Exponential Results</title>
        <meta 
          name="description" 
          content="Meet the team of industry veterans from Google, Facebook, Y Combinator who scale what truly matters. Discover our origin story, culture, and proven methodology for exponential growth." 
        />
        <meta name="keywords" content="growth agency team, marketing experts, scaling specialists, exponential growth, strategic precision, creative boldness" />
        <meta property="og:title" content="About DESCALE - Growth Architects Behind Exponential Results" />
        <meta property="og:description" content="Industry veterans united by the mission to scale what truly matters for ambitious brands. Strategic precision meets creative boldness." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About DESCALE - Growth Architects Behind Exponential Results" />
        <meta name="twitter:description" content="Meet the team behind exponential growth results. Strategic precision meets creative boldness." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          <OriginStory />
          <TeamShowcase />
          <CultureShowcase />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutExperience;