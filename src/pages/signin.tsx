import { Link } from "react-router-dom"
import { Navbar, Placeholder } from "../components"

import './signin.scss'

export const SignIn = () => {
    return <>
        <Navbar />
        <Placeholder>
            <form id="signin">
                <h2>Sign In</h2>
                <p>Please enter your email and password.</p>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <div>
                    <Link to="/remember">Remember account?</Link>
                    <button>Confirm</button>
                </div>
                <p>Don't you have an account? <Link to="/signup">Sign Up</Link></p>
                <p><Link to="/password">Forgot your password?</Link></p>
            </form>
        </Placeholder>
    </>
}