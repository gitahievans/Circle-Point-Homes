import React, {useState} from 'react'
import Login from "../pages/Login";

function Home() {
    const [user] = useState("");
  return (
    <div>
        {(user.name) ? (
                <div className="welcome">
                    <br></br>
                    <h1>Welcome, <span>{user.name}</span> !</h1>
                    <br></br>
                    <button className="logout-button"onClick={logout}>Logout</button>
                </div>
            ) : (
                <Login login={login} logout={logout} error={error} errorMessage={errorMessage}/>)}

    </div>
  )
}

export default Home