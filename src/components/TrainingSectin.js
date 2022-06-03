import React from 'react';
import './TrainingSectin.css';

import {Link} from 'react-router-dom';

import Foto from '../assets/pexels-spencer-davis-4388292.jpg';
import Fabio from '../assets/fabio.jpg'

const TrainingSectin = () => {
  return (
    <div className='training'>
      <div className='training-left'>
        <h1>Training</h1>
        <p>Follow along and see how I built this space travel website in React JS. We will be using a couple react packages such as "React Icons" and "React Router Dom V6"</p>
        <Link to='/contact'>
          <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='training-right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={Fabio} alt='fabio' className='foto1' />
          </div>
          <div className='img-stack bottom'>
            <img src={Foto} alt='foto' className='foto2' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingSectin