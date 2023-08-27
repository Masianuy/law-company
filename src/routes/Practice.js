import React from 'react'
import HeroImages from './../components/HeroImages/HeroImages'
import Training from './../components/Training/Training'
import Footer from './../components/Footer/Footer'
import { company } from './../db.json'
import Navbar from './../components/NavBar/Navbar'

const Practice = () => {
  const {navigation: {training}} = company
  return (
    <>
      <Navbar />
      <HeroImages
        heading={training}
        text='Адвокат - це не розкіш, а засіб вашого захисту.'
      />
      <Training />
      <Footer />
    </>
  )
}

export default Practice
