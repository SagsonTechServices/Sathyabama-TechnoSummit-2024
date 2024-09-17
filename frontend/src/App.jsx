import React from 'react'
import './App.css'
import Navbar from './components/static/Navbar'
import Footer from './components/static/Footer'
import LandingPage from './components/Pages/LandingPage'
import EventPage from './components/Pages/EventPage'
import PaymentDetailsPage from './components/Pages/PaymentDetailsPage'
import VenuesPage from './components/Pages/VenuesPage'
import RegistrationPage from './components/Pages/RegistrationPage'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './components/Pages/AboutPage'
import PatronsPage from './components/Pages/PatronsPage'
import SchedulePage from './components/Pages/SchedulePage'
import RegisteredPageForDeptCoords from './components/Pages/RegisteredPageForDeptCoords'
import StaffLoginPage from './components/Pages/StaffLoginPage'
import EventCoordinators from './components/Pages/EventCoordinatorsPage'
import Guidelines from './components/Pages/GuidelinesPage'

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>  
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/guidelines' element={<Guidelines></Guidelines>}></Route>
        <Route path='/event/:eventId' element={<EventPage></EventPage>}></Route>  
        <Route path='/venues' element={<VenuesPage></VenuesPage>}></Route>  
        <Route path='/payment/details' element={<PaymentDetailsPage></PaymentDetailsPage>}></Route>  
        <Route path='/event/registration/:eventId' element={<RegistrationPage></RegistrationPage>}></Route>  
        <Route path='/patrons' element={<PatronsPage></PatronsPage>}></Route>
        <Route path='/technosummit/events/schedules' element={<SchedulePage></SchedulePage>}></Route>
        <Route path='/dept-coordinator/registered-students' element={<RegisteredPageForDeptCoords></RegisteredPageForDeptCoords>}></Route>
        <Route path='/staff/login' element={<StaffLoginPage></StaffLoginPage>}></Route>
				<Route path='/event-coordinator/registered-students' element={<EventCoordinators></EventCoordinators>}></Route>
      </Routes>  

      <Footer></Footer>
    </div>
  )
}

export default App