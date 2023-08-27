import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { company } from './../../db.json'
import './Navbar.css'

const Navbar = () => {
  const {name, navigation: {home, training, pricing, contact}} = company
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-dark' : 'header'}>
      <Link to='/'>
        <p id='logo-company'>{name}</p>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>{home}</Link>
        </li>
        <li>
          <Link to='/training'>{training}</Link>
        </li>
        <li>
          <Link to='/pricing'>{pricing}</Link>
        </li>
        <li>
          <Link to='/contact'>{contact}</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes size={23} style={{ color: '#ffffff' }} />
        ) : (
          <FaBars size={23} style={{ color: '#ffffff' }} />
        )}
      </div>
    </div>
  )
}

export default Navbar
