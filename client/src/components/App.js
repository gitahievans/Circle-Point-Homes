import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from './SignupForm';


function App() {

  return (
    <Router>
    <div>
      <Navbar/>
      <SignUp/>

    </div>


    <Routes>
        {/* <Route exact path="/" element={<SignupForm />}></Route> */}
       
      </Routes>
    </Router>
  )
}

export default App