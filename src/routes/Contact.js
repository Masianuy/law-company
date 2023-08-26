import React from 'react'
import Navbar from '../components/Navbar'
import HeroImages from '../components/HeroImages'
import Form from '../components/Form'
import Footer from '../components/Footer'

function Contact () {
  return (
    <div>
      <Navbar />
      <HeroImages heading='КОНТАКТИ' text='Зв’язатися з нами.' />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
