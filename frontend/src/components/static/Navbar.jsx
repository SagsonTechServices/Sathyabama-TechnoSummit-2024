import React from 'react'
import logo from '../../assets/logo.jpeg'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 navbar-fixed z-10 max-w-screen-2xl container md:px-20 px-2">
      <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/contact'}>Contact us</Link></li>
      <li><Link to={'/guidlines'}>Guidlines</Link></li>
        <li className='md:block hidden'>
        <details>
          <summary>Events</summary>
          <ul className="p-2 bg-white text-base-100 font-semibold">
            <li><Link to={'/event/hackathons'}>Hackathons</Link></li>
            <li><Link to={'/event/makathons'}>Makathons/Buildathons</Link></li>
            <li><Link to={'/event/technical-paper-presentation'}>Technical paper presentation</Link></li>
            <li><Link to={'/event/robotics'}>Robotics/Drones competition</Link></li>
            <li><Link to={'/event/coding-challenges'}>Coding Challenges</Link></li>
            <li><Link to={'/event/design-challenges'}>Design Challenges</Link></li>
            <li><Link to={'/event/app-development'}>App development</Link></li>
            <li><Link to={'/event/ar-vr-challenges'}>AR VR Challenges</Link></li>
            <li><Link to={'/event/technical-debates'}>Technical debate</Link></li>
            <li><Link to={'/event/project-exhibition'}>Project Exhibition</Link></li>
            <li><Link to={'/event/technical-quiz'}>Technical quiz</Link></li>
            <li><Link to={'/event/youtube-challenges'}>Youtube Challenges</Link></li>
            <li><Link to={'/event/gaming'}>Gaming</Link></li>
            <li><Link to={'/event/go-carting'}>Go carting</Link></li>
            <li><Link to={'/event/food-carnival'}>Food carnival</Link></li>
          </ul>
        </details>
        </li>
        <li><a href="/venues">All Venues</a></li>
      </ul>
    </div>
    <a><img src={logo} alt="logo" className='w-32 cursor-pointer'/></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold">
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/contact'}>Contact us</Link></li>
      <li><Link to={'/guidlines'}>Guidlines</Link></li>
      <li>
        <details>
          <summary>Events</summary>
          <ul className="p-2 bg-white text-base-100 font-semibold">
          <li><Link to={'/event/hackathons'}>Hackathons</Link></li>
            <li><Link to={'/event/makathons'}>Makathons/Buildathons</Link></li>
            <li><Link to={'/event/technical-paper-presentation'}>Technical paper presentation</Link></li>
            <li><Link to={'/event/robotics'}>Robotics/Drones competition</Link></li>
            <li><Link to={'/event/coding-challenges'}>Coding Challenges</Link></li>
            <li><Link to={'/event/design-challenges'}>Design Challenges</Link></li>
            <li><Link to={'/event/app-development'}>App development</Link></li>
            <li><Link to={'/event/ar-vr-challenges'}>AR VR Challenges</Link></li>
            <li><Link to={'/event/technical-debates'}>Technical debate</Link></li>
            <li><Link to={'/event/project-exhibition'}>Project Exhibition</Link></li>
            <li><Link to={'/event/technical-quiz'}>Technical quiz</Link></li>
            <li><Link to={'/event/youtube-challenges'}>Youtube Challenges</Link></li>
            <li><Link to={'/event/gaming'}>Gaming</Link></li>
            <li><Link to={'/event/go-carting'}>Go carting</Link></li>
            <li><Link to={'/event/food-carnival'}>Food carnival</Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/venues'}><button className="btn btn-primary btn-sm md:block hidden">All Venues</button></Link>
  </div>
</div>
    </div>
  )
}

export default Navbar


