import React, { useEffect, useState } from "react";
import Home from "./Home";
import { Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import AddHouse from "../pages/AddHouse";
import Houses from "../pages/Houses";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import Navbar from './Navbar';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) {
    return (
      <Login onLogin={setUser}/>
    )
  }

  return(
    <>        
      <Navbar user={user} setUser={setUser}/>
      <main>
        <h1>Circle Point Homes</h1>
        <Routes >
          <Route exact path="/" element={<Home user={user}/>}/>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/houses' element={<Houses />} />
          <Route exact path='/contact-us' element={<ContactUs />} />
          <Route exact path='/add-house' element={<AddHouse />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </main>
    </>
  )
}

 export default App;


