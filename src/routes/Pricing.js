import React from 'react';
import HeroImages from '../components/HeroImages';
import Navbar from '../components/Navbar';
import PricingSection from '../components/Pricing';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
      <div>
        <Navbar />
        <HeroImages heading='PRICING' text='Choose your trip.'/>
        <PricingSection />
        <Footer />
      </div>
  )
}

export default Pricing