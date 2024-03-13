import { useState } from 'react'

import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Works from './components/Works'
import Footer from './shared/Footer'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<Works />} />
        <Route path="/contact-us" element={<Footer />} />
        <Route path="/how-it-works" element={<Works />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
