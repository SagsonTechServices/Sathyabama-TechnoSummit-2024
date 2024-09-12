import React from 'react'
import './App.css'
import Navbar from './components/static/Navbar'
import Hero from './components/app/Hero'
import EventsContainer from './components/app/EventsContainer'
import Events from './components/pages/EventPage'
import Footer from './components/static/Footer'
import PaymentSummary from './components/pages/PaymentSummaryPage'
import PaymentDetails from './components/Pages/PaymentDetailsPage'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <PaymentSummary></PaymentSummary>
      <Footer></Footer>
    </div>
  )
}

export default App