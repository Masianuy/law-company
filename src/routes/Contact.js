import React from 'react'
import HeroImages from './../components/HeroImages/HeroImages'
import ContactForm from './../components/ContactForm/ContactForm'
import Footer from './../components/Footer/Footer'
import Navbar from './../components/NavBar/Navbar'

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
