import React from 'react'
import './App.css'
import Navbar from './components/static/Navbar'
import Footer from './components/static/Footer'
import LandingPage from './components/Pages/LandingPage'
import EventPage from './components/Pages/EventPage'
import PaymentDetailsPage from './components/Pages/PaymentDetailsPage'
import VenuesPage from './components/Pages/VenuesPage'
import RegistrationPage from './components/Pages/RegistrationPage'
import {Routes , Route} from 'react-router-dom'
import AboutPage from './components/Pages/AboutPage'
import PatronsPage from './components/Pages/PatronsPage'
import SchedulePage from './components/Pages/SchedulePage'
import DownloadBrochure from './components/Pages/DownloadBrochure'

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>  
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/event/:eventId' element={<EventPage></EventPage>}></Route>  
        <Route path='/venues' element={<VenuesPage></VenuesPage>}></Route>  
        <Route path='/payment/details' element={<PaymentDetailsPage></PaymentDetailsPage>}></Route>  
        <Route path='/event/registration/:eventId' element={<RegistrationPage></RegistrationPage>}></Route>  
        <Route path='/patrons' element={<PatronsPage></PatronsPage>}></Route>
        <Route path='/technosummit/events/schedules' element={<SchedulePage></SchedulePage>}></Route>
        <Route path='/download-brochure' element={<DownloadBrochure></DownloadBrochure>}></Route>
      </Routes>  

      <Footer></Footer>
    </div>
  )
}

export default App