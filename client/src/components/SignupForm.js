import React, { useState } from "react";
import FormField from "../styles/FormField";
import Label from "../styles/Label";
import Input from "../styles/Input";
import Textarea from "../styles/Textarea";
import Error from "../styles/Error";
import Button from "../styles/Button";

function SignUpForm({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [bio, setBio] = useState("");
  const [userType, setUserType] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
        bio: bio,
        userType,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </FormField>
        <FormField>
          <Label htmlFor="password">Password Confirmation</Label>
          <Input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
        </FormField>
        <FormField>
          <Label htmlFor="userType">User-type</Label>
          <Input
            type="text"
            id="userType"
            autoComplete="off"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            rows="3"
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </FormField>
        <FormField>
          <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
        </FormField>
        <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
      </form>
    </div>
  );
}

export default SignUpForm;