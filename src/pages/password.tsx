import { Link } from "react-router-dom"
import { Navbar, Placeholder } from "../components"

export const ForgotPassword = () => {
    return <>
        <Navbar />
        <Placeholder>
            <form id="signin">
                <h2>Forgot your password?</h2>
                <p>You'll receive an email including a request token which allow you to redefine your password.</p>
                <input type="email" placeholder="Email" />
                <div>
                    <Link to="/signin">Back to Sign In</Link>
                    <button>Confirm</button>
                </div>
            </form>
        </Placeholder>
    </>
}