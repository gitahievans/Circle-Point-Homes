
import React from 'react'
import { Link } from 'react-router-dom'

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
    <div>
    <ul>
      <li>
         <Link to="/">Home</Link>
      </li>
      <li>
         <Link to="/houses">Houses</Link>
      </li>
      <li>
         <Link to="/about">About Us</Link>
      </li>
      <li>
         <Link to="/add-house">Add House</Link>
      </li>
      <li>
         <Link to="/contact-us">Contact Us</Link>
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