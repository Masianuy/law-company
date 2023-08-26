import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Training from './routes/Training'
import Contact from './routes/Contact'
import './App.css'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/training' element={<Pricing />} />
        <Route path='/pricing' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
