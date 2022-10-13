import React, {useState} from 'react'

function UserLogin({ login, error }) {
    const [details, setDetails] = useState({email_address: "", password:""})
    const [message, setMessage] = useState("")
    const {user} = useState("");
   

    function handleSubmit(event) {
        event.preventDefault()
        login(details)

        if (user.username === "") {
            setMessage("Credentials not found, please try again!")
        }
    }

  return (
    <div>
        <h2>Sign into Account</h2>
            {(!!error) ? (<div className="error">{error}</div>) : ""}
            <form onSubmit = {handleSubmit} className="new-login">
               <label><input type="email" onChange={(e)=>setDetails({...details, email_address: e.target.value})} value={details.email_address} placeholder="email"></input></label>
                <input type="password" onChange={(e)=>setDetails({...details, password: e.target.value})} value={details.password} placeholder="password"></input><br></br><br></br>
                <p>{message}</p>
                <input type="submit" value="Log in"/>
            </form>
    </div>
  )
}

export default UserLogin