import React, { useEffect, useState } from "react";
import Home from "./Home";
import { Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import SignupForm from './SignupForm';
import Navbar from './Navbar'
import {UserContext} from "./UserContext"


function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user))
      }
    })
  }, [])

  if (!currentUser) {
    return (
      <Login setUser={setCurrentUser} />
    )
  }

  return(
    <div className="App">
        
    <div>
      <Navbar />
    </div>
      <UserContext.Provider value={providerValue}>
      <h1>Circle Point Homes</h1>

      <Routes>
        <Route path="/"element={<Home error={error} login={login} logout={logout}/>} />
        <Route exact path="/" element={<SignupForm />}></Route>
      </Routes>
      </UserContext.Provider>
    </div>
    )
}
 export default App;


