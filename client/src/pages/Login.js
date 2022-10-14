import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignupForm";
import Wrapper from "../styles/Wrapper";
import Spacer from "../styles/Spacer";
import Button from "../styles/Button";

// function Login({ onLogin }) {
function Login() {
    const [displayLogin, setDisplayLogin] = useState(true)

    return (
        <Wrapper>
            {displayLogin ? (
                <>
                    {/* <LoginForm onLogin={onLogin}/> */}
                    <LoginForm />
                    <Spacer />
                    <p>
                        Don't have an account? &nbsp;
                        <Button color="secondary" onClick={() => setDisplayLogin(false)} >
                            Sign Up
                        </Button>
                    </p>
                </>
            ) : (
                <>
                    {/* <SignUpForm onLogin={onLogin}/> */}
                    <SignUpForm />
                    <Spacer />
                    <p>
                        Already have an account? &nbsp;
                        <Button color="secondary" onClick={() => setDisplayLogin(true)} >
                            Log In
                        </Button>
                    </p>
                </>
            )}
        </Wrapper>
    )
}

export default Login