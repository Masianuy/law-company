import React from 'react';
import HeroImages from '../components/HeroImages';
import Navbar from '../components/Navbar';
import TrainingSectin from '../components/TrainingSectin';
import Footer from '../components/Footer';

const Training = () => {
  return (
    <>
        <Navbar />
        <HeroImages heading='TRAINING' text='Pre-Flight & In-Flight Training'/>
        <TrainingSectin />
        <Footer />
    </>
  )
}

export default Training