import React from 'react'
import './App.css'
import Navbar from './components/static/Navbar'
import Footer from './components/static/Footer'
import LandingPage from './components/Pages/LandingPage'
import EventPage from './components/Pages/EventPage'
import PaymentDetailsPage from './components/Pages/PaymentDetailsPage'
import PaymentSummary from './components/Pages/PaymentSummaryPage'
import VenuesPage from './components/Pages/VenuesPage'
import RegistrationPage from './components/Pages/RegistrationPage'
import {Routes , Route} from 'react-router-dom'
import AboutPage from './components/Pages/AboutPage'

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>  
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/event/:name' element={<EventPage></EventPage>}></Route>  
        <Route path='/venues' element={<VenuesPage></VenuesPage>}></Route>  
        <Route path='/payment/details' element={<PaymentDetailsPage></PaymentDetailsPage>}></Route>  
        <Route path='/payment/summary' element={<PaymentSummary></PaymentSummary>}></Route>  
        <Route path='/event/registration' element={<RegistrationPage></RegistrationPage>}></Route>  
      </Routes>  

      <Footer></Footer>
    </div>
  )
}

export default App