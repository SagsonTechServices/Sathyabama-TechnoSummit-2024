import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/static/Navbar';
import Footer from './components/static/Footer';
import LandingPage from './components/Pages/LandingPage';
import EventPage from './components/Pages/EventPage';
import PaymentDetailsPage from './components/Pages/PaymentDetailsPage';
import VenuesPage from './components/Pages/VenuesPage';
import RegistrationPage from './components/Pages/RegistrationPage';
import AboutPage from './components/Pages/AboutPage';
import PatronsPage from './components/Pages/PatronsPage';
import SchedulePage from './components/Pages/SchedulePage';
import RegisteredPageForDeptCoords from './components/Pages/RegisteredPageForDeptCoords';
import StaffLoginPage from './components/Pages/StaffLoginPage';
import EventCoordinators from './components/Pages/EventCoordinatorsPage';
import Guidelines from './components/Pages/GuidelinesPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/guidelines' element={<Guidelines />} />
          <Route path='/event/:eventId' element={<EventPage />} />
          <Route path='/venues' element={<VenuesPage />} />
          <Route path='/payment/details' element={<PaymentDetailsPage />} />
          <Route path='/event/registration/:eventId' element={<RegistrationPage />} />
          <Route path='/patrons' element={<PatronsPage />} />
          <Route path='/technosummit/events/schedules' element={<SchedulePage />} />
          <Route path='/dept-coordinator/registered-students' element={<RegisteredPageForDeptCoords />} />
          <Route path='/staff/login' element={<StaffLoginPage />} />
          <Route path='/event-coordinator/registered-students' element={<EventCoordinators />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
