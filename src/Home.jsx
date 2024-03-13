import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import MainPage from './pages/MainPage'
import Introduction from './components/Introduction'
import Why from './components/Why'
import Features from './components/Features'
import Works from './components/Works'
import MapComponent from './components/Map'

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <MainPage />
      <Introduction />
      <Why />
      <Features />
      <Works />
      <MapComponent />
      <Footer />
    </div>
  )
}

export default Home
