import React from 'react'
import './App.css'
import Navbar from './components/static/Navbar'
import Hero from './components/app/Hero'
import EventsContainer from './components/app/EventsContainer'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <EventsContainer></EventsContainer>
    </div>
  )
}

export default App