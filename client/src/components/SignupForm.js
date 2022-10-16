import React, { useState } from "react";
import FormField from "../styles/FormField";
import Label from "../styles/Label";
import Input from "../styles/Input";
import Error from '../styles/Error';
import Textarea from '../styles/Textarea'
import Button from "../styles/Button";

function SignUpForm({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        userType,
        password,
        password_confirmation: passwordConfirmation,
        bio,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
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
            placeholder="Enter name"
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
            placeholder="Enter email"
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
            placeholder="Enter password"
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
            placeholder="Confirm password"
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
            placeholder="Enter landlord or tenant"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            rows="3"
            id="bio"
            placeholder="Enter bio(min 50)"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </FormField>
        <FormField>
          <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
        </FormField>

        </form>
    </div>
  );
}

export default SignUpForm;