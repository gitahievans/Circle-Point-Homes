import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
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
    <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  )
}

export default Navbar

