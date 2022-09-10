import { Link } from "react-router-dom"
import { Navbar, Placeholder } from "../components"

import './signup.scss'

export const SignUp = () => {
    return <>
        <Navbar />
        <Placeholder>
            <form id="signup">
                <h2>Sign Up</h2>
                <p>Please fill all required fields to complete your account.</p>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="confirmPassword" placeholder="Confirm password" />
                <div>
                    <p>Already have an account? <Link to="/signin">Sign In</Link> </p>
                    <button>Confirm</button>
                </div>
            </form>
        </Placeholder>
    </>
}