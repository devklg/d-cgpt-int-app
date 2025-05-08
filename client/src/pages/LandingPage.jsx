
import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Metrics from '../components/landing/Metrics';
import Countdown from '../components/landing/Countdown';
import Packages from '../components/landing/Packages';
import Testimonials from '../components/landing/Testimonials';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  return (
    <div className="bg-navy text-white">
      <Header />
      <Hero />
      <Metrics />
      <Features />
      <Countdown />
      <Packages />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
