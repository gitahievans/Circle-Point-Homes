import React, {useState} from 'react'
import Login from "../pages/Login";

function Home({ login, logout, error, errorMessage }) {
    const [user] = useState("");
  return (
    <div>
        {(!!user.username) ? (
                <div className="welcome">
                    <br></br>
                    <h1>Welcome, <span>{user.username}</span> !</h1>
                    <br></br>
                    <button className="logout-button"onClick={logout}>Logout</button>
                </div>
            ) : (
                <Login login={login} logout={logout} error={error} errorMessage={errorMessage}/>)}

    </div>
  )
}

export default Home