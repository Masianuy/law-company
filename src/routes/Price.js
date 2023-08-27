import React from 'react'
import HeroImages from './../components/HeroImages/HeroImages'
import Pricing from './../components/Pricing/Pricing'
import Footer from './../components/Footer/Footer'
import { company } from './../db.json'
import Navbar from './../components/NavBar/Navbar'

const Price = () => {
  const {
    navigation: { pricing }
  } = company
  return (
    <div>
      <Navbar />
      <HeroImages
        heading={pricing}
        text='Убезпечте себе - зверніться до адвоката!'
      />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Price
