import React from 'react'
import './App.css'
import Navbar from './components/static/Navbar'
import Hero from './components/app/Hero'
import EventsContainer from './components/app/EventsContainer'
import AboutSathyabama from './components/app/AboutSathyabama'
import Footer from './components/static/Footer'
import FormStep1 from './components/app/FormStep1'
import FormStep2 from './components/app/FormStep2'
import VenueContainer from './components/app/VenueContainer'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <VenueContainer></VenueContainer>
      <Footer></Footer>
    </div>
  )
}

export default App