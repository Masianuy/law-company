import React from 'react'
import './Footer.css'
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation
} from 'react-icons/fa'
import {company} from './../../db.json'

const Footer = () => {
  const {phone, email, location: {address, country, city}} = company;
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation
              size={20}
              style={{ color: '#ffffff', marginRight: '2rem' }}
            />
            <div>
              <p>{address}</p>
              <p>{country}, {city}</p>
            </div>
          </div>
          <div className='phone'>
            <p>
              <FaPhone
                size={20}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />
              {phone}
            </p>
          </div>
          <div className='email'>
            <p>
              <FaMailBulk
                size={20}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />
              {email}
            </p>
          </div>
        </div>
        <div className='right'>
          <h4>Про нас</h4>
          <p>
            Розділи юридичної допомоги. Якщо ваша справа не стосується жодного з
            них, звертайтеся до мене і ми разом розберемо будь-який спірний
            випадок.
          </p>
          <div className='social'>
            <a href='https://www.facebook.com/'>
              <FaFacebook
                size={23}
                style={{ color: '#ffffff', marginRight: '1rem' }}
              />
            </a>
            <a href='https://www.linkedin.com/'>
              <FaLinkedin
                size={24}
                style={{ color: '#ffffff', marginRight: '1rem' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
