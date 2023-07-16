import React from 'react'
import pic from '../images/logo.png'
import rating from './ratings'

const Navbar = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-slate-800	h-24">
  <a className="navbar-brand text-neutral-200 font-sans text-6xl mx-1.5	my-0 py-0 px-3" href="#">
    <img src={pic} alt="" width="70px" />
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <ul className='navbar-nav mr-auto mx-1.5 flex md:flex md:flex-grow flex-row justify-end space-x-1'>
  <li className="nav-item">
        <a className="nav-link text-neutral-200	" href="#about">
          About
        </a>
      </li>
    <li className="nav-item">
        <a className="nav-link text-neutral-200	" href="/project">
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-neutral-200	" href="skills">
          Skills
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-neutral-200	" href="#ratings">
          Ratings
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-neutral-200	" href="education">
          Education
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-neutral-200	" href="contactMe">
          Contact
        </a>
      </li>
  </ul>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="text-neutral-200	" href="#">
          Home 
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-neutral-200	" href="#">
          Link
        </a>
      </li>
      
     
    </ul>
    
  </div>
</nav>

    </>
  )
}

export default Navbar
