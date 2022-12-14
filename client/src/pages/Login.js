import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignupForm";
import Wrapper from "../styles/Wrapper";
import Spacer from "../styles/Spacer";
import Button from "../styles/Button";

function Login({ onLogin }) {
    const [displayLogin, setDisplayLogin] = useState(true)

    return (
        <Wrapper>
            {displayLogin ? (
                <>
                    <LoginForm onLogin={onLogin}/>
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
                    <SignUpForm onLogin={onLogin}/>
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