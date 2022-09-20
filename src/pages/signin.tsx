import { FormEvent, useContext, useState } from "react"
import { Link, Navigate, useSearchParams } from "react-router-dom"
import { Navbar, Placeholder } from "../components"
import { AuthenticationContext } from "../contexts/authentication-context"

import './signin.scss'

export const SignIn = () => {
    const context = useContext(AuthenticationContext)
    const [params, _] = useSearchParams()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        await context?.signIn({email, password})        
    }
    return ! context?.isAuthenticated() ? <>
        <Navbar />
        <Placeholder>
            <form id="signin" onSubmit={submitHandler}>
                <h2>Sign In</h2>
                <p>Please enter your email and password.</p>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div>
                    <Link to="/remember">Remember account?</Link>
                    <button type="submit">Confirm</button>
                </div>
                <p>Don't you have an account? <Link to="/signup">Sign Up</Link></p>
                <p><Link to="/password">Forgot your password?</Link></p>
            </form>
        </Placeholder>
    </> :
    <Navigate to={params.get("return") ?? "/"} />
}