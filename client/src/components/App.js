import React, { useEffect, useState } from "react";
import Home from "./Home";
import { Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import AddHouse from "../pages/AddHouse";
import Houses from "../pages/Houses";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import Navbar from './Navbar'



function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  // if (!user) return <Login onLogin={setUser} />;
  if (!user) return <Login />;

  return(
    <div className="App">        
      <div>
        <Navbar setUser={setUser}/>
      </div>
      <h1>Circle Point Homes</h1>
      <Routes >
        <Route exact path="/" element={<Home />}/>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/houses' element={<Houses />} />
        <Route exact path='/contact-us' element={<ContactUs />} />
        <Route exact path='/add-house' element={<AddHouse />} />
      </Routes>
    </div>
    )
}
 export default App;


