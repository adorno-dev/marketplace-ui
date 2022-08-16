import { Link } from "react-router-dom"
import { Navbar, Placeholder } from "../../../components"

import './styles.scss'

export const SignIn = () => {
    return <>
        <Navbar />
        <Placeholder>
            <div className="signIn">
                <div className="title">Sign In</div>
                <p className="hints">Please enter your email and password.</p>
                <form method="post">
                    <input type="email" name="email" placeholder="Email" autoComplete="off" />
                    <input type="password" name="password" placeholder="Password" autoSave="off" />
                    <div className="options">
                        <a href="#">Remember your account?</a>
                        <Link to="/forgot-password">Forgot your password?</Link>
                    </div>
                    <input type="submit" value="SIGN IN" />
                </form>
                <p className="hints">Don't you have an account? <a href="#">Sign Up</a></p>
            </div>
        </Placeholder>
    </>
}