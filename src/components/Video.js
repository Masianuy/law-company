import React from 'react';
import {Link} from 'react-router-dom';
import './Video.css';
import spaseVideo from '../assets/Pexels Videos 2109902.mp4';

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={spaseVideo} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Travel. World.</h1>
            <p>CityPASS Destinations</p>
            <div>
                <Link to='/training' className='btn'>Training</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Video