import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Homepage.css"


function Homepage({ user }) {
  return (
    <div className='homepage-container'>
        <h1>CIRCLE-POINT-HOMES</h1>
        <p>...Karibu Nyumbani, {user.name}!...</p>
        <div className='homepage-btns'>
            <Link to='/sign-up'>
                <button 
                    className='btn--outline' 
                >
                    JOIN US
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Homepage

