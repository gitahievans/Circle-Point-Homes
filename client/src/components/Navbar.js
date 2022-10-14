import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

function Navbar({ setUser }) {

  function handleLogoutClick() {
    fetch("/logout", {
      method: 'DELETE',
    }).then((r) => {
      if (r.ok) {
        setUser(null)
      }
    })
  }

  return (
    <div className='navbar'>
      <h1 className='navbar-logo'>♻️ PointHomes</h1>
    <ul>
      <li className='nav-links'>
         <Link className='nav-text' to="/">Home</Link>
      </li>
      <li className='nav-links'>
         <Link className='nav-text' to="/houses">Houses</Link>
      </li>
      <li className='nav-links'>
         <Link className='nav-text' to="/about">About Us</Link>
      </li>
      <li className='nav-links'>
         <Link className='nav-text' to="/add-house">Add House</Link>
      </li>
      <li className='nav-links'>
         <Link className='nav-text' to="/contact-us">Contact Us</Link>
      </li>

        {/* ['Home', 'Landords', 'About'].map((item)=>(
        <li key={item}>
        {item}
        </li>
      )) */}
    </ul>
    </div>
  )
}

export default Navbar