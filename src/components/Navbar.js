import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
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
        <p id='logo-company'>LAW Company</p>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Головна</Link>
        </li>
        <li>
          <Link to='/training'>Практика</Link>
        </li>
        <li>
          <Link to='/pricing'>Вартість</Link>
        </li>
        <li>
          <Link to='/contact'>Контакти</Link>
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
