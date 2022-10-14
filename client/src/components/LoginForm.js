import React, {useState} from 'react';
import FormField from "../styles/FormField";
import Label from "../styles/Label";
import Input from "../styles/Input";
import Error from '../styles/Error';
import Button from "../styles/Button";

// function LoginForm({ onLogin }) {
function LoginForm() {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
   

  function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        // r.json().then((user) => onLogin(user))
        r.json().then((user) => setUser(user))
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }
        

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="email">email</Label>
        <Input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  )
}

export default LoginForm