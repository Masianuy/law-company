import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Price from './routes/Price'
import Practice from './routes/Practice'
import Contact from './routes/Contact'
import './App.css'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/training' element={<Practice/>} />
        <Route path='/pricing' element={<Price />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
