import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import Button from '../styles/Button';
import SignUpForm from './SignupForm';

function Navbar({ user, setUser }) {
  const [isLoading, setIsLoading] = useState(false);

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
      {user ? (
          <Button type="submit" onClick={handleLogoutClick}>Logout</Button>
        ) : (
          <>
            <Link to='/login'>
              <Button type="submit">Log In/Sign Up</Button>
            </Link>
        </>
        )}
    </ul>
    </div>
  )
}

export default Navbar