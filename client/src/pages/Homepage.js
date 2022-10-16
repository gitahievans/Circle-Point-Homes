import React from 'react'
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className='homepage-container'>
        <h1>CENTRE-POINT-HOMES</h1>
        <p>...Karibu Nyumbani...</p>
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

