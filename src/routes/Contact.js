import React from 'react'
import Navbar from '../components/Navbar'
import HeroImages from '../components/HeroImages'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function Contact () {
  return (
    <div>
      <Navbar />
      <HeroImages heading='КОНТАКТИ' text='Зв’язатись з нами.' />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
