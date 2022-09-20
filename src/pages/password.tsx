import { FormEvent, useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { Navbar, Placeholder } from "../components"
import { AuthenticationContext } from "../contexts/authentication-context"

export const ForgotPassword = () => {
    const context = useContext(AuthenticationContext)
    const [success, setSuccess] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")
    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        setSuccess(await context?.forgotPassword({email}) ?? false)
    }
    return ! success ? <>
        <Navbar />
        <Placeholder>
            <form id="signin" onSubmit={submitHandler}>
                <h2>Forgot your password?</h2>
                <p>You'll receive an email including a request token which allow you to redefine your password.</p>
                <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div>
                    <Link to="/signin">Back to Sign In</Link>
                    <button type="submit">Confirm</button>
                </div>
            </form>
        </Placeholder>
    </> :
    <Navigate to="/signin" />
}