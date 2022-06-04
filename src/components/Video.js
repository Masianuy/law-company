import React from 'react';
import {Link} from 'react-router-dom';
import './Video.css';
import spaseVideo from '../assets/pexels-pavel-danilyuk-8061570.mp4';

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={spaseVideo} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Юридичні послуги за сучасними стандартами</h1>
            <p>Конфіденційність. Індивідуальність. Оперативність.</p>
            <div>
                <Link to='/training' className='btn'>Вартість</Link>
                <Link to='/contact' className='btn btn-light'>Контакти</Link>
            </div>
        </div>
    </div>
  )
}

export default Video