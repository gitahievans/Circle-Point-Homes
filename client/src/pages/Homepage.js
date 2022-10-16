import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Homepage.css"
import Spacer from '../styles/Spacer';


function Homepage({ user }) {
  return (
    <div className='homepage-container'>
        <h1>CIRCLE-POINT-HOMES</h1>
        <p>...Welcome Home, {user.name}!...</p>
        <Spacer />
        <div className='homepage-btns'>
            <Link to='/houses'>
                <button 
                    className='btn--outline' 
                >
                    View houses
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Homepage

