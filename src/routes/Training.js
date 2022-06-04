import React from 'react';
import HeroImages from '../components/HeroImages';
import Navbar from '../components/Navbar';
import TrainingSectin from '../components/TrainingSectin';
import Footer from '../components/Footer';

const Training = () => {
  return (
    <>
        <Navbar />
        <HeroImages heading='ВАРТІСТЬ' text='Адвокат - це не розкіш, а засіб вашого захисту.'/>
        <TrainingSectin />
        <Footer />
    </>
  )
}

export default Training