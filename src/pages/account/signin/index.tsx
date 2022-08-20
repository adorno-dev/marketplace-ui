import { Link } from "react-router-dom"
import { Checkbox, Navbar, Placeholder } from "../../../components"

export const SignIn = () => {
    return <>
        <Navbar />
        <Placeholder>
            <div className="page">
                <form>
                    <div className="title">Sign In</div>
                    <p className="hints">Please enter your email and password.</p>
                    {/*  */}
                    <input type="email" name="email" placeholder="Email" autoComplete="off" />
                    <input type="password" name="password" placeholder="Password" autoSave="off" />
                    <input type="submit" value="SIGN IN" />
                    <div className="space-between">
                        <Checkbox name="remember" text="Remember Account?" />
                        <Link to="/forgot-password">Forgot your password?</Link>
                    </div>
                    {/* <p className="hints">Don't you have an account? <Link to="/signup">Sign Up</Link></p> */}
                </form>
            </div>
        </Placeholder>
    </>
}