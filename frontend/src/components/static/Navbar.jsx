import React from 'react'
import logo from '../../assets/logo.jpeg'

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
        <li><a>Home</a></li>
      <li><a>Contact us</a></li>
      <li><a>Guidlines</a></li>
        <li>
        <details>
          <summary>Events</summary>
          <ul className="p-2 bg-white text-base-100 font-semibold">
            <li><a>Hackathons</a></li>
            <li><a>Makathons/Buildathons</a></li>
            <li><a>Technical paper presentation</a></li>
            <li><a>Robotics/Drones competition</a></li>
            <li><a>Coding Challenges</a></li>
            <li><a>Design Challenges</a></li>
            <li><a>App development</a></li>
            <li><a>AR VR Challenges</a></li>
            <li><a>Technical debate</a></li>
            <li><a>Project Exhibition</a></li>
            <li><a>Technical quiz</a></li>
            <li><a>You tube Challenges</a></li>
            <li><a>Gaming</a></li>
            <li><a>Go carting</a></li>
            <li><a>Food carnival</a></li>
          </ul>
        </details>
        </li>
        <li><a href="/"><button className='btn'>About Sathyabama</button></a></li>
      </ul>
    </div>
    <a><img src={logo} alt="logo" className='w-32 cursor-pointer'/></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold">
      <li><a>Home</a></li>
      <li><a>Contact us</a></li>
      <li><a>Guidlines</a></li>
      <li>
        <details>
          <summary>Events</summary>
          <ul className="p-2 bg-white text-base-100 font-semibold">
            <li><a>Hackathons</a></li>
            <li><a>Makathons/Buildathons</a></li>
            <li><a>Technical paper presentation</a></li>
            <li><a>Robotics/Drones competition</a></li>
            <li><a>Coding Challenges</a></li>
            <li><a>Design Challenges</a></li>
            <li><a>App development</a></li>
            <li><a>AR VR Challenges</a></li>
            <li><a>Technical debate</a></li>
            <li><a>Project Exhibition</a></li>
            <li><a>Technical quiz</a></li>
            <li><a>You tube Challenges</a></li>
            <li><a>Gaming</a></li>
            <li><a>Go carting</a></li>
            <li><a>Food carnival</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-secondary btn-sm md:block hidden pt-2">About Sathyabama</a>
  </div>
</div>
    </div>
  )
}

export default Navbar


