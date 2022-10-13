import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './SignupForm';
import Listings from './Listings';

function App() {

  return (
    <Router>
    <div>
      <Navbar/>
      <SignUp/>
    </div>


    <Routes>
        <Route exact path="/Listing" element={<Listings />}></Route>
       
    </Routes>
    </Router>
  )
}

export default App