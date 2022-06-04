import React from 'react';
import './Footer.css';
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>
                    <div>
                        <p>вул. Соборна, 17</p>
                        <p>Україна, Київ</p>
                    </div>
                </div>
                <div className='phone'>
                    <p><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} />+38 (096) 111 11 89</p>
                </div>
                <div className='email'>
                    <p><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}} />CompanyName@gmail.com</p>
                </div>
            </div>
            <div className='right'>
                <h4>Про нас</h4>
                <p>Розділи юридичної допомоги. Якщо ваша справа не стосується жодного з них, звертайтеся до мене і ми разом розберемо будь-який спірний випадок.</p>
                <div className='social'>
                    <FaFacebook size={20} style={{color: '#ffffff', marginRight: '1rem'}} />
                    <FaLinkedin size={20} style={{color: '#ffffff', marginRight: '1rem'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer