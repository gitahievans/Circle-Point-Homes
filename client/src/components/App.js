import React, {useState, useMemo} from "react";
import Home from "./Home";
import { Routes, Route} from "react-router-dom";

import {UserContext} from "./UserContext"


function App() {


  const [user, setUser] = useState({
      username: "",
      email_address: "",
    })
  const providerValue = useMemo(()=>({user, setUser}), [user, setUser])

  const [error] = useState("")
  //const [errorMessage, setErrorMessage] = useState("")


  async function login(details) {
    await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details)
    })
      .then((r) => {
        
        if (r.status === 200) {
          r.json().then((data) => 
          setUser({
            username: data.username,
            email_address: data.email_address,
        
          })
          
      )} else {
        setUser({
          username: "",
          email_address: "",
        })
      }
    }) 
  }

  function logout(){
    setUser({
      username: "",
      email_address: ""});}

    return(
        <div className="App">
          <UserContext.Provider value={providerValue}>
            <h1>Circle Point Homes</h1>
            <Routes>
            <Route path="/"element={<Home error={error} login={login} logout={logout}/>} />
            </Routes>
            </UserContext.Provider>
            </div>
    )
}
 export default App;
