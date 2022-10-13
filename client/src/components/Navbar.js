import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <ul>
      <li>
         <Link to="/">Home</Link>
      </li>
      <li>
         <Link to="/listings">Listings</Link>
      </li>
      <li>
         <Link to="/about">About Us</Link>
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

