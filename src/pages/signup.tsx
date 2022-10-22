import { FormEvent, useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import styled from "styled-components"
import { Navbar, Placeholder } from "../components"
import { AuthenticationContext } from "../contexts/authentication-context"

export const SignUp = () => {
    const context = useContext(AuthenticationContext)
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [success, setSuccess] = useState<boolean>(false)
    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        setSuccess(await context?.signUp({username, email, password, confirmPassword}) ?? false)
    }
    return ! success ? <>
        <Navbar />
        <Placeholder>
            <SignUpStyle onSubmit={submitHandler}>
                <h2>Sign Up</h2>
                <p>Please fill all required fields to complete your account.</p>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <div>
                    <p>Already have an account? <Link to="/signin">Sign In</Link> </p>
                    <button type="submit">Confirm</button>
                </div>
            </SignUpStyle>
        </Placeholder>
    </>
    : <Navigate to="/signin" />
}

export const SignUpStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    max-width: 450px;
    margin: 0 auto;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 35px;
        width: 100%;
    }
`