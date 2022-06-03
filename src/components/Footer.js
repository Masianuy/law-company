import React from 'react';
import './Footer.css';
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaBehance} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>
                    <div>
                        <p>Sakharova 37 Street</p>
                        <p>Ukraine, Kyiv</p>
                    </div>
                </div>
                <div className='phone'>
                    <p><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} />+38 (096) 177 66 89</p>
                </div>
                <div className='email'>
                    <p><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}} />Masianuy91@gmail.com</p>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>Hi, we are Francesca and Tommaso, an Italian travel couple, and the content creators behind Take My Heart Everywhere. Our passion for travel has grown up in parallel with our love and over the years we became very interested in social media, photography and blogging.</p>
                <div className='social'>
                    <FaFacebook size={20} style={{color: '#ffffff', marginRight: '1rem'}} />
                    <FaLinkedin size={20} style={{color: '#ffffff', marginRight: '1rem'}} />
                    <FaBehance size={20} style={{color: '#ffffff', marginRight: '1rem'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer